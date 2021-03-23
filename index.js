exports.logManager = function (message, col) {
    var actualDate = new Date();
    var dateString = actualDate.getFullYear() + "-" + actualDate.getMonth() + "-" + actualDate.getDate() + " " + actualDate.getHours() + ":" + actualDate.getMinutes() + ":" + actualDate.getSeconds();
    var color = "";
    if(col.startsWith("Bri")){ const chars = col.split('Bri'); col = chars[1]; color = "\x1b[1m"; }
    if(col.startsWith("Dim")){ const chars = col.split('Dim'); col = chars[1];color = "\x1b[2m"; }
    if(col.startsWith("Under")){ const chars = col.split('Under'); col = chars[1]; color = "\x1b[4m"; }
    if(col.startsWith("Blink")){ const chars = col.split('Blink'); col = chars[1]; color = "\x1b[2m"; }
    if(col.startsWith("Rev")){ const chars = col.split('Rev'); col = chars[1]; color = "\x1b[2m"; }
    if(col.startsWith("Hid")){ const chars = col.split('Hid'); col = chars[1]; color = "\x1b[2m"; }

    switch (col) {
        case "Black": {
            color += "\x1b[30m";
            break;
        }
        case "Red": {
            color += "\x1b[31m"; 
            break;
        }
        case "Green": {
            color += "\x1b[32m"; 
            break;
        }
        case "Yellow": {
            color += "\x1b[33m"; 
            break;
        }
        case "Blue": {
            color += "\x1b[34m"; 
            break;
        }
        case "Magenta": {
            color += "\x1b[35m"; 
            break;
        }
        case "Cyan": {
            color += "\x1b[36m"; 
            break;
        }
        case "White": {
            color += "\x1b[37m"; 
            break;
        }
        case "-Black": {
            color += "\x1b[40m"; 
            break;
        }
        case "-Red": {
            color += "\x1b[41m"; 
            break;
        }
        case "-Green": {
            color += "\x1b[42m"; 
            break;
        }
        case "-Yellow": {
            color += "\x1b[43m"; 
            break;
        }
        case "-Blue": {
            color += "\x1b[44m"; 
            break;
        }
        case "-Magenta": {
            color += "\x1b[45m"; 
            break;
        }
        case "-Cyan": {
            color += "\x1b[46m"; 
            break;
        }
        case "-White": {
            color += "\x1b[47m"; 
            break;
        }


        default: {
            console.log("Unvalid color : \"" + color + "\" message : " + message);
            return;
        }
    };

    console.log(color + "" + dateString + " " + message + "\x1b[0m");
}

