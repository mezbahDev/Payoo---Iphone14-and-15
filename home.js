// Constants
const bankAccountNumber = 12345678956;
const pin = 1234;
const bank = "Islami Bank";

// Section Buttons
const addBtn = document.getElementById("addBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const transferBtn = document.getElementById("transferBtn");

// Section Divs
const addMoneyParent = document.getElementById("addMoneyParent");
const cashOutParent = document.getElementById("cashOutParent");
const transferParent = document.getElementById("transferParent");

// ---------------- Add Money ----------------
const addMoneyFormBtn = document.getElementById("addButton");
addMoneyFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const bankNameValue = document.getElementById("bankName").value;
  const bankAccountNumberValue = parseInt(
    document.getElementById("bankAccountNumber").value
  );
  const addAmountValue = parseInt(document.getElementById("addAmount").value);
  const pinValue = parseInt(document.getElementById("pin").value);
  const mainBalanceValue = parseInt(
    document.getElementById("mainBalance").innerText
  );

  if (bankAccountNumberValue.toString().length !== 11) {
    alert("Invalid Account Number");
    return;
  }

  if (pinValue !== pin) {
    alert("Invalid Pin Number");
    return;
  }

  if (
    bankAccountNumberValue === bankAccountNumber &&
    pinValue === pin &&
    bankNameValue === bank
  ) {
    document.getElementById("mainBalance").innerText =
      mainBalanceValue + addAmountValue;

    // clear form
    document.getElementById("bankName").value = "";
    document.getElementById("bankAccountNumber").value = "";
    document.getElementById("addAmount").value = "";
    document.getElementById("pin").value = "";
  }
});

// ---------------- Withdraw Money ----------------
const cashOutBtn = document.getElementById("cashOutButton");
cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumberValue = document.getElementById("agentNumber").value;
  const agentNumber = parseInt(agentNumberValue);
  const withdrawPin = parseInt(document.getElementById("password").value);
  const withdrawAmount = parseInt(
    document.getElementById("withdrawAmount").value
  );
  const mainBalanceValue = parseInt(
    document.getElementById("mainBalance").innerText
  );

  if (agentNumberValue.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }

  if (withdrawPin !== pin) {
    alert("Invalid Pin");
    return;
  }

  if (agentNumber === bankAccountNumber) {
    if (withdrawAmount > mainBalanceValue) {
      alert("Insufficient Balance");
      return;
    }
    document.getElementById("mainBalance").innerText =
      mainBalanceValue - withdrawAmount;
    // clear form
    document.getElementById("agentNumber").value = "";
    document.getElementById("withdrawAmount").value = "";
    document.getElementById("password").value = "";
  }
});

// ---------------- Transfer Money ----------------
const transferFormBtn = document.getElementById("transferbutton");
transferFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const transferAccountNumber = parseInt(
    document.getElementById("transferAccountNumber").value
  );
  const transferAmount = parseInt(
    document.getElementById("transferAmount").value
  );
  const transferPin = parseInt(
    document.getElementById("transferPin")?.value ||
      document.getElementById("transferPin").value
  );
  const mainBalanceValue = parseInt(
    document.getElementById("mainBalance").innerText
  );

  if (transferPin !== pin) {
    alert("Invalid Pin");
    return;
  }

  if (transferAmount > mainBalanceValue) {
    alert("Insufficient Balance");
    return;
  }

  document.getElementById("mainBalance").innerText =
    mainBalanceValue - transferAmount;

  alert(`Transferred $${transferAmount} to account ${transferAccountNumber}`);

  // clear form
  document.getElementById("transferAccountNumber").value = "";
  document.getElementById("transferAmount").value = "";
  document.getElementById("password").value = "";
});

// ---------------- Section Navigation ----------------
addBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "block";
  cashOutParent.style.display = "none";
  transferParent.style.display = "none";
});

withdrawBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "none";
  cashOutParent.style.display = "block";
  transferParent.style.display = "none";
});

transferBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "none";
  cashOutParent.style.display = "none";
  transferParent.style.display = "block";
});
