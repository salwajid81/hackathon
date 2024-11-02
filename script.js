function updateCountdown() {
    // Election Day Date Constant
    const election = new Date("November 5, 2024 00:00:00").getTime();
    // The current date is being pulled from your local time.
    const now = new Date().getTime();
    //The election is being subtracted by your local time to find the distance between the two.
    const distance = election - now;
    //Converting the milliseconds to days
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //Converting the milliseconds to hours
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //Converting the milliseconds to minutes
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //Converting the milliseconds to seconds
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //The code above allows for us to read the time without it being read in milliseconds. As our local time given from the getTime function is read in milliseconds.
    //This updates the html so that it is counting down since our local time is changing. This is converting our JS variables into html form.
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    //This is a boolean check to see if our distance has arrived to zero (meaning that the day has arrived) This also clears our update interval and changes the text to ELECTION DAY!!!
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "ELECTION DAY!!!";
    }
  }
// Calls the update method and sets it to update to every 1000 miliseconds which is 1 second
const x = setInterval(updateCountdown, 1000);