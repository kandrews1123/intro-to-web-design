function ClearForm(){
    //document.getElementById("fullname").value = "";
    document.getElementById("contactForm").reset();
    //alert("You clicked clear");
}
// JavaScript Query
function hidePTags(){
    let ptags = document.getElementsByTagName("p");
    for(let item of ptags){
        //item.style.visibility = "hidden"; // removes element, leaves space
        item.style.display = "none"; // removes element and space
    }
}
//JQuery example - with less lines of code
$('#jqueryBtn').click(function(){
    //format to retrieve a specific tag
    // //retrive all p tags and hide them
    $('p').hide();
});

$(function (){
    // initialized the array text is in the page name
    var pages = ['index', 'about', 'contact'];
    // looks at what page you're on
    var pathname = window.location.pathname;
    // iterate through every nav link on that page
    $('.nav-link').each(function(item){
        // if path name looks like any of these pages
        if(pathname.includes(pages[item])){
            // make the page in the nav bar active
            $(this).addClass('active');
            // change the font on that current page
            $(this).attr('aria-current', 'page');
        }

    })
}

);
