function startCountdown() {
  let birthdate = new Date(document.getElementById("birthdate").value);
  let today = new Date();
  let nextBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  let countdownInterval = setInterval(function () {
    let now = new Date();
    let timeLeft = nextBirthday - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Happy Birthday!";
      return;
    }

    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    `Time left your next birthday: 
    <span> ${ daysLeft}</span>
       days, 
     <span> ${hoursLeft}</span>
      hours, 
     <span> ${minutesLeft} </span>
       minutes, 
     <span> ${secondsLeft}</span>
      seconds.`
  }, 1000);
}
