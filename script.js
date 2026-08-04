let players = [];

fetch('./players.csv')
.then(response => response.text())
.then(data => {

    const rows = data.split('\n');

    for(let i=1;i<rows.length;i++){

        let row = rows[i].trim();

        if(row.length>0){
            players.push(row.split(','));
        }
    }

    console.log("Loaded:",players.length);

});

function searchPlayer(){

    const cap = document.getElementById("cap").value.trim();

    const records = players.filter(
        x => x[1] && x[1].trim() === cap
    );

    if(records.length===0){

        alert("Player Not Found");
        return;
    }

    const playerName = records[0][2] || "-";
    const hand = records[0][4] || "-";

    document.getElementById("playerName").innerText = playerName;
    document.getElementById("playerHand").innerText = hand;

    let teamSet = new Set();

    let totalMatches = 0;
    let totalRuns = 0;
    let total4s = 0;
    let total6s = 0;
    let bestScore = "-";
    let maxSR = 0;

    records.forEach(r=>{

        teamSet.add(r[3]);

        totalMatches += Number(r[5] || 0);
        totalRuns += Number(r[7] || 0);
        total4s += Number(r[13] || 0);
        total6s += Number(r[14] || 0);

        let sr = parseFloat(r[12]) || 0;

        if(sr > maxSR){
            maxSR = sr;
        }

        if(bestScore === "-"){
            bestScore = r[9];
        }
    });

    document.getElementById("teams").innerHTML =
        "<b>Teams Played</b><br>" +
        [...teamSet].join("<br>");

    document.getElementById("cMatches").innerText = totalMatches;
    document.getElementById("cRuns").innerText = totalRuns;
    document.getElementById("cAvg").innerText = "-";
    document.getElementById("cSR").innerText = maxSR;
    document.getElementById("c4s").innerText = total4s;
    document.getElementById("c6s").innerText = total6s;

    const photoArea = document.getElementById("photoArea");

    photoArea.innerHTML =
        `photos/${cap}.jpg"
        onerror="this.parentElement.innerHTML='No Photo';">`;

    buildTable(records);
}

function buildTable(records){

    let formats = [];

    records.forEach(r=>{

        let f = r[0];

        if(!formats.includes(f)){
            formats.push(f);
        }
    });

    let html = `
    <table>
    <tr>
        <th>Stats</th>`;

    formats.forEach(f=>{
        html += `<th>${f}</th>`;
    });

    html += "</tr>";

    const metrics = [

      ["Matches",5],
      ["Innings",6],
      ["Runs",7],
      ["Balls",8],
      ["Highest",9],
      ["N/O",10],
      ["Average",11],
      ["Strike Rate",12],
      ["4s",13],
      ["6s",14]

    ];

    metrics.forEach(m=>{

        html += `<tr>
                  <td class='metric'>${m[0]}</td>`;

        formats.forEach(f=>{

            const row = records.find(
                r => r[0]===f
            );

            let val = "-";

            if(row && row[m[1]]){
                val = row[m[1]];
            }

            html += `<td>${val}</td>`;
        });

        html += "</tr>";
    });

    html += "</table>";

    document.getElementById("tableContainer").innerHTML = html;
}
