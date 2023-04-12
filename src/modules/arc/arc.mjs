const name = 'arc';
const draw = function(ctx, canvas, {point1,radius,radians}){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(...point1,radius,...radians);
    ctx.stroke();
}
export {name, draw}