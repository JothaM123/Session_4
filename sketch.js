var bgimg,background2, logoimg, logo, start, home1, restart, about, gameSound, retro, gif, png,abtbg,enemy,player,coin,v1,v2,v3
var gameState = "wait"





function preload() {
    bgimg = loadImage("background.png")
    logoimg = loadImage("kv.png")
    // startimg = loadImage("play.png")

    //gif = loadImage("background.gif")
    abtbg = loadImage("abtbg.jpg")
    l1bg = loadImage("virus1.png")
    v1 = loadImage("virus.png")
    v2 = loadImage("virus2.png")
    v3 = loadImage("virus 3.png")

}


function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20)
    logo = createSprite(width / 2 - 20, height / 2 - 20)
    logo.addImage(logoimg)
    logo.debug = true
    logo.setCollider("circle", 0, 0, 40)


    home1 = createImg("home.png")
    home1.position(width / 2-100, height-100)
    home1.size(200, 100)
    home1.hide()

    start = createImg("play.png")
    start.position(width / 3 + 200, height - 150)
    start.size(225, 195)

    about = createImg("about.png")
    about.position(width / 3, height - 161)
    about.size(225, 215)

    player = createSprite(width / 4, height - 200)
   // player.addImage()
    
    
    


   // background2= createSprite(width / 2, height / 2)
    //background2.addImage(gif)
    //background2.scale = 2
    // background2.visible = false


}
   

function draw() {

    if (gameState === "wait") {
        background(bgimg)
        home1.hide()
        start.show()
        about.show()
        logo.visible = true
        player.visible=false
    }





    about.mousePressed(() => {
        gameState = "about"
        about.hide()
        Swal.fire({
            title: 'About this game',
            text:'This is the placeholder text'
        }).then(() => { 
            gameState = "wait"
        })
    })


    start.mousePressed(() => {
        gameState = "level 1"
    })

    home1.mousePressed(() => {
        gameState = "wait"
    })

    if (gameState === "level 1") {
        background(l1bg)
        logo.visible = false
        player.visible = true
        about.hide()
        home1.show()
        start.hide()

        if (keyDown(RIGHT_ARROW)) {
            player.x=player.x+15
        }
    
        if (keyDown(LEFT_ARROW)) { 
            player.x=player.x - 15
        }
        
        if (keyDown(UP_ARROW)) { 
            player.y = player.y - 15
        }
        if (keyDown(DOWN_ARROW)) { 
            player.y=player.y + 15
        }
        if (player.x < 0) { 
            player.x = 10
        }
        if (player.x > width) { 
            player.x = width-100
        }
    
        spawnEnemies()
        spawnCoins()
    }

    if (gameState === "about") {
        background(abtbg)
        logo.visible = false
        home1.hide()
        start.hide()
        player.visible = false
        // about.hide()
       
    }

    

    drawSprites()
}


function spawnEnemies() {
    rand = Math.round(random(100,200))
    if (frameCount % rand === 0) {
        var randY = Math.round(random(20, height - 20))
        enemy = createSprite(width, randY)
        enemy.scale = 0.5
        enemy.velocityX = -10
        enemy.shapeColor = "lightgreen"
        var rand2 = Math.round(random(1, 3))
        console.log(rand2)
        switch (rand2) { 
            case 1: enemy.addImage(v1)
                break;
            case 2: enemy.addImage(v2)
                break;
            case 3: enemy.addImage(v3)
                break;
            default:
                break;
        }
        
        
    }
}

function spawnCoins() { 
    rand = Math.round(random(100, 250))
    if (frameCount % rand === 0) { 
            var randX = Math.round(random(10, width - 30))
            coin = createSprite(randX, 0)
            coin.velocityY = +5
            coin.shapeColor = "gold"
         
    }
}