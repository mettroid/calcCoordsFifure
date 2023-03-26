const name = 'bezierCurveTo';
export const draw = function(ctx, {x1,y1,x2,y2,x3,y3,x4,y4}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.bezierCurveTo(x2,y2,x3,y3,x4,y4);
    ctx.stroke();
}