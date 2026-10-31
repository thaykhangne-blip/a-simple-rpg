/* Support and healing abilities.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

let castSupport = (supportSkill) => {
    switch (supportSkill) {
        case "healing":
            if (playerHP >= playerMaxHP) {
                playerHP = playerMaxHP;
                playerHealth.value = playerHP;
                playerHealthText.innerHTML = parseInt(playerHP);
               popup.classList.add('show');
                popup.innerHTML = "<p>Your HP is already at maximum!</p><button onclick='closePopup()'>close</button>";
            } else if (playerHP == 0) {
                playerHP = 0;
                playerHealth.value = playerHP;
                playerHealthText.innerHTML = parseInt(playerHP);
               popup.classList.add('show');
                popup.innerHTML = "<p>You are already dead.</p><button onclick='closePopup()'>close</button>";
            } else {
                if (healBuff == true) {
                    healAmount = healAmount + healAmount*0.5;
                    playerHP = playerHP + healAmount;
                    healBuff = false;
                    healBuffIcon.style.display = "none";
                    
                    playerHealthText.innerHTML = parseInt(playerHP);
                    healAmount = playerMaxHP * 0.25 + random(100, 500);
                } else {
                    playerHP = playerHP + healAmount;
                    
                    playerHealthText.innerHTML = parseInt(playerHP);
                }
                if (playerHP >= playerMaxHP) {
                    playerHP = playerMaxHP;
                }
                playerHealth.value = playerHP;
                playerHealthText.innerHTML = parseInt(playerHP);
                document.getElementById('heal').style.pointerevents = 'none';
                document.getElementById('heal').style.cursor = 'not-allowed';
                document.getElementById('heal').style.opacity = '0.6';
                document.getElementById('heal').setAttribute("onclick", "");
                document.getElementById("playerhealtext").innerHTML = healAmount.toFixed(0);
                        document.getElementById("playerhealtext").style.display = "block";
                        document.getElementById("playerhealtext").style.left = "849px";
                        document.getElementById("playerhealtext").style.top = "203px";
                        document.getElementById("playerhealtext").style.color = "darkgreen";
                        setTimeout(()=>{document.getElementById("playerhealtext").style.opacity = 0}, 1000);
                        document.getElementById("playerhealtext").style.opacity = 1;
                energy = energy + 70;
                if (energy < 100) {
                    playerEnergyText.innerHTML = energy;
                } else if (energy >= 100) {
                    energy = 100;
                    playerEnergyText.innerHTML = energy;
                }
                 cooldown = 3;
            }
            break;
            case "holyshield":
                holyshieldamount = parseInt(holyshieldamount) + playerMaxHP*0.5;
                if (holyshieldamount >= playerMaxHP) {
                    holyshieldamount = playerMaxHP;
                }
                holyshieldbar.value = parseInt(holyshieldamount);
                holyshieldText.innerHTML = parseInt(holyshieldamount);
                document.getElementById('holyshield').style.pointerevents = 'none';
                document.getElementById('holyshield').style.cursor = 'not-allowed';
                document.getElementById('holyshield').style.opacity = '0.6';
                document.getElementById('holyshield').setAttribute("onclick", "");
                holyshieldicon.style.display = "block";
                document.getElementById("glow").style.display = "block";
                holyshieldstate = true;
                holyshieldcooldown = 5;
            break;
            case "doubledmg":
                doubledmgState = true;
    doublemodifier = 1;
    document.getElementById('doubledmg').style.pointerevents = 'none';
    document.getElementById('doubledmg').style.cursor = 'not-allowed';
    document.getElementById('doubledmg').style.opacity = '0.6';
    document.getElementById('doubledmg').setAttribute("onclick", "");
    doubledmgIcon.style.display = "block";
                break;
            case "shield":
                shieldState = true;
    document.getElementById('shield').style.pointerevents = 'none';
    document.getElementById('shield').style.cursor = 'not-allowed';
    document.getElementById('shield').style.opacity = '0.6';
    document.getElementById('shield').setAttribute("onclick", "");
    shieldicon.style.display = "block";
                break;
            default:
                popInput('command');
                console.log("error");
        }
        
}

let healSkill = (healing) => {
    if (healBuff == true) {
        healing = healing + healing*0.5;
        playerHP = playerHP + healing;
        healBuff = false;
        healBuffIcon.style.display = "none";
        
        } else {
        playerHP = playerHP + healing;
    }
    if (playerHP >= playerMaxHP) {
        playerHP = playerMaxHP;
    }
    playerHealthText.innerHTML = parseInt(playerHP);
    document.getElementById("playerhealtext").innerHTML = healing.toFixed(0);
                document.getElementById("playerhealtext").style.display = "block";
                document.getElementById("playerhealtext").style.left = "849px";
                document.getElementById("playerhealtext").style.top = "203px";
                document.getElementById("playerhealtext").style.color = "darkgreen";
                setTimeout(()=>{document.getElementById("playerhealtext").style.opacity = 0}, 1000);
                document.getElementById("playerhealtext").style.opacity = 1;
    
}

let holyHealSkill = (holyhealing) => {
    if (healBuff == true) {
        holyhealing = holyhealing + holyhealing*0.5;
        playerHP = playerHP + holyhealing;
        healBuff = false;
        healBuffIcon.style.display = "none";
        } else {
        playerHP = playerHP + holyhealing;
    }
    if (playerHP > playerMaxHP) {
        
        holyshieldamount = playerHP - playerMaxHP;
        if (holyshieldamount >= playerMaxHP) {
            holyshieldamount = playerMaxHP;
        }
        playerHP = playerMaxHP;
        holyshieldbar.value = parseInt(holyshieldamount);
        holyshieldText.innerHTML = parseInt(holyshieldamount);
        holyshieldicon.style.display = "block";
        holyshieldstate = true;
        document.getElementById("glow").style.display = "block";
        
    }
    
    playerHealthText.innerHTML = parseInt(playerHP);
    document.getElementById("playerhealtext").innerHTML = holyhealing.toFixed(0);
                document.getElementById("playerhealtext").style.display = "block";
                document.getElementById("playerhealtext").style.left = "849px";
                document.getElementById("playerhealtext").style.top = "203px";
                document.getElementById("playerhealtext").style.color = "darkgreen";
                setTimeout(()=>{document.getElementById("playerhealtext").style.opacity = 0}, 1000);
                document.getElementById("playerhealtext").style.opacity = 1;

}

document.getElementById("dragonname").innerHTML = "Rosemary the Dark Queen Lvl. "+dragonLevel;
