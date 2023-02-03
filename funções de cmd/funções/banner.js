//Módulo
const cfonts = require('cfonts')

//Horas
const moment = require('moment-timezone');
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

var ase = new Date();
var waktoo = ase.getHours();
switch (waktoo) {
  case 0: waktoo = 'meia\nnoite!'; break;
  case 1: waktoo = 'meia\nnoite!'; break;
  case 2: waktoo = 'De\nmanhã\ncedo!'; break;
  case 3: waktoo = 'De\nmanhã\ncedo!'; break;
  case 4: waktoo = 'Alvorecer!'; break;
  case 5: waktoo = 'Alvorecer!'; break;
  case 6: waktoo = 'bom \ndia!'; break;
  case 7: waktoo = 'bom \ndia!'; break;
  case 8: waktoo = 'bom \ndia!'; break;
  case 9: waktoo = 'bom \ndia!'; break;
  case 10: waktoo = 'bom \ndia!'; break;
  case 11: waktoo = 'Boa\ntarde!'; break;
  case 12: waktoo = 'Boa\ntarde!'; break;
  case 13: waktoo = 'Boa\ntarde!'; break;
  case 14: waktoo = 'Boa\ntarde!'; break;
  case 15: waktoo = 'Boa\ntarde!'; break;
  case 16: waktoo = 'Boa\ntarde!'; break;
  case 17: waktoo = 'Boa\ntarde!'; break;
  case 18: waktoo = 'Boa\n noite!'; break;
  case 19: waktoo = 'Boa\n noite!'; break;
  case 20: waktoo = 'Boa\n noite!'; break;
  case 21: waktoo = 'Boa\n noite!'; break;
  case 22: waktoo = 'Boa\n noite!'; break;
  case 23: waktoo = 'Boa\n noite!'; break;
}
var tampilUcapan = '' + waktoo;

const banner = cfonts.render((waktoo), {
  font: 'block',
  align: "center",
  gradient: ['red', 'magenta']
});

const banner2 = cfonts.render((`Nezuko-MD 3.5`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

const bannerText = (teks) => {
return cfonts.render((teks), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});
}

module.exports = {
banner,
banner2,
bannerText
}