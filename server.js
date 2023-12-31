const express = require('express');
const multer = require("multer");
const app = express();
const upload = multer()
const {getPrivateIP} = require('./utils/privateIP')
const {readFileContent} = require('./utils/filecheck'); 
const localtunnel = require('localtunnel');
console.log(getPrivateIP())
let hashMap = new Map();

app.use(express.json());

//node spawner with filesystem
async function createNode(){
    const { createHelia } = await import('helia')
    const helia = await createHelia()
    const { unixfs } = await import('@helia/unixfs')
    const fs = unixfs(helia)
    return fs
} 

async function run(){
    const fs = await createNode();
//remote file reader based on path the cool stuff 
app.post('/readfile', async (req, res) => {
    let filepath = req.body.filepath;
    let text;
    

    if(readFileContent(filepath)) {
        const data = readFileContent(filepath)
        const cid = await fs.addBytes(data) 
        
        //file has been added to this node time to read it
        try {
            const decoder = new TextDecoder() 
            for await (const chunk of fs.cat(cid)) {
                text = decoder.decode(chunk, {stream: true});
       
    }}
        catch (error){
            res.send('error while decoding the file://')
    }
        res.status(201).send(text)

    } else {
        res.send('File does not exist.');
    }
});

app.post('/upload', upload.single('file'), async (req, res) => {
    
    
    try{
    const data = req.file.buffer
    console.log(req.file) //we don't need this but it might be useful to have this data to reconstruct the file   
    
    const cid = await fs.addBytes(data)
    hashMap.set(req.file.originalname, cid)
    res.status(201).send( `File uploaded to ipfs and CID has been stored., ${cid}`)}
    
    catch(error){
        res.send('sorry we couldnt upload the file to ipfs')
    }
  });

app.get('/retreive', async (req, res)=>{
  
    const filename = req.body.filename;
    let cid;
    let text;

    try {
        cid = hashMap.get(filename)
        console.log("Shine on you crazy diamond",cid)
        if (!cid){
            console.error('oops we could not find the cid, make sure you upload the file to IPFS first')
        }
        // decode uint arrays into strings
        const decoder = new TextDecoder() 
         for await (const chunk of fs.cat(cid)) {
                text = decoder.decode(chunk, {stream: true});
                console.log("je marche dans la tempete", text)
       
    }
        res.status(200).send(text)
    } catch (error){
        res.send('well you up messed somewhere, make sure you upload the file')
        
    } 

})
app.get('/testing', (req, res)=>{
    res.send('testing ok ..')
})

const port = process.env.PORT || 3000;
const host = getPrivateIP()
/*
app.listen(port, async() => {
    
    const tunnel = await localtunnel({port:port})
    console.log(`I am listening on ${tunnel.url}:${port}`)});  */

app.listen(port, host, async()=>{
    console.log(`I am listening yoo ... ...  ${host} ${port}`)
})}

run();