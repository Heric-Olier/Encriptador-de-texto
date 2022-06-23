const alertMessage = document.querySelector(".alert-message-box");
const textBox = document.querySelector(".text-box");
const textAlert = document.querySelector(".alert");
const btnEncript = document.getElementById("encript");

//*! <--------- Function notification alert --------->*/

const notification = (text, img) => {
  const imgAlert = document.createElement("img");
  textAlert.textContent = "";
  textAlert.classList.add("active");
  setTimeout(() => {
    textAlert.classList.remove("active");
  }, 2600);
  imgAlert.src = img;
  imgAlert.classList.add("icon-head");
  textAlert.textContent = text;
  textAlert.appendChild(imgAlert);
};
inputText.focus();

//*! <--------- Function encrypt --------->*/

function encriptText() {
  let textResult = document
    .getElementById("inputText")
    .value.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (textResult.length === 0 || /^\s+$/.test(textResult)) {
    notification(
      "El campo de texto esta vacio, Escribe una palabra",
      "images/icon-head-lose.svg"
    );
  } else if (/[^a-z ]/.test(textResult)) {
    notification(
      "Solo se permiten letras minusculas y sin acento",
      "images/icon-head-lose.svg"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResult;
  inputText.value = "";
  inputText.focus();
}

btnEncript.addEventListener("click", encriptText);

//*! <--------- Function decrypt --------->*/

function decryptText() {
  let textResultDec = document
    .getElementById("inputText")
    .value.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("text-result").innerHTML = textResultDec;

  if (textResultDec.length === 0 || /^\s+$/.test(textResultDec)) {
    notification(
      "El campo de texto esta vacio, Escriba una palabra",
      "images/icon-head-lose.svg"
    );
  } else if (/[^a-z ]/.test(textResultDec)) {
    notification(
      "Solo se permiten letras minusculas y sin acento",
      "images/icon-head-lose.svg"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResultDec;
  inputText.value = "";
  inputText.focus();
}

//*! <--------- Function button copy --------->*/

function copyToClipBoard() {
  let copyText = document.getElementById("text-result").textContent;
  console.log({ copyText });
  navigator.clipboard.writeText(copyText).then(() => {
    if (copyText.length === 0 || /^\s+$/.test(copyText)) {
      notification("No hay texto que copiar", "images/icon-head-lose.svg");
    } else {
      notification("Texto copiado al portapapeles", "images/icon-head-win.svg");
    }
  });
  inputText.focus();
}
