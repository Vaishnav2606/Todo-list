var clickCount = 0;

$("#create-new-task-btn").click((e)=>{
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

});

$("#backward-btn").click((e)=>{
    e.stopPropagation();
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
    

});

$("#add-taskclear").click((e)=>{

    $('#task-form').submit();

});