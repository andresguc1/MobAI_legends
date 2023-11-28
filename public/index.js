document.addEventListener('DOMContentLoaded', function () {
  const heroOptions = [
    { value: '', text: 'Select Hero' }, // Opción por defecto
    { value: 'Miya', text: 'Miya' },
    { value: 'Balmond', text: 'Balmond' },
    { value: 'Saber', text: 'Saber' },
    { value: 'Alice', text: 'Alice' },
    { value: 'Nana', text: 'Nana' },
    { value: 'Tigreal', text: 'Tigreal' },
    { value: 'Alucard', text: 'Alucard' },
    { value: 'Karina', text: 'Karina' },
    { value: 'Akai', text: 'Akai' },
    { value: 'Franco', text: 'Franco' },
    { value: 'Bane', text: 'Bane' },
    { value: 'Bruno', text: 'Bruno' },
    { value: 'Clint', text: 'Clint' },
    { value: 'Rafaela', text: 'Rafaela' },
    { value: 'Eudora', text: 'Eudora' },
    { value: 'Zilong', text: 'Zilong' },
    { value: 'Fanny', text: 'Fanny' },
    { value: 'Layla', text: 'Layla' },
    { value: 'Minotaur', text: 'Minotaur' },
    { value: 'Lolita', text: 'Lolita' },
    { value: 'Hayabusa', text: 'Hayabusa' },
    { value: 'Freya', text: 'Freya' },
    { value: 'Gord', text: 'Gord' },
    { value: 'Natalia', text: 'Natalia' },
    { value: 'Kagura', text: 'Kagura' },
    { value: 'Chou', text: 'Chou' },
    { value: 'Sun', text: 'Sun' },
    { value: 'Alpha', text: 'Alpha' },
    { value: 'Ruby', text: 'Ruby' },
    { value: 'Yi Sun-shin', text: 'Yi Sun-shin' },
    { value: 'Moskov', text: 'Moskov' },
    { value: 'Johnson', text: 'Johnson' },
    { value: 'Cyclops', text: 'Cyclops' },
    { value: 'Estes', text: 'Estes' },
    { value: 'Hilda', text: 'Hilda' },
    { value: 'Aurora', text: 'Aurora' },
    { value: 'Lapu-Lapu', text: 'Lapu-Lapu' },
    { value: 'Vexana', text: 'Vexana' },
    { value: 'Roger', text: 'Roger' },
    { value: 'Karrie', text: 'Karrie' },
    { value: 'Gatotkaca', text: 'Gatotkaca' },
    { value: 'Harley', text: 'Harley' },
    { value: 'Irithel', text: 'Irithel' },
    { value: 'Grock', text: 'Grock' },
    { value: 'Argus', text: 'Argus' },
    { value: 'Odette', text: 'Odette' },
    { value: 'Lancelot', text: 'Lancelot' },
    { value: 'Diggie', text: 'Diggie' },
    { value: 'Hylos', text: 'Hylos' },
    { value: 'Zhask', text: 'Zhask' },
    { value: 'Helcurt', text: 'Helcurt' },
    { value: 'Pharsa', text: 'Pharsa' },
    { value: 'Lesley', text: 'Lesley' },
    { value: 'Jawhead', text: 'Jawhead' },
    { value: 'Angela', text: 'Angela' },
    { value: 'Gusion', text: 'Gusion' },
    { value: 'Valir', text: 'Valir' },
    { value: 'Martis', text: 'Martis' },
    { value: 'Uranus', text: 'Uranus' },
    { value: 'Hanabi', text: 'Hanabi' },
    { value: "Chang'e", text: "Chang'e" },
    { value: 'Kaja', text: 'Kaja' },
    { value: 'Selena', text: 'Selena' },
    { value: 'Aldous', text: 'Aldous' },
    { value: 'Claude', text: 'Claude' },
    { value: 'Vale', text: 'Vale' },
    { value: 'Leomord', text: 'Leomord' },
    { value: 'Lunox', text: 'Lunox' },
    { value: 'Hanzo', text: 'Hanzo' },
    { value: 'Belerick', text: 'Belerick' },
    { value: 'Kimmy', text: 'Kimmy' },
    { value: 'Thamuz', text: 'Thamuz' },
    { value: 'Harith', text: 'Harith' },
    { value: 'Minsitthar', text: 'Minsitthar' },
    { value: 'Kadita', text: 'Kadita' },
    { value: 'Faramis', text: 'Faramis' },
    { value: 'Badang', text: 'Badang' },
    { value: 'Khufra', text: 'Khufra' },
    { value: 'Granger', text: 'Granger' },
    { value: 'Guinevere', text: 'Guinevere' },
    { value: 'Esmeralda', text: 'Esmeralda' },
    { value: 'Terizla', text: 'Terizla' },
    { value: 'X.Borg', text: 'X.Borg' },
    { value: 'Ling', text: 'Ling' },
    { value: 'Dyrroth', text: 'Dyrroth' },
    { value: 'Lylia', text: 'Lylia' },
    { value: 'Baxia', text: 'Baxia' },
    { value: 'Masha', text: 'Masha' },
    { value: 'Wanwan', text: 'Wanwan' },
    { value: 'Silvanna', text: 'Silvanna' },
    { value: 'Cecilion', text: 'Cecilion' },
    { value: 'Carmilla', text: 'Carmilla' },
    { value: 'Atlas', text: 'Atlas' },
    { value: 'Popol and Kupa', text: 'Popol and Kupa' },
    { value: 'Yu Zhong', text: 'Yu Zhong' },
    { value: 'Luo Yi', text: 'Luo Yi' },
    { value: 'Benedetta', text: 'Benedetta' },
    { value: 'Khaleed', text: 'Khaleed' },
    { value: 'Barats', text: 'Barats' },
    { value: 'Brody', text: 'Brody' },
    { value: 'Yve', text: 'Yve' },
    { value: 'Mathilda', text: 'Mathilda' },
    { value: 'Paquito', text: 'Paquito' },
    { value: 'Gloo', text: 'Gloo' },
    { value: 'Beatrix', text: 'Beatrix' },
    { value: 'Phoveus', text: 'Phoveus' },
    { value: 'Natan', text: 'Natan' },
    { value: 'Aulus', text: 'Aulus' },
    { value: 'Aamon', text: 'Aamon' },
    { value: 'Valentina', text: 'Valentina' },
    { value: 'Edith', text: 'Edith' },
    { value: 'Floryn', text: 'Floryn' },
    { value: 'Yin', text: 'Yin' },
    { value: 'Melissa', text: 'Melissa' },
    { value: 'Xavier', text: 'Xavier' },
    { value: 'Julian', text: 'Julian' },
    { value: 'Fredrinn', text: 'Fredrinn' },
    { value: 'Joy', text: 'Joy' },
    { value: 'Novaria', text: 'Novaria' },
    { value: 'Arlott', text: 'Arlott' },
    { value: 'Ixia', text: 'Ixia' },
    { value: 'Nolan', text: 'Nolan' },
    { value: 'Cici', text: 'Cici' },
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
