
/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

function showTasks(){
    // Declaration of DOM objects
    const toDoContainer = document.getElementById('to-do-tasks')
    const inProgressContainer = document.getElementById('in-progress-tasks')
    const doneContainer = document.getElementById('done-tasks')
    const inProgressHeadingContainer = document.getElementById('inProgressHeadingContainer')
    const doneHeadingContainer = document.getElementById('doneHeadingContainer')
    const toDoHeadingContainer = document.getElementById('toDoHeadingContainer')

    toDoContainer.innerHTML = '';
    inProgressContainer.innerHTML = '';
    doneContainer.innerHTML = '';
    inProgressHeadingContainer.innerHTML = `<h4 class="">In Progress (<span id="in-progress-tasks-count">
                                        ${tasks.filter(taskElement => taskElement.status==='In Progress').length}</span>)</h4>`
    doneHeadingContainer.innerHTML = `<h4 class="">Done (<span id="done-tasks-count">
                                        ${tasks.filter(taskElement => taskElement.status==='Done').length}</span>)</h4>`
    toDoHeadingContainer.innerHTML = `<h4 class="">To Do (<span id="to-do-tasks-count">
                                        ${tasks.filter(taskElement => taskElement.status==='To Do').length}</span>)</h4>`
    tasks.forEach(task => {

        if(task.status === 'To Do') toDoContainer.insertAdjacentHTML('beforeend', createButtonTemplate(task))
        if(task.status === 'In Progress') inProgressContainer.insertAdjacentHTML('beforeend', createButtonTemplate(task))
        if(task.status === 'Done') doneContainer.insertAdjacentHTML('beforeend', createButtonTemplate(task))
    })
    //clear submitted data from input fields
    titleInput.value = ''
    priorityOptions.value = 'none'
    statusOptions.value='none'
    taskDate.value = "dd-mm-yyyy"
    taskDescription.value=''
   
}

function setId(){
    for(let task of tasks) task.id = tasks.findIndex(taskElement => taskElement===task)
}

// Show all the tasks from the 'tasks' array once the page is fully loaded
window.onload = ()=> {
    showTasks()
    setId()
}

function createButtonTemplate(task){
    let icon = (task.status=='To Do') ? `<div class=""><i class="bi bi-question-circle-fill fs-15px text-success"></i> </div>` : (task.status=='In Progress') ?
    `<div class="spinner-border text-success spinner-border-sm" role="status"> <span class="visually-hidden">Loading...</span> </div>` :
    `<div class=""><i class="bi bi-check2-circle fs-15px text-success"></i></div>`;
    
    return `<button class="border-0 border-top py-2 d-flex gap-4 btnParent" data-id="${task.id}" >
        ${icon}
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
            <span class="btn btn-info btn-xs editBtn" type="button" data-bs-toggle="modal" data-bs-target="#editTaskModal"  onclick="handleEdit()"">Edit</span>
        </div>
    </div>
    </div>
</button>`

}

function handleEdit(){
    // Get the the id of the selected task button
    let index = window.event.target.closest('.btnParent').dataset.id

    // Retrieve the data of the input fields  from the selected task button
    document.getElementById('editTitleInput').value = tasks[index].title
    document.getElementById('editTaskDescription').value = tasks[index].description
    tasks[index].type ==='Feature' ? document.getElementById('editFeatureOption').checked=true : document.getElementById('editBugOption').checked=true
    document.getElementById('editTaskDate').value = tasks[index].date
    document.getElementById('editStatusOptions').value = tasks[index].status
    document.getElementById('editTaskPriorityOptions').value = tasks[index].priority

    //listen for the click event on the save button from the edit modal and call the edit and show function
    document.getElementById('saveEditsButton').onclick = ()=>{
        editAndShow(index)
        document.getElementById('closeEditsButton').click()
    };
}


function editAndShow(index){
    // overwrite the data of the task object of the selected button with the altered data from the input fields 
    tasks[index].title = document.getElementById('editTitleInput').value 
    tasks[index].description = document.getElementById('editTaskDescription').value 
    tasks[index].priority = document.getElementById('editTaskPriorityOptions').value 
    tasks[index].date = document.getElementById('editTaskDate').value 
    tasks[index].status = document.getElementById('editStatusOptions').value
    tasks[index].type = document.getElementById('editFeatureOption').checked ? document.getElementById('editFeatureOption').value
                                                                              : document.getElementById('editBugOption').value
    //update the state of all the tasks buttons
    showTasks()
}

function saveTask() {
    const titleInput = document.getElementById('titleInput')
    const priorityOptions = document.getElementById('priorityOptions')
    const statusOptions = document.getElementById('statusOptions')
    const taskDate = document.getElementById('taskDate')
    const taskDescription = document.getElementById('taskDescription')
    const featureOption = document.getElementById('featureOption')
    const bugFeature = document.getElementById('bugOption')
    // Recuperer task attributes a partir les champs input
    // Créez task object

    const task =  {
            title : titleInput.value ,
            type : featureOption.checked? featureOption.value : bugFeature.value,
            priority : priorityOptions.value ,      
            status: statusOptions.value ,        
            date : taskDate.value,          
            description : taskDescription.value ,
            id : tasks.length
                }
    if(!titleInput.value || !priorityOptions.value || !statusOptions.value || !taskDescription.value ) {
        alert('empty input fields')
        return ;
    }
    // Ajoutez object au Array
    
    tasks.push(task)
    setId()

    // refresh tasks

    document.getElementById('closeModalButton').click()
    showTasks()

}


function deleteTask() {
    // Get index of task in the array
    const index = window.event.target.closest('.btnParent').dataset.id
    // Remove task from array by index splice function
    tasks.splice(index,1)
    setId()
    // close modal form
    console.log(index)
    // refresh tasks
    showTasks()
}
