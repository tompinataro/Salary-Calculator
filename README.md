Weekend Salary Calculator

This is a simple salary calculator application that allows users to input employee details and calculate the total monthly salary costs. The app helps track costs, and when the total monthly salary exceeds a specified threshold, it visually alerts the user.
Table of Contents

    Features
    Technologies Used
    Setup and Installation
    How to Use
    Tests
    Stretch Goals

Features

    Form to input employee information including:
        First Name
        Last Name
        ID Number
        Job Title
        Annual Salary
    Displays employees in a table format after submission.
    Automatically calculates the total monthly salary.
    If the total monthly cost exceeds $20,000, a red warning text appears in the footer.
    Ability to remove employees from the list (stretch goal: update total monthly salary after removal).

Technologies Used

    HTML: Structure of the app.
    CSS: Basic styling, including a red alert when the total monthly salary exceeds $20,000.
    JavaScript: Handles form submission, DOM manipulation, salary calculations, and employee deletion.
    Jest: Test framework to ensure functionality (built-in tests provided).

How to Use

    Add an Employee:
        Enter the employee's first name, last name, ID number, job title, and annual salary.
        Click the "Submit" button to add the employee to the list.
        The total monthly salary cost will update in the footer.

    Over Budget Warning:
        If the total monthly salary cost exceeds $20,000, the footer will change color to indicate that you are over the budget.

    Delete an Employee:
        Click the "Delete" button next to an employee's name to remove them from the list.
        The total monthly salary will update after the employee is deleted.