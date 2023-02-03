const fetch = require('node-fetch')
const fs = require('fs')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const chalk = require('chalk')
const exec = require("child_process").exec
const log = console.debug
const mimetype = require('mime-types')
const cheerio = require('cheerio')


const spinner = { 
  "interval": 150,
  "frames": [
"M",
"MA",
"MANU",
"MANUELA",
"MANUELA-MD",
  ]}

const spinner2 = { 
  "interval": 150,
  "frames": ["CANAL : https://youtube.com/c/PLMODS"]}

let globalSpinner;

let globalSpinner2;

const getGlobalSpinner = () => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'pink', succeedColor: 'purple', spinner});
  return globalSpinner;
}

const getGlobalSpinner2 = () => {
  if(!globalSpinner2) globalSpinner2 = new spin({ color: 'pink', succeedColor: 'purple', spinner2});
  return globalSpinner2;
}

spins = getGlobalSpinner(false)

spins2 = getGlobalSpinner2(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
	
const start2 = (id, text) => {
	spins2.add(id, {text: text})
	}
	
const infopd = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})
}

const close = (id, text) => {
	spins.fail(id, {text: text})
}












module.exports = { start, infopd, success, close }
