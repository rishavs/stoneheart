import { Application, Container, ApplicationOptions, Assets, Sprite, Ticker } from "pixi.js";

export class Game extends Application {
    // currentScene: Scene
    
    fixedWidth: number = 640;
    fixedHeight: number = 360;

    
// New Game Settings
// - Difficulty - Checkboxes, Sliders, Dropdowns
// - Ironman Mode - Checkbox
// - Tutorial - Checkbox


// System Setting
// - Windowed / Full screen - Checkbox
// - music off/ volume - Slider
// - sound off/ volume - Slider
// - language - Dropdown

// Accessibility settings
// - color blind mode - Checkbox
// - text size - Slider
// - GUI size - Slider
// - High Contrast mode - Checkbox
// - Subtitles - Checkbox
// - Screen reader - Checkbox

    settings = {
        sound: 1,
        music: 1,
        fullscreen: false,
        guiSize: "medium", // small = 16, normal = 24, large = 32
    };

    runDetails = {
        difficulty: "medium", // easy, medium, hard
        ironman: false,
        tutorial: true,
    };

    GUIColCount: number = 40;  //640/40 = 16
    GUIdRowCount: number = 23;  //360/23 = 15.65 = ~16

    constructor() {
        super();
        // this.currentScene = new Scene();
    }

    async init(options: Partial<ApplicationOptions>) {
        await super.init(options);
    }

    // async switchScene(scene: Scene) {
    //     // pause current scene ticker
    //     this.currentScene.ticker.stop();
    //     // set current scene as not renderable
    //     this.currentScene.visible = false;

    //     // set new current scene
    //     this.currentScene = scene;
        
    //     // start new scene ticker
    //     scene.ticker.start();
    //     //  set new scene as renderable
    //     scene.renderable = true;    
    // }
}
