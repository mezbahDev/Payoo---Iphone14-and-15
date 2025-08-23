// login button function

const loginBtn = document.getElementById("loginBtn");

const phoneNumber = 1521559029;
const password = 1234;

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const mobileNumberValue = document.getElementById("mobileNumber").value;
  const pinValue = document.getElementById("pin").value;

  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  const pinValueConverted = parseInt(pinValue);

  console.log(mobileNumberValueConverted);

  if (
    mobileNumberValueConverted === phoneNumber &&
    pinValueConverted === password
  ) {
    window.location.href = "home.html";
  } else {
    alert("Mobile Number and Password not maching");
  }
});

// home button function
