/* Input notifications and responsive game scaling.
 * This file is loaded as a classic script to preserve the legacy global scope.
 */

function popInput(err) {
    switch (err) {
      
        case 'invalid-skill':
            popupInput.innerHTML = 'Invalid skill for your class.';

            break;
        case 'energy':
            popupInput.innerHTML = 'Not enough energy.';
            break;
        case 'cooldown':
            popupInput.innerHTML = 'Skill is in cooldown.';
        break;
        default:
            popupInput.innerHTML = 'Invalid command.';
            break;
        
    };
    popupInput.classList.add('show-popup');
    popupInput.style.backgroundColor = "#6e0a0ae8";
    setTimeout(function() {
        popupInput.classList.remove('show-popup');
        popupInput.style.backgroundColor = "#000000e8";
        popupInput.innerHTML = 'Try using /skill or /support followed by a skill id.';
    }, 1500);
    input.addEventListener('blur', function() { 
        popupInput.style.backgroundColor = "#000000e8";
        popupInput.classList.remove('show-popup');
        popupInput.innerHTML = 'Try using /skill or /support followed by a skill id.';
        
    })
}

/*
 * RESPONSIVE CODE
 */

const container = document.querySelector("#container");
let gameRatio, windowRatio;

function resizeGame() {
  // Cache queries and calculations
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  gameRatio = containerWidth / containerHeight;
  windowRatio = innerWidth / innerHeight;

  // Use position fixed instead of absolute
  container.style.position = "fixed";
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%)";

  let newScale;
  if (gameRatio > windowRatio) {
    newScale = innerWidth / containerWidth;
  } else {
    newScale = innerHeight / containerHeight;
  }
  // Clamp the scale to a maximum of 1
  newScale = Math.min(newScale, 1);
  container.style.transform += ` scale(${newScale})`;
}

// Use requestAnimationFrame for smoother resizing
window.addEventListener('resize', () => {
  requestAnimationFrame(resizeGame);
});

// Initial call
resizeGame();
