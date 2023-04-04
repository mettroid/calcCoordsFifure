import {inRange} from 'lodash';
const draw = function(ctx, coordsPoint){ //нам нужны x и y , больше ничего
        for(let [key, arr] of Object.entries(coordsPoint)){
            if(key.startsWith('point')){
                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.arc(arr[0],arr[1],5, 0,Math.PI*2);
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
function addPoints(coordsFigure){ //обычный объект с размерами и координатами фигуры
   let x, y;
   for(let key in coordsFigure){
     switch(key){
        case 'size':
            if('point2' in coordsFigure) return;
             x = coordsFigure[key][0] + coordsFigure.point1[0];
             y = coordsFigure[key][1] + coordsFigure.point1[1];
             coordsFigure.point2 = [x, y];
        break;
        case 'radius':
            if('point3' in coordsFigure) return;
            if('pointR' in coordsFigure) return;
            x = coordsFigure[key] + coordsFigure.point1[0];
            y = coordsFigure.point1[1];
            coordsFigure.pointR = [x, y]; 
        break;
     }
   }
}

export {addPoints, draw, onPoint}