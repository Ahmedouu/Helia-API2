/* adding images and stuff could add this to the API later on */
const fs = require('fs')

async function createNode(){
    const { createHelia } = await import('helia')
    const helia = await createHelia()
    const { unixfs } = await import('@helia/unixfs')
    const fs = unixfs(helia)
    return fs
} 

async function run(){
    const imageBuffer = fs.readFileSync('MV5BMjIzNzY1ODc0MV5BMl5BanBnXkFtZTgwMDI1ODIwMjE@._V1_.jpg')
    
    const FS = await createNode();
    const cid = await FS.addBytes(imageBuffer)
    console.log(cid)
    
}

run();