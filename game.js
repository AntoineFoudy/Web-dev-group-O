var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context, saves time 
var c = canvas.getContext("2d");

var mouse = {
    x: 0,
    y: 0
};

// Checks if mouse is being moved
window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

var colorArray = [
    "#3A356E",
    "#4F81F7",
    "#00F4CC",
    "#EFB7FF",
    "#F5F549",
];

// Objects
function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;

        // Checks if Player and Circle have collided
        if (
            this.x + this.radius > player1.x &&
            this.x - this.radius < player1.x + player1.sideLength &&
            this.y + this.radius > player1.y &&
            this.y - this.radius < player1.y + player1.sideLength
        ) {
            var reloadPg = confirm("Game Over, Do you want to play again?");
            if (reloadPg == true) {
                window.location.reload();
            }
            else {
                window.close();
            }
        }

        // Generates new Circle everytime circle hits border till 45 Circles are on canvas 
        if (circles.length <= 45) {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0 || this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.x = Math.random() * innerWidth;
            this.y = Math.random() * innerHeight;
            this.dx = (Math.random() - 0.5) * 12;
            this.dy = (Math.random() - 0.5) * 12;

            // Pushes the newly generated Circle into the Circle array
            circles.push(new Circle(this.x, this.y, this.dx, this.dy, this.radius, this.color));
            }
        }
        // Makes it so that when when 45 Circles are on the canvas when a Cirlce hits the border the Circle will bounce off of it
        else {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    }

        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

function Square(x, y, sideLength, color) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.color = color;

    this.update = function() {
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.rect(this.x, this.y, this.sideLength, this.sideLength);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

// Implementation
let player1;
let circles = [];

function init() {
    player1 = new Square(undefined, undefined, 50, "black");
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 12;
    var dy = (Math.random() - 0.5) * 12;
    circles.push(new Circle(x, y, dx, dy, 30, "colorArray[Math.floor(Math.random() * colorArray.length)];"));
}
// Animates the objects
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    player1.x = mouse.x;
    player1.y = mouse.y;
    player1.update();

    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
    }
}

// Music, Credit = Karl Casey @ White Bat Audio, https://www.youtube.com/watch?v=g6hY7dB54bc&ab_channel=WhiteBatAudio
var audio = new Audio("music.mp3");

// Calls all the function when button is pressed
document.getElementById("playGame").addEventListener("click", function () {
    init();
    animate();
    audio.play();
    document.getElementById("playGame").style.display = "none";
});