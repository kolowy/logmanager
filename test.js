const { logManager } = require("./index.js");
exports.test = function () {
    logManager("BLACK", 'Black')
    logManager("RED", 'Red')
    logManager("GREEN", 'Green')
    logManager("YELLOW", 'Yellow')
    logManager("BLUE", 'Blue')
    logManager("MAGENTA", 'Magenta')
    logManager("CYAN", 'Cyan')
    logManager("WHITE", 'White')
    logManager("BLACK", '-Black')
    logManager("RED", '-Red')
    logManager("GREEN", '-Green')
    logManager("YELLOW", '-Yellow')
    logManager("BLUE", '-Blue')
    logManager("MAGENTA", '-Magenta')
    logManager("CYAN", '-Cyan')
    logManager("WHITE", '-White')
    
    logManager("MAGENTA", 'BriMagenta')
    logManager("CYAN", 'DimCyan')
    logManager("WHITE", 'UnderWhite')
    logManager("BLACK", 'Blink-Black')
    logManager("RED", 'Rev-Red')
    logManager("MAGENTA", 'Hid-Magenta')

}