
var count = 0;

//legge il valore di value della casella di testo al caricamento della pagina
window.addEventListener("load",readValue);

function readValue(){
  var inputText = document.getElementById("inputText");
  inputText.disabled = true;
  count = inputText.value;
}

//aggiorna il valore di value
function updateValue(){
  var inputText = document.getElementById("inputText");
  inputText.value = count;

}


function buttonPlus(){
  ++count;
  updateValue();

};

function buttonMinus(){
  --count;
  updateValue();

};

function buttonReset() {
  count = 0
  updateValue();
};
