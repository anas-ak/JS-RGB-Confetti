const svg = document.getElementById("svg");
const colors = ["Red", "Lime", "Yellow", "Indigo", "Blue"];

function drawCircle() {
    let c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("r", Math.floor(Math.random() * 50));
    c.setAttribute("cx", Math.floor(Math.random() * 500)); 
    c.setAttribute("cy", Math.floor(Math.random() * 500));
    c.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);
    svg.appendChild(c);
}

function drawSquare() { 
    let s = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    let dimension = Math.floor(Math.random() * 350);
    let rotate = Math.floor(Math.random() * 500);
    s.setAttribute("width", dimension);
    s.setAttribute("height", dimension);
    s.setAttribute("x", Math.floor(Math.random() * 500)); 
    s.setAttribute("y", Math.floor(Math.random() * 500));
    s.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);
    s.style.transform = "rotate(" + rotate + "deg)";
    svg.appendChild(s);
  }
  
  function drawDash() { 
    let d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    let dimension = Math.floor(Math.random() * 100);
    let rotate = Math.floor(Math.random() * 500);
    d.setAttribute("width", dimension/10);
    d.setAttribute("height", dimension);
    d.setAttribute("x", Math.floor(Math.random() * 500)); 
    d.setAttribute("y", Math.floor(Math.random() * 500));
    d.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);
    d.style.transform = "rotate(" + rotate + "deg)";
    svg.appendChild(d);
  }
  
  function drawRandom() { 
    for (i = 0; i < 100; i++) {
      setTimeout( function timer(){
        var n = Math.floor(Math.random() * 3);
        console.log(n)
        switch(n) {
          case 0: 
            drawCircle();
            break;
          case 1: 
            drawSquare();
            break;
          case 2: 
            drawDash();
            break;
        }
      }, i*5 );
    }
  }
  
  //Remove all SVG shapes from DOM
  function removeAll() {
    while (svg.firstChild) {
      svg.removeChild(svg.lastChild);
    }
  }
  
  //On click, remove all shapes and draw new shapes
  svg.addEventListener("click", function(){
    removeAll();
    drawRandom();
  });
  
  //On page load, draw new shapes
  drawRandom();