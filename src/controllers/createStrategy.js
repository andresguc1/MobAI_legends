const { OpenAI } = require('langchain/llms/openai')

// Incluir tu clave API usando variables de entorno u otro método seguro de configuración
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const llm = new OpenAI({
  apiKey: OPENAI_API_KEY,
})

const formatPrompt = async (formData) => {
  const promptTemplate =
    'Mobile Legends equipment optimization task: Provide the optimal equipment Build names for each hero in the Player Team. ' +
    'Consider the unique abilities of each hero. ' +
    'Team: Roam: {playerteamRoam}, Gold: {playerteamGold}, Mid: {playerteamMid}, Jungle: {playerteamJungle}, Exp: {playerteamExp}. ' +
    'Generate a JSON format with the recommended equipment for each hero in the Player Team: ' +
    '{"Tank": {"equipment": []}, "Fighter": {"equipment": []}, "Assassin": {"equipment": []}, ' +
    '"Marksman": {"equipment": []}, "Support": {"equipment": []},}'

  const formattedPrompt = promptTemplate.replace(/\s+/g, ' ').trim()
  const equipmentBuildPrompt = formattedPrompt.replace(
    /{(\w+)}/g,
    (match, p1) => formData.playerteam[p1.toLowerCase()]
  )

  return equipmentBuildPrompt
}

const executeFunctionInCreateStrategy = async (req, res) => {
  try {
    const formData = req.body

    const gameInfo = await formatPrompt(formData)

    const suggestedStrategy = await llm.call(gameInfo)
    console.log(suggestedStrategy)

    res.send({ result: 'Function executed successfully' })
  } catch (error) {
    console.error('Error in executeFunctionInCreateStrategy:', error.message)
    res.status(500).send('Internal Server Error')
  }
}

module.exports = {
  executeFunctionInCreateStrategy: executeFunctionInCreateStrategy,
}
