import fetch from "node-fetch";

const name = process.argv[2];

fetch(`https://api.nationalize.io/?name=${name}`)
    .then(res => res.json())
    .then(data => console.log(`${name} is from ${data.country[0].country_id}`))