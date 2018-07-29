$(function () {
    const taskForm = $("#task-form");
    const resultField = $("#result-field");

    let i = 1;

    const addToDOM = (event) => {
        event.preventDefault();

        const addTask = $("#task").val();
        const prioritySelect = $("#inputGroupSelect01").val();
        const datePicker = $("#datepicker").val();
        

        $('ol').append(`<div class="row justify-content-center">
        <div class="col-md-8">
        <li>  ${addTask}  on  ${datePicker} </li>
        </div>
        </div>`);



        $(document).on('dblclick', 'li', function () {
            $(this).toggleClass('strike').fadeOut('slow');
        });

        

        

    }


    // Event Listener
    taskForm.on("submit", addToDOM);
});