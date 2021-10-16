console.log('client.js');

$(onReady);

function onReady () {
    console.log('JQ');
    // ('#submitBtn').on('click', submitBtn)
    getTasks();

} // end onReady

function setUpClickListeners() {
    console.log('inside setUpClickListeners');
} // end setUpClickListeners

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

    for (let i = 0; i < response.length; i++){
        let id = response[i].id
        if (!response[i].complete){
            completeBtn = `<button class="completeBtn">Task Complete</button>`;
        }
        let entry = $(`
        <tr data-id"${id}">
            <td>${response[i].task}</td>
            <td>${response[i].description}</td>
            <td>${response[i].urgency}</td>
            <td>${response[i].complete}</td>
            <td>${completeBtn}</td>
            <td><button class="deleteBtn">Delete</button</td>
        </tr>`);

        el.append(entry);
        
    } // end for

} // end renderTasks

function saveTask (newTask) {
    console.log('inside saveTask', newTask);
    
} // end saveTask

// function submitBtn (e) {
//     e.preventDefault();
//     console.log('inside submitBtn on click');
    
//     let boolean;
//     if ($('#complete').val() === 'false'){
//         boolean = false;
//     } else if ($('#complete').val() === 'true'){
//         boolean = true;
//     }
//     console.log(boolean);
//     let newTask = {
//         task: $('#taskIn').val(),
//         description: $('#descriptionIn').val(),
//         urgency: $('#urgencyIn').val(),
//         complete: boolean
//     };
//     console.log('new task', newTask);
//     saveTask(newTask);
    
// }