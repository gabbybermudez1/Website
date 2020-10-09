
// Changes the toggles between showing the menu and not
const toggle_menu_mobile = () => {
    nav_list.style.visibility = (nav_list.style.visibility == "hidden" ? "block" : "hidden")
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



// wait for DOM to load before executing the command cusror
cursor = document.querySelector("#cmd-cursor");
setInterval(blink, 700);

desired_text = "Gabby ";
text = ""; 
counter = 0;
command = document.querySelector("#cmd-type");
setTimeout(type_effect, 1200);


const toggle_header = () => {
    var header = document.querySelector('.header');
    var nav = document.querySelector(".nav-links");
    var hamburger = document.querySelector("#hamburger");
    var overlay = document.querySelector("#overlay");
    // if header is currently closed
    if(header.className === "header"){
        header.className += ' open';
        nav.className += ' open';
        hamburger.className += " open";
        overlay.style.display = "block";
            
    }

    else{
        header.className = "header";
        nav.className="nav-links";
        hamburger.className= "";
        overlay.style.display = "none";
    }
}

var resume_button = document.querySelector("#jumbotron button");
resume_button.onclick = function(){
    location.href="resume/GabbyBermudez_Resume.pdf";
}

// ------------ List items in the header section ------------
var all_experience_buttons = document.querySelectorAll(".timeline-entry button");

for(var i = 0; i < all_experience_buttons.length ; i++){
    // Toggle the display of the details
    var sibling;
    var sibling_style;
    all_experience_buttons[i].addEventListener("click", function(event){
        sibling = this.nextElementSibling
        // sibling_style = window.getComputedStyle(sibling);
        // if(sibling_style.visibility == "hidden"){
        //     sibling.style.visibility = "visible";
        //     sibling.style.position = "relative";
        // }
        // else{
        //     sibling.style.visibility = "hidden";
        //     sibling.style.position = "absolute";
        // }
        if(sibling.classList.contains("list-fadeOut")){
            sibling.classList.remove("list-fadeOut");
            sibling.classList.remove("delay-position");
            sibling.classList.add("list-fadeIn");

        }

        else{
            sibling.classList.remove("list-fadeIn");
            sibling.classList.add("list-fadeOut");
            setTimeout(function(){
                sibling.classList.add("delay-position")
            },290)
        }
    })
}    

