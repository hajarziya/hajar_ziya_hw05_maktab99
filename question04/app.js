const sms = prompt("Enter your message:");
const messageLocation = prompt("Enter message's location in window:");

function showNotification(sms, location) {
  const notification = document.createElement("div");
  notification.textContent = sms;
  notification.classList.add("notification");

  switch (messageLocation) {
    case "right-bottom":
      notification.style.bottom = "10px";
      notification.style.right = "10px";
      break;
    case "right-top":
      notification.style.top = "10px";
      notification.style.right = "10px";
      break;
    case "left-top":
      notification.style.top = "10px";
      notification.style.left = "10px";
      break;
    case "left-bottom":
      notification.style.bottom = "10px";
      notification.style.left = "10px";
      break;
    default:
      console.log("Invalid location provided.");
      return;
  }

  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

showNotification(sms, messageLocation);
