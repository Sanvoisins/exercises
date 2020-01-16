
module.exports = function uniqueChar(arg) {
    let result = false;
    if(typeof(arg) !== 'string') {
        console.log("Argument is not a string !!")
    } else {
        const strLength = arg.length
        let memoryTampon = ''
        for(let i = 0; i<strLength; i++) {
            if(i > 0) {
                if(arg[i] == memoryTampon) {
                    result = true
                } else {
                    result = false
                    break;
                }
            }
            memoryTampon = arg[i]
        }
        console.log(result)
    }
}