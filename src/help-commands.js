/* Help popup content and command input handling.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

let helpText = (a) => {
   popup.classList.add('show');
    switch (a) {
        
        case "3":
            popup.innerHTML = "<h2>Blessing of Earth<hr>/support healing</h2><img src='images/healicon.png' class='icon'><br><p>Heal yourself by 25% (+100 ~ 500) of your HP. Cooldown: 3 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "4":
            popup.innerHTML = "<h2>Blessing of Light<hr>/support shield</h2><img src='images/shield.png' class='icon'><br><p>Nullify 1 instance of attack from the dragon.</p><button onclick='closePopup()'>close</button>";
            break;
        case "5":
            popup.innerHTML = "<h2>Heaven's Will<hr>/support holyshield</h2><img src='images/holyshield.png' class='icon'><br><p>Grants you a shield of 50% of Max HP. Cooldown: 5 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "6":
            popup.innerHTML = "<h2>Edge of Eternity<hr>/support doubledmg</h2><img src='images/doubledmg.png' class='icon'><br><p>Doubles the next instance of direct attack.</p><button onclick='closePopup()'>close</button>";
            break;
        case "s1":
            popup.innerHTML = "<h2>Icebolt</h2><img src='images/s1.png' class='icon'><br><p>Deals 110% DMG (+250) to the target and restore 20~25 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s2":
            popup.innerHTML = "<h2>Rain of Fire</h2><img src='images/s2.png' class='icon'><br><p>Deals 150% DMG (+450) to the target and makes it receive 30% more DMG for any subsequent direct attack.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s3":
            popup.innerHTML = "<h2>Thunderstorm</h2><img src='images/s3.png' class='icon'><br><p>Deals 360% DMG (+1150) to the target. With Bane of Death, this skill's DMG is increased by 50%. Also, increases the amount of healing by 50% for the next heal skill. <br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;  
        case "s4":
            popup.innerHTML = "<h2>Bane of Death</h2><img src='images/s4.png' class='icon'><br><p>Deals 150% DMG (+150) and another 120% DMG to the target every turn for 3 turns. <br>Energy consumption: 25</p><button onclick='closePopup()'>close</button>";
            break;
        case "s5":
            popup.innerHTML = "<h2>Arrow of Light</h2><img src='images/s5.png' class='icon'><br><p>Deals 100% DMG (+200) to the target. Marks it with a Hunter's Mark for 1 turn. Restores 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s6":
            popup.innerHTML = "<h2>Bloodshed</h2><img src='images/s6.png' class='icon'><br><p>Deals 200% DMG (+470) to the target and another 125% DMG to the target every turn for 3 turns.<br>Energy consumption: 35</p><button onclick='closePopup()'>close</button>";
            break;
        case "s7":
            popup.innerHTML = "<h2>Piecing Shot</h2><img src='images/s7.png' class='icon'><br><p>Deals 380% DMG (+1050) to the target. If the target is under Hunter's Mark, removes the mark and deals an additional amount of 150% DMG. Also, if the target is under Bleed, this skill's DMG is increased by 30%.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s8":
            popup.innerHTML = "<h2>Hunter's Instinct</h2><img src='images/s8.png' class='icon'><br><p>Increases Critical DMG by 120% for 3 turns and Critical Rate until the next Crit Hit by 30% and mark the enemy with Hunter's Mark.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s9":
            popup.innerHTML = "<h2>Righteousness</h2><img src='images/s9.png' class='icon'><br><p>Deals 120% DMG (+240) to the target and decreases its ATK by 20% for 2 turns and mark it with a Light mark. Restores 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s10":
            popup.innerHTML = "<h2>Rectitude</h2><img src='images/s10.png' class='icon'><br><p>Deals 140% DMG (+300) to the target and marks it with a Light mark. Also, increases self DEF by 30% for 2 turns.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s11":
            popup.innerHTML = "<h2>Judgment</h2><img src='images/s11.png' class='icon'><br><p>Deals 330% DMG (+1315) to the target. For each Light mark on the target, deals an additional 25% of DEF as DMG and removes all Light marks.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s12":
            popup.innerHTML = "<h2>Honor</h2><img src='images/s12.png' class='icon'><br><p>Deals 160% DMG (+500) and another 12% of Max HP as DMG if more than 5 Light Marks are present. After use, removes 2 Light Marks. After that, grants a shield of 50% of his Max HP.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s13":
            popup.innerHTML = "<h2>Soul Siphon</h2><img src='images/s13.png' class='icon'><br><p>Deals 110% DMG (+280) to the target and marks it with a Soul Siphon mark. Restores 20 energy if Moon buff is on, else restores 10 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s14":
            popup.innerHTML = "<h2>Mind Gleaning</h2><img src='images/s14.png' class='icon'><br><p>Deals 180% DMG (+700) to the target. If the target is under Soul Siphon mark, restores HP by 100% of DMG dealt. Places a Mind Gleaning mark on the enemy.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s15":
            popup.innerHTML = "<h2>Painless Death</h2><img src='images/s15.png' class='icon'><br><p>Deals 380% DMG (+1500) to the target. If: <br>-the target is under Soul Siphon, deals an additional 90% DMG and restores HP by 70% of DMG dealt. Then, removes the mark.<br><br>-the target is under Mind Gleaning, deals an additional 80% DMG and restores 50 energy. Then, removes the mark.<br><br>-the target is under both marks, deals an additional 200% DMG and restores both HP and energy to full. Then, removes all marks.<br><br>Energy consumption: 80</p><button onclick='closePopup()'>close</button>";
            break;
        case "s16":
            popup.innerHTML = "<h2>Song of Moonlight</h2><img src='images/s16.png' class='icon'><br><p>Deals 150% DMG (+600) to the target. If it has any mark, gains a Moon buff for 2 turns to increase ATK by 50%.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s17":
            popup.innerHTML = "<h2>Blood Embrace</h2><img src='images/s17.png' class='icon'><br><p>Deals 120% DMG (+310) to the target. If his HP is less than 50%, gain 1 Blood Sigil. Restores 10~13 Energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s18":
            popup.innerHTML = "<h2>Rosemary's Gift</h2><img src='images/s18.png' class='icon'><br><p>Deals 160% DMG (+670) to the target. Deals an additional amount of 10% of his loss HP as DMG. Gain 2 Blood Sigils.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s19":
            popup.innerHTML = "<h2>Painless Death</h2><img src='images/s19.png' class='icon'><br><p>Deals 410% DMG (+1800) to the target. For each Blood Sigil, deals an additional of 50% DMG and 3% of Max HP. Removes all Blood Sigils after that. For each removed Blood Sigil, grants a shield of 2% of his Max HP.<br>Energy consumption: 70</p><button onclick='closePopup()'>close</button>";
            break;
        case "s20":
            popup.innerHTML = "<h2>Crimson Vitality</h2><img src='images/s20.png' class='icon'><br><p>Increases his Max HP by 30% for 3 turns. Also, grants a shield of 30% of his loss HP.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;
        case "s21":
            popup.innerHTML = "<h2>Sacred Anthems</h2><img src='images/s21.png' class='icon'><br><p>Deals 100% DMG (+230) to the target. Applies 2 random Holy Debuffs from this list:<br>- Purity: decreases ATK by 4%.<br>- Justice: decreases DEF by 4%.<br>- Faith: increases incoming DMG by 2%.<br>Each debuff can stack up to 10 times. Also restores 15 Energy.</p><button onclick='closePopup()'>close</button>";
            break;
        case "s22":
            popup.innerHTML = "<h2>Revered Presence</h2><img src='images/s22.png' class='icon'><br><p>Heals for 3040% of ATK + 40% of lost HP. Over-healed amount will be converted into Holy Shield.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s23":
            popup.innerHTML = "<h2>Divine Chant</h2><img src='images/s23.png' class='icon'><br><p>Deals 400% DMG (+1515) to the target and removes all debuffs. For each removed debuff, deals an additional of 100% DMG.<br>Energy consumption: 80</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s24":
            popup.innerHTML = "<h2>Transcendent Hymn</h2><img src='images/s24.png' class='icon'><br><p>Provides a Reflect buff that reflects 50% of received DMG for 2 turns.<br>Energy consumption: 50</p><button onclick='closePopup()'>close</button>";
            break;
        case "p6":
            popup.innerHTML = "<h2>Divine Soprano - Passive</h2><img src='images/p6.png' class='icon'><br><p>When total debuffs reach more than 20, total DMG received by the target increases by 30%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p1":
            popup.innerHTML = "<h2>Arcane Erudition - Passive</h2><img src='images/p1.png' class='icon'><br><p>While Bane of Death effect is active, reduces the target's DEF by 35%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p2":
            popup.innerHTML = "<h2>Forest's Favor - Passive</h2><img src='images/p2.png' class='icon'><br><p>After Hunter's Mark is removed, heals self by 50% of Max HP.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p3":
            popup.innerHTML = "<h2>Grace - Passive</h2><img src='images/p3.png' class='icon'><br><p>Each Lightmark removed restores 5~10 Energy.</p><button onclick='closePopup()'>close</button>";
            break;     
        case "p4":
            popup.innerHTML = "<h2>Forbidden Practice - Passive</h2><img src='images/p4.png' class='icon'><br><p>When both Marks are active, increases Critical Rate by 40% and Critical DMG by 100%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p5":
            popup.innerHTML = "<h2>Hardened Will - Passive</h2><img src='images/p5.png' class='icon'><br><p>Each Blood Sigil will decrease his incoming DMG by 2% (up to 20%) and increases his DMG by 3% (up to 30%).</p><button onclick='closePopup()'>close</button>";
            break;
        case "chest":
            popup.innerHTML = "<h2>Congrats!</h2><p>You've killed the dragon and received a bunch of gold!</p><button onclick='closePopup()'>close</button>";
            document.getElementById('cast').style.display = 'none';
            break;
        case "dragonstats":
            popup.innerHTML = "<h2>Rosemary The Dark Queen Lvl."+dragonLevel+" </h2><h3 class='flavortextminus'>Type: Big Bad Boss</h3><br><br><p>Rosemary's HP: "+dragonHP.toFixed(0)+"/"+dragonMaxHP.toFixed(0)+"</p><p>Dragon's ATK: "+dragonATK.toFixed(0)+"</p><p>Rosemary's DEF: "+dragonDEF.toFixed(0)+"</p><br><button onclick='closePopup()'>close</button>";
            break;
        case "enraged":
            popup.innerHTML = "<h2>The dragon has leveled up!</h2><p>Its ATK, DEF, and Max HP are higher and its HP is restored! Be careful!</p><button onclick='closePopup()'>close</button>";
            break;
        case "wrongcode":
            popup.innerHTML = "<h2>Warning</h2><p>Cannot cast the input spell.</p><button onclick='closePopup()'>close</button>";
            break;
    }
}
const magicField = document.getElementById('magicField');

magicField.addEventListener('keydown', function(event) {
  // Only handle the command if the Enter key is pressed
  if (event.key === 'Enter') {
    // Extract the command and argument from the input
    const input = magicField.value.trim().toLowerCase();
    const [command, ...args] = input.split(' ');

    // Combine the argument words into a single string and remove any spaces
    const arg = args.join('').trim();

    // Call the appropriate function based on the command
    switch (command) {
      case '/skill':
        castMagic(arg);
        break;
      case '/support':
        castSupport(arg);
        break;
      // Add more cases for other commands here
      default:
        popInput('command');
        console.log(`Invalid command: ${command}`);
    }

    // Clear the input field
    magicField.value = '';
  }
});
