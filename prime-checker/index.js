const express = require("express");

const port = 3000;
const checkPrime = n => {
    for(let i = 2, num = Math.sqrt(n); i <= num; i++)
        if(n % i === 0) return "composite"; 
    return n >= 2 ? "prime" : "neither composite nor prime";
}

const app = express();

app.get('/', (_, res) => {
    res.send('Go to /number');
});
app.get('/number', (_, res) => {
    res.send('Go to /number/:num to check if :num is prime or composite')
});
app.get(`/number/:num`, (req, res) => {
    if(!isNaN(req.params.num))
        res.send(`The number ${req.params.num} is ${checkPrime(req.params.num)}`)
    else
        res.send(`:num has to be a number`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});