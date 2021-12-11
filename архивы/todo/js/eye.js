$( document ).ready(function() {
    $('#eye').click(function (){
        if ($('#hide').css('display') === 'none'){
            $('#hide').css('display', 'block');
            $('#pass').attr('type', 'text');
        } else {
            $('#hide').css('display', 'none');
            $('#pass').attr('type', 'password');
        }
    });
});