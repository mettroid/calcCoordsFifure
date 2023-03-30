const draw = function(ctx, coords){ //нам нужны x и y , больше ничего
    for(let key in coords){
        if(Array.isArray(coords[key])){
            let [x, y] = coords[key];
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