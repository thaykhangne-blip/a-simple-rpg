## Refactor notes

The legacy `script.js` has been separated into ordered files under `src/`:

- `state.js`: shared state, cached DOM references, and startup listeners
- `character-progression.js`: character switching, reset, and leveling
- `help-commands.js`: help text and command input
- `support-healing.js`: support and healing abilities
- `combat.js`: magic casting, combat calculations, effects, and turn resolution
- `ui-overlays.js`: menu, settings, shop, log, and popup controls
- `class-skills.js`: class-specific skills
- `ui-layout.js`: notifications and responsive scaling

The files are loaded as **ordered classic scripts**, not ES modules. This is intentional for the first refactor pass: the original game relies on shared top-level variables and inline HTML event handlers. Keeping that runtime contract avoids introducing a large set of unrelated gameplay changes. No gameplay formulas or balance values were intentionally changed.

## Running locally

Open `index.html` through a local static web server, or use the existing GitHub Pages deployment. No build step or package installation is required.

---

## Welcome to my small project

Live preview: [[click here]](https://thaykhangne.github.io/a-simple-rpg/)

Current version: 3.0

### Changes


```markdown
# 3.0 - 6/3/2023
- new sprites
- new character: Cryomancy Empress
- ui updates
- mechanic fixes
- new notification system
- change click buttons to inputting commands (try to use /skill or /support + skill name)
- many bug fixes
# 2.5 - 8/7/2022
- bug fixes
- code cleanup
- mechanics revisions
- ui update
- level up system for players
# 2.1 - 8/7/2022
- minor fixes
- ui update
# 2.0 - 26/6/2022
- ui overhaul
- character sprites
- character battle visual
# 1.6 - 24/6/2022
- added a new class - Solar Songtress
- log feature
- removed two support skills due to inconsistencies.
# 1.5 - 22/6/2022
- added a new class - Blood Knight
- added new passive skills
# 1.4 - 21/6/2022
- added a new class - necromancer
- various skill icon updates
# 1.3 - 20/6/2022
- visual update
- new mechanics - DEF
- two new classes - Archer and Paladin
# 1.2 - 17/2022
- added new skills and new support spells
- various UI changes
# 1.1 - 17/6/2022
- visual and core mechanics update
# 1.0 - 2/6/2022
- initial commit

```

### Disclaimer

I am but an amateur coding enjoyer. Not everything in this project is optimized and perfect.

-Khang Nguyen
