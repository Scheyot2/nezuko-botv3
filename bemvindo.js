const { getBuffer} = require('./lib/myfunc')
const { upload } = require('./lib/tourl');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')


module.exports = anu = async (conn, anu) => {
    const fs = require('fs')
    const antifake = JSON.parse(fs.readFileSync('./funções de cmd/antis/antifake.json'))
    const welkom = JSON.parse(fs.readFileSync('./funções de cmd/grupos/bemvindo.json'));
    const adeuscara = JSON.parse(fs.readFileSync('./funções de cmd/grupos/adeus.json'));
    const bemvindojson = JSON.parse(fs.readFileSync('./funções de cmd/grupos/bvmsg.json'));

    const groupoid = []
    for (let obj of bemvindojson) {
        groupoid.push(obj.id)
    }
    var ind = groupoid.indexOf(anu.id)

    
       
        numbreitu = anu.participants[0]

let metadata = await conn.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                
                
                // Get Profile Picture User
                try {
                    ppimg = await conn.profilePictureUrl(num, 'image')
                    
                } catch {
                    ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                }
               
                
                    if (anu.action == 'add'){
                        console.log(chalk.black(chalk.green('[ USUARIO ADICIONADO ]')), chalk.green(" Grupo: " + metadata.subject + ", Usuario: " + anu.participants[0].split('@')[0]))

                        if(antifake.includes(anu.id)) {
                    if(!num.split('@')[0].startsWith(55)) {
                        conn.sendMessage(anu.id, { text: '⛹️⛹️Bye Bye Estrangeiro...👋🏌️' })
            
                    setTimeout(async function () {
                        await conn.groupParticipantsUpdate(anu.id, [num], "remove") 
                    }, 1000)
                    } else if(welkom.includes(anu.id)) {
                        imgperfil = await getBuffer(ppimg)
                        shortpc = await upload(imgperfil)                   
                        conn.sendMessage(anu.id, { image: {url: `https://p7api.xyz/api/card/welcomev2?nome=${anu.participants[0].split('@')[0]}&nomegp=BEM%20VINDO%20AO%20Grupo&titulo=BEM%20VINDO&membros=2022&cor=140000&tcor=062be0&lcor=FF7B00&perfil=${shortpc}&fundo=https://telegra.ph/file/5e7003ccc9cbaed903068.jpg&numero=2022&apikey=p7ori`}, "contextInfo": { mentionedJid: [numbreitu]},  caption: `@${anu.participants[0].split('@')[0]} , ${bemvindojson[ind].mensagembv}`})
                        } 
                    } else if(welkom.includes(anu.id)) {
                        imgperfil = await getBuffer(ppimg)
                        shortpc = await upload(imgperfil)                   
                        conn.sendMessage(anu.id, { image: {url: `https://p7api.xyz/api/card/welcomev2?nome=${anu.participants[0].split('@')[0]}&nomegp=BEM%20VINDO%20AO%20Grupo&titulo=BEM%20VINDO&membros=2022&cor=140000&tcor=062be0&lcor=FF7B00&perfil=${shortpc}&fundo=https://telegra.ph/file/5e7003ccc9cbaed903068.jpg&numero=2022&apikey=p7ori`}, "contextInfo": { mentionedJid: [numbreitu]},  caption: `@${anu.participants[0].split('@')[0]} , ${bemvindojson[ind].mensagembv}`})
                        }   
                }
                    
               if (anu.action == 'remove') {
                    console.log(chalk.black(chalk.green('[ USUARIO REMOVIDO ]')), chalk.green(" Grupo: " + metadata.subject + ", Usuario: " + anu.participants[0].split('@')[0]))
                    if(antifake.includes(anu.id)) {
                        if(!num.split('@')[0].startsWith(55)) return
                    }
                    if(adeuscara.includes(anu.id)) {
                    imgperfil = await getBuffer(ppimg)
                    shortpc = await upload(imgperfil)
                    conn.sendMessage(anu.id, { image: {url: `https://p7api.xyz/api/card/welcomev2?nome=${anu.participants[0].split('@')[0]}&nomegp=%20%20%20%20SAIU%20DO%20Grupo&titulo=ADEUS&membros=2022&cor=140000&tcor=062be0&lcor=FF7B00&perfil=${shortpc}&fundo=https://telegra.ph/file/5e7003ccc9cbaed903068.jpg&numero=2022&apikey=p7ori`}, "contextInfo": { mentionedJid: [numbreitu]},  caption: `@${anu.participants[0].split('@')[0]} Sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ 💫`})
                    }
                }
            }
        }
        