const drawRuler = function(opt){
    drawRulerVertical(opt);
    drawRulerHorizont(opt);
}
const drawLines = function(opt){
    opt.ctx.clearRect(20,20, opt.canvas.width-40, opt.canvas.height-40);
    opt.ctx.rect(20,20, opt.canvas.width-40, opt.canvas.height-40);
    opt.ctx.clip();
    opt.ctx.lineWidth = 1;
    opt.ctx.strokeStyle = '#E2E2E2FF';
    drawHorizontLine(opt);
    drawVerticalLine(opt);
}
const drawHorizontLine = function(opt){
    let accum = 0;
    let i = 0;
    for(let i = 0; accum < opt.canvas.height-20; i++){
            accum = i * 10 + 20.5;
            opt.ctx.beginPath();
            opt.ctx.moveTo(20, accum);
            opt.ctx.lineTo(opt.canvas.width - 20, accum);
            opt.ctx.stroke();
    } 

}
const drawVerticalLine = function(opt){
    let accum = 0;
    let i = 0;
    for(let i = 0; accum < opt.canvas.width-10; i++){
            accum = i * 10 + 20.5;
            opt.ctx.beginPath();
            opt.ctx.moveTo(accum, 20);
            opt.ctx.lineTo(accum, opt.canvas.height-20);
            opt.ctx.stroke();

    } 
}
const drawRulerVertical = function(opt){
    let len = opt.canvas.width-20;
    for(let i = 20; i < len; i++){

        if(i % 10 === 0){
            let x = i + 0.5;
            opt.ctx.strokeStyle = '#FF002FFF';
            opt.ctx.beginPath();
            opt.ctx.moveTo(x, 10);
            opt.ctx.lineTo(x, 15); 
            opt.ctx.stroke();

            opt.ctx.strokeStyle = 'rgba(255,0,0,0.3)';
            opt.ctx.beginPath();
            opt.ctx.moveTo(x, 15);
            opt.ctx.lineTo(x, 20);
            opt.ctx.stroke();
        } else {
            let str = String(i);
            let lastDigit = str.slice(str.length - 1);
            let x = i + 0.5;
            switch(lastDigit){
                case '1':
                case '3':
                case '5':
                case '7':
                case '9':
                    opt.ctx.strokeStyle = 'blue';
                    opt.ctx.beginPath();
                    opt.ctx.moveTo(x, 15);
                    opt.ctx.lineTo(x, 20); 
                    opt.ctx.stroke();
                break;
            }
        }    
    }  
    
}
const drawRulerHorizont = function(opt){
    let len = opt.canvas.height - 20;
    for(let i = 20; i < len; i++){
        
        if(i % 10 === 0){
            let y = i + 0.5;
            opt.ctx.strokeStyle = 'red';
            opt.ctx.beginPath();
            opt.ctx.moveTo(10, y);
            opt.ctx.lineTo(15, y);
            opt.ctx.stroke();       

            opt.ctx.strokeStyle = 'rgba(255,0,0,0.3)';
            opt.ctx.beginPath();
            opt.ctx.moveTo(15, y);
            opt.ctx.lineTo(20, y);
            opt.ctx.stroke();

        } else {
            let str = String(i);
            let lastDigit = str.slice(str.length - 1);
            let y = i + 0.5;
            switch(lastDigit){
                case '1':
                case '3':
                case '5':
                case '7':
                case '9':
                    opt.ctx.strokeStyle = 'blue';
                    opt.ctx.beginPath();
                    opt.ctx.moveTo(15 , y);
                    opt.ctx.lineTo(20, y); 
                    opt.ctx.stroke();
                break;
            }           
        }   
    }
}

export {drawLines, drawRuler};