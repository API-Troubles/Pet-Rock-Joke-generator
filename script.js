function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//Get jokes from a json file, thanks ChatGPT for the jokes!
const joke_json = httpGet("Pet-Rock-Joke-generator/jokes.json")
const obj = JSON.parse(joke_json);
var joke = obj[Math.floor(Math.random() * obj.length)]["joke"];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("jokeDialogueBox").innerHTML = joke;
});
