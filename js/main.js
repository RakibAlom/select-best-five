// GET ELEMENT ED
function getId(id) {
  return document.getElementById(id);
}
// GET ELEMENT TEXT
function getElementText(elementId) {
  const element = getId(elementId);
  let elementText = element.innerText;
  return elementText;
}
// GET ELEMENT VALUE
function getElementValue(elementId) {
  const element = getId(elementId);
  let elementValue = element.value;
  return elementValue;
}

getId('players').addEventListener('click', function (event) {
    const player = event.target.parentNode.querySelector('.player_name');
    const playerName = player.innerText;
    
    let li = document.createElement('li');
    li.innerText = playerName;
    
    let selectPlayers = getId('selectPlayers');
    selectPlayers.appendChild(li);

    event.target.classList.add('bg-gray-500');
    event.target.setAttribute('disabled', true);
})


