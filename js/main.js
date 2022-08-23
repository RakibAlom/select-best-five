// GET ELEMENT ED
function getId(id) {
  return document.getElementById(id);
}

// GET ELEMENT TEXT
function getElementTextValue(elementId) {
  const element = getId(elementId);
  const textValue = parseInt(element.innerText);
  return textValue;
}

// GET ELEMENT VALUE
function getElementValue(elementId) {
  const element = getId(elementId);
  const value = parseInt(element.value);
  return value;
}

/* ===== SELECT PLAYER EVENT HANDLER START ===== */
const players = document.querySelectorAll('.select_player');
for(let player of players) {
  player.addEventListener('click', function (event) {
    const playerSelect = event.target.parentNode.querySelector('.player_name');
    const playerName = playerSelect.innerText;

    const selectPlayers = getId('selectPlayers');
    const totalSelectPlayers = selectPlayers.children.length;

    if(totalSelectPlayers >= 5) {
      return alert ('Already, You Selected 5 Players!');
    }
    else{
      const li = document.createElement('li');
      li.innerText = playerName;
      selectPlayers.appendChild(li);
      event.target.classList.add('bg-gray-500');
      event.target.setAttribute('disabled', true);
    }
  })
}
/* ===== SELECT PLAYER EVENT HANDLER END ===== */

/* ===== BUDGET  CALCULATION START ===== */
// PLAYER BUDGET CALCULATE EVENT HANDLER
getId('playerBudgetCalculate').addEventListener('click', function () {
  const perPlayerBudget = getElementValue('perPlayerBudget');

  const selectPlayers = getId('selectPlayers');
  const totalSelectPlayers = selectPlayers.children.length;

  const totalPlayerBudget = perPlayerBudget * totalSelectPlayers;
  
  if(isNaN(totalPlayerBudget)) {
    return alert('Please, provide valid number');
  }

  const playerBudgetAmount = getId('playerBudgetAmount');
  playerBudgetAmount.innerText = totalPlayerBudget;

})

// TOTAL BUDGET CALCULATION EVENT HANDLER
getId('calculateTotalBudget').addEventListener('click', function () {

  const playersBudget = getElementTextValue('playerBudgetAmount');
  const managerBudget = getElementValue('managerBudget');
  const coachBudget = getElementValue('coachBudget');

  const totalBudgetId = getId('totalBudget');
  const totalBudget = playersBudget + managerBudget + coachBudget;

  if(isNaN(totalBudget)) {
    return alert('Please, provide all input valid number');
  }
  totalBudgetId.innerText = totalBudget;

})
/* ===== BUDGET  CALCULATION END ===== */

