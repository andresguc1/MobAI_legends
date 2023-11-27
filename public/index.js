document.getElementById('heroName').addEventListener('change', function () {})

async function submitForm(event) {
  event.preventDefault()

  const heroData = {
    heroName: document.getElementById('heroName').value,
    heroRole: document.getElementById('heroRole').value,
    playerteam: {
      roam: document.getElementById('roam').value,
      gold: document.getElementById('gold').value,
      mid: document.getElementById('mid').value,
      jungle: document.getElementById('jungle').value,
      exp: document.getElementById('exp').value,
    },
    enemyTeam: {
      roam: document.getElementById('enemyRoam').value,
      gold: document.getElementById('enemyGold').value,
      mid: document.getElementById('enemyMid').value,
      jungle: document.getElementById('enemyJungle').value,
      exp: document.getElementById('enemyExp').value,
    },
  }

  try {
    const response = await fetch('/createStrategy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(heroData),
    })

    if (response.ok) {
      const createStrategyResult = await response.json()

      document.getElementById(
        'heroNameResult'
      ).innerText = `Hero Name: ${createStrategyResult.heroName}`
      document.getElementById(
        'equipmentResult'
      ).innerText = `Equipment: ${createStrategyResult.equipment}`
      document.getElementById(
        'battleSpellResult'
      ).innerText = `Battle Spell: ${createStrategyResult.battleSpell}`
      document.getElementById(
        'emblemResult'
      ).innerText = `Emblem: ${createStrategyResult.emblem}`
    } else {
      console.error('Error in submitForm:', response.statusText)
    }
  } catch (error) {
    console.error('Error in submitForm:', error.message)
  }
}
