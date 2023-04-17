import './index.html';
import './index.scss';
import * as Point from './modules/point.mjs';
import * as Canvas from './modules/canvas.mjs';
import * as Calc from './modules/calc.mjs';
import * as Resize from './modules/optimizerResize.mjs';
import * as Marking from './modules/markingCoords.mjs';
import {currElement} from './modules/elements.mjs';


Canvas.create(document.querySelector('.wrapper'), 'canvas', 'canvas-work', 'wrapper__canvas-work');//создали канвас
Resize.resizeElems();

const selectItem = document.querySelector('#selectItem');

Canvas.opt.canvas.addEventListener('mousedown', {
	handleEvent(e){
		if(!currElement.activeItem) return;
		let id = currElement.activeItem.dataset.id;
		(async()=>{
			let Coords = await import(`./modules/${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);
			let key = Point.onPoint(Canvas.opt.offsetX, Canvas.opt.offsetY, e.pageX, e.pageY, Coords.opt); // проверим клик был по точке координат?
			if(key === null) return;

			let Figure = await import(`./modules/${id}/${id}.mjs`);
			function move(e){
				
					(async()=>{
						if((e.pageX - Canvas.opt.offsetX < 0 || e.pageX - Canvas.opt.offsetX  > Canvas.opt.canvas.width-40) ||
						   (e.pageY - Canvas.opt.offsetY < 0 || e.pageY - Canvas.opt.offsetY  > Canvas.opt.canvas.height-40)) return;
						if( Figure.name === 'rect' || 
							Figure.name === 'arc' ){ //проходит только для определённых фигур
							Calc[Figure.name](key, e.pageX, e.pageY, Canvas.opt.offsetX, Canvas.opt.offsetY, Coords.opt);
						}
						Coords.opt[key][0] = e.pageX - Canvas.opt.offsetX;	//изменили координаты активной точки по X
						Coords.opt[key][1] = e.pageY - Canvas.opt.offsetY;	//изменили координаты активной точки по Y
						Marking.draw(Canvas.opt);
						Figure.draw(Canvas.opt.ctx, Coords.opt);
						Point.draw(Canvas.opt.ctx, Coords.opt);
					})();

			}
			Canvas.opt.canvas.addEventListener('mousemove', move);
			Canvas.opt.canvas.addEventListener('mouseup', {
				handleEvent(){
					Canvas.opt.canvas.removeEventListener('mousemove', move);
					Calc.clear();
					let instruction = document.getElementById(id);
					if(!(instruction.querySelector('div.finalCoords'))){
						let blockCoords = document.createElement('div');
						let textCoords = document.createElement('p');
						textCoords.classList.add('finalCoords__text');
						blockCoords.classList.add('finalCoords');
						blockCoords.append(textCoords);
						instruction.insertAdjacentElement('beforeEnd', blockCoords);
					}
					let coords = instruction.querySelector('.finalCoords__text');
					let str = `${Coords.opt}`.replace(/(?<!;)\n/g, '');
					coords.innerHTML = str;
				}
			}, {once: true});
		})();
	}	
}, {capture: false});
selectItem.addEventListener('mouseover', {
	handleEvent(e){
		
		if(currElement.pickedItem) return;
		let item = e.target.closest('li.list__item');
		if(!item) return;
		if(currElement.activeItem === item) return;

		item.classList.add('list__item_pick');
		currElement.pickedItem = item;

	}
}, {capture: false});
selectItem.addEventListener('mouseout', {
	handleEvent(e){
		if(!currElement.pickedItem) return;

		let related = e.relatedTarget;
		while(related){
			if(related === currElement.pickedItem) return;
			related = related.parentNode;
		}
		currElement.pickedItem.classList.remove('list__item_pick');
		currElement.pickedItem = null;
	}
}, {capture: false});
selectItem.addEventListener('click', {
	handleEvent(e){
		let target = e.target;
		let item = target.closest('li.list__item');
		if(!item) return;
		if(item === currElement.activeItem) return;
		let id = item.dataset.id; // figure
		let instruction = document.getElementById(id);
		import('./modules/makeActive.mjs')						// выделяет пункт меню
			.then(function(Active){
				Active.default(item, currElement.activeItem, 'list__item_active');	
				Active.default(instruction, currElement.activeInstruction, 'instruction__field_active');				
				(async () => {

					let Coords = await import(`./modules/${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);
					let Figure = await import(`./modules/${id}/${id}.mjs`);
					Marking.draw(Canvas.opt);
					Point.addPoints(Coords.opt, id);
					
					Figure.draw(Canvas.opt.ctx, Coords.opt);
					Point.draw(Canvas.opt.ctx, Coords.opt);
					
				})();
				currElement.activeItem = item;
				currElement.activeInstruction = instruction;
			});
	}
}, {capture: false});