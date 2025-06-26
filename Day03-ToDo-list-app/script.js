const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

input.addEventListener("keypress", function (e)
    {
        if(e.key === "Enter" && input.value.trim() !== "") {
            addTask(input.value);
            input.value = "";
        }
    }
 );

 const addTask = (taskText) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "🚮";
    delBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delBtn)
    taskList.appendChild(li);
 }


