function resetNotification() {
  let notification =  document.getElementsByClassName('bubble')[0];
  notification.innerHTML = " ";
  notification.classList.add("fadeOut");
}
window.onload = function() {
  resetNotification()
};
