function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const time = parseInt(document.getElementById("time").value);

  const compoundInterest = principal * Math.pow(1 + rate, time) - principal;
  const totalAmount = principal + compoundInterest;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `After ${time} years, your investment will be worth ₱${totalAmount.toFixed(
    2
  )} (Compound Interest: ₱${compoundInterest.toFixed(2)})`;
}
