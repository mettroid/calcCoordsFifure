const name = 'rect';
export const draw = function(ctx, {x,y,width,height}){
    ctx.clearRect(0,0,300,300);
    ctx.lineWidth = 2;
    ctx.strokeRect(x,y,width,height);
}