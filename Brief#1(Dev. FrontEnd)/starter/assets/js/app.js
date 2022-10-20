
/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

//  const task =  {
//     title : titleInput.value,
//     type : flexRadioDefault1.value || flexRadioDefault2.value,
//     priority : priorityOptions.value,      
//     Status: statusOptions.value,        
//     date : taskDate.value,          
//     description : taskDescription.value  ,
//         }
const toDoContainer = document.getElementById('to-do-tasks')
const inProgressContainer = document.getElementById('in-progress-tasks')
const DoneContainer = document.getElementById('done-tasks')
const inProgressHeadingContainer = document.getElementById('inProgressHeadingContainer')
const doneHeadingContainer = document.getElementById('doneHeadingContainer')
const toDoHeadingContainer = document.getElementById('toDoHeadingContainer')
const featureOption = document.getElementById('featureOption')
const bugFeature = document.getElementById('bugOption')



const saveBtn = document.getElementById('saveChangesButton')
const titleInput = document.getElementById('titleInput')
const priorityOptions = document.getElementById('priorityOptions')
const statusOptions = document.getElementById('statusOptions')
const taskDate = document.getElementById('taskDate')
const taskDescription = document.getElementById('taskDescription')

// deleteBtn.addEventListener('click', ()=>console.log('clicked'))
// console.log(deleteBtn)
function setId(){
    for(let task of tasks) task.id = tasks.findIndex(el => el===task)
}
setId()
console.log(tasks)

function doneMarkUp(task){
    return `<button class="border-0 border-top py-2 d-flex gap-4 btnParent" data-id="${task.id}" >
    <div class="">
        <i class="bi bi-check2-circle fs-15px text-success"></i> 
    </div>
    <div class="text-start w-100">
        <div class="fw-bold">${task.title}</div>
        <div class="">
            <div class="">#${task.id+1} created in ${task.date}</div>
            <div class="" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${task.description}</div>
        </div>
        <div class="d-flex justify-content-between">
        <div class="">
            <span class="btn btn-primary btn-xs">${task.priority}</span>
            <span class="btn btn-secondary btn-xs">${task.type}</span>
        </div>
        <div class="">
            <span class="btn btn-danger btn-xs deleteBtn" onClick = "deleteTask()" >Delete</span>
            <span class="btn btn-info btn-xs">Edit</span>
        </div>
    </div>
    </div>
</button>`
}

function inProgressMarkUp(task){
    return `<button class="border-0 border-top py-2 d-flex gap-4 btnParent" data-id="${task.id}">
    <div class="spinner-border text-success spinner-border-sm" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="text-start w-100">
        <div class="fw-bold">${task.title}</div>
        <div class="">
            <div class="">#${task.id+1} created in ${task.date}</div>
            <div class="" title="including as many details as possible.">including as many details as possible.</div>
        </div>
    <div class="d-flex justify-content-between">
        <div class="">
            <span class="btn btn-primary btn-xs">${task.priority}</span>
            <span class="btn btn-secondary btn-xs">${task.type}</span>
        </div>
        <div class="">
            <span class="btn btn-danger btn-xs deleteBtn" onClick = "deleteTask()" >Delete</span>
            <span class="btn btn-info btn-xs">Edit</span>
        </div>
    </div>
    </div>
</button>`
}

function toDoMarkUp(task){
    return `<button class="border-0 border-top py-2 d-flex gap-4 btnParent" data-id="${task.id}">
    <div class="">
        <i class="bi bi-question-circle-fill fs-15px text-success"></i> 
    </div>
    <div class="text-start w-100">
        <div class="fw-bold">${task.title}</div>
        <div class="">
            <div class="">#${task.id+1} created in ${task.date}</div>
            <div class="" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${task.description}</div>
        </div>
        <div class="d-flex justify-content-between">
        <div class="">
            <span class="btn btn-primary btn-xs">${task.priority}</span>
            <span class="btn btn-secondary btn-xs">${task.type}</span>
        </div>
        <div class="">
            <span class="btn btn-danger btn-xs deleteBtn" onClick = "deleteTask()">Delete</span>
            <span class="btn btn-info btn-xs">Edit</span>
        </div>
    </div>
    </div>
</button>`
}

showTasks()
console.log( bugFeature.value)
saveBtn.addEventListener('click', saveTask)


function showTasks(){
    toDoContainer.innerHTML = '';
    inProgressContainer.innerHTML = '';
    DoneContainer.innerHTML = '';
    inProgressHeadingContainer.innerHTML = `<h4 class="">In Progress (<span id="in-progress-tasks-count">
                                        ${tasks.filter(el=> el.status==='In Progress').length}</span>)</h4>`
    doneHeadingContainer.innerHTML = `<h4 class="">Done (<span id="done-tasks-count">
                                        ${tasks.filter(el=> el.status==='Done').length}</span>)</h4>`
    toDoHeadingContainer.innerHTML = `<h4 class="">To Do (<span id="to-do-tasks-count">
                                        ${tasks.filter(el=> el.status==='To Do').length}</span>)</h4>`
    tasks.forEach(task => {

        if(task.status === 'To Do') toDoContainer.insertAdjacentHTML('beforeend', toDoMarkUp(task))
        if(task.status === 'In Progress') inProgressContainer.insertAdjacentHTML('beforeend', inProgressMarkUp(task))
        if(task.status === 'Done') DoneContainer.insertAdjacentHTML('beforeend', toDoMarkUp(task))
    })
   
}



function createTask() {
    // initialiser task form
    // Afficher le boutton save

    // Ouvrir modal form
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    
    const task =  {
            title : titleInput.value ,
            type : featureOption.checked? featureOption.value : bugFeature.value,
            priority : priorityOptions.value ,      
            status: statusOptions.value ,        
            date : taskDate.value,          
            description : taskDescription.value ,
            id : tasks.length
                }

    // Créez task object
    
    // Ajoutez object au Array
    
    tasks.push(task)
    setId()
    console.log(tasks)
    // refresh tasks
    document.getElementById('closeModalButton').click()
    showTasks()

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array
    let clickTarget = window.event.target
    const index = clickTarget.closest('.btnParent').dataset.id
    // Remove task from array by index splice function
    tasks.splice(index,1)
    setId()
    // close modal form
    console.log(index)
    // refresh tasks
    showTasks()
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}