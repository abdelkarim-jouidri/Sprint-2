function fillModal(id){
    document.getElementById('task-title').value = document.getElementById(`title-${id}`).dataset.value
    document.getElementById('task-description').value = document.getElementById(`description-${id}`).dataset.value
    document.getElementById('task-priority').value = document.getElementById(`priority-${id}`).dataset.value
    document.getElementById('task-status').value = document.getElementById(`status-${id}`).dataset.value
    document.getElementById('task-date').value = "2020-11-09"
    console.log(document.getElementById(`datetime-${id}`).dataset.value)


}