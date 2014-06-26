$(document).on('ready', function() {
  
  $('.value-text').on('click', function(){

    var originalField = $(this);

    var input = $('<textarea class="value-edit" />');
    $(this).after(input);

    input.height($(this).height());
    $(this).hide();
    input.val($(this).text());
    input.focus();

    input.on('blur', function(){
      originalField.text(input.val());
      input.remove();
      originalField.show();
    });

  });
});