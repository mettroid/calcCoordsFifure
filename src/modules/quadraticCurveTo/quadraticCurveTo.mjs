const name = 'qudraticQurveTo';
const draw = function(ctx, {point1, point2, point3}){
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.quadraticCurveTo(...point2,...point3);
    ctx.stroke();

}
export {name, draw}