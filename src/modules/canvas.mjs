import * as Resize from './optimizerResize.mjs';
let opt = {};
const create = function(parent, id, classStyle, classPosition){
    let canvas = document.createElement('canvas');
    parent.insertAdjacentElement('afterBegin', canvas);
    let ctx = canvas.getContext('2d');
    canvas.id = id;
    Resize.resizeCanvas(ctx, canvas);
    canvas.classList.add(classStyle, classPosition);
    let coords = canvas.getBoundingClientRect();
 
    opt = {
        id,
        canvas,
        ctx,
        offsetX: coords.x + window.pageXOffset,
        offsetY: coords.y + window.pageYOffset
    }
}

export {create, opt}