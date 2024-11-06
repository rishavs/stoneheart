import { Text } from "pixi.js";
import { Scene } from "../defs";
import { game } from "../init";
import { settingsScene } from "./settings";

// Add the two scenes to the game
export let menuScene = new Scene();
game.stage.addChild(menuScene);

const menuText = new Text({text: 'menu', x: 100, y: 100});
menuScene.addChild(menuText);

let elapsed = 0.0;
menuScene.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    menuText.x = 200.0 + Math.cos(elapsed / 50.0) * 100.0;
    menuText.y = 200.0 + Math.sin(elapsed / 50.0) * 100.0;
});

menuScene.gui = /*html*/`
    <div id="menu">
        <button id="continue-btn" class="pixellated is-yellow">Continue</button>
        <button id="new-game-btn" class="pixellated is-blue">New Game</button>
        <button id="settings-btn" class="pixellated is-blue">Settings</button>
        <button id="quit-btn" class="pixellated is-red">Quit</button>
    
    </div>
    <style>
        
        #menu {
            width:100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
       
    </style>
    <script>
        document.getElementById('settings-btn').addEventListener('click', () => {
            alert('settings');
            game.switchScene(settingsScene);
        });
    </script>
`;

menuScene.guiLogic = () => {
    document.getElementById('continue-btn')!.addEventListener('click', () => {
        alert('continue');
    });
    document.getElementById('new-game-btn')!.addEventListener('click', () => {
        alert('new game');
    });
    document.getElementById('settings-btn')!.addEventListener('click', () => {
        game.switchScene(settingsScene);
    });
    document.getElementById('quit-btn')!.addEventListener('click', () => {
        alert('quit');
    });
}; 