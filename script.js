let players = [];

fetch('./players.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].trim();

      if (row.length > 0) {
        players.push(row.split(','));
      }
    }

    console.log("Players Loaded:", players.length);
  });

function searchPlayer() {

  const cap = document.getElementById("cap").value.trim();

  const player = players.find(
    p => p[0] && p[0].trim() === cap
  );

  if (!player) {
    alert("Player Not Found");
    return;
  }

  document.getElementById("name").innerText = player[1] || "";
  document.getElementById("team").innerText = player[2] || "";

  document.getElementById("mat").innerText = player[4] || "";
  document.getElementById("inns").innerText = player[5] || "";
  document.getElementById("runs").innerText = player[6] || "";

  document.getElementById("balls").innerText = player[7] || "";
  document.getElementById("highest").innerText = player[8] || "";
  document.getElementById("no").innerText = player[9] || "";

  document.getElementById("avg").innerText = player[10] || "";
  document.getElementById("sr").innerText = player[11] || "";
  document.getElementById("fours").innerText = player[12] || "";

  document.getElementById("photo").src =
      "./photos/" + cap + ".jpg";
}
