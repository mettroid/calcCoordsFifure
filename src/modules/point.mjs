import * as NormalizeCoords from './normalizeCoords.mjs';
import {inRange} from 'lodash';
const draw = function(ctx, coords){ //нам нужны x и y , больше ничего
    let x, y;
    NormalizeCoords.coords.length && (NormalizeCoords.coords.length = 0);
    for(let pairCoords of generator(coords)){ 
        if(pairCoords){
            NormalizeCoords.coords.push(pairCoords);
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(pairCoords[0],pairCoords[1],5, 0,Math.PI*2);
            ctx.fill();
        }
    }
}
const onPoint = function(offsetX, offsetY, mouseX, mouseY, arr){ //проверим попали ли мы при клике на красную точку
    for(let i = 0; i < arr.length; i++){
        let [x, y] = arr[i];
        let resultX = inRange(mouseX - offsetX, x - 5, x + 5);
        let resultY = inRange(mouseY - offsetY, y - 5, y + 5);
        if(resultX && resultY){
            return true;
        }
    }
    return false;

}
function * generator(obj){ // тут мы должны находить крайние точки фигур для их отрисовки
    let x, y;
    for(let key in obj){
        switch(key){
            case /^point\d$/.test(key)? key : true: // если ключ объекта это point
                yield obj[key];
            break;
            case ('size'):                       //если ключ объекта это size
                 x = obj.point1[0] + obj.size[0]; // x + width
                 y = obj.point1[1] + obj.size[1]; // y + height
                 yield [x, y];
            break;
            case ('radius'):
                if(obj['point3']){ //если есть такой ключ то мы на arcTo, выходим
                    yield null;
                } else {           //если мы на arc то считаем x и y 
                    x = obj.point1[0] + obj.radius;
                    y = obj.point1[1];
                    yield [x, y];
                }
            break;
            case ('degs'):

            break;
        }
    }
}

export {draw, onPoint}