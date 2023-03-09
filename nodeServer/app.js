const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 8082;
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/', function (req, res) {
    res.send(JSON.stringify({ name: 'Rohit Rote', age: '25', gender: 'Mail' }));
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