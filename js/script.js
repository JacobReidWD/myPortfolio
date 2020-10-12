function changeColor(obj) {
    
    if (obj.style.color == 'black') {
        obj.style.color = 'black';
        
    } else {
        obj.style.color = '#13FFFA';
    }
}

function changeBgColor(obj, colorName) {
    obj.style.backgroundColor = colorName;
    
}

function changeColorUI(obj, colorName) {
    
    if (obj.style.color == 'black') {
        obj.style.color = 'black';
        
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

function changePos(obj, pos) {
    obj.style.Bottom = pos;
}
