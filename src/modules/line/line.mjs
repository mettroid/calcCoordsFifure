const name = 'line';
export const draw = function(ctx, {point1, point2}){
    //console.log(...point1);
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.lineTo(...point2);
    ctx.stroke();
}
