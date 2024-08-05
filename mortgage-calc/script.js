const calculateBtn = document.querySelector("button");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const loanAmount = document.querySelector("#loan-amount").value;
  const monthlyInterestRate =
    document.querySelector("#interest-rate").value / 100 / 12;
  const totalNumberOfPayments = document.querySelector("#loan-term").value * 12;

  const monthlyPayment = (
    (loanAmount *
      (monthlyInterestRate *
        (1 + monthlyInterestRate) ** totalNumberOfPayments)) /
    ((1 + monthlyInterestRate) ** totalNumberOfPayments - 1)
  ).toFixed(2);
  const totalPaymentAmount = monthlyPayment * totalNumberOfPayments;
  const totalInterestPaid = monthlyPayment * totalNumberOfPayments - loanAmount;

  let AUDConverter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  });

  document.querySelector("#monthly-payment-amount").textContent =
    AUDConverter.format(monthlyPayment);
  document.querySelector("#total-payment-amount").textContent =
    AUDConverter.format(totalPaymentAmount);
  document.querySelector("#total-interest-paid").textContent =
    AUDConverter.format(totalInterestPaid);
});
