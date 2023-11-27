const { PromptTemplate } = require('langchain/prompts')
const { OpenAI } = require('langchain/llms/openai')

// Incluir tu clave API usando variables de entorno u otro método seguro de configuración
const openaiApiKey = process.env.OPENAI_API_KEY

const llm = new OpenAI({
  apiKey: openaiApiKey,
})

const formatPrompt = async (formData) => {
  // Assuming formData.equipment is an array, or you can modify this based on your actual data structure
  const equipmentArray = formData.equipment || []

  const equipmentString = equipmentArray
    .map((item) => `"${item.name} (${item.type})"`)
    .join(', ')

  const promptTemplate =
    'As an expert in Mobile Legends, your task is to provide an optimized battle equiment' +
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

  const prompt = PromptTemplate.fromTemplate(promptTemplate)
  const formattedPrompt = await prompt.format({
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

  return formattedPrompt
}

const createStrategy = async (req, res) => {
  try {
    const formData = req.body

    if (!formData || !formData.playerteam) {
      throw new Error('Invalid form data. Missing playerteam information.')
    }

    const formattedPrompt = await formatPrompt(formData)

    // Declare the response variable here
    let response

    // Assign a value to the response variable
    response = await llm.call(formattedPrompt)

    // Now you can log the response
    console.log(response)

    res.send(response)
  } catch (error) {
    console.error('Error in createStrategy:', error.message)
    res.status(500).send('Internal Server Error')
  }
}

module.exports = createStrategy
