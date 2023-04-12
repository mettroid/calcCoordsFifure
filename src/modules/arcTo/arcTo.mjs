const name = 'arcTo';
const draw = function(ctx, canvas, {point1, point2, point3, radius}){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(...point1);
    ctx.arcTo(...point2,...point3,radius);
    ctx.stroke();
}
export {name, draw}