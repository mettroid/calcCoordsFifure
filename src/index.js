import './index.html';
import './index.scss';
import * as Canvas from './modules/canvas.mjs';

const canvasProp = Canvas.create(document.body, 'canvas', 'canvas-work', 'body__canvas-work', 300, 300);//создали канвас

const selectItem = document.querySelector('#selectItem');
let currentPickedItem = null;
let currentActiveItem = null;
let currentActiveInstruction = document.getElementById('welcome');

canvasProp.canvas.addEventListener('mousedown', {
	handleEvent(e){
		if(!currentActiveItem) return;
		console.log(currentActiveItem);
		let id = currentActiveItem.dataset.id;

		(async()=>{
			let Point = await import('./modules/point.mjs');
			let Options = await import(`./modules/${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);
			let key = Point.onPoint(canvasProp.offsetX, canvasProp.offsetY, e.pageX, e.pageY, Options.coords); // проверим клик был по точке координат?
			if(key === null) return;

			let Figure = await import(`./modules/${id}/${id}.mjs`);
			function move(e){
				
					(async()=>{
						let Calc = await import(`./modules/calc.mjs`);
							Calc[Figure.name](key, e.pageX, e.pageY, canvasProp.offsetX, canvasProp.offsetY, Options.coords);

						Options.coords[key][0] = e.pageX - canvasProp.offsetX;	//изменили координаты активной точки по X
						Options.coords[key][1] = e.pageY - canvasProp.offsetY;	//изменили координаты активной точки по Y
						Figure.draw(canvasProp.ctx, Options.coords);
						Point.draw(canvasProp.ctx, Options.coords);
					})();

			}
			canvasProp.canvas.addEventListener('mousemove', move);
			canvasProp.canvas.addEventListener('mouseup', ()=>{
				canvasProp.canvas.removeEventListener('mousemove', move);
			});
		})();
		
	}
}, {capture: false});
selectItem.addEventListener('mouseover', {
	handleEvent(e){
		
		if(currentPickedItem) return;
		let item = e.target.closest('li.list__item');
		if(!item) return;
		if(currentActiveItem === item) return;

		item.classList.add('list__item_pick');
		currentPickedItem = item;

	}
}, {capture: false});
selectItem.addEventListener('mouseout', {
	handleEvent(e){
		if(!currentPickedItem) return;

		let related = e.relatedTarget;
		while(related){
			if(related === currentPickedItem) return;
			related = related.parentNode;
		}
		currentPickedItem.classList.remove('list__item_pick');
		currentPickedItem = null;
	}
}, {capture: false});
selectItem.addEventListener('click', {
	handleEvent(e){
		let target = e.target;
		let item = target.closest('li.list__item');
		if(!item) return;
		if(item === currentActiveItem) return;
		let id = item.dataset.id; // figure
		let instruction = document.getElementById(id);
		import('./modules/makeActive.mjs')						// выделяет пункт меню
			.then(function(Active){
				Active.default(item, currentActiveItem, 'list__item_active');	
				Active.default(instruction, currentActiveInstruction, 'instruction__field_active');				
				(async () => {

					let Options = await import(`./modules/${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);
					let Figure = await import(`./modules/${id}/${id}.mjs`);
					let Point = await import(`./modules/point.mjs`);
					
					Point.addPoints(Options.coords, id);
					Figure.draw(canvasProp.ctx, Options.coords);
					Point.draw(canvasProp.ctx, Options.coords);
					
				})();
				currentActiveItem = item;
				currentActiveInstruction = instruction;
			});
	}
}, {capture: false});
