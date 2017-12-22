        $('.download-button').on('click', function() {
            var element = $(this);
            element.attr("disabled", "disabled");
            window.location.href = element.attr("data-href");

            setTimeout(function(){
                element.removeAttr("disabled");
            },5000);
        });
