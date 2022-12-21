export default function renderText(text, element, events) {
  async function handleClipboard({ target }) {
    await navigator.clipboard.writeText(target.innerText);
    target.classList.add("copied");
    setTimeout(() => target.classList.remove("copied"), 2000);
  }

  const textP = document.createElement("p");
  textP.classList.add("item");
  textP.innerText = text;
  element.appendChild(textP);
  element.classList.add("activate");
  events.forEach((e) => {
    textP.addEventListener(e, handleClipboard);
  });
}
