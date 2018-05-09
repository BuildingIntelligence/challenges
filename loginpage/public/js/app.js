$(document).ready(function() {
  $('#login-form').on('submit', function(event) {
    event.preventDefault();
    if (!$.trim($('#login-username').val()) || !$.trim($('#login-password').val())) {
      if (!$.trim($('#login-username').val())) {
        $('#login-username').addClass('error');
        $('#username-feedback').removeClass('hidden');
      }

      if (!$.trim($('#login-password').val())) {
        $('#login-password').addClass('error');
        $('#password-feedback').removeClass('hidden');
      }
    } else {
      url = $(this).attr('action');
      method = $(this).attr('method');
      data = $(this).serialize();
      $.ajax({
        url: url,
        method: method,
        data: data
      }).done(function(response) {
        $('#login-username').removeClass('error');
        $('#login-password').removeClass('error');
        $('#username-feedback').addClass('hidden');
        $('#password-feedback').addClass('hidden');
        $('#login-description').replaceWith(response);
      });
    }
  });
});
