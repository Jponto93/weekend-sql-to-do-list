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
        // renderTasks();
        
    }).catch(function (error) {
        console.log('Error in client GET', error);
    })
} // end getTasks
