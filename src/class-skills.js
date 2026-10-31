/* Class-specific skills and their effects.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

function mageSkill(skill) {
    //define the skill consumption
    switch (skill) {
       case "icebolt":
               skillName = "Icebolt";
               energyCon = 0;
           break;
       case "rainoffire":
           if (skillcd[1] > 0) {
            err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
           } else {
           skillName = "Rain of Fire";
           energyCon = 30;
           }
           break;
       case "thunderstorm":
           if (skillcd[2] > 0) {
              err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
           } else {
           skillName = "Thunderstorm";
           energyCon = 60;
           }
           break;
       case "baneofdeath":
           if (skillcd[3] > 0) {
              err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
           } else {
           skillName = "Bane of Death";
           energyCon = 25;
           }
           break;
        default:
            err = new Error("Invalid skill for your class.");
            err.id = 'invalid-skill';
            throw err;
   }
}

function archerSkill (skill) {
    switch (skill) {
            case "arrowoflight":
                skillName = "Arrow of Light";
                energyCon = 0;
                break;
            case "bloodshed":
                if (skillcd[1] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Bloodshed";
                energyCon = 35;
                }
                break;
            case "piercingshot":
                if (skillcd[2] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Piercing Shot";
                energyCon = 60;
                }
                break;
            case "huntersinstinct":
                if (skillcd[3] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Hunter's Instinct";
                energyCon = 40;
                }
                break;
                default:
                    throw new Error("Invalid skill for your class."); 
    }
}

function paladinSkill(skill) {
    switch (skill) {
    
    case "righteousness":
                
    skillName = "Righteousness";
    energyCon = 0;
    break;
case "rectitude":
    if (skillcd[1] > 0) {
        err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
    } else {
    skillName = "Rectitude";
    energyCon = 30;
    }
    break;
case "judgment":
    if (skillcd[2] > 0) {
        err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
    } else {
    skillName = "Judgment";
    energyCon = 60;
    }
    break;
case "honor":
    if (skillcd[3] > 0) {
        err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
    } else {
    skillName = "Honor";
    energyCon = 40;
    }
    break;
    default:
        throw new Error("Invalid skill for your class.");
}
}

function necroSkill(skill) {
    switch (skill) {
        case "soulsiphon":
                
        skillName = "Soul Siphon";
        energyCon = 0;
        
        break;
    case "mindgleaning":
        if (skillcd[1] > 0) {
           err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
        } else {
        skillName = "Mind Gleaning";
        energyCon = 30;
        }
        break;
    case "painlessdeath":
        if (skillcd[2] > 0) {
           err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
        } else {
        skillName = "Painless Death";
        energyCon = 80;
        }
        break;
    case "songofmoonlight":
        if (skillcd[3] > 0) {
           err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
        } else {
        skillName = "Song of Moonlight";
        energyCon = 40;
        }
        break;
        default:
            throw new Error("Invalid skill for your class."); 
    }
}

function knightSkill(skill) {
    switch (skill) {
        case "bloodembrace":
            skillName = "Blood Embrace";
            energyCon = 0;
            break;
        case "rosemarysgift":
            if (skillcd[1] > 0) {
               err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
            } else {
            skillName = "Rosemary's Gift";
            energyCon = 30;
            }
            break;
        case "ichorretaliation":
            if (skillcd[2] > 0) {
               err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
            } else {
            skillName = "Ichor Retaliation";
            energyCon = 70;
            }
            break;
        case "crimsonvitality":
            if (skillcd[3] > 0) {
               err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
            } else {
            skillName = "Crimson Vitality";
            energyCon = 60;
            }
            break;       
        default:
            throw new Error("Invalid skill for your class.");  
    }
}

function swordsingerSkill(skill) {
    switch (skill) {
        case "sacredanthems":
                skillName = "Sacred Anthems";
                energyCon = 0;
                break;
            case "reveredpresence":
                if (skillcd[1] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Revered Presence";
                energyCon = 40;
                }
                break;
            case "divinechant":
                if (skillcd[2] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Divine Chant";
                energyCon = 80;
                }
                break;
            case "transcendenthymn":
                if (skillcd[3] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Transcendent Hymn";
                energyCon = 50;
                }
                break;       
        default:
            err = new Error("Invalid skill for your class.");
            err.id = 'invalid-skill';
            throw err;
    }
}
function cryomancerSkill(skill) {
    switch (skill) {
            case "frostycrown":
                skillName = "Frosty Crown";
                energyCon = 0;
                break;
            case "frigidmind":
                if (skillcd[1] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Frigid Mind";
                energyCon = 40;
                }
                break;
            case "icyheart":
                if (skillcd[2] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Icy Heart";
                energyCon = 80;
                }
                break;
            case "glacialaura":
                if (skillcd[3] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Glacial Aura";
                energyCon = 40;
                }
                break;       
        default:
            err = new Error("Invalid skill for your class.");
            err.id = 'invalid-skill';
            throw err;
    }
}
