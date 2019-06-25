import PushTask from './pushTaks'
import '../css/main.scss'

const pushtask = new PushTask()

document.getElementById('formTask').addEventListener('submit', save)

function save(e) {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let date = document.getElementById('date').value

    const task = {
        title,
        description,
        date,

    }

    if(localStorage.getItem('tasks') === null){
        let tasks = []
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }


    getTask()
    pushtask.showPushNotification()
    document.getElementById('formTask').reset()
    e.preventDefault()
}

function getTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksview = document.getElementById('task')
    
    tasksview.innerHTML = '';
    
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title
        let description = tasks[i].description
        let date = tasks[i].date
        
        tasksview.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <h5>${title}</h5>
        <p class="m-0">${description}</p>
        <p><small>${date}</small></p>
        <a class="btn btn-danger" id="${title}" onclick="deleteTask('${title}')">
            Eliminar
        </a>
        </div>
        </div>
        `
    }
}

window.deleteTask = function (title){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].title == title){
            tasks.splice(i, 1)
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
    getTask()
}

pushtask.showPushNotification()

getTask()
