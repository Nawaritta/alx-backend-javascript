var student1 = {
    firstName: "Alice",
    lastName: "Crypto",
    age: 23,
    location: "Somewhere"
};
var student2 = {
    firstName: "Bob",
    lastName: "Graphy",
    age: 20,
    location: "Anywhere"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var thead = document.createElement("thead");
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
var locationHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
