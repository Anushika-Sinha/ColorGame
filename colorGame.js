//window.setTimeout(function(){

	var numSquares =6;	
	var colors = [];
	var pickedcolor;
	
	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var modeButtons = document.querySelectorAll(".mode");
	messageDisplay.style.color = "steelblue";

	init();

	function init(){

		setUpModeButtons();
		setUpSquares();
		reset();

	}

	function setUpModeButtons(){
		for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			
			reset();
		});
	}
	}

	function setUpSquares(){
		for(var i=0;i<squares.length;i++)
	{
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedcolor){
				messageDisplay.textContent = "CORRECT";
				resetButton.textContent="Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "TRY AGAIN";
			}
		});
	}
	}

	

	function reset(){
		colors =generateRandomColors(numSquares);
		pickedcolor = pickColor();
		colorDisplay.textContent = pickedcolor;
		resetButton.textContent = "New Colors";
		for(var i=0;i<squares.length;i++)
		{
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}
		}
		h1.style.background="steelblue";
		messageDisplay.textContent = "";
	}

	/*easybtn.addEventListener("click",function(){
		easybtn.classList.add("selected");
		hardbtn.classList.remove("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		pickedcolor = pickColor();
		colorDisplay.textContent= pickedcolor;
		for(var i= 0; i<squares.length;i++){
			if(colors[i]){
				squares[i].style.background =colors[i];
			}else{
				squares[i].style.display = "none";
			}
		}
	});

	hardbtn.addEventListener("click",function(){
		hardbtn.classList.add("selected");
		easybtn.classList.remove("selected");
		numSquares=6;
		colors = generateRandomColors(numSquares);
		pickedcolor = pickColor();
		colorDisplay.textContent= pickedcolor;
		for(var i= 0; i<squares.length;i++){
			
				squares[i].style.background =colors[i];
				squares[i].style.display = "block";
		}
	});*/

	resetButton.addEventListener("click",function(){
		reset();
	});
	

	function changeColors(color){
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=color;
		}
	}

	function pickColor(){
		var random=Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num){
		var arr = [];

		for(var i=0;i<num;i++){
			arr.push(randomColor());
		}

		return arr;
	}

	function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb("+r+", "+g+", "+b+")";
	}


	/* Usually everything is a part of an object so we should keep all in 
	an object. Eg: var game = {}
	game.init = function(){
		Statements
	}
	game.init();*/


//}, 0);