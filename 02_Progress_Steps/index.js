const containerControls = document.querySelector('.controls');
const progressBar = document.querySelector('.progressBar');
const steps = document.querySelector('.steps');

const progressBarState = {
    actualStep: 1,
    progress: 0,
    buttonClicked: ''
}

containerControls.addEventListener('click', e => {
    const buttonClicked = e.target.id;
    progressBarState.buttonClicked = buttonClicked;

    const { prog, step } = handleProgressState(progressBarState);
    progressBarState.progress = prog;
    progressBarState.actualStep = step;
    changeStateClasses(progressBarState);

    progressBar.value = progressBarState.progress;
    manageButtonsState()
});

function handleProgressState({ buttonClicked, progress, actualStep }) {
    const stepsLbls = steps.children.length - 1;

    if (buttonClicked === '') return { prog: progress, step: actualStep };

    return buttonClicked === 'prev'
        ? { prog: progress - (100 / stepsLbls), step: actualStep - 1 }
        : { prog: progress + (100 / stepsLbls), step: actualStep + 1 }
}

function changeStateClasses({ buttonClicked }) {
    if (buttonClicked === 'prev') getPreviousStep().classList.replace('done', 'unfinished');
    else if (buttonClicked === 'next') getNextStep().classList.replace('unfinished', 'done');
}

function manageButtonsState() {
    const [prev, next] = containerControls.children;
    if (progressBarState.progress > 0 && progressBarState.progress < 100) {
        prev.classList.replace('inactive', 'active');
        prev.disabled = false;

        next.classList.replace('inactive', 'active');
        next.disabled = false;
    } else if (progressBarState.progress === 100) {
        next.classList.replace('active', 'inactive');
        next.disabled = true;
    } else {
        prev.classList.replace('active', 'inactive');
        prev.disabled = true;
    }
}

function getNextStep() {
    return steps.querySelector(':not(.done)');
}

function getPreviousStep() {
    const labelsDone = steps.querySelectorAll(':not(.unfinished)');
    return [...labelsDone][labelsDone.length - 1];
}