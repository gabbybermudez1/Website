
// wait for dom to load before executing the command cusror
document.addEventListener("DOMContentLoaded", () => {
    cursor = document.querySelector("#cmd-cursor");
    setInterval(blink, 700);


    desired_text = "Gabby Bermudez";
    text = ""; 
    counter = 0;
    command = document.querySelector("#cmd-type");
    setTimeout(type_effect, 2000);

})


const blink = () => {
    if (cursor.style.display == 'none'){
    cursor.style.display = ''
    }
    else{
        cursor.style.display  = 'none'
    }
}

const type_effect = () => {
    console.log("Executed type effect")
    if ( counter < desired_text.length){
        console.log("reach!")
        text = desired_text.substr(0, counter + 1);
        command.innerHTML = text;
        counter++;
        setTimeout(type_effect, 100);
    }
}
