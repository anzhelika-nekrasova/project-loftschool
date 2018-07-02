$(function() {
    var flag = false;

     $("#form-style__button-submit").click(function (e) {
        e.preventDefault();

        $(".form-message").find("input,textarea").each(function() {
            var name = $(this).attr('name');
            var val = $(this).val();

            switch(name)
            {
                    // Проверка поля "Имя"
                    case 'name':
                        var rv_name = /^[a-zA-Zа-яА-Я]+$/; 

                        if(val.length > 2 && val != '' && rv_name.test(val))
                        {
                        $(this).removeClass('error').addClass('not_error');
                        flag = true;
                        }

                        else
                        {
                        $(this).removeClass('not_error').addClass('error');
                        flag = false;
                        //$(this).next('.error-box').html('поле "Имя" обязательно для заполнения');
                        }
                    break;

                // Проверка email
                case 'email':
                    var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                    if(val != '' && rv_email.test(val))
                    {
                        $(this).removeClass('error').addClass('not_error');
                        flag = true;
                    }
                    else
                    {
                        $(this).removeClass('not_error').addClass('error');
                        flag = false;
                        //$(this).next('.error-box').html('поле "Email" обязательно для заполнения<br>, поле должно содержать правильный email-адрес');
                    }
                break;


                // Проверка поля "Сообщение"
                case 'message':
                    if(val != '')
                    {
                        $(this).removeClass('error').addClass('not_error');
                        flag = true;
                    }
                    else
                    {
                        $(this).removeClass('not_error').addClass('error');
                        flag = false;
                        //$(this).next('.error-box').html('поле "Текст письма" обязательно для заполнения');
                    }
                break;

            } 
        });
            

        if ( flag == true) {
            $(".message-send.message-send-done").fadeIn();
            $(".form-style input").val("").removeClass('not_error');
            $(".form-style textarea").val("").removeClass('not_error');
        }
        else {
            $(".message-send.message-send-error").fadeIn();
        }
    });

    $(".message-send__exit").click(function () {
        $(".message-send").fadeOut();
    });

    
    

    
})