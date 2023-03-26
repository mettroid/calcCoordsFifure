import './index.html';
import './index.scss';

import * as Canvas from './modules/canvas.mjs';

Canvas.create(document.body, 'canvas', 'canvas-work', 'body__canvas-work', 300, 300);//создали канвас

const mainField = document.querySelector('#mainField');
let currentItem = null;
mainField.addEventListener('mouseover', {
	handleEvent(e){
		
		if(currentItem) return;
		let item = e.target.closest('li.list__item');
		if(!item) return;
		
		item.classList.add('list__item_pick');
		currentItem = item;

	}
}, {capture: false});
mainField.addEventListener('mouseout', {
	handleEvent(e){
		if(!currentItem) return;

		let related = e.relatedTarget;
		while(related){
			if(related === currentItem) return;
			related = related.parentNode;
		}
		currentItem.classList.remove('list__item_pick');
		currentItem = null;
	}
}, {capture: false});




/*

import {sum, mul} from './modules/calc.js';
import image from './img/methed.jpg';
import getRadian from './modules/degrees_to_radian.js';
import getCoords from './modules/getCoords.js';
import getFigure from './modules/getFigure.js';





window.onload = function(){
		//draw();
};

canvas.addEventListener('click', function(event){
		let canvas = event.target;
		let obj_bounding = canvas.getBoundingClientRect(); //наёдум объёкт с координатами нашего канвас
		let coords = getCoords(event, obj_bounding); //получим объект с координатами клика внутри канвас
		//console.log(typeof(coords));
		console.log(event.button);
		if(typeof(coords) !== 'object'){ return }; 
			
		ctx.fillStyle = 'red';				
		ctx.beginPath();			
		ctx.arc(coords.x, coords.y, 5, 0, Math.PI * 2);			
		ctx.fill();
		


});

//menu.addEventListener('click', getFigure);



function draw(){
	let canvas = document.querySelector('canvas');
	if(canvas.getContext('2d')){
		//canvas.addEventListener('mousedown', mouse_down);
		let ctx = canvas.getContext('2d');
		
		let c = {
			x2: 110,
			y2: 200,
			x3: 110,
			y3: 255
		};
		//console.log(c.x2);
		ctx.beginPath();
		ctx.moveTo(110,200);
		ctx.bezierCurveTo(c.x2,c.y2,c.x3,c.y3, 150,250);
		ctx.stroke();

		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(c.x2,c.y2,5, 0,Math.PI * 2);
		ctx.arc(c.x3,c.y3,5, 0,Math.PI * 2);
		ctx.fill();

		window.ctx = ctx;
	} 
}

document.addEventListener('keydown', function(e){
	if(e.code === 'KeyZ' && (e.shiftKey || e.metakey)){
		alert('Z');
	}
});

*/
