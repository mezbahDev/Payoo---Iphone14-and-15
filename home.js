const addMoneyBtn = document.getElementById("addMoney");
const bankAccountNumber = 12345678956;
const pin = 1234;
const bank = "Islami Bank";

addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // access the input value
  const bankNameValue = document.getElementById("bankName").value;
  const bankAccountNumberValue = parseInt(
    document.getElementById("bankAccountNumber").value
  );
  const addAmountValue = parseInt(document.getElementById("addAmount").value);
  const pinValue = parseInt(document.getElementById("pin").value);
  const mainBalanceValue = parseInt(
    document.getElementById("mainBalance").innerText
  );

  //   condition
  if (bankAccountNumber.toString().length !== 11) {
    alert("Invalid Account Number");
    return;
  }

  if (pinValue !== pin) {
    alert("invalid pin number");
    return;
  }

  if (
    bankAccountNumber === bankAccountNumberValue &&
    pin === pinValue &&
    bankNameValue === bank
  ) {
    const totalBalance = mainBalanceValue + addAmountValue;
    document.getElementById("mainBalance").innerText = totalBalance;
  }
});
