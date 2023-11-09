function increaseFontSize() {
  var element = document.body;
  var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  var size = parseFloat(style);
  element.style.fontSize = (size + 1) + 'px';
}
function decreaseFontSize() {
  var element = document.body;
  var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  var size = parseFloat(style);
  element.style.fontSize = (size - 1) + 'px';
}
    