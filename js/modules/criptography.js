// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
import renderText from "./renderText.js";

export default function initCryptography() {
  const btnCrypto = document.querySelector("[data-cripto]");
  const btnDecrypto = document.querySelector("[data-uncripto]");
  const form = document.forms[0];
  const phraseDisplay = document.querySelector("[data-phrase]");
  const textNotFoundDiv = phraseDisplay.querySelector("div");
  const events = ["click", "touchstart"];
  const encryption = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  function encryptLetter(letter) {
    if (!encryption[letter]) return letter;
    return encryption[letter];
  }

  function encryptText(text) {
    let encryptMessage = "";
    for (let i = 0; i < text.length; i++) {
      encryptMessage += encryptLetter(text[i]);
    }
    return encryptMessage;
  }

  const handleEncrypt = (e) => {
    e.preventDefault();
    const message = form.text.value.toLowerCase();
    if (message.length) {
      const encryptMessage = encryptText(message);
      textNotFoundDiv.style.display = "none";
      renderText(encryptMessage, phraseDisplay, events);
      form.text.value = "";
    } else {
      phraseDisplay.classList.remove("activate");
      alert("Nenhum texto encontrado");
    }
  };

  events.forEach((e) => {
    btnCrypto.addEventListener(e, handleEncrypt);
  });

  //gaitober

  function decryptText(text) {
    let decryptMessage = text.slice();
    for (const c in encryption) {
      const currentEncryption = encryption[c];
      if (text.includes(currentEncryption)) {
        decryptMessage = decryptMessage.replaceAll(currentEncryption, c);
      }
    }
    return decryptMessage;
  }

  const handleDecrypt = (e) => {
    e.preventDefault();
    const message = form.text.value.toLowerCase();
    if (message.length) {
      const decryptMessage = decryptText(message);
      textNotFoundDiv.style.display = "none";
      renderText(decryptMessage, phraseDisplay, events);
      form.text.value = "";
    } else {
      phraseDisplay.classList.remove("activate");
      alert("Nenhum texto encontrado");
    }
  };

  events.forEach((e) => {
    btnDecrypto.addEventListener(e, handleDecrypt);
  });
}
