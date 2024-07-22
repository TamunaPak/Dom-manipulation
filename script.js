document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('buttEnter');
    const input = document.getElementById('userIn');
    const ul = document.getElementById('shop-list');


    function createListElement() {
        var li = document.createElement('li');
        var span = document.createElement('span');
        var deleteButton = document.createElement('button');

        span.appendChild(document.createTextNode(input.value));
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.className = 'delete';

        li.appendChild(span);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        input.value = '';

        span.addEventListener('click', toggleDone);
        deleteButton.addEventListener('click', deleteItem);
    }

    function toggleDone(event) {
        event.target.classList.toggle('done');
    }

    function deleteItem(event) {
        var li = event.target.parentElement;
        li.remove();
    }

    function addListAfterClick() {

        if (input.value.length > 0) {
            createListElement();
        }
    }

    function addListAfterKeypress(event) {
        if (input.value.length > 0 && event.keyCode === 13) {
            createListElement();
        }
    }

    button.addEventListener('click', addListAfterClick);
    input.addEventListener('keypress', addListAfterKeypress);

    var items = document.querySelectorAll('li span');
    var deleteButtons = document.querySelectorAll('li button.delete');

    items.forEach(function (item) {
        item.addEventListener('click', toggleDone);
    });

    deleteButtons.forEach(function (button) {
        button.addEventListener('click', deleteItem);
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     var button = document.getElementById('buttEnter');
//     var input = document.getElementById('userin');
//     var ul = document.getElementById('shop-list');

//     function createListElement() {
//         var li = document.createElement('li');
//         var span = document.createElement('span');
//         var deleteButton = document.createElement('button');


//         li.appendChild(span);
//         li.appendChild(deleteButton);
//         ul.appendChild(li);
//         input.value = '';

//         ul.addEventListener('click', toggleDone);
//         deleteButton.addEventListener('click', deleteItem);
//     }

//     function toggleDone(event) {
//         event.target.classList.toggle('done');
//     }

//     function deleteItem(event) {
//         var li = event.target.parentElement;
//         li.remove();
//     }

//     function addListAfterClick() {
//         if (input.value.length > 0) {
//             createListElement
//         }
//     }

//     function addListAfterKeypress() {
//         if (input.value.length > 0 && event.keyCode === 13) {
//             createListElement();
//         }
//     }

//     button.addEventListener('click', addListAfterClick);
//     input.addEventListener('keypress', addListAfterKeypress);

//     var items = document.querySelectorAll('li span');
//     var deleteButton = document.querySelectorAll('li button.delete');

//     items.forEach(function (item) {
//         item.addEventListener('click', toggleDone);
//     });

//     deleteButton.forEach(function (button) {
//         button.addEventListener('click', deleteItem);
//     });







// });