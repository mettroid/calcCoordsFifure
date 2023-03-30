const name = 'qudraticQurveTo';
export const draw = function(ctx, {point1, point2, point3}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(...point1);
    ctx.quadraticCurveTo(...point2,...point3);
    ctx.stroke();

}