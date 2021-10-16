console.log('client.js');

$(onReady);

function onReady () {
    console.log('JQ');
    getTasks();
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
