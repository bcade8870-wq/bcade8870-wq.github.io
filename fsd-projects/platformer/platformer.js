$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 650, 300, 10, "black");
createPlatform(650, 600, 150, 10, "black");
createPlatform(900, 400, 10, 200, "black");
createPlatform(800, 700, 200, 10, "black");
createPlatform(1025, 650, 175, 10, "black");
createPlatform(1300, 200, 100, 10, "black");
createPlatform(1200, 600, 100, 10, "black");
createPlatform(900, 500, 200, 10, "black");
createPlatform(800, 400, 100, 10, "black");
createPlatform(1000, 300, 100, 10, "black");
createPlatform(1100, 200, 10, 110, "black");
createPlatform(700, 200, 200, 10, "black");
createPlatform(1000, 100, 200, 10, "black");
createPlatform(600, 400, 100, 10, "black");
    // TODO 3 - Create Collectables
createCollectable("speed", 930, 450, 0.7, 0.2);
createCollectable("speed", 1330, 130, 0.7, 0.2);
createCollectable("speed", 630, 350, 0.7, 0.2);

    // TODO 4 - Create Cannons
createCannon("right", 500, 2200)
createCannon("left", 200, 2000)
createCannon("top", 500, 600)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
