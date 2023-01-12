const renderText = (
  text: string,
  element: HTMLElement,
  events: string[] | string
) => {
  const handleClipboard = async (event: Event) => {
    const currentElement = event.currentTarget;
    if (currentElement instanceof HTMLElement) {
      await navigator.clipboard.writeText(currentElement.innerText);
      currentElement.classList.add("copied");
      setTimeout(() => currentElement.classList.remove("copied"), 2 * 1000);
    }
  };

  const para = document.createElement("P");
  para.classList.add("item");
  para.innerText = text;
  element.appendChild(para);
  element.classList.add("activate");
  if (events instanceof Array) {
    events.forEach((event) => {
      para.addEventListener(event, handleClipboard);
    });
  } else {
    para.addEventListener(events, handleClipboard);
  }
};

export { renderText };
