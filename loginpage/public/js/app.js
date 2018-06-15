$("#login-form").on("submit", (e)=> {
  e.preventDefault();
  let noEmptyFields = true;

  $("#emailInput, #passwordInput").each((index, input) => {
    input = $(input);
    if (input.val() === "") {
      input.parent().addClass("has-error has-feedback"); //use bootsrap error css
      $(`#${input.attr("id")}Glyph`).removeClass("hidden"); //make alert glyph visible
      input.attr("placeholder", "Field cannot be empty"); //use placeholder to message user
      noEmptyFields = false;
    } else if (input.attr("id") === "emailInput" && !emailRegex(input.val())) {
      input.parent().addClass("has-error has-feedback");
      input.val("");
      $(`#${input.attr("id")}Glyph`).removeClass("hidden");
      input.attr("placeholder", "Must enter a valid email");
      noEmptyFields = false;
    } else {
      let placeholder = input.attr("id") === "emailInput" ? "Email" : "Password";
      input.attr("placeholder", placeholder);
      input.parent().removeClass("has-error has-feedback");
      $(`#${input.attr("id")}Glyph`).addClass("hidden");
      input.attr("placeholder", ""); //reset any previous error messages
    }
  });

  if (noEmptyFields) {
    signIn({
      email: $("#emailInput").val(),
      password: $("#passwordInput").val(),
    })
    .done(() => messageUser("You have succesfully logged in", ["green","red"]))
    .fail(() => messageUser("You have entered an invalid username or password", ["red", "green"]));
  }
});

const emailRegex = (str) => {
  // Borrowed from http://emailregex.com/
  return str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const signIn = (user) => {
  return $.ajax({
    method: 'post',
    url: "/login",
    data: {user}
  });
};

const messageUser = (message, classNames) => {
  $("#user-message").html(message);
  $("#user-message").addClass(classNames[0]);
  $("#user-message").removeClass(classNames[1] + " hidden");
};
