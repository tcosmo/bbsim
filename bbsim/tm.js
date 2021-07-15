/* Turing Machines representation, logic and parser. */
class TM {
    constructor(transitionTable = {}, initialState = null, tapeBlankSymbol = '#', initialTape = {}, tapeHeadPos = 0, redundancy = 1) {
        this.transitionTable = transitionTable;
        this.initialState = initialState;
        this.trueInitialState = initialState;
        this.tapeBlankSymbol = tapeBlankSymbol;
        this.initialTape = initialTape;
        this.tape = initialTape;
        this.tapeHeadPos = tapeHeadPos;
        this.redundancy = redundancy;
        this.currentState = initialState;
        this.step = 0;
    }

    next() {
        if (this.tape[this.tapeHeadPos] === undefined) {
            this.tape[this.tapeHeadPos] = this.tapeBlankSymbol;
        }

        if (this.transitionTable[this.currentState] === undefined) {
            error(`Runtime Error: state '${this.currentState}' was not specified.`)
            return
        }

        const readSymbol = this.tape[this.tapeHeadPos];
        if (this.transitionTable[this.currentState][readSymbol] === undefined) {
            error(`Runtime Error: reading '${readSymbol}' in state '${this.currentState}' was not specified.`)
            return
        }

        if (this.transitionTable[this.currentState][readSymbol].length === 1) {
            error(`HALT: machine has halted in state '${this.currentState}' at step ${this.step}.`)
            return
        }

        this.tape[this.tapeHeadPos] = this.transitionTable[this.currentState][readSymbol][0];
        this.tapeHeadPos += this.transitionTable[this.currentState][readSymbol][1];
        this.currentState = this.transitionTable[this.currentState][readSymbol][2];

        if (this.transitionTable[this.currentState] === undefined) {
            error(`Runtime Error: state '${this.currentState}' was not specified.`)
            return
        }

        this.step += 1
    }

    restart() {
        this.tape = { ...this.initialTape };
        this.tapeHeadPos = 0;
        this.currentState = this.initialState;
        this.step = 0;
    }
}

const tapesDirToInt = { 'L': -1, 'R': 1 };

