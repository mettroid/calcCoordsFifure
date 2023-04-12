const name = 'qudraticQurveTo';
const draw = function(ctx, canvas, {point1, point2, point3}){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(...point1);
    ctx.quadraticCurveTo(...point2,...point3);
    ctx.stroke();

}
export {name, draw}