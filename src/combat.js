/* Core magic casting, combat calculations, effects, and turn resolution.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

let skillName;
let castMagic = (skill) =>  {
    console.log(playerClass);
    //playerTurn
 
    try {
        switch (playerClass) {

            case 'mage':
                mageSkill(skill);
                break;
            case 'archer':
                archerSkill(skill);
                break;
            case 'paladin':
                paladinSkill(skill);
                break;
            case 'knight':
                knightSkill(skill);
                break;
            case 'necromancer':
                necroSkill(skill);
                break;
            case 'swordsinger':
                swordsingerSkill(skill);
                break;
            case 'cryomancer':
                cryomancerSkill(skill);
                break;
            default:
               
                return;

        }
    } catch (err) {
            switch (err.id) {
            case 'invalid-skill':
                console.log(err.id);
                popInput(err.id);
                break;
            case 'cooldown':
                console.log(err.id);
                popInput(err.id);
            default:
                break;
            }
            
        
        return;
    }
    
   
        
    

        if (energy < energyCon) {
            popInput('energy');
            energy = energy;
            playerEnergyText.innerHTML = energy;
            skillName = "";
            return;
        } else {

            document.getElementById('message').style.pointerEvents = "none";
            magicField.disabled = true;
            currentFrame = 1;
            
           
            switch (skill) {
                
                case "icebolt":
                    
                    
                    eleDMG = playerATK*1.1 + 250;
                    phyDMG = 0;
                    effect.style.backgroundImage = "url('images/skill1.png')";

                    break;
                case "rainoffire":
                    
                    eleDMG = playerATK*1.5 + 450;
                    phyDMG = 0;
                    skillcd[1] = 3;
                    effect.style.backgroundImage = "url('images/skill2.png')";
                    break;
                case "thunderstorm":
                    
                    if (poisonState == true) {
                        eleDMG = playerATK*5.1+1950;
                        eleDMG = eleDMG + eleDMG*0.6;
                    } else {
                        eleDMG = playerATK*5.1 + 1950;
                    }
                    phyDMG = 0;
                    skillcd[2] = 4;
                    healBuff = true;
                    healBuffIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill3.png')";
                    break;
                case "baneofdeath":
                    
                    eleDMG = playerATK*1.5 + 150;
                    phyDMG = 0;
                    skillcd[3] = 3;
                    effect.style.backgroundImage = "url('images/skill4.png')";
                    break;
                case "arrowoflight":
                    
                    phyDMG = playerATK + 200;
                    eleDMG = 0;
                    huntermark = true;
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill5.png')";
                    break;
                case "bloodshed":
                    phyDMG = playerATK*2 + 470;
                    eleDMG = 0;
                    skillcd[1] = 3;
                    document.getElementById("a6").style.opacity="0.6";
                    document.getElementById("a6").style.pointerEvents="none";
                    effect.style.backgroundImage = "url('images/skill6.png')";
                    break;
                case "piercingshot":
                    if (huntermark == false || bleedState == false) {
                        phyDMG = playerATK*4.8 + 1750;
                    } else if (huntermark == true || bleedState == false) {
                        phyDMG = playerATK*7.3 + 1750;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    } else if (huntermark == false || bleedState == true) {
                        phyDMG = playerATK*4.8 + 1750;
                        phyDMG = phyDMG + phyDMG*0.5;
                    } else if (huntermark == true || bleedState == true) {
                        phyDMG = playerATK*7.3 + 1050;
                        phyDMG = phyDMG + phyDMG*0.5;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    }
                    skillcd[2] = 3;
                    eleDMG = 0;
                    effect.style.backgroundImage = "url('images/skill7.png')";
                    break;
                case "huntersinstinct":
                     phyDMG = 0;
                     eleDMG = 0;
                     skillcd[3] = 3;
                    hunteratkbuff = true;
                    hunteratkcooldown = 2;
                    hunteratkmodifier = 0.2;
                    hunterAtkIcon.style.display = "block";
                    huntermark = true;
                    critRate = defaultCrit+30;
                    critDmg = defaultCritDMG+1.2;
                    playerCritText.innerHTML = critRate + "%";
                    playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill8.png')";
                    break;
                case "righteousness":
                    phyDMG = playerATK*1.2 + 240;
                    eleDMG = 0;
                    if (lightmark < 10) {
                        lightmark = lightmark+1;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        lightmark = 10;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    }
                    effect.style.backgroundImage = "url('images/skill9.png')";
                    break;
                case "rectitude":
                    phyDMG = playerATK*1.4 + 300;
                    eleDMG = 0;
                    skillcd[1] = 2;
                    if (lightmark < 10) {
                        lightmark++;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        lightmark = 10;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    }
                    effect.style.backgroundImage = "url('images/skill10.png')";
                    break;
                case "judgment":
                   phyDMG = playerATK*3.3 + 1315 + playerDEF*lightmark;
                   eleDMG = 0;
                   skillcd[2] = 4;
                    effect.style.backgroundImage = "url('images/skill11.png')";
                    break;
                case "honor":
                     if (lightmark >= 5) {
                        phyDMG = playerATK*1.6 + 500 + playerDEF*2.5;
                        lightmark = lightmark-2;
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        phyDMG = playerATK*1.6 + 500;
                    }
                    eleDMG = 0;
                    skillcd[3] = 3;
                    effect.style.backgroundImage = "url('images/skill12.png')";
                    break;
                case "soulsiphon":
                    eleDMG = playerATK*1.1 + 280;
                    phyDMG = 0;
                    soulsiphon = true;
                    soulsiphonicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill13.png')";
                    break;
                case "mindgleaning":
                    eleDMG = playerATK*1.8 + 470;
                    phyDMG = 0;
                    skillcd[1] = 2;
                    mindgleaning = true;
                    mindgleaningicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill14.png')";
                    break;
                case "painlessdeath":
                    if (soulsiphon == true && mindgleaning == true) {
                        eleDMG = playerATK*5.8 + 1500;
                    } else if (soulsiphon == true && mindgleaning == false) {
                        eleDMG = playerATK*4.7 + 1500;
                    } else if (soulsiphon == false && mindgleaning == true) {
                        eleDMG = playerATK*4.6 + 1500;
                    } else {
                        eleDMG = playerATK*3.8 + 1500;
                    }
                    phyDMG = 0;
                    skillcd[2] = 5;
                    effect.style.backgroundImage = "url('images/skill15.png')";
                    break;
                case "songofmoonlight":
                    eleDMG = playerATK*1.5 + 600;
                    phyDMG = 0;
                    skillcd[3] = 2;
                    if (soulsiphon==true || mindgleaning==true) {
                        if (moonstate==false) {     
                            playerATKTemp = playerATK;          
                            moonbuff = true;
                            moonbufficon.style.display = "block";
                            moonbuffturn = 2;
                            moonbuffamount = playerATK*0.5;
                            playerATK = playerATK + moonbuffamount;
                            playerAtkText.innerHTML = playerATK.toFixed(0);
                            moonstate = true;
                        } else {
                            moonbuff = true;
                            moonbufficon.style.display = "block";
                            moonbuffturn = 2;
                            moonstate = true;
                        }
                    }
                    effect.style.backgroundImage = "url('images/skill16.png')"; 
                    break;
                case "bloodembrace":
                    phyDMG = playerATK*1.2 + 310;
                    eleDMG = 0;
                    effect.style.backgroundImage = "url('images/skill17.png')";
                    break;
                case "rosemarysgift":
                    skillcd[1] = 2;
                    hploss=playerMaxHP-playerHP;
                    phyDMG = playerATK*1.6 + 670 + hploss*0.1;
                    eleDMG = 0;
                    effect.style.backgroundImage = "url('images/skill18.png')";
                    break;
                case "ichorretaliation":
                    phyDMG = playerATK*3.5 + 1200 + playerATK*0.25*bloodsigil + playerMaxHP*0.02*bloodsigil;
                    eleDMG = 0;
                    skillcd[2] = 4;
                    effect.style.backgroundImage = "url('images/skill19.png')";
                    break;
                case "crimsonvitality":
                    phyDMG = 0;
                    eleDMG = 0;
                    skillcd[3] = 4;
                    effect.style.backgroundImage = "url('images/skill20.png')";
                    break;          
               case "sacredanthems":
                    eleDMG = playerATK + 230;
                    phyDMG = 0;
                    
                    hd[random(0,3)]++;
                    hd[random(0,3)]++;
                    //d1
                        

                    if (hd[0] > 0) {
         
                        d1icon.style.display = "block";
                        if (hd[0] >= 10) {
                            hd[0] = 10;
                        } else if (hd[0] < 10) {
                            dragonATK = dragonATK - dragondefaultatk*0.04;
                        }
                        
                        document.getElementById("d1number").innerHTML = hd[0];
                    }
                    //
                     //d2
                     

                     if (hd[1] > 0) {
             
                         d2icon.style.display = "block";
                         if (hd[1] >= 10) {
                             hd[1] = 10;
                         } else if (hd[1] < 10) {
                             dragonDEF = dragonDEF - dragondefaultdef*0.04;
                         }
                         
                         document.getElementById("d2number").innerHTML = hd[1];
                     }
                     //d3
                    

                     if (hd[2] > 0) {
             
                         d3icon.style.display = "block";
                         if (hd[2] >= 10) {
                             hd[2] = 10;
                         } 
                         
                         document.getElementById("d3number").innerHTML = hd[2];
                     }
                    
                    effect.style.backgroundImage = "url('images/skill21.png')";
                    break;
                case "reveredpresence":
                    
                    eleDMG = 0;
                    phyDMG = 0;
                    skillcd[1] = 3;
                    hploss = playerMaxHP - playerHP;
                    holyHealSkill(playerATK*30.4+hploss*0.3);
                    effect.style.backgroundImage = "url('images/skill22.png')";
                    break;
                case "divinechant":
                   debuffAmount = hd[0]+hd[1]+hd[2];
                    eleDMG = playerATK*4 + 1515 + playerATK*debuffAmount;
                    phyDMG = 0;
                    hd = [0,0,0];
                    skillcd[2] = 4;
                    dragonATK = dragondefaultatk;
                    dragonDEF = dragondefaultdef;
                    d1icon.style.display = "none";
                    d2icon.style.display = "none";
                    d3icon.style.display = "none";
                    effect.style.backgroundImage = "url('images/skill23.png')";
                    break;
                case "transcendenthymn":
                   eleDMG = 0;
                   phyDMG = 0;
                   skillcd[3] = 4;
                    stun = true;
                    stunmodifier = 0;
                    stunturn = 2;
                    stunicon.style.display = "block";
         
                    effect.style.backgroundImage = "url('images/skill24.png')";
                    break;
                case "frostycrown":
                    phyDMG = 0;
                    eleDMG = playerATK*1.2 + 310;
                    if (frost < 3) {
                        frost++;
                    } else {
                        frost = 3;
                        
                    }
                    frostmodifier = frost/10;
                    document.getElementById("frostnumber").innerHTML = frost;
                    frosticon.style.display = "block";
                    //effect.style.backgroundImage = "url('images/skill29.png')";
                    break;
                case "frigidmind":
                    skillcd[1] = 3;
                    phyDMG = 0;
                    eleDMG = playerATK*2.2 + 570;
                    if (frost > 0) {
                        console.log(frost);
                        frozen = true;
                        frozenturn = frost;
                        frozenmodifier = 0.4;
                        document.getElementById("frozenicon").style.display = "block";
                        document.getElementById("frozennumber").innerHTML = frozenturn+1;
                    }
                    //effect.style.backgroundImage = "url('images/skill30.png')";
                    break;
                case "icyheart":
                    phyDMG = 0;
                    if (frozen == true) {
                        eleDMG = (playerATK*2.3 + 1800)*1.4*frost;
                        frost = 0;
                        frozen = false;
                        frozenturn = 0;
                        frozenmodifier = 0;
                        frosticon.style.display = "none";
                        document.getElementById("frostnumber").innerHTML = "0";
                        document.getElementById("frozenicon").style.display = "none";
                        document.getElementById("frozennumber").innerHTML = "0";
                    } else {
                        eleDMG = playerATK*5 + 1800;
                    }
                
                    skillcd[2] = 5;
                    //effect.style.backgroundImage = "url('images/skill19.png')";
                    break;
                case "glacialaura":
                    phyDMG = 0;
                    eleDMG = 0;
                    healSkill(playerMaxHP*0.3);
                    holyHealSkill(playerMaxHP*0.4);
                    glacialdmgdownmod = 0.3;
                    glacialdmgupmod = 0.2;
                    skillcd[3] = 3;
                    //effect.style.backgroundImage = "url('images/skill32.png')";
                    break; 
                                          
            }
            if (skillcd[1] > 0) {
                document.getElementById("a1").style.opacity = 1;
            }
            if (skillcd[2] > 0) {
                document.getElementById("a2").style.opacity = 1;
            }
            if (skillcd[3] > 0) {
                document.getElementById("a3").style.opacity = 1;
            }
            
           
               
            //raw damage calculation
            if (debuffAmount >= 20) {
                totaldebuffmodifier = 0.3;
            } else {
                totaldebuffmodifier = 0;
            }
            
            if (skill == "huntersinstinct" || skill == "crimsonvitality" || skill == "reveredpresence" || skill == "transcendenthymn" || skill == "glacialaura") {
                damagePlayer = 0;
                dragonDEFmodifier = 0;
            } else {
                dragonDEFmodifier = 1;
                critRoll = random(1,100);
                if (critRoll >= 100-critRate) {
                    critHit=true;
                    damagePlayer = random(50, 100) + phyDMG + eleDMG;
                    damagePlayer = damagePlayer+damagePlayer*critDmg;
                } else {
                    critHit=false;
                    damagePlayer = random(50, 100) + phyDMG + eleDMG;
                }
                playerCritText.innerHTML = critRate + "%";
                playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
            }
           
            

            if (dmgreceive == true) {
                damagePlayer = damagePlayer + damagePlayer*0.3 + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier + damagePlayer*0.03*bloodsigil - dragonDEF*dragonDEFmodifier + damagePlayer*0.02*hd[2] + damagePlayer*totaldebuffmodifier + damagePlayer*frozenmodifier + damagePlayer*frostmodifier + damagePlayer*glacialdmgupmod;
                dragonHP -= damagePlayer.toFixed(0);
                 dmgreceive = false;
                dmgReceiveIcon.style.display = "none";
            } else {
                damagePlayer = damagePlayer + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier + damagePlayer*0.03*bloodsigil - dragonDEF*dragonDEFmodifier + damagePlayer*0.02*hd[2] + damagePlayer*totaldebuffmodifier+damagePlayer*frozenmodifier + damagePlayer*frostmodifier + damagePlayer*glacialdmgupmod;
                dragonHP -= damagePlayer.toFixed(0);
               
            }
 
             
            //check debuff states and calculate debuff dmg
            if (hunteratkcooldown == 0) {
                        hunteratkbuff = false;
                        hunteratkmodifier = 0;
                        hunterAtkIcon.style.display = "none";
                        critDmg = defaultCritDMG;
                        critRate = defaultCrit;
            } else {
                    hunteratkcooldown--;
            }

            playerCritText.innerHTML = critRate + "%";


            if (doubledmgState = true) {
                doubledmgState = false;
                doubledmgIcon.style.display = "none";
                doublemodifier = 0;
            }
            
            if (holyshieldamount==0 && holyshieldicon.style.display=="block") {
                holyshieldicon.style.display = "none";
                document.getElementById("glow").style.display = "none";
            }
             playerHealthText.innerHTML = parseInt(playerHP);
             if (poisonState == true) {
                poisonDot = playerATK*1.2;
                dragonHP = dragonHP - poisonDot;
                if (poisonTurn > 0) {
                    poisonTurn--;
                    poisonTurnText.innerHTML = poisonTurn + " turns left.<br>Passive: Decreases DEF by 35%.";
                } else if (poisonTurn == 0) {
                    poisonTurn = 0;
                    poisonDot = 0;
                    poisonState = false;
                    poisonIcon.style.display = "none";
                    dragonDEF = dragonDEFTemp;
                } 
            }
            if (reflectstate == true) {
                if (reflectturn > 0) {
                    reflectturn--;
                } else if (reflectturn == 0) {
                    reflectturn = 0;
                    reflectstate = false;
                    reflectmodifier = 0;
                    reflecticon.style.display = "none";
                }
            }
            if (bleedState == true) {
                bleedDot = playerATK*1.25;
                dragonHP = dragonHP - bleedDot;
                if (bleedTurn > 0) {
                    bleedTurn--;
                    bleedTurnText.innerHTML = bleedTurn + " turns left.";
                } else if (bleedTurn == 0) {
                    bleedTurn = 0;
                    bleedDot = 0;
                    bleedState = false;
                    bleedIcon.style.display = "none";
                }
            }
            if (lightatkdebuff == true) {
                if (lightatkdebuffturn > 0) {
                    lightatkdebuffturn--;
                } else if (lightatkdebuffturn == 0) {
                    dragonATK = dragondefaultatk;
                    lightatkdebuffturn=0;
                    lightatkdebuff=false;
                    lightatkdebufficon.style.display="none";
                }
            }
            if (lightdefbuff == true) {
                if (lightdefbuffturn > 0) {
                    lightdefbuffturn--;
                    playerDefText.innerHTML = playerDEF.toFixed(0);
                } else if (lightdefbuffturn == 0) {
                    lightdefbuffturn=0;
                    lightdefbuff=false;
                    playerDEF = playerdefaultdef;
                    lightdefbufficon.style.display="none";
                    playerDefText.innerHTML = playerDEF.toFixed(0);
                }
            }
            if (moonbuff == true) {
                if (moonbuffturn > 0) {
                    moonbuffturn--;
                } else if (moonbuffturn == 0) {
                    moonbuffturn=0;
                    playerATK = playerATKTemp;
                    playerAtkText.innerHTML = playerATK;
                    moonbuff = false;
                    moonstate = false;
                    moonbufficon.style.display="none";
                }
            }
            if (crimsonbuff == true) {
                if (crimsonturn > 0) {
                    crimsonturn--;
                    playerMaxHP = playerMaxHPDefault + playerMaxHPDefault*0.3;
                } else if (crimsonturn == 0) {
                    crimsonturn = 0;
                    playerMaxHP = playerMaxHPDefault;
                    crimsonbuff = false;
                    crimsonicon.style.display = "none";
                }
            }

            if (stun == true) {
                if (stunturn > 0) {
                    stunturn--;

                } else if (stunturn == 0) {
                    stunturn = 0;
                    stun = false;
                    
                    reflectstate = true;
                    reflecticon.style.display = "block";
                    reflectturn = 3;
                    reflectmodifier = 0.5;
                    stunicon.style.display = "none";
                }
            }
            if (frozen == true) {
                if (frozenturn > 0) {
                    frozenturn--;
                    document.getElementById("frozennumber").innerHTML = frozenturn+1;

                } else if (frozenturn == 0) {
                    frozenturn = 0;
                    frozen = false;
                    frozenmodifier = 0;
                    frozenicon.style.display = "none";
                    document.getElementById("frozennumber").innerHTML = "0";
                }
            }
            playerMaxHPText.innerHTML = parseInt(playerMaxHP);
            playerHealth.max = playerMaxHP;
            //energy calculation and effect application
            switch (skill) {
                case "icebolt":
                    energy = energy + random(20, 25);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    
                    break;
                    case "frostycrown":
                        energy = energy + 15;
                        if (energy >= 100) {
                            energy = 100;
                        }
                        break;
                 case "sacredanthems":
                    energy = energy + 15;
                    if (energy >= 100) {
                        energy = 100;
                    }
                    break;
                case "arrowoflight":
                    energy = energy + random(10, 20);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    break;
                case "soulsiphon":
                    if (moonbuff==true) {
                        energy = energy+20;
                    } else {
                        energy = energy+10;
                    }
                        if (energy >= 100) {
                            energy = 100;
                        }
                    break;
                case "rainoffire":
                    dmgreceive = true;
                    dmgReceiveIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "baneofdeath":
                    if (poisonState==false) {
                        poisonState = true;
                        poisonTurn = 3;
                        dragonDEFTemp = dragonDEF;
                        dragonDEF = dragonDEF - dragonDEF*0.35;
                    } else {
                        poisonState = true;
                        poisonTurn = 3;
                    }
                    
                    poisonTurnText.innerHTML = poisonTurn + " turns left.<br><br>Passive: Decreases DEF by 35%.";
                    poisonIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "bloodshed":
                    bleedState = true;
                    bleedTurn = 3;
                    bleedTurnText.innerHTML = bleedTurn + " turns left.";
                    bleedIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "piercingshot":
                    energy = energy - energyCon;
                   
                    break;
                case "righteousness":
                    energy = energy + random(10, 20);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    if (lightatkdebuff == false) {
                        lightatkdebuff = true;
                        lightatkdebuffturn = 2;
                        dragonATK = dragonATK - dragonATK*0.2;
                    } else {
                        lightatkdebuff = true;
                        lightatkdebuffturn = 2;
                    }
                    lightatkdebufficon.style.display = "block";
                    break;
                case "rectitude":
                    energy = energy - energyCon;
                    if (lightdefbuff == false) {
                  
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                        playerDEF = playerdefaultdef + playerdefaultdef*0.3;
                    } else {
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                    }
                    playerDefText.innerHTML = playerDEF.toFixed(0);
                    lightdefbufficon.style.display = "block";  
                    break;
                case "honor":
                    energy = energy - energyCon;
                    holyshieldstate = true;
                    document.getElementById("glow").style.display = "block";
                    holyshieldamount = parseInt(holyshieldamount) + playerMaxHP*0.5;
                    holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
                    break;
                case "judgment":
                    energy = energy - energyCon;
                    energy = energy + lightmark*random(5,10);
                    if (energy >=100) {
                        energy=100;
                    }
                    lightmark = 0;
                    lightmarkicon.style.display = "none";
                    break;
                case "mindgleaning":
                    if (soulsiphon == true) {
                        healSkill(damagePlayer.toFixed(0)*2.5);
                    }
                    energy = energy - energyCon;
                    break;
                case "painlessdeath":
                    energy = energy - energyCon;
                    if (soulsiphon == true && mindgleaning == true) {
                        healSkill(playerMaxHP);
                        energy = 100;
                    } else if (soulsiphon == true && mindgleaning == false) {
                        healSkill(damagePlayer.toFixed(0)*0.7);
                    } else if (soulsiphon == false && mindgleaning == true) {
                        energy = energy+50;
                        if (energy >=100) {
                            energy=100;
                        }
                    }
                    soulsiphon = false;
                    mindgleaning = false;
                    soulsiphonicon.style.display = "none";
                    mindgleaningicon.style.display = "none";
                    break;
                case "bloodembrace":
                        energy = energy + random(10, 13);
                        if (energy >= 100) {
                            energy = 100;
                        }
                        if (playerHP <= playerMaxHP*0.5) {
                            if (bloodsigil < 10) {
                            bloodsigil++;
                            } else {
                                bloodsigil=10;
                            }
                            bloodsigilicon.style.display = "block";
                            document.getElementById("bloodsigilText").innerHTML = bloodsigil + " stacks.";
                        }
                        break;
                case "rosemarysgift":
                        energy = energy - energyCon;
                        if (bloodsigil < 10) {
                            bloodsigil=bloodsigil+2;
                            } else {
                                bloodsigil=10;
                            }
                        bloodsigilicon.style.display = "block";
                        document.getElementById("bloodsigilText").innerHTML = bloodsigil + " stacks.";
                        break;
                case "ichorretaliation":
                    energy = energy - energyCon;
                    holyshieldstate = true;
                    document.getElementById("glow").style.display = "block";
                    holyshieldamount = parseInt(holyshieldamount) + playerMaxHP*0.02*bloodsigil;
                    holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
                    bloodsigil=0;
                    bloodsigilicon.style.display = "none";
                    break;
                case "crimsonvitality":
                    energy = energy - energyCon;
                    hploss = playerMaxHP - playerHP;
                    crimsonicon.style.display = "block";
                    if (crimsonbuff == false) {
                        crimsonbuff = true;
                        crimsonturn = 3;
                        playerMaxHP = playerMaxHPDefault + playerMaxHPDefault*0.3;
                    } else {
                        crimsonbuff = true;
                        crimsonturn = 3;
                    }
                    holyshieldstate = true;
                    document.getElementById("glow").style.display = "block";
                    holyshieldamount = parseInt(holyshieldamount) + hploss*0.3;
                    holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
                    playerMaxHPText.innerHTML = parseInt(playerMaxHP);
                    playerHealth.max = playerMaxHP;
                    break;
                default:
                    energy = energy - energyCon;
                    break;
                
            }
            critDmgTemp = critDmg;
            critTemp = critRate;
            if (soulsiphon == true && mindgleaning == true) {
                critDmg = critDmg + 1;
                critRate = critRate + 40;
            } else {
                critDmg = critDmgTemp;
                critRate = critTemp;
            }
            playerEnergyText.innerHTML = energy;
            
            
            playerCritText.innerHTML = parseInt(critRate) + "%";
            playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
            
            if (cooldown == 0) {
                document.getElementById('heal').style.pointerevents = 'auto';
                document.getElementById('heal').style.cursor = 'pointer';
                document.getElementById('heal').style.opacity = '1';
                document.getElementById('heal').setAttribute("onclick", "heal()");
            }

            if (holyshieldcooldown == 0) {
                document.getElementById('holyshield').style.pointerevents = 'auto';
                document.getElementById('holyshield').style.cursor = 'pointer';
                document.getElementById('holyshield').style.opacity = '1';
                document.getElementById('holyshield').setAttribute("onclick", "holyShield()");
            }
            
           
           if (holyshieldamount >= playerMaxHP) {
                holyshieldamount = playerMaxHP;
            }
            holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
            playerHealth.value = playerHP;
            dragonHealth.value = dragonHP;
            dragonHealth.max = dragonMaxHP;
            playerHealthText.innerHTML = parseInt(playerHP);
            playerMaxHPText.innerHTML = parseInt(playerMaxHP);
            playerHealth.max = playerMaxHP;
            document.getElementById("sigilnumber").innerHTML = bloodsigil;
            document.getElementById("lightnumber").innerHTML = lightmark;
            let totalDot = bleedDot + poisonDot;
            
            if (critHit == false) {
                document.getElementById("playerdmgtext").innerHTML = damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                document.getElementById("playerdmgtext").style.left = "311px";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                logmessage = "You did <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> DMG on the dragon by using <span class='damage'>" + skillName + "</span>.";
                
                
            } else {
                document.getElementById("playerdmgtext").innerHTML = "CRIT<br>" + damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                document.getElementById("playerdmgtext").style.left = "311px";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                logmessage = "You did a <span class='damage'>Critical DMG</span> of <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> on the dragon by using <span class='damage'>" + skillName + "</span>.";
                
                critHit=false;

            }
            turn++;
            damageText.innerHTML = logmessage;
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + "</span>: " + logmessage;
            logcontainer.prepend(pnode);

            if (poisonDot > 0) {
                document.getElementById("playerpoisontext").innerHTML = poisonDot.toFixed(0);
                document.getElementById("playerpoisontext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerpoisontext").style.opacity = 0}, 1000);
                document.getElementById("playerpoisontext").style.opacity = 1;
            }
            if (bleedDot > 0) {
                document.getElementById("playerbleedtext").innerHTML = bleedDot.toFixed(0);
                document.getElementById("playerbleedtext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerbleedtext").style.opacity = 0}, 1000);
                document.getElementById("playerbleedtext").style.opacity = 1;
            }
            clearInterval(effectInterval);
            effectInterval = setInterval(playNextFrame, 60);
           
    turnText.innerHTML = "The dragon is going to deal some damage...";
    
    setTimeout(()=>{
        

        
        //damage
        if (shieldState == false) {
            damageDragon = dragonATK + random(300, 500) - playerDEF;
            damageDragon = damageDragon - damageDragon*0.02*bloodsigil - damageDragon*glacialdmgdownmod;
        } else {
            damageDragon = 0;
            shieldState = false;
            shieldicon.style.display = "none";
        }
        if (stun == true || frozen == true) {
            damageDragon = 0;
        }
        if (holyshieldstate == true) {
            holyshieldamount -= damageDragon.toFixed(0);
            if (holyshieldamount <= 0) {
                playerHP = playerHP - -holyshieldamount;
                holyshieldamount = 0;
                holyshieldstate = false;
                document.getElementById("glow").style.display = "none";
                glacialdmgdownmod = 0;
                glacialdmgupmod = 0;
            }
            holyshieldbar.value = parseInt(holyshieldamount);
            holyshieldText.innerHTML = parseInt(holyshieldamount);
            
        } else {
            playerHP -= damageDragon.toFixed(0);
        }
        
     

        document.getElementById("playerdmgtext").innerHTML = damageDragon.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                document.getElementById("playerdmgtext").style.left = "849px";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
        dragonHP = dragonHP - damageDragon*reflectmodifier;
        holyshieldText.innerHTML = parseInt(holyshieldamount);
        holyshieldbar.value = parseInt(holyshieldamount);
playerHealth.value = playerHP;
dragonHealth.value = dragonHP;
dragonHealth.max = dragonMaxHP;
playerHealthText.innerHTML = parseInt(playerHP);
playerMaxHPText.innerHTML = parseInt(playerMaxHP);
playerHealth.max = playerMaxHP;
        //reflect
        if (dragonHP <= 0) {
                dragonMaxHP = dragonMaxHP + dragonMaxHP*0.1 + random(50,95)*dragonLevel;
                dragonHP = dragonMaxHP;
                dragonDEF = dragonDEFTemp;
                dragondefaultatk= dragondefaultatk + dragondefaultatk*0.1 + random(15,25)*dragonLevel;
                dragondefaultdef = dragondefaultdef + dragondefaultdef*0.1 + random(13,21)*dragonLevel;
                dragonATK = dragondefaultatk;
                dragonDEF = dragondefaultdef;
                poisonDot = 0;
                poisonState = false;
                poisonTurn = 0;
                dmgreceive = false;
                dragonLevel++;
                bleedState = false;
                bleedTurn = 0;
                bleedDot = 0;
                
                lightmark = 0;
                lightatkdebuff = false;
                lightatkdebuffturn = 0;
                stun = false;
                stunmodifier = 1;
                stunturn = 0;
                frozen = false;
                frozenmodifier = 0;
                frozenturn = 0;
                frost = 0;
                frosticon.style.display = "none";
                document.getElementById("frostnumber").innerHTML = "0";
                document.getElementById("frozennumber").innerHTML = "0";
                soulsiphon = false;
                mindgleaning = false;
    
                hd = [0,0,0];
                poisonIcon.style.display = "none";
                bleedIcon.style.display = "none";
                dmgReceiveIcon.style.display = "none";
                lightmarkicon.style.display = "none";
                lightatkdebufficon.style.display = "none";
                soulsiphonicon.style.display = "none";
                mindgleaningicon.style.display = "none";
                
                d1icon.style.display = "none";
                d2icon.style.display = "none";
                d3icon.style.display = "none";
                
                dragonHealth.value = dragonHP;
                dragonHealth.max = dragonMaxHP;
                document.getElementById("dragonname").innerHTML = "Rosemary the Dark Queen Lvl. "+dragonLevel;
        setTimeout(()=>{
            document.getElementById("message").style.pointerEvents = "none";
            lvlupPanel.classList.add('show');
            
        }, 900);
                stunicon.style.display = "none";
                frozenicon.style.display = "none";
                
    
    }
    
         if (playerHP < 0) {
            playerHP = 0;
            document.getElementById("tutorial").style.display = "block";
            document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'><br><button onClick='window.location.reload();'>try again</button>";
     
            
        }
            turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
            cooldown--;
            holyshieldcooldown--;
            logmessage = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you.";
            damageText.innerHTML = logmessage;
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + "</span>: " + logmessage;
            logcontainer.prepend(pnode);
            let cointemp = random(100,200)*dragonLevel*0.3;
            coin = coin + cointemp;
            document.getElementById("coin").innerHTML = coin.toFixed(0);
            document.getElementById("cointext").innerHTML = "Available coins: "+ coin.toFixed(0);
            logmessage = "You received <span class='damage'>"+cointemp.toFixed(0)+" coins.";
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + "</span>: " + logmessage;
            logcontainer.prepend(pnode);
        }, 1000);
       setTimeout(()=>{
        document.getElementById('message').style.pointerEvents = "auto";
        magicField.disabled = false;
        if (skillcd[1] > 0) {
            skillcd[1]--;
        }
        if (skillcd[2] > 0) {
            skillcd[2]--;
        }
        if (skillcd[3] > 0) {
            skillcd[3]--;
        }
        
        

        
    },1500)}

    if (skillcd[1] == 1) {
        document.getElementById("a1").style.opacity = 0;
    }
    if (skillcd[2] == 1) {
        document.getElementById("a2").style.opacity = 0;
    }
    if (skillcd[3] == 1) {
        document.getElementById("a3").style.opacity = 0;
    }
    
}
