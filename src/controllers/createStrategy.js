const { PromptTemplate } = require('langchain/prompts')
const { OpenAI } = require('langchain/llms/openai')

// Incluir tu clave API usando variables de entorno u otro método seguro de configuración
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const llm = new OpenAI({
  apiKey: OPENAI_API_KEY,
})

const formatPrompt = async (formData) => {
  // Assuming formData.equipment is an array, or you can modify this based on your actual data structure
  const equipmentArray = formData.equipment || []

  const equipmentString = equipmentArray
    .map((item) => `"${item.name} (${item.type})"`)
    .join(', ')

  const promptTemplate =
    'As an expert in Mobile Legends, your task is to provide an optimized battle equiment ' +
    'for the hero {hero} in the role of {role}. ' +
    'Your team: Roam: {playerteamRoam}, Gold: {playerteamGold}, Mid: {playerteamMid}, Jungle: ' +
    '{playerteamJungle}, Exp: {playerteamExp}. Enemy team: Roam: {enemyteamRoam}, ' +
    ' Gold: {enemyteamGold}, Mid: {enemyteamMid}, Jungle: {enemyteamJungle}, Exp: {enemyteamExp}. ' +
    'Generate a JSON format with the following structure: ' +
    '"heroName": "{hero}", "equipment": [] ' +
    equipmentString +
    ', ' +
    '"battle spell": "", ' +
    '"emblem": "", '

  const formatedPrompt = PromptTemplate.fromTemplate(promptTemplate)
  const strategyPrompt = await formatedPrompt.format({
    hero: formData.heroName,
    role: formData.heroRole,
    playerteamRoam: formData.playerteam.roam,
    playerteamGold: formData.playerteam.gold,
    playerteamMid: formData.playerteam.mid,
    playerteamJungle: formData.playerteam.jungle,
    playerteamExp: formData.playerteam.exp,
    enemyteamRoam: formData.enemyTeam.roam,
    enemyteamGold: formData.enemyTeam.gold,
    enemyteamMid: formData.enemyTeam.mid,
    enemyteamJungle: formData.enemyTeam.jungle,
    enemyteamExp: formData.enemyTeam.exp,
  })

  return strategyPrompt
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
