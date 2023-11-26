/* fetching images and stuff might add this to the api later */

const fs = require('fs')
const cid = "bafybeih2xkf63kzvtkonlzpof3qeb34abpeb7fbmu3734lqd7zvkh7hlry"
async function createNode(){
    const { createHelia } = await import('helia')
    const helia = await createHelia()
    const { unixfs } = await import('@helia/unixfs')
    const fs = unixfs(helia)
    return fs
} 

async function run(){
    const FS = await createNode();
    let imageBuffer = Buffer.alloc(0)

    for await (const chunk of FS.cat(cid)) {
    imageBuffer = Buffer.concat([imageBuffer, Buffer.from(chunk)])
    }

    fs.writeFileSync('output.jpg', imageBuffer)

}

run();