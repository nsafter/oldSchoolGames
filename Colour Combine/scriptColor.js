document.getElementsByClassName("tail_color")[0].addEventListener("click",function(){
    document.getElementsByClassName("tail_color_box")[0].style.visibility = "visible";
    document.getElementsByClassName("body_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("stomach_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("eye_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("shell_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("button_box")[0].style.left = "10vw";
})

document.getElementsByClassName("body_color")[0].addEventListener("click",function(){
    document.getElementsByClassName("tail_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("body_color_box")[0].style.visibility = "visible";
    document.getElementsByClassName("stomach_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("eye_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("shell_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("button_box")[0].style.left = "8%";
})

document.getElementsByClassName("stomach_color")[0].addEventListener("click",function(){
    document.getElementsByClassName("tail_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("body_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("stomach_color_box")[0].style.visibility = "visible";
    document.getElementsByClassName("eye_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("shell_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("button_box")[0].style.left = "8%";
})

document.getElementsByClassName("eye_color")[0].addEventListener("click",function(){
    document.getElementsByClassName("tail_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("body_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("stomach_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("eye_color_box")[0].style.visibility = "visible";
    document.getElementsByClassName("shell_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("button_box")[0].style.left = "8%";
})

document.getElementsByClassName("shell_color")[0].addEventListener("click",function(){
    document.getElementsByClassName("tail_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("body_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("stomach_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("eye_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("shell_color_box")[0].style.visibility = "visible";
    document.getElementsByClassName("button_box")[0].style.left = "8%";
})

/* Changing colors of tail */

function tailChange(clr){
    document.getElementsByClassName("tail")[0].style.backgroundColor = clr;
}

document.getElementById("tail_yellow").addEventListener("click",function(){
    tailChange("yellow");
    let au = document.getElementById("yellow_audio");
    au.play();
})

document.getElementById("tail_lime").addEventListener("click",function(){
    tailChange("rgb(0, 255, 0)");
    let au = document.getElementById("lime_audio");
    au.play();
})

document.getElementById("tail_blue").addEventListener("click",function(){
    tailChange("#6bc");
    let au = document.getElementById("blue_audio");
    au.play();
})

document.getElementById("tail_purple").addEventListener("click",function(){
    tailChange("rgb(230, 0, 230)");
    let au = document.getElementById("purple_audio");
    au.play();
})

document.getElementById("tail_orange").addEventListener("click",function(){
    tailChange("orange");
    let au = document.getElementById("orange_audio");
    au.play();
})

document.getElementById("tail_pink").addEventListener("click",function(){
    tailChange("pink");
    let au = document.getElementById("pink_audio");
    au.play();
})

/* Changing colors of body - head, head after, mouth before, leg, leg after, leg back, arm, arm back */

function bodyChange(clr){
    document.getElementsByClassName("head")[0].style.backgroundColor = clr;
    document.getElementsByClassName("mouth")[0].style.setProperty("--mouthBG",clr)
    document.getElementsByClassName("leg")[0].style.backgroundColor = clr;
    document.getElementsByClassName("leg")[1].style.backgroundColor = clr;
    document.getElementsByClassName("arm")[0].style.backgroundColor = clr;
    document.getElementsByClassName("arm")[0].style.boxShadow = "inset -0.375em 0.25em "+clr;
    document.getElementsByClassName("arm")[1].style.backgroundColor = clr;
    document.getElementsByClassName("arm")[1].style.boxShadow = "inset -0.375em 0.25em "+clr;
    document.getElementsByClassName("back")[0].style.backgroundColor = clr;
    document.getElementsByClassName("back")[0].style.backgroundColor = clr;
}

document.getElementById("body_yellow").addEventListener("click",function(){
    bodyChange("yellow");
    let au = document.getElementById("yellow_audio");
    au.play();
})

document.getElementById("body_lime").addEventListener("click",function(){
    bodyChange("rgb(0, 255, 0)");
    let au = document.getElementById("lime_audio");
    au.play();
})

document.getElementById("body_blue").addEventListener("click",function(){
    bodyChange("#7cd");
    let au = document.getElementById("blue_audio");
    au.play();
})

document.getElementById("body_purple").addEventListener("click",function(){
    /*bodyChange("rgb(184, 81, 255)");*/
    bodyChange("rgb(230, 0, 230)");
    let au = document.getElementById("purple_audio");
    au.play();
})

document.getElementById("body_orange").addEventListener("click",function(){
    bodyChange("orange");
    let au = document.getElementById("orange_audio");
    au.play();
}) 

document.getElementById("body_pink").addEventListener("click",function(){
    bodyChange("pink");
    let au = document.getElementById("pink_audio");
    au.play();
})

/* Changing colors of stomach  */

function stomachChange(clr){
    document.getElementsByClassName("stomach")[0].style.boxShadow = "0 1.25em "+clr+", 0 1.5em #555";
    document.getElementsByClassName("body")[0].style.backgroundColor = clr;
}

document.getElementById("stomach_pink").addEventListener("click",function(){
    stomachChange("rgb(255, 105, 180)");
    let au = document.getElementById("pink_audio");
    au.play();
})

document.getElementById("stomach_darkOrange").addEventListener("click",function(){
    stomachChange("rgb(255, 140, 0)");
    let au = document.getElementById("darkOrange_audio");
    au.play();
})

document.getElementById("stomach_salmon").addEventListener("click",function(){
    stomachChange("rgb(250, 128, 114)");
    let au = document.getElementById("salmon_audio");
    au.play();
})

document.getElementById("stomach_lightSkin").addEventListener("click",function(){
    stomachChange("#fe9");
    let au = document.getElementById("lightSkin_audio");
    au.play();
})

document.getElementById("stomach_crimson").addEventListener("click",function(){
    stomachChange("rgb(220, 20, 60)");
    let au = document.getElementById("crimson_audio");
    au.play();
})

document.getElementById("stomach_gold").addEventListener("click",function(){
    stomachChange("rgb(255, 215, 0)");
    let au = document.getElementById("gold_audio");
    au.play();
})

/* Changing colors of eyes */

function eyeChange(clr){
    document.getElementsByClassName("eye")[0].style.boxShadow = "inset 0 -0.25em "+clr;
    document.getElementsByClassName("eye")[1].style.boxShadow = "inset 0 -0.375em "+clr;
}

document.getElementById("eye_aqua").addEventListener("click",function(){
    eyeChange("aqua");
    let au = document.getElementById("aqua_audio");
    au.play();
})

document.getElementById("eye_brown").addEventListener("click",function(){
    eyeChange("#a63");
    let au = document.getElementById("brown_audio");
    au.play();
})

document.getElementById("eye_lgreen").addEventListener("click",function(){
    eyeChange("lightgreen");
    let au = document.getElementById("lgreen_audio");
    au.play(); 
})

document.getElementById("eye_gray").addEventListener("click",function(){
    eyeChange("gray");
    let au = document.getElementById("gray_audio");
    au.play();
})

document.getElementById("eye_yellow").addEventListener("click",function(){
    eyeChange("yellow");
    let au = document.getElementById("yellow_audio");
    au.play();
})

document.getElementById("eye_darkOrange").addEventListener("click",function(){
    eyeChange("rgb(255, 140, 0)");
    let au = document.getElementById("darkOrange_audio");
    au.play();
})

/* Changing colors of shell */

function shellChange(clr){
    document.getElementsByClassName("shell")[0].style.boxShadow = "inset -0.5em 0 "+clr+", inset -1em 0 "+clr+", inset -1.25em 0 #555, inset -1.75em 0 #fff, inset -2em 0 #555";    
}

document.getElementById("shell_red").addEventListener("click",function(){
    shellChange("rgb(255, 26, 26)");
    let au = document.getElementById("red_audio");
    au.play();
})

document.getElementById("shell_gold").addEventListener("click",function(){
    shellChange("rgb(255, 215, 0)");
    let au = document.getElementById("gold_audio");
    au.play();
})

document.getElementById("shell_lightBrown").addEventListener("click",function(){
    shellChange("#953");
    let au = document.getElementById("lightBrown_audio");
    au.play();
})

document.getElementById("shell_coral").addEventListener("click",function(){
    shellChange("rgb(255, 127, 80)");
    let au = document.getElementById("coral_audio");
    au.play();
})

document.getElementById("shell_springGreen").addEventListener("click",function(){
    shellChange("rgb(0, 250, 154)");
    let au = document.getElementById("springGreen_audio");
    au.play();
})

document.getElementById("shell_aqua").addEventListener("click",function(){
    shellChange("aqua");
    let au = document.getElementById("aqua_audio");
    au.play();
})
  
/* Functioning for done button */
document.getElementById("done").addEventListener("click",function(){
    document.getElementsByClassName("button_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("tail_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("body_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("stomach_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("eye_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("shell_color_box")[0].style.visibility = "hidden";
    document.getElementsByClassName("mainHeading")[0].style.visibility = "hidden";
    document.getElementById("done").style.visibility = "hidden";
    document.getElementsByTagName("body")[0].style.background = "radial-gradient(#e66465, #9198e5)";
    document.getElementsByTagName("body")[0].style.fontSize = "1%";
    document.getElementsByClassName("squirtle")[0].style.top = "45%";
    document.getElementsByClassName("squirtle")[0].style.left = "52%";
    setTimeout(function(){
        let au = document.getElementById("completed");
        au.play();
    },1200)
    setTimeout(function(){
        document.getElementsByTagName("body")[0].style.fontSize = "140%";
    },2000)
    setTimeout(function(){
        document.getElementById("again").style.visibility = "visible";
    },5000)
})

/* Check and cross functions to play again or not */ 
function check(){
    location.href = "index.html";
}

function cross(){
    location.href = "../Maingamepage.html";
}

