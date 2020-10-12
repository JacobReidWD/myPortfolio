function changeColor(obj) {
  if (obj.style.color == "black") {
    obj.style.color = "black";
  } else {
    obj.style.color = "#13FFFA";
  }
}

function changeBgColor(obj, colorName) {
  obj.style.backgroundColor = colorName;
}

function changeColorUI(obj, colorName) {
  if (obj.style.color == colorName) {
    obj.style.color = colorName;
  } else {
    obj.style.color = colorName;
  }
}

function changeSize(obj, sizer) {
  obj.style.fontSize = sizer;
}

function changeShadow(obj, shader) {
  obj.style.boxShadow = shader;
}

function changeImgSize(obj, imgHeight, imgWidth) {
  obj.style.width = imgWidth;
  obj.style.height = imgHeight;
}

function appearText(obj, display) {
  obj.style.disply = display;
}
function sendMessage(obj, message) {
  alert(message);
}
