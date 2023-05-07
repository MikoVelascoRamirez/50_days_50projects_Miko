const mainContainer = document.getElementById('container');

mainContainer.addEventListener('click', e => {
    const parentElement = e.target.parentElement;
    const parentElementTagName = parentElement.localName;
    const figcaption = e.target.nextElementSibling;

    if(!parentElement.classList.contains('opened') && parentElementTagName === 'figure'){
        getElementOpen();

        parentElement.classList.toggle('swipped');
        parentElement.classList.remove('no-effect');

        parentElement.classList.add('opened');
        parentElement.classList.add('with-effect');

        // Figcaption effect
        figcaption.classList.toggle('hided');
        figcaption.classList.remove('no-effect');

        figcaption.classList.add('appeared');
        figcaption.classList.add('with-effect');
    }
})

function getElementOpen(){
    const opened = document.querySelector('.opened');
    const figcaption = opened.lastElementChild;

    opened.classList.toggle('opened');
    opened.classList.remove('no-effect');

    opened.classList.add('swipped')
    opened.classList.add('with-effect');

    // Figcaption effect
    figcaption.classList.toggle('appeared');
    figcaption.classList.remove('no-effect');

    figcaption.classList.add('hided');
    figcaption.classList.add('with-effect');
}