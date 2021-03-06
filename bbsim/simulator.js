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

/* Whether the current machine was uploaded or preset */
var inputFromUpload = false

/* Machine */
var currentMachine = defaultMachine;
var currentMachineB64 = presetMachines[currentMachine]
var currentMachineCode = b64DecodeUnicode(currentMachineB64);
var showMachineCode = false

/* Renders elements that do not change at each simulation steps */
TM.prototype.initView = function () {

    console.log("Meta", this.meta)
    /* Fill metadata */
    if (this.meta != "") {
        document.getElementById('metadata-container').style.display = "inline-block"
        document.getElementById('metadata').innerHTML = this.meta
    }

    /* Remove errors */
    document.getElementById('error-container').style.display = "none";

    /* Fill machine code */
    document.getElementById('container-machine-code').style.display = (showMachineCode) ? "inline-block" : "none"
    document.getElementById('machine-code').innerHTML = currentMachineCode.replaceAll('\n', '<br/>')

    /* Dowload link */
    document.getElementById('dl-link').href = 'data:text/plain;base64,' + currentMachineB64
    document.getElementById('dl-link').download = currentMachine

    /* Change blank symbol occurrences */
    document.getElementById('initial-tape').placeholder = 'Example: ' + tm.tapeBlankSymbol + tm.tapeBlankSymbol + '>' + '1' + '1' + tm.tapeBlankSymbol + tm.tapeBlankSymbol
    document.getElementById('blank-symbol').innerHTML = tm.tapeBlankSymbol

    var selStates = document.getElementById('select-initial-state');
    selStates.innerHTML = ''
    for (machineState in this.transitionTable) {
        var optState = document.createElement('option');
        if (machineState !== this.trueInitialState)
            optState.innerHTML = machineState;
        else
            optState.innerHTML = machineState + ' (default)';

        optState.selected = machineState == this.initialState;



        selStates.appendChild(optState);
    }

    document.getElementById('state-count').innerHTML = Object.keys(this.transitionTable).length
}

/* Computing tape positions when we group symbols together */
TM.prototype.redundantPos = function (x) {
    if (tm.redundancy === 1)
        return x
    return x + Math.floor(x / this.redundancy)
}

/* Renders the configuration of the current simulation step */
TM.prototype.drawConfiguration = function () {
    const symbolWidth = context.measureText(this.tapeBlankSymbol).width;

    /* Tape */

    if (this.tape[this.tapeHeadPos] === undefined) {
        this.tape[this.tapeHeadPos] = this.tapeBlankSymbol;
    }

    context.clearRect(0, 0, canvas.width, canvas.height)
    for (const pos in this.tape) {
        const pos_int = parseInt(pos);
        context.fillText(this.tape[pos], tapeOriginX + 200 + (this.redundantPos(pos_int)) * symbolWidth, tapeOriginY);
    }

    /* Tape head */
    context.fillStyle = tapeHeadColor;
    context.fillRect(tapeOriginX + 200 + (this.redundantPos(this.tapeHeadPos)) * symbolWidth, tapeOriginY + 40 - tapeHeadAdjustY, symbolWidth - tapeHeadAdjustX, 6);
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

if (tm !== null) {
    tm.initView()
    tm.drawConfiguration()
}
/* Events */

const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");
const btnLoad = document.getElementById("btn-load");
const btnShowCode = document.getElementById("btn-show");
const inputUpload = document.getElementById("btn-up");

/* Show code */
btnShowCode.addEventListener("click", function () {
    showMachineCode = !showMachineCode;
    tm.initView()
});

/* Next */
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyN') {
        btnNext.click();
    }
}, false);
btnNext.addEventListener("click", function () {
    if (tm !== null) {
        tm.next()
        tm.drawConfiguration()
    }
});

/* Restart */
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyR') {
        btnRestart.click();
    }
}, false);
btnRestart.addEventListener("click", function () {
    if (tm !== null) {
        tm.restart()
        tm.initView()
        tm.drawConfiguration()
    }
});

/* Select machine */
document.getElementById('select-preset').addEventListener('change', (event) => {
    inputFromUpload = false

    document.getElementById('select-preset').style.opacity = 1.0

    inputUpload.value = "";

    currentMachine = document.getElementById('select-preset').value;
    currentMachineB64 = presetMachines[currentMachine]
    currentMachineCode = b64DecodeUnicode(currentMachineB64);
    tm = ParseTM(currentMachineCode, document.getElementById('initial-tape').value)
    if (tm !== null) {
        tm.initView();
        tm.drawConfiguration()
    } else {
        document.getElementById('metadata-container').style.display = "none"
    }

}, false);

/* Load simulation */
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyL') {
        btnLoad.click();
    }
}, false);
btnLoad.addEventListener("click", function () {
    tm = ParseTM(currentMachineCode, document.getElementById('initial-tape').value)
    if (tm !== null) {
        tm.initialState = document.getElementById('select-initial-state').value.replace(' (default)', '')
        tm.currentState = tm.initialState
        tm.initView()
        tm.drawConfiguration()
    } else {
        document.getElementById('metadata-container').style.display = "none"
    }
});

/* File upload */
inputUpload.addEventListener("change", function () {

    if (inputUpload.files[0] === undefined) {
        inputFromUpload = false
        return
    }

    document.getElementById('select-preset').style.opacity = 0.6

    inputFromUpload = true

    currentMachine = inputUpload.files[0].name

    var reader = new FileReader();
    reader.readAsText(inputUpload.files[0]);
    reader.onload = function (evt) {
        currentMachineCode = evt.target.result;
        currentMachineB64 = btoa(currentMachineCode)
        tm = ParseTM(currentMachineCode, document.getElementById('initial-tape').value)
        if (tm !== null) {
            tm.initView();
            tm.drawConfiguration()
        } else {
            document.getElementById('metadata-container').style.display = "none"
        }
    }
})