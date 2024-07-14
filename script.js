function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//Get jokes from a json file, thanks ChatGPT for the jokes!
const joke_json = httpGet("/jokes.json")
const obj = JSON.parse(joke_json);

//Get jokes lol
var joke = obj[Math.floor(Math.random()*obj.length)]["joke"];
document.getElementById("jokeDialogueBox").innerHTML = joke;