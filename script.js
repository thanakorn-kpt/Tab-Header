function openCity(cityName, el, color){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName('tablink');
    for(i = 0 ; i < tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(cityName).style.display = "block";
    el.style.backgroundColor = color;
}