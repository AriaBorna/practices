
$(document).ready(function(){
  $('input[type=submit]').click(function(event){
    event.preventDefault()
    var messages = []
    // check field is filled
    $('.input').each(function(){
      var filedLenght = $(this).val().length;
      var lable = $(this).nextAll('.lable').first().text()

      // the empty error
      if(filedLenght === 0){
        messages.push('Please complete ' + lable + ' field ')
      }
    })

    // validation
    if($('input[type=number]').val().length > 0){
      phoneRegex = /^09\d{9}$/;
      phoneInput = $('input[type=number]')
      if( !phoneRegex.test(phoneInput.val())){
        messages.push("Phone number is NOT valid!");
      }else{}
    }
    if($('input[type=email]').val().length > 0){
      emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      emailInput = $('input[type=email]')
      if( !emailRegex.test(emailInput.val())){
        messages.push("Email is NOT valid!");
      }
    }
    
    // execute the error
    if(messages.length > 0){
      $('.error').html(messages.join('<br>'))
    }else(
      $('.success').text("Form is completed!")
    )

    if(messages.length === 0){
      $('#form').serialize()
      $.ajax(
        {
          url : 'test.txt',
          type : 'POST',
          dataType : 'json',
          success : function(){
            $('.success').text("Form sent!")
          },
          error : function(){
            $('.error').text("There was a problem! please try again")
          }
        }
      )
    }
  })
})