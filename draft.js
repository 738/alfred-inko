'use strict';
const alfy = require('alfy');
const Inko = require('inko');
const inko = new Inko();


const result = inko.ko2en(alfy.input);
const item = [{
    title: result,
    arg: result,
    icon: {
        path: './icon.png'
    }
}];

alfy.output(item);
