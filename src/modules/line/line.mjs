const name = 'line';
export const draw = function(ctx, {x1,y1,x2,y2}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(y2, y2);
    ctx.stroke();
}