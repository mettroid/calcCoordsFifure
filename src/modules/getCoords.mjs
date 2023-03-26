export default (e, obj)=>{
	let coords = {};
	coords.x = e.clientX - obj.x;
	coords.y = e.clientY - obj.y;
	return coords;
}