// Pacific Time Zone Function
const pactime = () => {
  let date = new Date();
  let hours = date.getHours() - 3;
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
const pacoutput = pactime => {
  let color = "#" + pactime;
  let pactimezone = document.getElementById('pac');
  pactimezone.style.backgroundColor = '#' + pactime;
  pactimezone.textContent = "";
  let myH1 = document.createElement('h1');
  myH1.innerText = color;
  myH1.style.fontFamily = "Arial";
  myH1.style.color = "white";
  myH1.style.paddingTop = "270px";
  myH1.style.paddingLeft = "60px";
  myH1.style.fontWeight = "100";
  pactimezone.appendChild(myH1);
};

//Mountain Time Zone Function
const mounttime = () => {
  let date = new Date();
  let hours = date.getHours() - 2;
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

const mountoutput = mounttime => {
  let color = "#" + mounttime;
  let mounttimezone = document.getElementById('mount');
  mounttimezone.style.backgroundColor = '#' + mounttime;
  mounttimezone.textContent = "";
  let myH1 = document.createElement('h1');
  myH1.innerText = color;
  myH1.style.fontFamily = "Arial";
  myH1.style.color = "white";
  myH1.style.paddingTop = "270px";
  myH1.style.paddingLeft = "60px";
  myH1.style.fontWeight = "100";
  mounttimezone.appendChild(myH1);
};

//Central Time Zone Function
const centtime = () => {
  let date = new Date();
  let hours = date.getHours() - 1;
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

const centoutput = centtime => {
  let color = "#" + centtime;
  let centtimezone = document.getElementById('cent');
  centtimezone.style.backgroundColor = '#' + centtime;
  centtimezone.textContent = "";
  let myH1 = document.createElement('h1');
  myH1.innerText = color;
  myH1.style.fontFamily = "Arial";
  myH1.style.color = "white";
  myH1.style.paddingTop = "270px";
  myH1.style.paddingLeft = "60px";
  myH1.style.fontWeight = "100";
  centtimezone.appendChild(myH1);
};

// Eastern Time Zone Function
const easttime = () => {
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

const output = easttime => {
  let color = "#" + easttime;
  let timezone = document.getElementById('east');
  timezone.style.backgroundColor = '#' + easttime;
  timezone.textContent = "";
  let myH1 = document.createElement('h1');
  myH1.innerText = color;
  myH1.style.fontFamily = "Arial";
  myH1.style.color = "white";
  myH1.style.paddingTop = "270px";
  myH1.style.paddingLeft = "60px";
  myH1.style.fontWeight = "100";
  timezone.appendChild(myH1);
};

//outputs
output(easttime());
pacoutput(pactime());
centoutput(centtime());
mountoutput(mounttime());
setInterval(() => output(easttime()), 1000);
setInterval(() => pacoutput(pactime()), 1000);
setInterval(() => mountoutput(mounttime()), 1000);
setInterval(() => centoutput(centtime()), 1000);
