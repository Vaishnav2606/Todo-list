var clickCount = 0;
/*--function to move to the next create task tab--*/
function moveForward(e){
    e.stopPropagation();

    //scrolling the list horizontally
    $('#todo-list').css("transform", 'translateX(-25%)');

    //adding animations to footer
    $('footer').removeClass('footerFadeOut');
    $('footer').addClass('footerFadeIn');
    clickCount++;

    //filling the second box in the header
    let ele = $('.progress-bar-bg > div')[clickCount];
    $(ele).removeClass('emptyColor');
    $(ele).addClass('fillColor');
}

/*--function to scroll back--*/
function moveBack(e){
    e.stopPropagation();

    /*--scrolling back the list--*/
    $('#todo-list').css("transform", 'translateX(0%)');
    if(clickCount == 1){
            $('footer').removeClass('footerFadeIn');
            $('footer').addClass('footerFadeOut');
        }

    //unfilling the box{
        let ele = $('.progress-bar-bg > div')[clickCount];
        $(ele).removeClass('fillColor');
        $(ele).addClass('emptyColor');

    clickCount--;
    
}

//button events
//create task button logic
$("#create-new-task-btn").click(moveForward);

//add task button logic
$('#add-task-btn').click(moveForward);

/*--backward btn logic--*/
$("#backward-btn").click(moveBack);

/*--task create form submit logic--*/
$("#add-task").click((e)=>{

    if($('#description').val() == ""){
        alert('Please fill all the fields');
        return;
    }
    if($('#category').val()== null){
        alert('Please fill all the fields');
        return;
    }
    if($('#datepicker').val()==""){
        alert('Please fill all the fields');
        return;
    }

    $('#task-form').submit();

});

//delete button logic
$('#delete-task-btn').click((e)=>{
    e.stopPropagation();

    //checking if any task is checked or not
    if($('input[name="delete"]:checked').length == 0){
        alert("Please choose a task to delete");
        return;
    }

    $('#tasks-list-form').submit();

})

//category background color logic
var taskCategory = $('.task-category p');

for(let category of taskCategory){
    if($(category).text() == 'work'){ 
        $(category).parent().css('backgroundImage', 'linear-gradient(45deg, rgb(35, 78, 172),rgb(172, 48, 48)');
    }else if($(category).text() == 'school'){
        $(category).parent().css('backgroundImage', 'linear-gradient(45deg, rgb(55, 55, 55), rgb(183, 123, 46))');
    }else if($(category).text() == 'personal'){
        $(category).parent().css('backgroundImage', 'linear-gradient(45deg, rgb(223, 84, 84), rgb(46, 183, 144))');
    }else{
        $(category).parent().css('backgroundImage', 'linear-gradient(45deg, rgb(130, 17, 17), rgb(147, 46, 183))');
    }
}

