// creating a square in vanilla JS

// creates a 'canvas' svgElement
let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("width", "400px");
svgElement.setAttribute("height", "400px");
document.querySelector("body").appendChild(svgElement);

// rectangle
let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
rectangle.setAttribute("fill", "#ff0000");
rectangle.setAttribute("width", "200px");
rectangle.setAttribute("height", "200px");

//svgElement.appendChild(rectangle);

// rectangle2




let rectb = document.createElementNS("http://www.w3.org/2000/svg", "rect") 
rectb.setAttribute("fill", "rgba(0, 111, 207, 1.0)");
rectb.setAttribute("width", "22px");
rectb.setAttribute("height", "22px");
rectb.setAttribute("x", "19px");
rectb.setAttribute("rx", "4px")
rectb.setAttribute("ry", "4px")
rectb.setAttribute("y", "0px");
let rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect") 
rect2.setAttribute("fill", "#82b4e0");
rect2.setAttribute("width", "20px");
rect2.setAttribute("height", "20px");
rect2.setAttribute("x", "20px");
rect2.setAttribute("rx", "4px");
rect2.setAttribute("y", "1px");
rect2.setAttribute("ry", "4px");

svgElement.appendChild(rectb);
svgElement.appendChild(rect2);

let rectx = document.createElementNS("http://www.w3.org/2000/svg", "rect") 

rectx.setAttribute("fill", "rgba(0, 111, 207, 1.0)");
rectx.setAttribute("width", "22px");
rectx.setAttribute("height", "22px");
rectx.setAttribute("x", "44px");
rectx.setAttribute("rx", "4px")
rectx.setAttribute("ry", "4px")
rectx.setAttribute("y", "0px");

let rectz = document.createElementNS("http://www.w3.org/2000/svg", "rect") 
rectz.setAttribute("fill", "#82b4e0");
rectz.setAttribute("width", "20px");
rectz.setAttribute("height", "20px");
rectz.setAttribute("x", "45px");
rectz.setAttribute("rx", "4px");
rectz.setAttribute("y", "1px");
rectz.setAttribute("ry", "4px");

svgElement.appendChild(rectx);
svgElement.appendChild(rectz);

const makeRect = configs => {
	let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
	let xCord = configs.leftCorner[0]
	let yCord = configs.leftCorner[1]
	rectangle.setAttribute("fill", configs.color);
	rectangle.setAttribute("height", 20);
	rectangle.setAttribute("width", 20); 
	rectangle.setAttribute("rx", configs.corners);
	rectangle.setAttribute("ry", configs.corners);
	rectangle.setAttribute("x", xCord);
	rectangle.setAttribute("y", yCord);
	return rectangle;
}

let settings = {color: "red", leftCorner: [100,30], corners: 2}

let newRect = makeRect(settings);

svgElement.appendChild(newRect);

for (let i = 0; i < 10; i += 1) {
	settings.leftCorner[1] += 25;
	let newRect = makeRect(settings);
	svgElement.appendChild(newRect);
}
