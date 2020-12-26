let text = "Привет Васян";
console.log(text);

//tabs
for (const tabs of document.querySelectorAll("[data-tab]")) {
    const buttons = tabs.querySelectorAll("[data-nav-tab]");
    const items = tabs.querySelectorAll("[data-item-tab]");
  
    for (const button of buttons) {
      button.addEventListener("click", (event) => {
        for (const item of items) {
            item.classList.remove('active');
        }
            tabs.querySelector(`[data-item-tab='${event.target.dataset.navTab}']`).classList.add('active');
        });
    }
}