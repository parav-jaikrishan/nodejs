import fetch from "node-fetch";

const name = process.argv[2];

fetch(`https://api.nationalize.io/?name=${name}`)
    .then(res => res.json())
    .then(data => {
        if(data.country.length) {
            console.log(`${name} is from ${data.country[0].country_id}`)
        } else {
            console.log(`Data not availabe for ${name}`)
        }
    });