const alertMessage = document.querySelector(".alert-message-box");
const textBox = document.querySelector(".text-box");


//*! <--------- Function encrypt --------->*/

function encriptText() {
    let textResult = document.getElementById("inputText").value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")

    if (textResult.length === 0 || /^\s+$/.test(textResult)) {
        alert("El Campo de texto esta vacio, Escriba una palabra");
    }
    else if (/[^a-z ]/.test(textResult)) {
        alert("Solo se permiten letras minusculas y sin acento");

    } else {
        textBox.classList.remove("disabled")
        alertMessage.textContent = "";
    }

    document.getElementById("text-result").innerHTML = textResult;
    inputText.value = "";
    inputText.focus();
}


//*! <--------- Function decrypt --------->*/

function decryptText() {
    let textResultDec = document.getElementById("inputText").value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    document.getElementById("text-result").innerHTML = textResultDec;

    if (textResultDec.length === 0 || /^\s+$/.test(textResultDec)) {
        alert("El Campo de texto esta vacio, Escriba una palabra");
       
    }
    else if (/[^a-z ]/.test(textResultDec)) {
        alert("Solo se permiten letras minusculas y sin acento");
        
    }
    else {
        textBox.classList.remove("disabled")
        alertMessage.textContent = "";
    }

    document.getElementById("text-result").innerHTML = textResultDec;
    inputText.value = "";
    inputText.focus();
    // if(textBox.classList.contains){textBox.classList.remove("disabled")}
    
}


//*! <--------- Function button copy --------->*/

function copyToClipBoard() {
    let copyText = document.getElementById("text-result").textContent;
    console.log({copyText});
    navigator.clipboard.writeText(copyText).then(() => {

        if (copyText.length === 0 || /^\s+$/.test(copyText)) {
            alert("No hay texto que copiar");
        } else {
            alert("Texto copiado al portapapeles");
        }
    });
}




