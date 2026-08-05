const players = {

18:{
    photo:"photos/18.jpg",
    name:"KITTY NAIK",
    batch:"2020",
    seasons:"MCL01,MCL02",

    stats:{
        matches:[25,18,7],
        innings:[22,16,6],
        runs:[547,412,135],
        avg:[34.2,29.4,45.0],
        highest:[89,67,54],
        wickets:[12,8,4],
        overs:[48,35,13],
        bowlavg:[18.4,21.7,12.2],
        best:["4/22","3/18","2/11"]
    }
},

19:{
    photo:"photos/19.jpg",
    name:"YOGI",
    batch:"2020",
    seasons:"MCL01,MCL02",

    stats:{
        matches:[20,15,5],
        innings:[18,14,4],
        runs:[380,240,140],
        avg:[25,20,35],
        highest:[71,55,50],
        wickets:[10,7,3],
        overs:[40,30,10],
        bowlavg:[20,18,15],
        best:["3/15","2/20","2/12"]
    }
}

};

function searchPlayer(){

    const cap =
    document.getElementById("capInput")
    .value
    .trim();

    const error =
    document.getElementById("errorMessage");

    document.getElementById("playerCard")
    .style.display="none";

    if(cap===""){

        error.innerHTML =
        "Please enter CAP Number.";

        return;
    }

    if(!players[cap]){

        error.innerHTML =
        "CAP Number not found. Enter a valid CAP Number. Example: 1, 2, 23";

        return;
    }

    error.innerHTML="";

    let p = players[cap];

    document.getElementById("playerPhoto")
    .src = p.photo;

    document.getElementById("playerName")
    .innerHTML = p.name;

    document.getElementById("capNo")
    .innerHTML = cap;

    document.getElementById("batch")
    .innerHTML = p.batch;

    document.getElementById("seasons")
    .innerHTML = p.seasons;

    document.getElementById("statsTable")
    .innerHTML = `

<tr>
<td>Matches</td>
<td>${p.stats.matches[0]}</td>
<td>${p.stats.matches[1]}</td>
<td>${p.stats.matches[2]}</td>
</tr>

<tr>
<td>Innings</td>
<td>${p.stats.innings[0]}</td>
<td>${p.stats.innings[1]}</td>
<td>${p.stats.innings[2]}</td>
</tr>

<tr>
<td>Runs</td>
<td>${p.stats.runs[0]}</td>
<td>${p.stats.runs[1]}</td>
<td>${p.stats.runs[2]}</td>
</tr>

<tr>
<td>Average</td>
<td>${p.stats.avg[0]}</td>
<td>${p.stats.avg[1]}</td>
<td>${p.stats.avg[2]}</td>
</tr>

<tr>
<td>Highest</td>
<td>${p.stats.highest[0]}</td>
<td>${p.stats.highest[1]}</td>
<td>${p.stats.highest[2]}</td>
</tr>

<tr>
<td>Wickets</td>
<td>${p.stats.wickets[0]}</td>
<td>${p.stats.wickets[1]}</td>
<td>${p.stats.wickets[2]}</td>
</tr>

<tr>
<td>Overs</td>
<td>${p.stats.overs[0]}</td>
<td>${p.stats.overs[1]}</td>
<td>${p.stats.overs[2]}</td>
</tr>

<tr>
<td>Bowling Avg</td>
<td>${p.stats.bowlavg[0]}</td>
<td>${p.stats.bowlavg[1]}</td>
<td>${p.stats.bowlavg[2]}</td>
</tr>

<tr>
<td>Best</td>
<td>${p.stats.best[0]}</td>
<td>${p.stats.best[1]}</td>
<td>${p.stats.best[2]}</td>
</tr>

`;

    document.getElementById("playerCard")
    .style.display = "block";
}
