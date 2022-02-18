// // $('#submit').click(function () {
// //   let input = $('#team').val();
// //   $.get(`https://www.balldontlie.io/api/v1/teams/${input}`, (data) => {

// console.log(data)
// let playerName = (`${data.first_name}`)
// console.log(playerName)
//   })
// })

//pick and choose stats
// plug and play into the list items with innertext
$('#submit').click(function () {
  let playerName = $('#playername').val();
  $.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`, (data) => {
    const playerInfo = data.data[0];
    let statList = document.getElementsByClassName('playerStats')
    statList[0].textContent = `Height: ${playerInfo.height_feet} ft ${playerInfo.height_inches} in`;
    statList[1].textContent = `Position: ${playerInfo.position}`
    statList[2].textContent = `Conference: ${playerInfo.team.conference}`;
    statList[3].textContent = `Division: ${playerInfo.team.division}`;
    statList[4].textContent = playerInfo.team.abbreviation;

    let headerName = document.querySelector('.name')
    headerName.innerText = `${playerName} ${playerInfo.id}`
    let teamName = document.querySelector('.teamName');
    teamName.innerText = playerInfo.team.full_name;

    if (playerInfo.height_feet === null) {
      statList[0].textContent = 'No reported height'
    }

  })
})


// SEPERATE BUTTON FOR SEASON STATS

$('#statbtn').click(function () {
  let playerId = $('#playerid').val();
  console.log('button')
  $.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`, (data) => {
    let playerGameInfo = data.data[0]
    let seasonStatList = document.getElementsByClassName('seasonStats')
    seasonStatList[0].textContent = `Season: ${playerGameInfo.season}`
    seasonStatList[1].textContent = `Avg Minutes Played: ${playerGameInfo.min}`
    seasonStatList[2].textContent = `Avg PPG ${playerGameInfo.pts}`
    seasonStatList[3].textContent = `Avg Rebound ${playerGameInfo.reb}`
    seasonStatList[4].textContent = `Avg Steals ${playerGameInfo.stl}`
    seasonStatList[5].textContent = `Avg Blocks ${playerGameInfo.blk}`
    // let playerName = (`${data.first_name}`)
    // console.log(playerName)
  })
})



