const name = 'qudraticQurveTo';
export const draw = function(ctx, {x1,y1,x2,y2,x3,y3}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(x1,y1);
    ctx.quadraticCurveTo(x2,y2, x3,y3);
    ctx.stroke();

}