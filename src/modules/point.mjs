import {inRange} from 'lodash';
const draw = function(ctx, coordsPoint){ //нам нужны x и y , больше ничего
        for(let [key, arr] of Object.entries(coordsPoint)){
            if(key.startsWith('point')){
                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.arc(arr[0] + 20,arr[1] + 20,5, 0,Math.PI*2);
                ctx.fill();
            }
        }
}
const onPoint = function(offsetX, offsetY, mouseX, mouseY, obj){ //проверим попали ли мы при клике на красную точку
    for(let key in obj){
        if(key.startsWith('point')){
            let [x, y] = obj[key];
            let resultX = inRange(mouseX - offsetX, x - 5, x + 5);
            let resultY = inRange(mouseY - offsetY, y - 5, y + 5);
            if(resultX && resultY){
                return key;
            }
        }
    }
    return null;

}
function addPoints(coordsFigure, figure){ //обычный объект с размерами и координатами фигуры
   let x, y;
     switch(figure){
        case ('rect'):
            if('point2' in coordsFigure) return;
             x = coordsFigure.size[0] + coordsFigure.point1[0];
             y = coordsFigure.size[1] + coordsFigure.point1[1];
             coordsFigure.point2 = [x, y];
        break;
        case ('arc'):
            if('pointR1' in coordsFigure && 
               'pointR2' in coordsFigure) return;
                x = coordsFigure.radius + coordsFigure.point1[0]; //радиус + x
                y = coordsFigure.point1[1];  // y
                coordsFigure.pointR1 = [x, y];
                coordsFigure.pointR2 = [x, y] 
        break;
        case ('arcTo'):
        break;
     }
   
}

export {addPoints, draw, onPoint}