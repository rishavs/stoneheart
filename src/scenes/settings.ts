import { Text } from "pixi.js";
import { Scene } from "../defs";
import { game } from "../init";

// Add the two scenes to the game
export let settingsScene = new Scene();
game.stage.addChild(settingsScene);

const settingsText = new Text({text: 'settings', x: 100, y: 100});
settingsScene.addChild(settingsText);

let elapsed = 0.0;
settingsScene.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    settingsText.x = 200.0 + Math.cos(elapsed / 50.0) * 100.0;
    settingsText.y = 200.0 + Math.sin(elapsed / 50.0) * 100.0;
});

settingsScene.gui = /*html*/`
    <div id="settings">
        <fieldset >
        <legend>Personalia:</legend>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <label for="birthday">Birthday:</label>

        <label for="vehicle1"> I have a bike</label><br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">

        <input type="date" id="birthday" name="birthday">
        <input type="submit" value="Submit">
      </fieldset>
        </div>
    <style>
        fieldset {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 10px;
        }
        
       
    </style>
`;