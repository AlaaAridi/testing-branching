function fct1(){
    const main_title = document.getElementById("el1");
    const the_body = document.getElementById("my_body");
    const subtitles = document.getElementsByClassName("my_title");
    
    main_title.style.color = "red";
    the_body.style.backgroundColor = "rebeccapurple";
    
    console.log(subtitles);
    
    for (let i = 0; i< subtitles.length; i++){
        subtitles[i].style.color = "yellow";
    }
}

fct1();



//change h1 color