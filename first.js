/*const student = {
    fullName: 'Hassan Sardar',
    age: 20,
    Cgpa: 3.4,
    isGraduated: true
};
console.log(student["Cgpa"]);
student["age"] = student["age"] + 1;
student["isGraduated"] = false;
console.log(student["isGraduated"]);*/

/*const product = {
    name: 'Ball Pen',
    price: 270 ,
    offer: 20,
    rating: 4.5,
    isAvailable: true
};*/
/*const profle = {
    username: '@Hassan Sardar',
    isFollowing: true,
    followers: 1000,
    following: 500,
    posts: 200,
}; */
//Arithmetic Operators
/*let a = 9;
let b = 4;
console.log("a =",a, "& b =",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
//Increment/Decrement
let = 9;
let = 4;
console.log("a =",a, "& b =",b);
a++;
console.log("a =",a);
b--;
console.log("b =",b);*/
//Conditional Statements
/*let age = 25;
if (age > 18) {
    console.log("You are eligible to vote.");
};*/
/*let num = prompt("Enter a number:");
if (num % 5 === 0) {
    console.log(num, "is a multiple of 5.");
} else {
    console.log(num, "is not a multiple of 5.");
}*/
/*let score =prompt("Enter your score(0-100):");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score < 89) {
    grade = "B";
} else if (score >= 60 && score < 69) {
    grade = "C";
} else if (score >= 50 && score < 59) {
    grade = "D";
} else if (score >= 0 && score < 49) {
    grade = "F";
}
console.log('According to your score, your grade is:', grade);*/
//for loop
/*for (let i = 1; i <= 5; i++) {
    console.log(i);
};
for(count = 1; count <= 10; count++) {
    console.log("Hassan Sardar");
};
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
};
console.log("Sum:", sum);
console.log("loop has ended");*/
/*let i = 1;
while(i <= 5) {
    console.log("i =", i);
    i++;
}*/
/*let fullName = prompt("Enter your full name without spaces:");
let username =  fullName + "433" + "@gmail.com";
console.log("Your username is:", username);*/
/*let items = [250,645,300,900,50]
let i = 0;
for (i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log("Updated prices:", items);*/
/*let gameNum = 25;
let userNum = prompt("Guess the game number:");
while (userNum != gameNum) {
    userNum = prompt("Wrong guess! Try again:");
}
console.log("Congratulations! You guessed the correct number.");*/
/*let str1 = "apna";
let str2 = "college";
let result = "I am learning coding from " + str1 + " " + str2;
console.log(result);*/
/*let str = "Hellolololololololo";
console.log(str.replaceAll("lo", "p"));*/
/*let str = "ILoveJavaScript";
console.log(str.charAt(6));*/
/*let appName  = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
appName.shift("Bloomberg");
console.log(appName);*/
/*let appName  = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
appName.splice(2, 1, "Ola");
console.log(appName);*/
/*let appName  = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
appName.push("Amazon");
console.log(appName);*/
/*let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";
modeBtn.addEventListener("click",() => {
    if (currentMode === "light") {
        currentMode = "dark";
         body.classList.add("dark");
        body.classList.remove("light");
    } else {
         currentMode = "light";
         body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log("Current mode:", currentMode);
});*/
//Rock Paper Scissors
/*let userScore = 0;
let compScore = 0;
const choices =document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
const drawGame = () => {
    msg.innerText = "Game was Draw.Play again!";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};
    const PlayGame = (userChoice) =>{
        const compChoice = genCompChoice();
        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice ==="rock") {
                //scissors , paper
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                //rock , scissors
                userWin = compChoice === "scissors" ? false : true;
            } else {
                //rock , paper
                userWin = compChoice === "rock" ? false : true;
            }
           showWinner(userWin,userChoice,compChoice);
        }
        };
        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                const userChoice = choice.getAttribute("id");
                PlayGame(userChoice);
            });
        });*/
     // 1. LocalStorage se purane tasks load karo warna khali array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';
let currentSearch = '';

const modal = document.getElementById('modal');
const addTaskBtn = document.getElementById('addTaskBtn');
const closeBtn = document.querySelector('.close');
const saveTaskBtn = document.getElementById('saveTaskBtn');
const searchInput = document.getElementById('searchInput');
const priorityFilter = document.getElementById('priorityFilter');