/* Parser */
function ParseTM(machineCode, initialTapeContent) {

    var toReturn = new TM();

    var lineCount = 0;
    var currentStateBeingParsed = null;

    for (const line of machineCode.split("\n")) {
        lineCount += 1;
        const ltrim = line.leftTrim().split(";")[0]; // Getting rid of comments

        // Line is empty
        if (ltrim.length === 0)
            continue

        if (ltrim.includes('initial_state')) {
            if (ltrim.split(':').length > 0 && ltrim.split(':')[1].leftTrim().length > 0)
                toReturn.initialState = ltrim.split(':')[1].leftTrim()
            console.log(`Initial state: '${toReturn.initialState}'`);
            continue;
        }

        if (ltrim.includes('blank_symbol')) {
            if (ltrim.split(':').length > 0 && ltrim.split(':')[1].leftTrim().length > 0)
                toReturn.tapeBlankSymbol = ltrim.split(':')[1].leftTrim()
            console.log(`Blank symbol: '${toReturn.tapeBlankSymbol}'`);
            continue;
        }

        if (ltrim.includes('redundancy')) {
            if (ltrim.split(':').length > 0 && ltrim.split(':')[1].leftTrim().length > 0) {
                toReturn.redundancy = parseInt(ltrim.split(':')[1].leftTrim())
                if (isNaN(toReturn.redundancy) || toReturn.redundancy < 0) {
                    error(`Parsing error at line ${lineCount}: redundancy '${toReturn.redundancy}' is not a non-negative integer.`)
                    return null
                }
            }

            console.log(`Redundancy: '${toReturn.redundancy}'`);
            continue;
        }

        parsedWords = ltrim.match(/("[^"]+"|[^"\s]+)/g);

        if (parsedWords.length !== 1 && parsedWords.length !== 2 && parsedWords.length !== 4) {
            error(`Parsing error at line ${lineCount}: '${ltrim}' is not valid in a Turing Machine specification.<br/> You must either give: <br/>&nbsp;&nbsp;&nbsp;&nbsp;` + escapeHtml("'<state_name>' or ") + '<br/>&nbsp;&nbsp;&nbsp;&nbsp;' + escapeHtml("'<read_symbol> HALT' or ") + '<br/>&nbsp;&nbsp;&nbsp;&nbsp;' + escapeHtml("'<read_symbol> <write_symbol> <direction> <go to state>' or ") + '<br/>&nbsp;&nbsp;&nbsp;&nbsp;' + escapeHtml("'-' to give an unspecified read/write TM instruction."))
            return null
        }

        // Parsing state name
        if (parsedWords.length === 1) {

            // Incomplete instruction
            if (parsedWords[0] === '-') {
                continue;
            }

            // If no initial state provided take first one
            if (currentStateBeingParsed === null && toReturn.initialState === null) {
                toReturn.initialState = parsedWords[0];
            }

            currentStateBeingParsed = parsedWords[0]
            continue;
        }

        // Parsing <read_symbol> <write_symbol> <direction> <go to state>
        if (parsedWords.length === 4) {
            if (currentStateBeingParsed == null) {
                error(`Parsing error at line ${lineCount}: you cannot give '${ltrim}' outside of a state. Please specify what state this instruction belongs to.`)
                return null
            }

            if (parsedWords[2] !== 'R' && parsedWords[2] !== 'L') {
                error(`Parsing error at line ${lineCount}: '${parsedWords[2]}' is an invalid tape direction. Valid tape directions are: 'R' and 'L'.`)
                return null
            }

            if (toReturn.transitionTable[currentStateBeingParsed] === undefined) {
                toReturn.transitionTable[currentStateBeingParsed] = {}
            }

            toReturn.transitionTable[currentStateBeingParsed] = {
                [parsedWords[0]]: [parsedWords[1], tapesDirToInt[parsedWords[2]], parsedWords[3]],
                ...toReturn.transitionTable[currentStateBeingParsed]
            }

            continue;
        }

        if (parsedWords.length === 2) {
            if (parsedWords[1] !== 'HALT' && parsedWords[1] !== 'H' && parsedWords[1] !== 'Halt' && parsedWords[1] !== 'halt') {
                error(`Parsing error at line ${lineCount}: '${parsedWords[1]}' is not a valid 'HALT' instruction. <br/>Valid 'HALT' instructions are: 'HALT', 'H', 'Halt' and 'halt'.`)
                return null
            }

            if (toReturn.transitionTable[currentStateBeingParsed] === undefined) {
                toReturn.transitionTable[currentStateBeingParsed] = {}
            }

            toReturn.transitionTable[currentStateBeingParsed] = {
                [parsedWords[0]]: [parsedWords[1]],
                ...toReturn.transitionTable[currentStateBeingParsed]
            }


            continue;
        }
    }

    const tapeTrim = initialTapeContent.leftTrim();
    if (tapeTrim.length === 0) {
        for (iStr of ['-2', '-1', '0', '1', '2'])
            toReturn.initialTape[iStr] = toReturn.tapeBlankSymbol
    } else {
        if (!tapeTrim.includes('>')) {
            var iTape = 0;
            for (tapeSymb of tapeTrim) {
                toReturn.initialTape[iTape.toString()] = tapeSymb
                iTape += 1
            }
        } else {
            const headSplit = tapeTrim.split('>')
            var iTape = -1 * headSplit[0].length

            for (tapeSymb of headSplit[0]) {
                toReturn.initialTape[iTape.toString()] = tapeSymb
                console.log(toReturn.initialTape, iTape.toString())
                iTape += 1
            }
            for (tapeSymb of headSplit[1]) {
                toReturn.initialTape[iTape.toString()] = tapeSymb
                iTape += 1
            }
        }
    }

    toReturn.tape = { ...toReturn.initialTape }
    toReturn.currentState = toReturn.initialState
    toReturn.trueInitialState = toReturn.initialState
    console.log('Initial tape:', toReturn.initialTape)



    return toReturn
}