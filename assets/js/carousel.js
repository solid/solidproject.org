
/**
 * This function is called when clicking on an element of "Why you'll love Solid as a...", to update
 * the carousel accordingly
 */
function cascade_carousel_click(selected_entry) {

    var user = document.getElementById("carousel-user");
    var developer = document.getElementById("carousel-developer");
    var enterprise = document.getElementById("carousel-enterprise");

    // Resets the state of the carousel
    user.checked = false;
    developer.checked = false;
    enterprise.checked = false;

    if(selected_entry === "carousel-user") {
        user.checked = true
    }
    if(selected_entry === "carousel-developer") {
        developer.checked = true
    }
    if(selected_entry === "carousel-enterprise") {
        enterprise.checked = true
    }
}

function cascade_carousel_click_user() {
    document.getElementById("why2love-user").setAttribute("activated", true)
    document.getElementById("why2love-developer").setAttribute("activated", false)
    document.getElementById("why2love-enterprise").setAttribute("activated", false)
    cascade_carousel_click("carousel-user");
}

function cascade_carousel_click_developer() {
    document.getElementById("why2love-user").setAttribute("activated", false)
    document.getElementById("why2love-developer").setAttribute("activated", true)
    document.getElementById("why2love-enterprise").setAttribute("activated", false)
    cascade_carousel_click("carousel-developer");
}

function cascade_carousel_click_enterprise() {
    document.getElementById("why2love-user").setAttribute("activated", false)
    document.getElementById("why2love-developer").setAttribute("activated", false)
    document.getElementById("why2love-enterprise").setAttribute("activated", true)
    cascade_carousel_click("carousel-enterprise");
}

// Initializes attributes
document.getElementById("why2love-user").setAttribute("activated", true)
document.getElementById("why2love-developer").setAttribute("activated", false)
document.getElementById("why2love-enterprise").setAttribute("activated", false)

// Sets listeners
document.getElementById("why2love-user").addEventListener("click", cascade_carousel_click_user); 
document.getElementById("why2love-developer").addEventListener("click", cascade_carousel_click_developer); 
document.getElementById("why2love-enterprise").addEventListener("click", cascade_carousel_click_enterprise); 