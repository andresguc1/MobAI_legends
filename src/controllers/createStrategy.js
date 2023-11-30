import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

// Incluir tu clave API usando variables de entorno u otro método seguro de configuración
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const llm = new OpenAI({
  apiKey: OPENAI_API_KEY,
})

// Identify team build
async function buildIdentifier(formData) {
  const promptTemplateBuild = new PromptTemplate({
    template:
      'As a Mobile Legends expert, provide the optimal equipment build names ' +
      'for each hero in the Player Team. Consider the unique abilities of each hero.  ' +
      'Team: Roam: {playerteamRoam}, Gold: {playerteamGold}, Mid: {playerteamMid}' +
      'Jungle: {playerteamJungle}, Exp: {playerteamExp}.  ' +
      'Generate a JSON format that contains parent key  rolename that contains recommended ' +
      'equipment for each hero in a battle',
    inputVariables: [
      'playerteamRoam',
      'playerteamGold',
      'playerteamMid',
      'playerteamJungle',
      'playerteamExp',
    ],
  })

  const formatedPromptTemplateBuild = await promptTemplateBuild.format({
    playerteamRoam: formData.playerteam.roam,
    playerteamGold: formData.playerteam.gold,
    playerteamMid: formData.playerteam.mid,
    playerteamJungle: formData.playerteam.jungle,
    playerteamExp: formData.playerteam.exp,
  })

  const suggestedbuild = await llm.call(formatedPromptTemplateBuild)
  // console.log(suggestedbuild)
  return suggestedbuild
}

// Identify team emblems and battle spell
async function spellIdentifier(formData) {
  const promptTemplateSpell = new PromptTemplate({
    template:
      'As a Mobile Legends expert, provide the optimal emblems and battle spell names ' +
      'for each hero in the Player Team. Consider the unique abilities of each hero.  ' +
      'Team: Roam: {playerteamRoam}, Gold: {playerteamGold}, Mid: {playerteamMid}' +
      'Jungle: {playerteamJungle}, Exp: {playerteamExp}.  ' +
      'Generate a JSON format that contains parent key  rolename that contains recommended ' +
      'emblems and battle spell',
    inputVariables: [
      'playerteamRoam',
      'playerteamGold',
      'playerteamMid',
      'playerteamJungle',
      'playerteamExp',
    ],
  })

  const formatedPromptTemplateSpell = await promptTemplateSpell.format({
    playerteamRoam: formData.playerteam.roam,
    playerteamGold: formData.playerteam.gold,
    playerteamMid: formData.playerteam.mid,
    playerteamJungle: formData.playerteam.jungle,
    playerteamExp: formData.playerteam.exp,
  })

  const suggestedSpell = await llm.call(formatedPromptTemplateSpell)
  // console.log(suggestedSpell)
  return suggestedSpell
}

// Identify enemy team strategy
async function IdentifyEnemyBuild(formData) {
  const promptTemplateEnemyBuild = new PromptTemplate({
    template:
      'As a Mobile Legends expert, review a list of heroes ' +
      '{enemyTeam1}, {enemyTeam2}, {enemyTeam3}, {enemyTeam4}, {enemyTeam5}' +
      'your tasks are analyses Team members  and define most powerful team configuration' +
      '"name": ""' +
      '"role": (roam, gold, mid, jungle, exp)' +
      '"spell": ""' +
      'Provide the anwswer as a JSON format',
    inputVariables: [
      'enemyTeam1',
      'enemyTeam2',
      'enemyTeam3',
      'enemyTeam4',
      'enemyTeam5',
    ],
  })

  const formatedPromptTemplateEnemyBuild =
    await promptTemplateEnemyBuild.format({
      enemyTeam1: formData.enemyTeam.enemyTeam1,
      enemyTeam2: formData.enemyTeam.enemyTeam2,
      enemyTeam3: formData.enemyTeam.enemyTeam3,
      enemyTeam4: formData.enemyTeam.enemyTeam4,
      enemyTeam5: formData.enemyTeam.enemyTeam5,
    })

  console.log(formatedPromptTemplateEnemyBuild)

  const suggestedEnemyBuild = await llm.call(formatedPromptTemplateEnemyBuild)
  console.log(suggestedEnemyBuild)
  return suggestedEnemyBuild
}

// ---

const executeFunctionInCreateStrategy = async (req, res) => {
  try {
    const formData = req.body

    const sugestedBuild = buildIdentifier(formData)
    const sugestedSpell = spellIdentifier(formData)
    const sugestedEnemyBuild = IdentifyEnemyBuild(formData)

    console.log(sugestedEnemyBuild)
    console.log(sugestedSpell)
    console.log(sugestedBuild)
    res.send({ result: 'Function executed successfully' })
  } catch (error) {
    console.error('Error in executeFunctionInCreateStrategy:', error.message)
    res.status(500).send('Internal Server Error')
  }
}

export { executeFunctionInCreateStrategy }
