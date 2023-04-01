const express = require('express');
const cors = require('cors')
const app = express();
const fs = require('fs');
app.use(express.json()) //pares json data
app.use(express.urlencoded({ extended: true })) //parse url and encoded data
const port = 8082;

app.use(cors())

// code for cors (CORS or Cross-Origin Resource Sharing) error

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*')
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', '*')
//         return res.status(200).json({})
//     }
// })

//start of server url ...................

app.get('/', function (req, res) {
    res.send({ name: 'Rohit Rote', age: '25', gender: 'Mail' });
});

app.post('/LogIn', (req, res) => {

    let data = req?.body
    // console.log('req', req?.body);

    if (data != undefined || data != null) {
        if (data?.user == 'rohit' && data?.pass == '123123') {
            res.send({ SUCCESS: true, DATA: data })
        } else {
            res.send({ SUCCESS: false, MESSAGE: 'Enter Correct UserName / Password' })
        }
    } else {
        res.send({ SUCCESS: false, MESSAGE: 'No data recive' })
    }
})

app.post('/SignIn', async (req, res) => {
    try {
        let data = req?.body
        let nsignin = []
        fs.readFile('LoginData.json', function (err, data) {
            if (err) throw err;
            nsignin = [...data]
        });

        nsignin.push({ ...data })

        fs.writeFile('LoginData.json', JSON.stringify([...nsignin]), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    } catch (error) {
        console.log('error.....', error);
    }
})

app.post('/newData', (req, res) => {

    let data = req?.body
    // console.log('req', req?.body);

    if (data != undefined || data != null) {
        res.send({ SUCCESS: true, DATA: data })
    } else {
        res.send({ SUCCESS: false, DATA: null })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});