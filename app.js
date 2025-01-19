let addExpenseButton = document.getElementById("expensebutton");
addExpenseButton.addEventListener("click", function () {
  let description = document.getElementById("description").value;
  let amount = document.getElementById("amount").value;


  if (description && amount) {

    let exp = {
      description: description,
      amount: parseFloat(amount),
    };

    let li = document.createElement("li");

    li.textContent = `${exp.description} : ${exp.amount}`;


    document.getElementById("expenselist").appendChild(li);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

  }
  else {
    alert("Please enter description and amount both")
  }
});




