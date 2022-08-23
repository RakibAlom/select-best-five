// GET ELEMENT ED
function getId(id) {
  return document.getElementById(id);
}
// GET ELEMENT TEXT
function getElementText(elementId) {
  const element = getId(elementId);
  const elementText = element.innerText;
  return elementText;
}
// GET ELEMENT VALUE
function getElementValue(elementId) {
  const element = getId(elementId);
  const elementValue = element.value;
  return elementValue;
}

// SELECT PLAYER EVENT HANDLER
getId('players').addEventListener('click', function (event) {
    const player = event.target.parentNode.querySelector('.player_name');
    const playerName = player.innerText;

    const selectPlayers = getId('selectPlayers');
    let totalSelectPlayers = selectPlayers.children.length;

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

/* ===== BUDGET 

