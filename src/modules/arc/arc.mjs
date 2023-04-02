const name = 'arc';
export const draw = function(ctx, {point1,radius,degs}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.arc(...point1,radius,...degs);
    ctx.stroke();
}