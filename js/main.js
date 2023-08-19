"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            current: ``,
        };
    },
    methods: {
        clear() {
            this.current = ``;
        },
        percent() {
            this.current = this.current / 100;
        },
        addnumber(number) {
            this.current = this.current + number;
        },
        dot() {
            //Se non esiste `.` allora aggiungilo
            if (this.current.indexOf(`.`) === -1) {
                this.addnumber(`.`);
            }
        }
    },
}).mount('#app');