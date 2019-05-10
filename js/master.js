document.getElementById("button").addEventListener("click", toggleView);
document.getElementById("buttonErr").addEventListener("click", () => {
  toggleView(), addError();
});
document.getElementById("buttonMes").addEventListener("click", () => {
  toggleView(), addMes();
});

function toggleView() {
  let notification = document.getElementsByClassName("notification")[0];
  let message = document.getElementsByClassName("message")[0];

  let line = document.getElementsByClassName("line")[0];
  notification.classList.add("inToView");
  if (notification.classList.contains("fadeOut")) {
    notification.classList.remove("fadeOut");
    message.classList.remove("notiError");
    message.classList.remove("addMes");

    line.style.height = `100%`;
  }
  fadeOut();
}

function addError() {
  let message = document.getElementsByClassName("message")[0];
  message.classList.toggle("notiError");
}

function addMes() {
  let message = document.getElementsByClassName("message")[0];
  message.classList.toggle("addMes");
}

function fadeOut() {
  let element = document.getElementsByClassName("notification")[0];
  let line = document.getElementsByClassName("line")[0];
  // it gets the pixel height now ti will translate to %
  let lineHeight = line.offsetHeight;

  if (element.classList.contains("inToView")) {
    let set = setInterval(lineTimer, 50);
    let timeout = setTimeout(function() {
      element.classList.remove("inToView");
      element.classList.add("fadeOut");
    }, 5000);

    function lineTimer() {
      if (lineHeight > 0) {
        lineHeight = lineHeight - 1;
        line.style.height = `${lineHeight}%`;
      } else {
        clearInterval(set);
      }
    }
  }
}

function radomMessage() {
  let badcounter = 0;
  let set = setInterval(randomNumber, 1000);
  function randomNumber() {
    let inToView = document.getElementsByClassName("notification")[0].classList.contains("inToView")
    let number = Math.floor(Math.random() * 10 + 1);
    if (number === 1 && !inToView) {
      badcounter++;
      toggleView();
      // clearInterval(set);
      let value = document.getElementsByClassName("bubble")[0].innerText;
      let newValue = Number(value);
      newValue++
      document.getElementsByClassName("bubble")[0].innerHTML = newValue;
    }
  }
}

function setNotification() {
  let notification = document.getElementsByClassName("bubble")[0];
  notification.innerHTML = 3;
}
window.onload = function() {
  setNotification();
  radomMessage();
};
