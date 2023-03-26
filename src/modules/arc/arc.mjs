const name = 'arc';
export const draw = function(ctx, {x,y,r,degstart,degend}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.arc(x,y,r,degstart,degend);
    ctx.stroke();
}