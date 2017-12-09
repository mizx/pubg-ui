document.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement('div');
    div.id = "fakeConsole";
    div.style.backgroundColor = "white";
    div.style.left = '100px'; 
    div.style.top = '0px';
    div.style.position = 'absolute';
    div.style.width = '800px'; 
    div.style.height = '500px';
    div.style.color = 'black';
    div.style.fontSize = '12px';
    div.style.zIndex = 10000;
    
    var textarea = document.createElement('textarea');
    textarea.id = "textArea";
    textarea.style.left = '100px'; 
    textarea.style.top = '510px';
    textarea.style.position = 'absolute';
    textarea.style.width = '400px'; 
    textarea.style.height = '300px';
    textarea.value = "log('hi', {'whats': 'up'});"
    textarea.style.zIndex = 10000;
    textarea.onkeypress = function(event) {
       var _event = event || window.event
       if (_event.keyCode === 13 && _event.shiftKey) {
            eval(document.getElementById("textArea").value)
            return false;
        }
    }
    
    var toggleVisible = document.createElement('div');
    textarea.id = "textArea";    
    textarea.style.left = '100px'; 
    textarea.style.top = '510px';
    textarea.style.position = 'absolute';
    textarea.style.width = '400px'; 
    textarea.style.height = '300px';
    textarea.value = "log('hi', {'whats': 'up'});"
    textarea.style.zIndex = 10000;
    document.body.appendChild(textarea);

    
    
    if (!window.onerror) {
        window.onerror = function(err) { log(err); }
    }
});

function log() {
    var localConsole = document.getElementById("fakeConsole");

    var result = '';
    for (i = 0; i < arguments.length; i++) {
        switch (typeof arguments[i]) {
            case 'string':
            case 'number':
                result += arguments[i];
                break;
            case 'object':
                result += JSON.stringify(arguments[i]);
                break;
            default:
                result += arguments[i];
        }
        result += '<br><br>';
    }

    localConsole.innerHTML = result;
}
/* 
function which_scripts() {
    var textarea = document.getElementById("textArea");
    textarea.value = `
var scripts = document.getElementsByTagName('script');

var results = '';
var arrayLength = scripts .length;
for (var i = 0; i < arrayLength; i++) {
    results += scripts[i].src + '<br>';
}
log(results)
`;
} */


function hideInput() {
    document.getElementById("textArea").style.display = 'None';
}

function hideConsole() {
    document.getElementById("fakeConsole").style.display = 'None';
}


// engine.call("GetLobbyUrl").then(function(n) {log(n);});


// document.body.style.transform = 'rotate(180deg');

// engine.trigger('SetLobbyCamera', 0.5104166666666666,1.9287037037037037, 0.69791666666666666, 1.8620370370370371)

// engine.trigger('SetLobbyCharacterAngle', 0, 180)
