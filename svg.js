// creating a square in vanilla JS
document.addEventListener("DOMContentLoaded", function() {
let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.width = 400;
svgElement.height = 400;
document.querySelector("body").appendChild(svgElement);


let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
rectangle.setAttribute("fill", "#ff0000");
rectangle.setAttribute("width", "200px");
rectangle.setAttribute("height", "200px");

//svgElement.appendChild(rectangle);

const createRectangle = (color, height, width, id) => {
	let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
	rectangle.setAttribute("fill", color);
	rectangle.setAttribute("width", height.toString() + "px");
	rectangle.setAttribute("height", width.toString() + "px");
	rectangle.setAttribute("id", id.toString());
	console.log(rectangle)
	return rectangle;
}

let blueRectangle = createRectangle("blue", 100, 100, 2);
svgElement.appendChild(blueRectangle);
})
