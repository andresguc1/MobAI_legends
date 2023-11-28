document.addEventListener('DOMContentLoaded', function () {
  const heroOptions = [
    { value: '', text: 'Select Hero' }, // Opción por defecto
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
  ]

  const roleOptions = [
    { value: '', text: 'Select Role' }, // Opción por defecto
    { value: 'Gold Lane', text: 'Gold Lane' },
    { value: 'Roam', text: 'Roam' },
    { value: 'Jungle', text: 'Jungle' },
    { value: 'Mid Lane', text: 'Mid Lane' },
    { value: 'Exp Lane', text: 'Exp Lane' },
  ]

  // Llamada a la función para poblar las opciones de Hero Name y Hero Role
  populateSelectOptions('heroName', heroOptions)
  populateSelectOptions('heroRole', roleOptions)
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

  // Inicializar seguimiento de héroes y roles seleccionados
  const selectedHeroes = {}
  const selectedRoles = {}

  // Agregar eventos de cambio para Hero Name y Hero Role
  document.getElementById('heroName').addEventListener('change', function () {
    updateTeams()
  })

  document.getElementById('heroRole').addEventListener('change', function () {
    updateTeams()
  })

  // Llamada inicial para establecer los valores predeterminados
  updateTeams()

  async function submitForm(event) {
    // Resto del código de la función submitForm
  }

  function populateSelectOptions(selectId, options) {
    const selectElement = document.getElementById(selectId)

    // Limpiar opciones existentes
    selectElement.innerHTML = ''

    // Crear y agregar opción por defecto
    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.textContent = options[0].text
    selectElement.appendChild(defaultOption)

    // Crear y agregar nuevas opciones
    options.slice(1).forEach((option) => {
      const optionElement = document.createElement('option')
      optionElement.value = option.value
      optionElement.textContent = option.text
      selectElement.appendChild(optionElement)
    })
  }

  function updateTeams() {
    const selectedHero = document.getElementById('heroName').value
    const selectedRole = document.getElementById('heroRole').value

    // Actualizar el contenedor del equipo del jugador
    updateTeam('playerTeam', selectedRole, selectedHero)

    // Actualizar el contenedor del equipo del enemigo
    const enemyRole = getEnemyRole(selectedRole)
    updateTeam('enemyTeam', enemyRole, '')
  }

  function updateTeam(teamType, role, hero) {
    const teamRoam = document.getElementById(`${teamType}Roam`)
    const teamGold = document.getElementById(`${teamType}Gold`)
    const teamMid = document.getElementById(`${teamType}Mid`)
    const teamJungle = document.getElementById(`${teamType}Jungle`)
    const teamExp = document.getElementById(`${teamType}Exp`)

    // Limpiar valores existentes
    teamRoam.value = ''
    teamGold.value = ''
    teamMid.value = ''
    teamJungle.value = ''
    teamExp.value = ''

    // Actualizar el héroe seleccionado para el rol correspondiente
    selectedHeroes[role] = hero

    // Actualizar el contenedor del equipo
    switch (role) {
      case 'Roam':
        teamRoam.value = hero
        break
      case 'Gold Lane':
        teamGold.value = hero
        break
      case 'Mid Lane':
        teamMid.value = hero
        break
      case 'Jungle':
        teamJungle.value = hero
        break
      case 'Exp Lane':
        teamExp.value = hero
        break
      default:
        break
    }
  }

  function getEnemyRole(playerRole) {
    switch (playerRole) {
      case 'Gold Lane':
        return 'Exp Lane'
      case 'Roam':
        return 'Mid Lane'
      case 'Jungle':
        return 'Jungle'
      case 'Mid Lane':
        return 'Roam'
      case 'Exp Lane':
        return 'Gold Lane'
      default:
        return ''
    }
  }
})
