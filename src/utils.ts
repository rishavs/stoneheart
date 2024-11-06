import {game } from './init';

export const fitGameToScreen = () => {
    let targetWidth = window.innerWidth;
    let targetHeight = window.innerWidth * 9 / 16;

    if (targetHeight > window.innerHeight) {
        targetHeight = window.innerHeight;
        targetWidth = window.innerHeight * 16 / 9;
    }
    let targetScaleX = targetWidth / game.fixedWidth;
    let targetScaleY = targetHeight / game.fixedHeight;

    game.canvas.style.width = `${targetWidth}px`;
    game.canvas.style.height = `${targetHeight}px`;
    game.renderer.resize(targetWidth, targetHeight);

    game.stage.scale.x = targetScaleX
    game.stage.scale.y = targetScaleY
    
    let gui = document.getElementById('gui')
    if (gui) {
        gui.style.transformOrigin = 'top left';
        gui.style.transform = `scale(${targetScaleX}, ${targetScaleY})`;
        gui.style.width = `${game.fixedWidth}px`;
        gui.style.height = `${game.fixedHeight}px`;
    }
}