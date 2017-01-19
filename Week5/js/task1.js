window.onload = function(){ //on load event

var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location;
	
	},
	resize: function() {
		window.addEventListener("resize",this.render);
	}
};
task1.render();
task1.resize();
}; //end on load event