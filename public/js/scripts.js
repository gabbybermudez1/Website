var hamburger = document.querySelector(".mobile-menu");
var nav_list = document.querySelector(".main-nav-list");


// Changes the toggles between showing the menu and not
const toggle_menu_mobile = () => {
    nav_list.style.display = (nav_list.style.display == "none" ? "block" : "none")
}


/**
 * Blink is the Function used  to make the cursor on the command line
 * flash every so often. 
 * 
 */
const blink = () => {
    if (cursor.style.display == 'none'){
    cursor.style.display = ''
    }
    else{
        cursor.style.display  = 'none'
    }
}


/**
 * type_effect is a function used to type out my name on the command
 * line.
 */
const type_effect = () => {
    if ( counter < desired_text.length){
        text = desired_text.substr(0, counter + 1);
        command.innerHTML = text;
        counter++;
        setTimeout(type_effect, 100);
    }
}



hamburger.addEventListener("click", toggle_menu_mobile);


// wait for dom to load before executing the command cusror
cursor = document.querySelector("#cmd-cursor");
setInterval(blink, 700);

desired_text = "Gabby ";
text = ""; 
counter = 0;
command = document.querySelector("#cmd-type");
setTimeout(type_effect, 1200);



