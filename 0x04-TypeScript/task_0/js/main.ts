interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Martin',
  lastName: 'Nyemba',
  age: 27,
  location: 'Zambia'
}

const student2: Student = {
  firstName: 'Yande',
  lastName: 'Chikaya',
  age: 3,
  location: 'Heaven'
}

const studentsList: Array<Student> = [student1, student2];

// Function to render the table
function renderTable() {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'First Name';
    headerRow.insertCell().textContent = 'Location';

    studentsList.forEach(student => {
        const row = table.insertRow();
        row.insertCell().textContent = student.firstName;
        row.insertCell().textContent = student.location;
    });

    document.body.appendChild(table);
}

// Call the render function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderTable);
