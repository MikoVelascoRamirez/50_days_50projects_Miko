const containerControls = document.querySelector('.controls');
const progressBar = document.querySelector('.progressBar');

const progressBarState = {
    actualStep: 1,
    progress : 0
}

containerControls.addEventListener('click', e => {
    const buttonClicked = e.target.id;
    const stepsLbls = document.querySelector('.steps').children.length - 1;

    if(buttonClicked === 'prev'){
        progressBarState.progress -= 100 / stepsLbls;
        progressBarState.actualStep -= 1;


        getPreviousStep().classList.toggle('done');
        getPreviousStep().classList.toggle('unfinished');


    } else if(buttonClicked === 'next'){
        progressBarState.progress += 100 / stepsLbls;
        progressBarState.actualStep += 1;


        getNextStep().classList.toggle('unfinished');
        getNextStep().classList.toggle('done');
    }
});