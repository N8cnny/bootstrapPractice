/**
 * Created by root on 1/12/16.
 */
(function($, window, document, undefined){
    "use strict";
    $(document).ready(function(){
        var $body = $('.body');
        var $input = $('input[name="data"]'); //select input obj
        var $inptutData = null;
        var $formResponse = $('#form-response');
        var $submitButton  = $('#palindrome-submit');

        //submit button handler
        $submitButton.click(function(event){
            event.preventDefault();
            $.post('index.php', {'data': $input.val()}, function(response){
                $formResponse
                    .html(response)
                    .css({'display': 'block'}) ;
            });
        });
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            $(function () {
                $('[data-toggle="popover"]').popover()
            })

    });
})(jQuery, window, document, undefined);