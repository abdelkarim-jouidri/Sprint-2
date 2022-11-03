function fillModal(id){
    document.getElementById('task-title').value = document.getElementById(`title-${id}`).dataset.value
    document.getElementById('task-description').value = document.getElementById(`description-${id}`).dataset.value
    document.getElementById('task-priority').value = document.getElementById(`priority-${id}`).dataset.value
    document.getElementById('task-date').value = document.getElementById(`datetime-${id}`).dataset.value
    document.getElementById(`type-${id}`).dataset.value ==='Feature' ? document.getElementById('task-type-feature').checked=true :
                                                                       document.getElementById('task-type-bug').checked=true
    document.getElementById('task-status').value = document.getElementById(`status-${id}`).dataset.value
    document.getElementById('task-save-btn').style.display="none"
    document.getElementById('task-id').value=id
    console.log('clicked')

}

function handleAddTaskBtn(){
    console.log('clicked')
    document.getElementById('task-save-btn').style.display="inline"

    document.getElementById('form-task').reset()
}


