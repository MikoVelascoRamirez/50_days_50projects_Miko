const containerControls = document.querySelector('.controls');
const progressBar = document.querySelector('.progressBar');

const progressBarState = {
    actualStep: 1,
    progress : 0
}

containerControls.addEventListener('click', e => {
    const buttonClicked = e.target.id;
    const stepsLbls = document.querySelector('.steps').children.length - 1;
});