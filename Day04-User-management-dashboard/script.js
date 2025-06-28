const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const addUserBtn = document.getElementById("addUser");
const userTable = document.getElementById("userTable");

let users = [];

addUserBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const email = emailInput.value.trim();

    if(name && age && email){
        const user = { name, age, email };
        users.push(user);
        renderUsers();
        clearInputs();
    } else {
        alert("Please fill in all fields.");
    }
});

const renderUsers = () => {
    userTable.innerHTML = "";
    users.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>>${user.age}</td>
            <td>>${user.email}</td>
            <td>
             <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

const deleteUser = (index) => {
    users.splice(index, 1);
    renderUsers();
}

const clearInputs = () => {
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
}