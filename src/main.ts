import { renderText } from "./modules/renderText";
import { encryptText, decryptText } from "./modules/encryption";

const buttonCryption = <HTMLButtonElement>(
  document.querySelector("[data-cripto]")
);
const buttonDecryption = <HTMLButtonElement>(
  document.querySelector("[data-uncripto]")
);
const phraseDisplay = <HTMLDivElement>(
  document.querySelector(".container-phrase")
);
const textarea = <HTMLTextAreaElement>document.querySelector("form > textarea");
const textNotFoundDiv = <HTMLDivElement>document.querySelector(".phrase_empty");

const events = ["click", "touchstart"];

const handleEncryption = (event: Event) => {
  event.preventDefault();
  const { value } = textarea;
  if (value.length) {
    const output = encryptText(value);
    textNotFoundDiv.style.display = "none";
    renderText(output, phraseDisplay, events);
    textarea.value = "";
    textarea.focus();
  } else {
    phraseDisplay.classList.remove("activate");
    alert("Nenhum texto encontrado");
  }
};

const handleDecryption = (event: Event) => {
  event.preventDefault();
  const { value } = textarea;
  if (value.length) {
    const output = decryptText(value);
    textNotFoundDiv.style.display = "none";
    renderText(output, phraseDisplay, events);
    textarea.value = "";
    textarea.focus();
  } else {
    phraseDisplay.classList.remove("activate");
    alert("Nenhum texto encontrado");
  }
};
events.forEach((event) => {
  buttonCryption.addEventListener(event, handleEncryption);
  buttonDecryption.addEventListener(event, handleDecryption);
});
