import { renderText } from "./modules/renderText";
import { encryptText, decryptText } from "./modules/encryption";

const buttonCryption = <HTMLButtonElement>(
  document.querySelector("[data-cripto]")
);
const buttonDecryption = <HTMLButtonElement>(
  document.querySelector("[data-uncripto]")
);
const phraseDisplay = <HTMLDivElement>(
  document.querySelector(".container__display")
);
const textarea = <HTMLTextAreaElement>(
  document.querySelector(".container__form__input")
);
const textNotFoundDiv = <HTMLDivElement>(
  document.querySelector(".container__display__notext")
);

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
