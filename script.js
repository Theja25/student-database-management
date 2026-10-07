function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;

    if (name === "" || roll === "" || department === "" || email === "") {
        alert("Please fill all the fields");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${department}</td>
        <td>${email}</td>
        <td>
            <button onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("department").value = "";
    document.getElementById("email").value = "";
}


function deleteStudent(button) {

    let row = button.parentElement.parentElement;

    row.remove();

}