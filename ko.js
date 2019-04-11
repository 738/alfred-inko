'use strict';
const alfy = require('alfy');
const Inko = require('inko');
const inko = new Inko();

let item = [{
    title: inko.ko2en(alfy.input),
    arg: inko.ko2en(alfy.input),
    icon: {
        path: './inko_logo.png'
    }
}];

alfy.output(item);
