// function to get the date in form: HHMMSS
const time = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let arr = [hours, minutes, seconds].map(num => {
    if (num < 10) {
      return "0" + num;
    } else {
      return String(num);
    }
  });
  hours = arr[0];
  minutes = arr[1];
  seconds = arr[2];
  return hours + minutes + seconds;
};

// function to apply time to page
const output = time => {
  let color = "#" + time;
  let timezone = document.getElementById('amer');
  timezone.style.backgroundColor = '#' + time;
  timezone.textContent = "";
  let myH1 = document.createElement('h1');
  myH1.innerText = color;
  myH1.style.fontFamily = "Arial";
  myH1.style.color = "white";
  timezone.appendChild(myH1);
};

output(time());

setInterval(() => output(time()), 1000);
