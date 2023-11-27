document.addEventListener('DOMContentLoaded', function () {
  const heroOptions = [
    { value: 'Balmond', text: 'Balmond' },
    { value: 'Layla', text: 'Layla' },
    { value: 'Zilong', text: 'Zilong' },
    { value: 'Nana', text: 'Nana' },
    { value: 'Saber', text: 'Saber' },
    { value: 'Eudora', text: 'Eudora' },
    { value: 'Alice', text: 'Alice' },
    { value: 'Franco', text: 'Franco' },
    { value: 'Miya', text: 'Miya' },
    { value: 'Gord', text: 'Gord' },
    { value: 'Lolita', text: 'Lolita' },
    { value: 'Hayabusa', text: 'Hayabusa' },
    { value: 'Freya', text: 'Freya' },
    { value: 'Karina', text: 'Karina' },
    { value: 'Akai', text: 'Akai' },
    { value: 'Tigreal', text: 'Tigreal' },
    { value: 'Minotaur', text: 'Minotaur' },
    { value: 'Fanny', text: 'Fanny' },
    { value: 'Roger', text: 'Roger' },
    { value: 'Clint', text: 'Clint' },
    { value: 'Chou', text: 'Chou' },
    { value: 'Lapu-Lapu', text: 'Lapu-Lapu' },
    { value: 'Hilda', text: 'Hilda' },
    { value: 'Aurora', text: 'Aurora' },
    { value: 'Zhask', text: 'Zhask' },
    { value: 'Cyclops', text: 'Cyclops' },
    { value: 'Karrie', text: 'Karrie' },
    { value: 'Johnson', text: 'Johnson' },
    { value: 'Martis', text: 'Martis' },
    { value: 'Gatotkaca', text: 'Gatotkaca' },

    // Agrega más héroes según sea necesario
  ]

  const roleOptions = [
    { value: 'Gold Lane', text: 'Gold Lane' },
    { value: 'Roam', text: 'Roam' },
    { value: 'Jungle', text: 'Jungle' },
    { value: 'Mid Lane', text: 'Mid Lane' },
    { value: 'Exp Lane', text: 'Exp Lane' },
  ]

  // Llamada a la función para poblar las opciones de Hero Name
  populateSelectOptions('heroName', heroOptions)

  // Llamada a la función para poblar las opciones de Hero Role
  populateSelectOptions('heroRole', roleOptions)

  // Llamada a la función para poblar las opciones de equipos
  populateSelectOptions('playerTeamRoam', heroOptions)
  populateSelectOptions('playerTeamGold', heroOptions)
  populateSelectOptions('playerTeamMid', heroOptions)
  populateSelectOptions('playerTeamJungle', heroOptions)
  populateSelectOptions('playerTeamExp', heroOptions)

  populateSelectOptions('enemyTeamRoam', heroOptions)
  populateSelectOptions('enemyTeamGold', heroOptions)
  populateSelectOptions('enemyTeamMid', heroOptions)
  populateSelectOptions('enemyTeamJungle', heroOptions)
  populateSelectOptions('enemyTeamExp', heroOptions)
})

document.getElementById('heroName').addEventListener('change', function () {})

async function submitForm(event) {
  event.preventDefault()

  const heroData = {
    heroName: document.getElementById('heroName').value,
    heroRole: document.getElementById('heroRole').value,
    playerteam: {
      roam: document.getElementById('playerTeamRoam').value,
      gold: document.getElementById('playerTeamGold').value,
      mid: document.getElementById('playerTeamMid').value,
      jungle: document.getElementById('playerTeamJungle').value,
      exp: document.getElementById('playerTeamExp').value,
    },
    enemyTeam: {
      roam: document.getElementById('enemyTeamRoam').value,
      gold: document.getElementById('enemyTeamGold').value,
      mid: document.getElementById('enemyTeamMid').value,
      jungle: document.getElementById('enemyTeamJungle').value,
      exp: document.getElementById('enemyTeamExp').value,
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

function populateSelectOptions(selectId, options) {
  const selectElement = document.getElementById(selectId)

  // Limpiar opciones existentes
  selectElement.innerHTML = ''

  // Crear y agregar nuevas opciones
  options.forEach((option) => {
    const optionElement = document.createElement('option')
    optionElement.value = option.value
    optionElement.textContent = option.text
    selectElement.appendChild(optionElement)
  })
}
