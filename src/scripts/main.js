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

//anchor
var anchors = document.querySelectorAll('.banner__btn');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      let blockID = anchor.getAttribute('href').substr(1),
        offset = document.getElementById(blockID).getBoundingClientRect().top;
      window.scrollTo({
        behavior: 'smooth',
        top: offset - 0
      })
    })
  }