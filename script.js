// console.log('line 1');

let monthlyCost = 0;

function addNewEmployee (event) {
    event.preventDefault();
    let firstNameText = document.getElementById('first-name-text').value;
    let lastNameText = document.getElementById('last-name-text').value;
    let idText = document.getElementById('id-text').value;
    let jobTitleText = document.getElementById('job-title-text').value;
    let annualSalaryText = document.getElementById('annual-salary-text').value;
    let newEmployeeLocation = document.getElementById('employee-table');
    let monthlyCostLocation = document.getElementById('total-monthly-cost');
    
    monthlyCostLocation.innerHTML = '';

    monthlyCost += Number(annualSalaryText)/12;
    // console.log (line 18);

    let newEmployee = `
        <tr>
            <td>${firstNameText}</td>
            <td>${lastNameText}</td>
            <td>${idText}</td>
            <td>${jobTitleText}</td>
            <td id="annual-salary-table-text" type="text">${annualSalaryText}</td>
            <td> <button onclick="deleteEmployee(event)">❌</button>
        </tr>
    `;

    let monthlyCostString = '$' + Math.round(monthlyCost).toLocaleString();

    newEmployeeLocation.innerHTML += newEmployee;
    monthlyCostLocation.innerHTML += monthlyCostString;

    if(monthlyCost > 20000) {
    // console.log (line 37);
      let classCheck = document.querySelector('footer').classList[0];
        if (classCheck === 'over-budget') {
            document.querySelector('.over-budget').style.color = 'red';
            window.alert('You are over budget. Your monthly budget it $20,000.')
        } 
        else {
        document.querySelector('footer').classList = 'over-budget';
        window.alert('You are over budget. Your monthly budget it $20,000.')
        }
    }
    // console.log (line 48);

    
    document.getElementById("employee-form").reset();
}

function deleteEmployee (event) {
    event.target.parentElement.parentElement.remove();
    let monthlyCostLocation = document.getElementById('total-monthly-cost');
    let annualSalaryTableText = event.target.parentElement.parentElement.children[4].innerText;
    monthlyCostLocation.innerHTML = '';
    // console.log (line 59);
    monthlyCost -= Number(annualSalaryTableText)/12;

    monthlyCostString = '$' + Math.round(monthlyCost).toLocaleString();
    monthlyCostLocation.innerHTML += monthlyCostString;
    if(monthlyCost <= 20000) {
        document.querySelector('.over-budget').style.color = 'black';
    }
}



