interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: "Alice",
    lastName: "Crypto",
    age: 23,
    location: "Somewhere",
  };

  const student2: Student = {
    firstName: "Bob",
    lastName: "Graphy",
    age: 20,
    location: "Anywhere",
  };

  const studentsList: Student[] = [student1, student2];

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");

  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);


  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
