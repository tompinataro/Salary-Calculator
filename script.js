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
}