const name = 'rect';
export const draw = function(ctx, {point1,width,height}){
    ctx.clearRect(0,0,300,300);
    ctx.lineWidth = 2;
    ctx.strokeRect(...point1,width,height);
}