
console.log('client.js');

$(onReady);

function onReady () {
    console.log('JQ');
    getTasks();
    $('#addTaskBtn').on('click', addTask)
    $('#viewTasks').on('click', '.deleteBtn', deleteTask)
    $('#viewTasks').on('click', '.completeBtn', completeTask)
} // end onReady

// GET
function getTasks () {
    $.ajax({
        method: 'GET',
        url: '/tasks',
    }).then(function (response) {
        console.log(response);
        renderTasks(response);
        
    }).catch(function (error) {
        console.log('Error in client GET', error);
    })
} // end getTasks

// RENDER
function renderTasks (response) {
    let el = $('#viewTasks');
    el.empty();
    let completeBtn = '';
    let status = '';
    for (let i = 0; i < response.length; i++){
        let id = response[i].id
        if (response[i].complete === false){
            completeBtn = `<button class="completeBtn btn btn-success">Mark As Complete</button>`;
        } 
        switch(response[i].complete){
            case true: 
            status = 'Task is complete';
            break;
            case false: 
            status = 'Task not complete';
            break;
        }
        let entry = $(`
        <tr data-id="${id}">
            <td class="col-2">${response[i].task}</td>
            <td class="col-4">${response[i].description}</td>
            <td class="col-2">${response[i].due}</td>
            <td class="col-2">${status}</td>
            <td class="col-1">${completeBtn}</td>
            <td class="col-1"><button class="deleteBtn btn btn-danger">Delete</button</td>
        </tr>`);

        el.append(entry);
        completeBtn = '';
        
    } // end for

} // end renderTasks

// POST
function addTask () {
    console.log('inside saveTask');
    let taskToSend = {
        task: $('#taskIn').val(),
        description: $('#descriptionIn').val(),
        due: $('#dueIn').val(),
        complete: false
    }
    console.log(taskToSend);

    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: taskToSend
    }).then(function (response) {
        $('#taskIn').val(''),
        $('#descriptionIn').val(''),
        $('#dueIn').val('')
        getTasks();
    }).catch(function (err) {
        console.log('Error', err);
    })
    
} // end saveTask

// DELETE
function deleteTask () {
    console.log('inside deleteTask');
    
    let idToDelete = $(this).closest('tr').data('id');
    console.log(idToDelete);

    $.ajax({
        method: 'DELETE',
        url: `tasks/${idToDelete}`
    }).then(function (response) {
        console.log(response);
        getTasks();
    }).catch(function (error) {
        alert('Error', error)
    })
} // end deleteTask

// PUT 
function completeTask () {
    console.log('inside completeTask');
    let idToUpdate = $(this).closest('tr').data('id');
    console.log(idToUpdate);

    $.ajax({
        method: 'PUT',
        url: `/tasks/${idToUpdate}`,
    }).then(function (response) {
        console.log(response);
        getTasks();
    }).catch(function (error) {
        console.log(error);
    });
} // end completeTask