'use strict';
const alfy = require('alfy');
const Inko = require('inko');
const inko = new Inko();

const result = inko.en2ko(alfy.input);
const item = [{
    title: result,
    subtitle: `Copy "${result}" to clipboard`,
    arg: result,
    icon: {
        path: './icon.png'
    }
}];

alfy.output(item);
