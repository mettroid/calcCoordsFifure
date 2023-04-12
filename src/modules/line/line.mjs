const name = 'line';
const draw = function(ctx, canvas, {point1, point2}){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.lineTo(...point2);
    ctx.stroke();
}
export {name, draw}