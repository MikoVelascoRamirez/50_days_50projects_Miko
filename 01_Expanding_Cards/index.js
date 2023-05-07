
mainContainer.addEventListener('click', e => {
    const parentElement = e.target.parentElement;
    const parentElementTagName = parentElement.localName;
    const figcaption = e.target.nextElementSibling;
})

function getElementOpen(){
    const opened = document.querySelector('.opened');
    const figcaption = opened.lastElementChild;

}