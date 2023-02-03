/*
${INF} Created by RIFZA
${INF} Thanks to Rifza
${INF} Thanks to all creator bot WhatsApp
*/
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')

async function detikNews(query) {
return new Promise((resolve, reject) => {
axios.get('https://www.gloogle.com/?query=' + query)
 .then(async res => {
 var $ = cheerio.load(res.data)
 const Brasil = []
 $("article").each(function(a, z) {
	const title = $(z).find('img').attr('title')  
	const link = $(z).find('a').attr('href')		  		  			
	const img = $(z).find('img').attr('src')    	
    let iwak = {
      Title: title,
      Link: link, 			
      Image: img
     }
      hasil.push(iwak)   
     }
     )
     resolve(Brasil)     
     }
    ).catch(reject)
   }
  )
 }
 
 module.exports = { detikNews }
			
		