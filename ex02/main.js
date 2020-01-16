module.exports = function stringReverse (arg){
    if(typeof(arg) === 'string') {
        let reverse = ''
        for (let i = arg.length - 1; i >= 0; i--) { 
            reverse += arg[i];
        }
        console.log(reverse)
    } else {
        console.log('Argument is not a string')
    } 
}