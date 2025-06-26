const calculateTip = () => {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);
    const people = parseInt(document.getElementById("people").value || 1);

    if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const total = bill + tipAmount;
    const split = total / people;

    document.getElementById("result").innerHTML = `
        Tip: #${tipAmount.toFixed(2)} <br>
        Total bill: #${total.toFixed(2)} <br>
        Each Pays: #${split.toFixed(2)} (${people} people)
    `;
}