// SEARCH + FILTER EVENTS
searchInput.oninput = (e) => { currentSearch = e.target.value.toLowerCase(); renderTasks(); }
priorityFilter.onchange = (e) => { currentFilter = e.target.value; renderTasks(); }

// MODAL OPEN/CLOSE - YE MISSING THA
addTaskBtn.onclick = () => { modal.style.display = 'block'; }
closeBtn.onclick = () => { modal.style.display = 'none'; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// SAVE TASK
saveTaskBtn.onclick = () => {
  const taskTitle = document.getElementById('taskInput').value;
  const taskDate = document.getElementById('taskDate').value;
  const taskPriority = document.getElementById('taskPriority').value;
  if(taskTitle === '') return alert('Task title likho bhai');

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    date: taskDate,
    priority: taskPriority,
    status: 'todo'
  };
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  modal.style.display = 'none';
  document.getElementById('taskInput').value = '';
  document.getElementById('taskDate').value = '';
  document.getElementById('taskPriority').value = 'medium'; // reset
}

// Save karne ke liye
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if(saved) {
        tasks = JSON.parse(saved);
    }
}

function renderTasks(){
  document.querySelectorAll('.task-list').forEach(list => list.innerHTML = '');
  const counts = { todo: 0, progress: 0, done: 0 };

  const filteredTasks = tasks.filter(task => {
    const matchSearch = task.title.toLowerCase().includes(currentSearch);
    const matchPriority = currentFilter === 'all' || task.priority === currentFilter;
    return matchSearch && matchPriority;
  });

  filteredTasks.forEach(task => {
    counts[task.status]++;
    const taskDiv = document.createElement('div');
    taskDiv.className = `task priority-${task.priority}`;
    taskDiv.draggable = true;
    taskDiv.dataset.id = task.id;

    const formattedDate = task.date? new Date(task.date).toLocaleDateString('en-PK') : '';

    taskDiv.innerHTML = `
      <span>${task.title}</span>
      <div class="priority-tag">${task.priority.toUpperCase()}</div>
      ${formattedDate? `<div class="task-date">📅 ${formattedDate}</div>` : ''}
      <div class="task-actions">
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `;

    taskDiv.addEventListener('dragstart', () => taskDiv.classList.add('dragging'));
    taskDiv.addEventListener('dragend', () => taskDiv.classList.remove('dragging'));

    taskDiv.querySelector('.delete-btn').onclick = () => {
      if(confirm('Pakka delete karna hai?')){
        tasks = tasks.filter(t => t.id!== task.id);
        saveTasks();
        renderTasks();
      }
    }

    taskDiv.querySelector('.edit-btn').onclick = () => {
      const newTitle = prompt('Task edit karo:', task.title);
      const newDate = prompt('Date edit karo YYYY-MM-DD:', task.date);
      const newPriority = prompt('Priority: high, medium, low', task.priority);
      if(newTitle && newTitle.trim()!== ''){
        task.title = newTitle.trim();
        task.date = newDate;
        task.priority = newPriority;
        saveTasks();
        renderTasks();
      }
    }

    const column = document.querySelector(`.column[data-status="${task.status}"].task-list`);
    column.appendChild(taskDiv);
  });

  document.querySelectorAll('.column').forEach(col => {
    const status = col.dataset.status;
    col.querySelector('.count').innerText = counts[status];
  });
}

// Drag-drop
const columns = document.querySelectorAll('.column');
columns.forEach(column => {
  column.addEventListener('dragover', (e) => { e.preventDefault(); column.classList.add('drag-over'); });
  column.addEventListener('dragleave', () => column.classList.remove('drag-over'));
  column.addEventListener('drop', (e) => {
    column.classList.remove('drag-over');
    const draggingTask = document.querySelector('.dragging');
    const taskId = parseInt(draggingTask.dataset.id);
    const newStatus = column.dataset.status;
    const task = tasks.find(t => t.id === taskId);
    task.status = newStatus;
    saveTasks();
    renderTasks();
  });
});
 


//  DARK / LIGHT THEME
const themeBtn = document.getElementById("theme-btn");

function setTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}
loadTasks();  
setTheme();   // <-- isko yahan le aao
renderTasks();

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    themeBtn.textContent = theme === "light" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
});
