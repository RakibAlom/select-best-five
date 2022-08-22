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

getId('selectPlayer').addEventListener('click', function () {
  
})