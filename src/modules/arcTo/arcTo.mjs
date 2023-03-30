const name = 'arcTo';
export const draw = function(ctx, {point1, point2, point3, r}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(...point1);
    ctx.arcTo(...point2,...point3,r);
    ctx.stroke();
}