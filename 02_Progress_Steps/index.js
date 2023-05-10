const containerControls = document.querySelector('.controls');
const progressBar = document.querySelector('.progressBar');
const steps = document.querySelector('.steps');

const progressBarState = {
    actualStep: 1,
    progress : 0,
    buttonClicked: ''
}

containerControls.addEventListener('click', e => {
    const buttonClicked = e.target.id;
    const stepsLbls = steps.children.length - 1;

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

    progressBar.value = progressBarState.progress;
    manageButtonsState()
});

function handleProgressState({buttonClicked, progress, actualStep}){
    const stepsLbls = steps.children.length - 1;

    if(buttonClicked === '') return {prog: progress, step: actualStep};

    return buttonClicked === 'prev' 
    ? { prog: progress - (100 / stepsLbls), step: actualStep - 1 } 
    : { prog: progress + (100 / stepsLbls), step: actualStep + 1 }
}

function manageButtonsState(){
    if(progressBarState.progress > 0 && progressBarState.progress < 100 ){
        containerControls.children[0].classList.remove('inactive');
        containerControls.children[0].classList.add('active');
        containerControls.children[0].disabled = false;

        containerControls.children[1].classList.remove('inactive');
        containerControls.children[1].classList.add('active');
        containerControls.children[1].disabled = false;
    } else if(progressBarState.progress === 100){
        containerControls.children[1].classList.remove('active');
        containerControls.children[1].classList.add('inactive');
        containerControls.children[1].disabled = true;
    } else{
        containerControls.children[0].classList.remove('active');
        containerControls.children[0].classList.add('inactive');
        containerControls.children[0].disabled = true;
    }
}

function getNextStep(){
    return steps.querySelector(':not(.done)');
}

function getPreviousStep(){
    const labelsDone = steps.querySelectorAll(':not(.unfinished)');
    return [...labelsDone][labelsDone.length-1];
}