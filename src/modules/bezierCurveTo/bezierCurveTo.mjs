const name = 'bezierCurveTo';
const draw = function(ctx, canvas, {point1, point2, point3, point4}){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.bezierCurveTo(...point2,...point3,...point4);
    ctx.stroke();
}
export {name, draw}