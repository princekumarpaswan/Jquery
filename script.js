$(document).ready(function () {
    // $('selector').action()
    // $('p').click(); //click on p
    $('p').click(function () {
        console.log("You clicked on P");
        $(this).hide()
    })

    // hide p on click
})

