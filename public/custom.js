
$('#submit-data').on('click', function(evt) {
    let errorMessage = false;
    if(!$("#name").val()) {
        $('.name-error').removeClass('hide');
        errorMessage = true;
    }
    if(!$('input[name="sex"]:checked').val()) {
        $(".sex-error").removeClass('hide');
        errorMessage = true;
    }
    if(!$("#age").val()) {
        $('.age-error').removeClass('hide');
        errorMessage = true;
    }
    if(!$("#country").val()) {
        $(".country-error").removeClass('hide');
        errorMessage = true;
    }
    
    return !errorMessage
});

$('#name').on('focusout',function(evt){
    if(!evt.target.value){
        $(".name-error").removeClass('hide');
    }else{debugger
        $(".name-error").addClass('hide');
    }
})

$('input[name="sex"]').on('change',function(evt){
    if(!evt.target.value){
        $(".sex-error").removeClass('hide');
    }else{
        $(".sex-error").addClass('hide');
    }
})

$('#country').on('change',function(evt){
    if(!evt.target.value){
        $(".country-error").removeClass('hide');
    }else{
        $(".country-error").addClass('hide');
    }
})

$('#age').on('focusout',function(evt){
    if(!evt.target.value){
        $(".age-error").removeClass('hide');
    }else{
        $(".age-error").addClass('hide');
    }
})

