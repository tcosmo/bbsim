var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

/* Graphical constants */

const tapeBackground = '#d8d8d8';
const tapeForeground = 'black';
const tapeHeadColor = '#FF00A0';
const tapeFont = 'normal 40px Courier';

context.font = tapeFont;
context.textBaseline = 'top';

const tapeOriginY = 5;

/* Tweaks to adjust position of tape head relative to tape symbol */
const tapeHeadAdjustX = 4;
const tapeHeadAdjustY = 3;

/* Machine */
var currentMachine = defaultMachine;
var currentMachineCode = atob(presetMachines[currentMachine]);

TM.prototype.drawConfiguration = function () {
    const symbolWidth = context.measureText(this.tapeBlankSymbol).width;

    /* Tape */

    if (this.tape[this.tapeHeadPos] === undefined) {
        this.tape[this.tapeHeadPos] = this.tapeBlankSymbol;
    }

    context.clearRect(0, 0, canvas.width, canvas.height)
    for (const pos in this.tape) {
        const pos_int = parseInt(pos);
        context.fillText(this.tape[pos], tapeOriginX + 200 + pos_int * symbolWidth, tapeOriginY);
    }

    /* Tape head */
    context.fillStyle = tapeHeadColor;
    context.fillRect(tapeOriginX + 200 + this.tapeHeadPos * symbolWidth, tapeOriginY + 40 - tapeHeadAdjustY, symbolWidth - tapeHeadAdjustX, 6);
    context.fillStyle = tapeForeground;

    document.getElementById('step').innerHTML = this.step

    /* States */
    var divStates = document.getElementById('states');
    divStates.innerHTML = '';

    for (machineState in this.transitionTable) {
        var divState = document.createElement('div');
        divState.classList.add('below-state');

        if (machineState !== this.currentState)
            divState.innerHTML = '&nbsp;&nbsp;' + machineState;
        else
            divState.innerHTML = '<strong>&gt;&nbsp;' + machineState + '</strong>';

        divStates.appendChild(divState);
    }
}

/* Main */
tm = ParseTM(currentMachineCode, document.getElementById('initial-tape').value)
tm.drawConfiguration()

/* Events */

const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

/* Next */
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyN') {
        btnNext.click();
    }
}, false);
btnNext.addEventListener("click", function () {
    tm.next()
    tm.drawConfiguration()
});

/* Restart */
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyR') {
        btnRestart.click();
    }
}, false);
btnRestart.addEventListener("click", function () {
    tm.restart()
    tm.drawConfiguration()
});

/* Select machine */
document.getElementById('select-preset').addEventListener('change', (event) => {

    var currentMachine = document.getElementById('select-preset').value;
    var currentMachineCode = atob(presetMachines[currentMachine]);
    tm = ParseTM(currentMachineCode, document.getElementById('initial-tape').value)
    tm.drawConfiguration()
}, false);

