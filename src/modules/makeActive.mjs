export default function(elem, currentActiveItem, classActive){
		currentActiveItem && currentActiveItem.classList.remove(classActive);
		elem.classList.add(classActive);
}


