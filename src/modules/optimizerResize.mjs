import {currElement} from './elements.mjs';
import * as Canvas from './canvas.mjs';
import * as Point from './point.mjs';

const resizeElems = function(){
    window.addEventListener('DOMContentLoaded', resize);
    window.addEventListener('resize', resize);
    function resize(){
        if(requestAnimationFrame){
            requestAnimationFrame(resizeAt);
        } else {
            setTimeout(resizeAt, 66);
        }
    }
    function resizeAt(){
        let body = document.querySelector('.body');
        let menu = document.querySelector('.elector-of-coordinates');
        if(body.clientWidth <= 500){
            body.style.padding = 0;
            Canvas.opt.canvas.width = body.clientWidth;
            Canvas.opt.canvas.height = 500;  
            Canvas.opt.canvas.style.float = 'left';
            menu.style.width = 100 + "%";
            menu.style.height = 100 + "%";
            menu.style.float = 'left';
        }
        if(body.clientWidth >= 500 && body.clientWidth <= 1200){
            body.style.padding = '5px';
            Canvas.opt.canvas.width = body.clientWidth - 10;
            Canvas.opt.canvas.height = 700;  
            Canvas.opt.canvas.style.float = 'left';
            menu.style.width = '500px';
            menu.style.height = '100%';
            menu.style.float = 'left';
        }
        if(body.clientWidth >= 1200){
            body.style.padding = '10px';
            Canvas.opt.canvas.width = body.clientWidth * 0.68;
            Canvas.opt.canvas.height = 700; 
            Canvas.opt.canvas.style.float = 'left'; 
            menu.style.width = 30 + "%";
            menu.style.height = 100 + "%";
            menu.style.float = 'right';
        }
        if(currElement.activeItem){ // если есть выбранная фигура то отрисуем её по изменению окна
            draw();
        }
        Canvas.changeOffsetXY();
    }
    function draw(){
        let {activeItem} = currElement;
        let id = activeItem.dataset.id;
        (async()=>{
            let Coords = await import(`./${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);
            let Figure = await import(`./${id}/${id}.mjs`);
            Figure.draw(Canvas.opt.ctx, Canvas.opt.canvas, Coords.opt);
            Point.draw(Canvas.opt.ctx, Coords.opt);
        })();
    }
}

export {resizeElems}
