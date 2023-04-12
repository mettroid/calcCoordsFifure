import {currElement} from './elements.mjs';
import * as Point from './point.mjs';
import {opt} from './canvas.mjs';
const resizeCanvas = function(ctx, canvas){
    window.addEventListener('DOMContentLoaded', scale);
    window.addEventListener('resize', scale);
    function scale(){
        if(requestAnimationFrame){
            requestAnimationFrame(calculateSize);
        } else {
            setTimeout(calculateSize, 66);
        }
    }
    function calculateSize(){
        canvas.width = innerWidth * 0.7;
        canvas.height = innerHeight * 0.5;
        let {activeItem} = currElement;
        console.log(activeItem);
        if(activeItem){ // если есть выбранная фигура то отрисуем её по изменению окна
            let id = activeItem.dataset.id;
            (async()=>{
                let Coords = await import(`./${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);
                let Figure = await import(`./${id}/${id}.mjs`);
                Figure.draw(opt.ctx, opt.canvas, Coords.opt);
                Point.draw(opt.ctx, Coords.opt);
            })();
        }
    }
}

export {resizeCanvas}
