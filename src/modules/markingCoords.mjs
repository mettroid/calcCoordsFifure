const draw = function(opt){
    opt.ctx.clearRect(0,0, opt.canvas.width, opt.canvas.height);
    opt.ctx.save();
    opt.ctx.lineWidth = 1;
    opt.ctx.strokeStyle = '#C9C9C9FF';
    drawHorizontLine(opt);
    drawVerticalLine(opt);
    opt.ctx.restore();
    
}
const drawHorizontLine = function(opt){
    let accum = 0;
    for(let i = 0; accum < opt.canvas.height; i++){
 
        accum = i * 10 + 0.5;
        opt.ctx.beginPath();
        opt.ctx.moveTo(0, accum);
        opt.ctx.lineTo(opt.canvas.width, accum);
        opt.ctx.stroke();
    } 

}
const drawVerticalLine = function(opt, x){
    let accum = 0;
    for(let i = 0; accum < opt.canvas.width; i++){
 
        accum = i * 10 + 0.5;
        opt.ctx.beginPath();
        opt.ctx.moveTo(accum, 0);
        opt.ctx.lineTo(accum, opt.canvas.height);
        opt.ctx.stroke();
    } 
}

export {draw};