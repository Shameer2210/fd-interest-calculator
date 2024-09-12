function calculatefd() {
  const months = Number(document.getElementById("inputs").value);
  let rate = 0;

  
  if(!months) {
  
    alert("Please enter the number of months");
}
  
  else if (months < 3) {
    rate = 5.8;
  } else if (months >= 3 && months <= 6) {
    rate = 6.5;
  } else if (months >= 7 && months <= 9) {
    rate = 6.8;
  } else if (months > 10)
  {
    rate = 7;
  }



  let tag = document.querySelector("#displayer");
  tag.innerHTML = "Your FD interest rate is " + rate + "%";
}
