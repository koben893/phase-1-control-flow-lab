function scuberGreetingForFeet(feet){
  let greeting = "";
  console.log(feet);
  if (feet <= 400) {
    greeting = 'This one is on me!'
  } else if (feet > 400 && feet <= 2000) {
    greeting = 'That will be twenty bucks.'
  } else if (feet > 2000 && feet < 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {greeting = 'No can do.'
}
return greeting;
}

function ternaryCheckCity(city){
  let response = "";
  return (city === "NYC" ? (response ="Ok, sounds good.") : (response = "No go."))
}

function switchOnCharmFromTip(tip){
  let greeting = ""
  if (tip === 'generous') {
    greeting = 'Thank you so much.'
  } else if (tip === 'not as generous') {
    greeting = 'Thank you.'
  } else {
    greeting = 'Bye.'
  }
  return greeting;
}
