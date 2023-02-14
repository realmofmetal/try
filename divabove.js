window.onload = function() {
// Check if the "bsadsheadline-closed" cookie exists
if (getCookie("bsadsheadline-closed") === "true") {
  // Hide the bsadsheadline
  document.getElementById("bsadsheadline").style.display = "none";
} else {
  // Show the bsadsheadline
  document.getElementById("bsadsheadline").style.display = "block";
}
}

// Add an onclick event to the "close(x)" link
function setCookieAndHideDiv() {
  // Set the "bsadsheadline-closed" cookie to true
  setCookie("bsadsheadline-closed", "true", 3);
  // Hide the bsadsheadline
  document.getElementById("bsadsheadline").style.display = "none";
  // Check if the "bsadsheadline-closed" cookie exists
  if (getCookie("bsadsheadline-closed") === "true") {
    // Hide the bsadsheadline
    document.getElementById("bsadsheadline").style.display = "none";
  }
}

// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
