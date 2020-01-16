module.exports = function isAnagram(arg1, arg2) {
    let result = false
    if (arg1.length === arg2.length) {
        for (let i = 0; i < arg1.length; i++) {
            for (let j = 0; j < arg2.length; j++) {
                if (arg1[i] != arg2[j]) {
                    result = false
                } else {
                    result = true
                    break
                }
            }
        }
    }
    console.log(result)
}