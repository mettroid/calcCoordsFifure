export default function(elem, currentElem, classActive){
		currentElem && currentElem.classList.remove(classActive);
		elem.classList.add(classActive);
}


