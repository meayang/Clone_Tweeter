import express from 'express';
import fs, { readFile } from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json())

app.get('/file1', (req, res) => {
    // try {
    //     const data = fs.readFileSync('/file.txt')
    // }catch (error) {
    //     res.status(404).send('Filenotfound')
    // }

    fs.readFile('/file1.txt', (err,data) => {
        if(err){
            res.status(404).send('Filenotfound')
        }
    })
})

app.get('/file2', (req, res) => {
    fsAsync.readFile('/file.txt').catch((error) => res.status(404).send('FilenotFound'));
})

app.get('/file3', async (req, res) => {
    const data = await fsAsync.readFile('/file.txt')
})

app.post('/', (req,res,next) => {
    console.log(req.body);
}) 

app.use((error, req, res, next) =>{
    console.error(error);
    res.status(500).json({message: 'Something went wrong'})
})

app.listen(8080);
