fetch('https://yesno.wtf/api/')
.then(response => response.json())
.then(
    data => {
        document.getElementById('print-here').innerHTML += "<h2>" + data.answer + "</h2>";
        document.getElementById('print-here').innerHTML += "<img src =\"" + data.image + "\"/>";
    }
)

document.getElementById("b1").addEventListener("click", addNote);
let body = document.querySelector("body");

let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");

function addNote() {
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  p.textContent = viesti.value;

  if(checkbox.checked) {
    h3.classList.add("important");
    p.classList.add("important");
  }
  
  // Tämänhetken aika ja päivämäärä
  let now = new Date();
  let time = now.toLocaleTimeString();
  let date = now.toLocaleDateString();
  
  // Create a new paragraph to display the time and date
  let timeParagraph = document.createElement("p");
  timeParagraph.textContent = "Time: " + time + " Date: " + date;

  body.append(h3, p, timeParagraph, document.createElement("hr"));
}

const date = new Date();

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("data");
}

function submit() {
  const name = document.getElementById("name").value;
  const toDo = document.getElementById("todo").value;
  const check = document.getElementById("important").value;
  const liElement = document.querySelectorAll("li");

  let result = date + "" + name + ":" + "" + toDo;

  if (name === "" || toDo === "") {
    return alert("Et voi jättää tyhjäksi!");
  } else {
    const toDoList = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = result;
    toDoList.appendChild("li");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    span.addEventListener("click", function () {
      li.remove();
      saveData();
    });
  }
  if (check.checked == true) {
    liElement.forEach((elem) => {
      elem.classList.add("important");
    });
  }

  saveData();

  document.getElementById("name").value = "";
  document.getElementById("todo").value = "";
}



