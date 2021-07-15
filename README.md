# BBsim: a Turing machine simulator

`bbsim` is a Turing machine simulator that runs in the browser. You can either download this repo and run `index.html` in a browser or use [the hosted version of bbsim](https://dna.hamilton.ie/tsterin/bbsim).

The Turing machines we work with have a unique, bi-infinite memory tape. See below for the Turing Machine specification format that we use.

This simulator was originally created to support research trying to find small Turing machines of which halting problem relates to an open conjecture in mathematics.

In particular, our research showed that there is a 15-state, 2-symbol Turing machine and a 5-state 4-symbol that halt if and only if the following conjecture by Erdős is false:

> For all n > 8 there is at least one 2 in the ternary representation of 2^n.
>
> P. Erdős. _Some unconventional problems in number theory_. Mathematics Magazine, 52(2):67–70, 1979.

We proved that these machines were correct in [the following paper](): _On the hardness of knowing busy beaver values BB(15) and BB(5,4)_. Tristan Stérin and Damien Woods.

These machines are available to try in the simulator, other machines are also available such as [busy beaver](https://webusers.imj-prg.fr/~pascal.michel/bbc.html) winners and champions or machines that halt if and only if the weak Collatz conjecture (non existence of non-trivial [Collatz](https://en.wikipedia.org/wiki/Collatz_conjecture) cycles) is false (these machines have not been proved correct yet).

All these machines are in the folder `machines/`.

## Turing machine format

The simulator takes machines in the following format:

```
; This machine halts if and only if Erdős' conjecture on powers of two is false:
;
; "For all n > 8, there is at least one 2 in the ternary representation of 2^n"
;
; P. Erdős. Some unconventional problems in number theory. Mathematics Magazine, 52(2):67–70, 1979.

initial_state: mul2_G
blank_symbol: #
redundancy: 1

mul2_F
0 0 R mul2_F
1 2 R mul2_F
2 1 R mul2_G
# # L find_2

mul2_G
0 1 R mul2_F
1 0 R mul2_G
2 2 R mul2_G
# 1 R mul2_F

find_2
0 0 L find_2
1 1 L find_2
2 2 L rewind      ; we found a 2
# # L check_halt  ; no 2 has been found

rewind
0 0 L rewind
1 1 L rewind
2 2 L rewind
# # R mul2_F      ; we do the next power of 2

check_halt
; There are 3 known counter examples:
; base 3:  1, 11, 100111
; base 10: 1, 4, 256
0 1 R rewind
1 2 R rewind
2 HALT            ; We have found a new counter example
# 0 R rewind
```

The simulator is very linent at parsing:

- It wont check that the states mentioned in transitions do exists
- It wont check that every read symbol is specified for each state

Instead, the simulator will run into a runtime error if an invalid transition is met.

Three special instructions can also be encoded in the machine:

- `initial_state: <state name>`: specifies the initial state. If not specified, the first state described will be used.
- `blank_symbol: <symbol>`: specifies what symbol should considered as blank. If not specified symbol `#` will be chosen.
- `redundancy: <positive integer>`: specifies how the simulator should group symbols on the tape. This is useful when working with encodings, for instance `redundancy: 2`, will group symbols by pairs of two (look at `powers_of_two_15_2.txt` for an example).
