const pushButton = document.querySelector(".js-push-btn");

if ("serviceWorker" in navigator && "PushManager" in window) {
  console.log("Service Worker and Push are supported");

  navigator.serviceWorker
    .register("assets/scripts/sw.js")
    .then(function (swReg) {
      console.log("Service Worker is registered", swReg);

      swRegistration = swReg;
      initializeUI();
    })
    .catch(function (error) {
      console.error("Service Worker Error", error);
    });
} else {
  console.warn("Push messaging is not supported");
  pushButton.textContent = "Push Not Supported";
}

const applicationServerPublicKey =
  "BCm7AgT1XTTmjx70GrttR3JX--hIXOMsvCXB1F_UfA3dm0wegB99UOPw90mSist8LJ7QlDhLqIEfDY7rRG_qS8E";

function initializeUI() {
  pushButton.addEventListener("click", function () {
    pushButton.disabled = true;
    if (isSubscribed) {
      // TODO: Unsubscribe user
    } else {
      subscribeUser();
    }
  });

  // Set the initial subscription value
  swRegistration.pushManager.getSubscription().then(function (subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log("User IS subscribed.");
    } else {
      console.log("User is NOT subscribed.");
    }

    updateBtn();
  });
}

function updateBtn() {
  if (isSubscribed) {
    pushButton.textContent = "Disable Push Messaging";
  } else {
    pushButton.textContent = "Enable Push Messaging";
  }

  pushButton.disabled = false;
}

function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    })
    .then(function (subscription) {
      console.log("User is subscribed.");

      updateSubscriptionOnServer(subscription);

      isSubscribed = true;

      updateBtn();
    })
    .catch(function (error) {
      console.error("Failed to subscribe the user: ", error);
      updateBtn();
    });
}

function updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector(".js-subscription-json");
  const subscriptionDetails = document.querySelector(
    ".js-subscription-details"
  );

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove("is-invisible");
  } else {
    subscriptionDetails.classList.add("is-invisible");
  }
}
