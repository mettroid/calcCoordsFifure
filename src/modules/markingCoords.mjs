const draw = function(opt){
    opt.ctx.clearRect(0,0, opt.canvas.width, opt.canvas.height);
  
    drawAt(opt);
    opt.ctx.save();
    flip(opt);
    //drawAt();
    //opt.ctx.restore();
    
}
const drawAt = function(opt){
    let x = 0;
    opt.ctx.lineWidth = 1;
    opt.ctx.strokeStyle = 'gray';
    for(let i = 0; x < opt.canvas.width; i++){
 
        x = i * 10 + 0.5;
        opt.ctx.beginPath();
        opt.ctx.moveTo(x, 0);
        opt.ctx.lineTo(x, opt.canvas.height);
        opt.ctx.stroke();
    }

}
const flip = function(opt){
    let xTrans = opt.canvas.width / 2;
    let yTrans = opt.canvas.height / 2;
    opt.ctx.translate(xTrans, yTrans);
    opt.ctx.rotate(Math.PI/180 * 90);
    //opt.ctx.translate(-xTrans, -yTrans);
    opt.ctx.fillRect(0,0,200,10);
    console.log(xTrans);
}
export {draw};