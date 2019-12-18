const models = require("./models");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let new_album = [];

readline.question(`Album Name?`, (name) => {
    console.log(`Album name is: ${name}`);
    new_album['name'] = name;

models.album.create({name: new_album['name'], year: new_album['year'], artist_id: new_album['artist_id']})
.then(function(album){
    console.log(album)
})
readline.close()
})