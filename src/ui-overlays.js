/* Popup, menu, settings, log, shop, and tab controls.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

function playNextFrame() {
    currentFrame++;
    if (currentFrame >= 12) {
        currentFrame = 12;
        effect.style.display = "none";
        clearInterval(effectInterval);
    } else {
        effect.style.display = "block";
        effect.style.backgroundPositionX = ((currentFrame % 2) * spriteSizeX * -1) + "px";
        effect.style.backgroundPositionY = (Math.floor(currentFrame / 2) * spriteSizeY * -1) + "px";
    }
}

function closePopup() {
    popup.classList.remove('show');
}
function openMenu() {

    setTimeout(()=>{document.getElementById("menu").style.opacity = 1}, 100);
    document.getElementById("menu").style.pointerEvents = "auto";
    document.getElementById("learnmore").setAttribute("onclick","closeMenu()");
}

function closeMenu() {
    document.getElementById("menu").style.pointerEvents = "none";
    setTimeout(()=>{document.getElementById("menu").style.opacity = 0}, 100);
    document.getElementById("learnmore").setAttribute("onclick","openMenu()");
    
}

function closeTutorial() {
    document.getElementById("tutorial").style.display = "none";
}

function openShop() {
    document.getElementById("shop").style.display = "block";
    setTimeout(()=>{document.getElementById("shop").style.opacity = 1}, 200);
}

function closeShop() {
    document.getElementById("shop").style.display = "none";
    setTimeout(()=>{document.getElementById("shop").style.opacity = 0}, 200);
    
}


function openSettings() {
    document.getElementById("settings").style.display = "block";
    setTimeout(()=>{document.getElementById("settings").style.opacity = 1}, 200);
}

function closeSettings() {
    document.getElementById("settings").style.display = "none";
    setTimeout(()=>{document.getElementById("settings").style.opacity = 0}, 200);
    
}

function openLog() {
    document.getElementById("log").style.display = "block";
    setTimeout(()=>{document.getElementById("log").style.opacity = 1}, 200);
}

function closeLog() {
    document.getElementById("log").style.display = "none";
    setTimeout(()=>{document.getElementById("log").style.opacity = 0}, 200);
    
}
function openCat(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
  }
