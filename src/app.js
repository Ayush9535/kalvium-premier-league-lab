//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(name,age,team,trophies){
  return [name,age,team,trophies];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation([defender , midfield , forward]){
  if ((defender === undefined) || (midfield === undefined)){
    return null;
  }else{
    return {
      defender : defender,
      midfield : midfield,
      forward : forward
    }
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  let arr = [];
  for (let i=0 ; i<players.length ; i++){
    if (players[i].debut == year){
      arr.push(players[i])
    }
  }

  return arr;
}


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  let arr = [];
  for (let i=0 ; i<players.length ; i++){
    if (players[i].position == position){
      arr.push(players[i])
    }
  }

  return arr;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(award) {
  let arr = [];
  players.some((player) => {
    let aw = false;
    player.awards.some((playerAward) => {
      if (playerAward.name === award) {
        aw = true;
      }
    });
    if (aw) arr.push(player);
  });
  return arr;
}


//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award, count) {
  let arr = [];
  players.some((player) => {
    let awardCount = 0;
    player.awards.some((playerAward) => {
      if (playerAward.name === award) {
        awardCount += 1;
      }
    });
    if (awardCount === parseInt(count)) arr.push(player);
  });
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award, country) {
  let arr = [];
  players.some((player) => {
    let awardStatus = false;
    player.awards.some((playerAward) => {
      if (playerAward.name === award && player.country === country) {
        awardStatus = true;
      }
    });
    if (awardStatus) arr.push(player);
  });
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(awardcount, team, age) {
  let arr = [];
  players.some((player) => {
    if (
      player.awards.length >= parseInt(awardcount) &&
      player.team === team &&
      player.age <= parseInt(age)
    ) {
      arr.push(player);
    }
  });
  return arr;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  return players.sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  let arr = [];
  players.some((player) => {
    if (player.team === team) {
      arr.push(player);
    }
  });
  return arr.sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(award, count, country) {
  let arr = players.filter((player) => {
    let awardCount = 0;
    for (let playerAward of player.awards) {
      if (playerAward.name === award) {
        awardCount++;
      }
    }
    return awardCount === parseInt(count) && player.country === country;
  });

  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  let arr = players.filter((player) => player.age >= parseInt(age)).map((player) => (
    {...player,awards: [...player.awards].sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return arr;
}
