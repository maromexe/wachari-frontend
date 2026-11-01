define(["jquery"], function ($) {
    $(".auth-form").each(function () {
        var $form = $(this);
        var $password = $form.find("[name='password']");
        var $confirm = $form.find("[name='confirmPassword']");

        // Only the register form has the second field
        if ($confirm.length === 0) {
            return;
        }

        function clearError() {
            $confirm.parent().find(".form-error").remove();
        }

        // Remove the message as soon as the user edits either password field
        $password.add($confirm).on("input", clearError);

        $form.on("submit", function (event) {
            clearError();

            if ($password.val() !== $confirm.val()) {
                event.preventDefault();
                $("<small>")
                    .addClass("form-hint form-error")
                    .attr("role", "alert")
                    .text("Passwords do not match")
                    .appendTo($confirm.parent());
                $confirm.trigger("focus");
            }
        });
    });
});
