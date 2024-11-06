import { TextureStyle, Text } from 'pixi.js';
import { game } from './init';
import { fitGameToScreen } from './utils';
import { menuScene } from './scenes/menu';

await game.init({
    antialias: false,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    roundPixels: true,

    width: game.fixedWidth,
    height: game.fixedHeight,
    backgroundColor: 0xf0f0f0,
});
TextureStyle.defaultOptions.scaleMode = 'nearest'
document.getElementById('game')!.replaceWith(game.canvas);

window.addEventListener('resize', fitGameToScreen);
window.addEventListener('load', fitGameToScreen);

game.switchScene(menuScene);


const fps = new Text({
    text: '',
    style: { fontFamily:'origami'}
});
fps.x = 10;
fps.y = 10;
fps.style.fill = 0x979797;
const fpsTicker = () => {
    fps.text = `FPS: ${Math.round(game.ticker.FPS)}`;
}

game.stage.addChild(fps);
game.ticker.add( fpsTicker );

// Add a debug text on top of the pointer showing the coords
const pointerText = new Text({
    text: '',
    style: { 
        fontFamily:'origami',
        fontSize: 12,
    },
});
pointerText.style.fill = 0x979797;
game.stage.addChild(pointerText);

let mouseposition = {x:0, y: 0};
game.stage.eventMode = 'static';
game.stage.hitArea = game.screen;
game.stage.on('mousemove', (event) =>
{
    mouseposition.x = event.global.x / game.stage.scale.x;
    mouseposition.y = event.global.y / game.stage.scale.y;
});
pointerText.anchor.set(1);

game.ticker.add( () => {
    pointerText.text = `Pointer: ${Math.round(mouseposition.x)}, ${Math.round(mouseposition.y)}`;
    pointerText.x = mouseposition.x;
    pointerText.y = mouseposition.y;

    // move the pointer 
})

