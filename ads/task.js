const rotatorsList = document.querySelectorAll(".rotator");
const rotatorsStates = Array(rotatorsList.length).fill(0).map((el, index) => {
    let cases = rotatorsList[index].querySelectorAll(".rotator__case");

    return {
        cases: cases,
        currentIndex: 0,
        timer: 0,
        speed: 1000
    }}
);

function setDefaultRotatorState(rotatorsStates) {
    for(const [index, rotator] of rotatorsStates.entries()) {

        const rotatorCases = rotatorsStates[index].cases;
        for(let rotatorCase of rotatorCases) {
            rotatorCase.classList.remove("rotator__case_active");
        }

        const state = rotatorsStates[index];

        rotatorCases[state.currentIndex].classList.add("rotator__case_active");
    }
}


function rotate(rotatorIndex) {
    const state = rotatorsStates[rotatorIndex];

    state.timer = 0;
    const rotatorCase = state.cases[state.currentIndex];
    rotatorCase.classList.remove("rotator__case_active");

    if(state.currentIndex === state.cases.length - 1) {
        state.currentIndex = 0;
    } else {
        state.currentIndex++;
    }

    const newRotatorCase = state.cases[state.currentIndex];
    newRotatorCase.classList.add("rotator__case_active");
}


function main() {
    setDefaultRotatorState(rotatorsStates);
    for(const [index, rotator] of rotatorsList.entries()) {
        setInterval(rotate, rotatorsStates[index].speed, index);
    }
}

main();