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
