const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = franc(process.argv[2]);
const res = langs.where('3', input).name;
console.log(res.green);
