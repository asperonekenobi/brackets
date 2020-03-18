module.exports = function check(str, bracketsConfig) {

    let arrStr = str.split(''),
        stack = [];

    if (arrStr.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            /* Проверяем закрывающую и стэк, а затем открывающую т.к есть одинаковые '|' и '|', и если сразу проверять
            откр. значение повторно заносится в стек*/
            if (arrStr[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0]) {

                stack.pop();

            } else if (arrStr[i] === bracketsConfig[j][0]) {
                stack.push(arrStr[i]);
            }
        }
    }
    return stack.length === 0;
    
};
