function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//Get jokes from a json file, thanks ChatGPT for the jokes!
const jokesJson = httpGet("/jokes.json");
const obj = JSON.parse(jokesJson);

//Get jokes lol
var joke = obj[Math.floor(Math.random()*obj.length)]["joke"];
