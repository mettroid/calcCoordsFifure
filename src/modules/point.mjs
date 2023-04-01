const draw = function(ctx, coords){ //нам нужны x и y , больше ничего
    let x, y;
    for(let key in coords){
        if(Array.isArray(coords[key])){
            if(key === 'size'){ 
                x = coords[key][0] + coords['point1'][0];
                y = coords[key][1] + coords['point1'][1];
             } else {
                [x, y] = coords[key];
             }       
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(x,y,5, 0,Math.PI * 2);
            ctx.fill();
        }
    }
}
const onPoint = function(coords){

}

export {draw}