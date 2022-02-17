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
    console.log(data)
    const playerInfo = data.data[0];
    let statList = document.getElementsByClassName('playerStats')
    statList[0].textContent = `Height: ${playerInfo.height_feet} ft ${playerInfo.height_inches} in`;
    statList[1].textContent = `Position: ${playerInfo.position}`
    statList[2].textContent = `Conference: ${playerInfo.team.conference}`;
    statList[3].textContent = `Division: ${playerInfo.team.division}`;
    statList[4].textContent = playerInfo.team.abbreviation;

    let headerName = document.querySelector('.name')
    headerName.innerText = playerName
    let teamName = document.querySelector('.teamName');
    teamName.innerText = playerInfo.team.full_name;

    if (playerInfo.height_feet === null) {
      statList[0].textContent = 'No reported height'
    }

  })
})


// SEPERATE BUTTON FOR SEASON STATS
$('#submitstat').click(function () {
  let year = $('#stats').val();
  let playerId;
  $.get(`https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=`, (data) => {
    console.log(data)
    // let playerName = (`${data.first_name}`)
    // console.log(playerName)
  })
})



