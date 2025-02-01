$(document).ready(function(){
    let clickCount = 0;
    $('header').on('submit', function(e){
        e.preventDefault(e)
        const Span = $('span');
    })
    $('#button').click(function() {
        $('form').slideDown()
        $('#button').dblclick(function(){
            $('form').slideUp()
        })
    })
})