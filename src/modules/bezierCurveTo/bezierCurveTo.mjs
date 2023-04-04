const name = 'bezierCurveTo';
const draw = function(ctx, {point1, point2, point3, point4}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.bezierCurveTo(...point2,...point3,...point4);
    ctx.stroke();
}
export {name, draw}