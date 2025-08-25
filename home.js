// Constants
const bankAccountNumber = 12345678956;
const pin = 1234;
const bank = "Islami Bank";
const coupon = 12345;

// Section Buttons
const addBtn = document.getElementById("addBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const transferBtn = document.getElementById("transferBtn");
const bonusBtn = document.getElementById("bonusBtn");
const payBillBtn = document.getElementById("payBillBtn");
const transectionBtn = document.getElementById("transectionBtn");

// Section Divs
const addMoneyParent = document.getElementById("addMoneyParent");
const cashOutParent = document.getElementById("cashOutParent");
const transferParent = document.getElementById("transferParent");
const bonusParent = document.getElementById("bonusParent");

//get input value
function getInputValue(id) {
  const inputFiled = document.getElementById(id);
  const inputFiledValue = inputFiled.value;
  return inputFiledValue;
}

// get input value number
function getInputValueNumber(id) {
  const inputFiled = document.getElementById(id);
  const inputFiledValue = inputFiled.value;
  const inputFiledValueNumber = parseInt(inputFiledValue);
  return inputFiledValueNumber;
}

//function to get innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

//clear value
function clearInputs(...ids) {
  ids.forEach((id) => {
    const inputField = document.getElementById(id);
    if (inputField) {
      inputField.value = "";
    }
  });
}

// ---------------- Add Money ----------------

addBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "block";
  cashOutParent.style.display = "none";
  transferParent.style.display = "none";
});

const addMoneyFormBtn = document.getElementById("addButton");
addMoneyFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const bankNameValue = getInputValue("bankName");
  const bankAccountNumberValue = getInputValueNumber("bankAccountNumber");
  const addAmountValue = getInputValueNumber("addAmount");
  const pinValue = getInputValueNumber("addPin");
  const mainBalanceValue = getInnerText("mainBalance");

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
    clearInputs("bankName", "bankAccountNumber", "addAmount", "addPin");
  }
});

// ---------------- Withdraw Money ----------------

withdrawBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "none";
  cashOutParent.style.display = "block";
  transferParent.style.display = "none";
});

const cashOutBtn = document.getElementById("cashOutButton");
cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumberValue = getInputValue("agentNumber");
  const withdrawPin = getInputValueNumber("withdrawPin");
  const withdrawAmount = getInputValueNumber("withdrawAmount");
  const mainBalanceValue = getInnerText("mainBalance");

  if (agentNumberValue.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }

  if (withdrawPin !== pin) {
    alert("Invalid Pin");
    return;
  }

  if (agentNumberValue === bankAccountNumber.toString()) {
    if (withdrawAmount > mainBalanceValue) {
      alert("Insufficient Balance");
      return;
    }
    document.getElementById("mainBalance").innerText =
      mainBalanceValue - withdrawAmount;

    // clear form
    clearInputs("agentNumber", "withdrawAmount", "withdrawPin");
  }
});

// ---------------- Transfer Money ----------------

transferBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "none";
  cashOutParent.style.display = "none";
  transferParent.style.display = "block";
});

const transferFormBtn = document.getElementById("transferbutton");

transferFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const transferAccountNumber = getInputValue("transferAccountNumber");
  const transferAmount = getInputValueNumber("transferAmount");
  const transferPin = getInputValueNumber("transferPin");
  const mainBalanceValue = getInnerText("mainBalance");

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
  clearInputs("transferAccountNumber", "transferAmount", "transferPin");
});

// ---------------- Bonus Money ----------------

const bonusButton = document.getElementById("bonusButton");
let usedCoupon = [];

bonusBtn.addEventListener("click", function () {
  addMoneyParent.style.display = "none";
  cashOutParent.style.display = "none";
  transferParent.style.display = "none";
  bonusParent.style.display = "block";
});

bonusButton.addEventListener("click", function (e) {
  e.preventDefault();

  const couponValue = getInputValueNumber("bonusCoupon");
  const mainBalanceValue = getInnerText("mainBalance");

  if (usedCoupon.includes(couponValue)) {
    alert("This coupon has already been used");
    return;
  }

  if (couponValue !== coupon) {
    alert("Invalid Coupon Number");
    return;
  } else {
    document.getElementById("mainBalance").innerText = mainBalanceValue + 100;
    clearInputs("bonusCoupon");
  }

  usedCoupon.push(couponValue);
});
