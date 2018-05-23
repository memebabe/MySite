function onbuttonclick(){
    var newtag = create_post();
    var content = document.getElementById("content");
    content.appendChild(newtag);
}

function create_post() {
    var post = document.createElement("a");
    post.className = "post"
    post.href = "#";

    var image = document.createElement("img");
    image.className = "image"
    image.src = "/images/a.jpg";
    // post.appendChild(image);

    var text = document.createElement("p");
    text.innerText = "dasd dasd asd asd asd asd ad";

    post.appendChild(image);
    post.appendChild(text);

    return post;
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});