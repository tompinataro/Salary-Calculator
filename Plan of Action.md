To help you complete the "Weekend Challenge: JS Salary Calculator," here's a step-by-step plan:
1. Project Setup

    Clone the template repository:
        Use the "Use This Template" button to create a public repository on GitHub named weekend-salary-calculator.
        Clone the repository to your local machine.
    Install the necessary dependencies:
        Navigate to the project directory with cd weekend-salary-calculator.
        Run npm install to install the test libraries.

2. HTML Structure

    Create and source the following files if they aren't present:
        index.html (already provided)
        style.css
        script.js

    Form Setup (in index.html):
        Add a form with five input fields: First Name, Last Name, ID, Job Title, and Annual Salary.
        Ensure the form inputs have the following data-testid attributes to work with the tests:
            data-testid="firstNameInput"
            data-testid="lastNameInput"
            data-testid="idInput"
            data-testid="titleInput"
            data-testid="annualSalaryInput"
        Create a Submit button with the attribute data-testid="submitButton".

    Table Setup:
        Create a <table> element to hold employee data, where each employee is represented by a <tr>.

    Footer for Total Monthly Cost:
        Add a <footer> element where the total monthly cost will be displayed.

3. Basic JavaScript Functionality

    DOM Manipulation (in script.js):
        Set up event listeners for the Submit button.
        Write a function to capture form inputs and calculate monthly costs based on the annual salary entered (divide by 12 for monthly).
        Clear the input fields after each submission.
        Add a new row (<tr>) in the table for each employee with the captured data.

    Update Total Monthly Cost:
        Write a function to calculate and update the total monthly salary after each submission.
        Display the total inside the <footer> element.

4. CSS Class for Budget Limit

    CSS Changes (in style.css):
        Write an over-budget CSS class to visually indicate when the budget exceeds $20,000 (e.g., change text color to red).
    JavaScript Logic:
        Implement a check to compare the total monthly cost against $20,000.
        If the cost exceeds $20,000, apply the over-budget class to the <footer> element.

5. Delete Employee Functionality

    Delete Button (in script.js):
        Add a "Delete" button for each employee row (<tr>).
        Write an event handler to remove the employee's row from the DOM when the button is clicked.
    Stretch Goal: Update Monthly Cost After Deletion:
        Write logic to subtract the deleted employee's monthly salary from the total.

6. Testing

    Run tests frequently to check that your form structure and functionality are correct. Use npm test to validate your progress.

7. Stretch Goals (Optional)

    Consider adding extra styling or functionality to enhance the user experience, such as:
        Live validation for form inputs.
        Animations when a row is added or deleted.
