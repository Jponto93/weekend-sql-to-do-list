
console.log('client.js');

$(onReady);

function onReady () {
    console.log('JQ');
    getTasks();
    $('#addTaskBtn').on('click', addTask)

} // end onReady

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


function renderTasks (response) {
    let el = $('#viewTasks');
    el.empty();
    let completeBtn = '';
    for (let i = 0; i < response.length; i++){
        let id = response[i].id
        if (response[i].complete === false){
            completeBtn = `<button class="completeBtn">Task Complete</button>`;
        }
        let entry = $(`
        <tr data-id"${id}">
            <td>${response[i].task}</td>
            <td>${response[i].description}</td>
            <td>${response[i].due}</td>
            <td>${response[i].complete}</td>
            <td>${completeBtn}</td>
            <td><button class="deleteBtn">Delete</button</td>
        </tr>`);

        el.append(entry);
        completeBtn = '';
        
    } // end for

} // end renderTasks

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


