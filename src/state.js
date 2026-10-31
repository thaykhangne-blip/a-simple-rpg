/* Shared game state, cached DOM references, and bootstrap listeners.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

/*jquery load function */
var input = document.querySelector('input[type="text"]');
var popupInput = document.querySelector('.popupInput');

input.addEventListener('click', function() {
  popupInput.classList.add('show-popup');
});

input.addEventListener('blur', function() {
  popupInput.classList.remove('show-popup');
});
let err;
;(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
      var ovrl = id("overlay"),
          prog = id("progress"),
          stat = id("progstat"),
          img = document.images,
          c = 0,
          tot = img.length;
      if(tot == 0) return doneLoading();
  
      function imgLoaded(){
        c += 1;
        var perc = ((100/tot*c) << 0) +"%";
        prog.style.width = perc;
        stat.innerHTML = "Loading, please wait..."+perc;
        if(c===tot) return doneLoading();
      }
      function doneLoading(){
        ovrl.style.opacity = 0;
        setTimeout(function(){
          ovrl.style.display = "none";
        }, 1200);
      }
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());
  
/* magic values */

let effect = document.getElementById("effect");
let currentFrame = 1;
let spriteSizeX = 192;
let spriteSizeY = 192;
let effectInterval;

/* custom function */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


/* texts, graphics and buttons */
let dragonHealthText = document.querySelector("h4");
let playerHealthText = document.getElementById("hp");
let alertText = document.getElementById("alert");
let alertHealText = document.getElementById("healalert");
let playerEnergyText = document.getElementById("ene");
let damageText = document.getElementById("welcomemessage");
let turnText = document.getElementById("turn");
let messagebox;
let enragedicon = document.getElementById("enragedicon");
let playerHealth = document.getElementById("playerHealth");
let dragonHealth = document.getElementById("dragonHealth");
let popup = document.getElementById("popup");
let playerAtkText = document.getElementById("atk");
let skillActivated = document.getElementById("skillactive");
let healBuffIcon = document.getElementById("healbufficon");
let holyshieldbar = document.getElementById("holyshieldbar");
let holyshieldText = document.getElementById("holyshieldText");
let holyshieldicon = document.getElementById("holyshieldicon");
let dmgReceiveIcon = document.getElementById("dmgreceiveicon");
let poisonIcon = document.getElementById("poisonicon");
let doubledmgIcon = document.getElementById("doubledmgicon");
let playerClass = 'mage';
let switchButtonDefault = document.getElementById("mageclass");
let bleedIcon = document.getElementById("bleedicon");
let hunterIcon = document.getElementById("huntericon");
let hunterAtkIcon = document.getElementById("hunteratkicon");
let playerDefText = document.getElementById("def");

let playerCritText = document.getElementById("crit");
let playerCritDMGText = document.getElementById("critdmg");
let lightmarkicon = document.getElementById("lighticon");
let lightatkdebufficon = document.getElementById("lightatkdebufficon");
let lightdefbufficon = document.getElementById("lightdefbufficon");
let soulsiphonicon = document.getElementById("soulsiphonicon");
let mindgleaningicon = document.getElementById("mindgleaningicon");
let moonbufficon = document.getElementById("moonicon");
let bloodsigilicon = document.getElementById("bloodsigilicon");
let crimsonicon = document.getElementById("crimsonicon");
let playerMaxHPText = document.getElementById("maxhp");
let logcontainer = document.getElementById("logcontainer");
let pnode = "";
let d1icon = document.getElementById("d1icon");
let d2icon = document.getElementById("d2icon");
let d3icon = document.getElementById("d3icon");
let reflecticon = document.getElementById("reflecticon");
let stunicon = document.getElementById("stunicon");
let frosticon = document.getElementById("frosticon");
let frozenicon = document.getElementById("frozenicon");
/* character and skill stats */
let skill;
let playerLevel = 1;
let skillcd = [0,0,0,0,0]
let energy = 0;
let energyCon = 0;
let dragonLevel = 1;
let dragonMaxHP = 5000;
let playerMaxHP = 10000;
let dragonHP = dragonMaxHP;
let playerHP = playerMaxHP;
let playerMaxHPDefault = playerMaxHP;
let dragonATK = 500;
let playerdefaultatk = 28000;
let playerATK = playerdefaultatk;
let damageDragon;
let damagePlayer;
let state = false;
let turn = 0;
let eleDMG = 0;
let phyDMG = 0;
let cooldown = 0;
let shieldState = false;
let healAmount = playerMaxHP * 0.25 + random(100, 500);
let healBuff = false;
let totalReceiveHeal = healAmount + healAmount*0.5;
let holyshieldamount = 0;
let holyshieldstate = false;
let holyshieldcooldown = 0;
let dmgreceive = false;
let poisonDot = 0;
let poisonState = false;
let poisonTurn = 0;
let poisonTurnText = document.getElementById("poisonText");
let doubledmgState = false;
let doublemodifier = 0;
let huntermark = false;
let bleedState = false;
let bleedTurn = 0;
let bleedDot = 0;
let bleedTurnText = document.getElementById("bleedText");
let hunteratkbuff = false;
let hunteratkcooldown = 0;
let hunteratkmodifier = 0;
let playerdefaultdef = 250;
let playerDEF = playerdefaultdef;

let dragonDEF = 50;
let critRate = 10;
let critHit = false;
let critDmg = 0.5;
let critRoll = 0;
let defaultCrit = 10;
let defaultCritDMG = 0.5;
let lightmark = 0;
let lightatkdebuff = false;
let lightatkdebuffturn = 0;
let lightdefbuff = false;
let lightdefbuffturn = 0;
let soulsiphon = false;
let mindgleaning = false;
let moonbuff = false;
let moonbuffturn = 0;
let moonbuffamount = 0;
let moonstate = false;
let bloodsigil = 0;
let crimsonbuff = false;
let crimsonturn = 0;
let hploss = playerMaxHP - playerHP;
let dragonATKTemp = 0;
let critDmgTemp = 0;
let critTemp = 0;
let bloodsigilmodifier = 0;
let dragonDEFTemp = 0;
let dragonDEFmodifier = 0;
let dragondefaultdef = dragonDEF;
let dragondefaultatk = dragonATK;
let playerDEFTemp = 0;
let playerATKTemp = 0;
let logmessage = "";
let hd = [0,0,0];
let dstate = [false,false,false];
let debuffatkstate = false;
let debuffAmount = 0;
let reflectstate = false;
let reflectturn = 0;
let reflectmodifier = 0;
let totaldebuffmodifier = 0;
let stun = false;
let stunmodifier = 1;
let stunturn = 0;
let coin = 0;
let atklvlText = document.getElementById("atkup");
let deflvlText = document.getElementById("defup");
let hplvlText = document.getElementById("hpup");
let critlvlText = document.getElementById("critup");
let lvlupPanel = document.getElementById("levelup");
let statslvl = [1,1,1,1];
let statstype;
let frost = 0;
let frozen = false;
let frozenturn = 0;
let frozenmodifier = 0;
let frostmodifier = 0;
let glacialdmgupmod = 0;
let glacialdmgdownmod = 0;
playerCritText.innerHTML = critRate + "%";
playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
playerEnergyText.innerHTML = energy;
playerAtkText.innerHTML = playerATK;
playerHealthText.innerHTML = parseInt(playerHP);
playerMaxHPText.innerHTML = parseInt(playerMaxHP);
playerDefText.innerHTML = playerDEF;
