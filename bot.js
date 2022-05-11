// npm install robotjs

var bot = require('robotjs');

// Will be used for when i decide to do color detection
//var stamina_color = 150e94;
//var stamina_bar_x = 94;
//var stamina_bar_y = 303;


function main() {
    
    // Generates Random Delay For sleep function
    const generateRandomDelay = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
        
    }

    // Generates A Random Postion Used For Clicking The Ore
    const generateRandomClick_x = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    // Generates A Random Postion Used For Clicking The Ore
    const generateRandomClick_y = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    while (true) {
    // Delay In Between Stamina Resets
    console.log("Starting...")
    bot.moveMouseSmooth(generateRandomClick_x(670, 781), generateRandomClick_y(620, 696))
    bot.mouseClick()
    console.log("Sleeping...")
    sleep(8000, 15000)
    
    }

    // This Will Automatically Deposits Ore In A Ore Box 

    
}

main();

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
