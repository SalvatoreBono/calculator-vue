"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            previousNumber: null,
            current: ``,
            operation: null,
            operationClick: false,
        };
    },
    methods: {
        clear() {
            this.current = ``;
        },
        changeValue() {
            // se il primo carattere nella posizione 0 è `-` parti dalla posizione 1 altrimenti metti `-`
            this.current = this.current.charAt(0) === `-` ? this.current.slice(1) : `-${this.current}`;
        },
        percent() {
            this.current = this.current / 100;
        },

        addNumber(number) {
            //se operationClick è true, resetta current  mentre operationClick ritorna false.
            if (this.operationClick) {
                this.current = ``;
                this.operationClick = false;
            }
            this.current = this.current + number;
        },

        dot() {
            //Se non esiste `.` allora aggiungilo
            if (this.current.indexOf(`.`) === -1) {
                this.addnumber(`.`);
            }
        },

        previousOperation() {
            this.previousNumber = this.current;
            this.operationClick = true;
        },

        divide() {
            this.operation = (a, b) => a / b;
            this.previousOperation();

        },

        multiplication() {
            this.operation = (a, b) => a * b;
            this.previousOperation();

        },

        less() {
            this.operation = (a, b) => a - b;
            this.previousOperation();

        },

        plus() {
            this.operation = (a, b) => a + b;
            this.previousOperation();

        },

        equal() {
            //al click di equal prendo come argomento a e b per fare l'operazione.
            this.current = this.operation(parseInt(this.previousNumber), parseInt(this.current));
        }

    },
}).mount('#app');