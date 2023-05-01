var them = "light"

function theme(){
    if(them == "light"){
        document.body.style.backgroundImage = "linear-gradient(to bottom,  #000 25%, #0078d4)";
        document.getElementById('theme').style.color = 'white';
        document.getElementById('fleche').style.backgroundColor = "rgba(180, 180, 180, 0.2)";
        document.getElementById('fleche').style.color = "white";
        document.getElementById('title').style.color = 'white';
        document.getElementById('header').style.backgroundColor = 'black';
        document.getElementById('header').style.borderBottom = '1px solid white';
        document.getElementById('footer').style.backgroundColor = 'black';
        document.getElementById('footer').style.color = 'white';
        document.getElementById('txt_footer1').style.color = 'white';
        document.getElementById('txt_footer2').style.color = 'white';
        document.getElementById('txt_footer3').style.color = 'white';
        document.getElementById('txt_footer4').style.color = 'white';
        document.getElementById('txt_bn1').style.color = 'white';
        document.getElementById('txt_bn2').style.color = 'white';
        document.getElementById('police').style.color = "white";
        document.getElementById('settings').style.color = "white";
        them = "dark";
    }
    else if(them == "dark"){
        document.body.style.backgroundImage = "linear-gradient(to top, #0078d4, rgb(131, 194, 253))";
        document.getElementById('theme').style.color = 'black';
        document.getElementById('fleche').style.backgroundColor = "rgba(180, 180, 180, 0.7)";
        document.getElementById('fleche').style.color = "#0077D5";
        document.getElementById('title').style.color = 'black';
        document.getElementById('header').style.backgroundColor = 'white';
        document.getElementById('footer').style.backgroundColor = 'white';
        document.getElementById('footer').style.color = 'black';
        document.getElementById('txt_footer1').style.color = 'black';
        document.getElementById('txt_footer2').style.color = 'black';
        document.getElementById('txt_footer3').style.color = 'black';
        document.getElementById('txt_footer4').style.color = 'black';
        document.getElementById('txt_bn1').style.color = 'rgb(104, 104, 104)';
        document.getElementById('txt_bn2').style.color = 'rgb(104, 104, 104)';
        document.getElementById('police').style.color = 'black';
        document.getElementById('settings').style.color = 'black';
        them = "light"
    }
}

function decouvrir() {
    if ( menu.style.display == 'inline-block'){
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'inline-block';
        menu.style.transitionDelay = '0.5s';
    }
}

function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function boutonPolice() {
    var tabpolice = ["bitter", "montserrat", "Architects_Daughter", "Indie_flower"]
    var nb = entierAleatoire(0, 3);
    document.body.style.fontFamily = tabpolice[nb];
}