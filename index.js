'use strict';
const alfy = require('alfy');
const Inko = require('inko');
const inko = new Inko();

let item = [{
    title: inko.en2ko(alfy.input),
    arg: inko.en2ko(alfy.input),
    icon: {
        path: ' '
    }
}];

alfy.output(item);
