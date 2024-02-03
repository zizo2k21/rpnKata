/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = ["+", "-", "*", "/"]
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (operators.includes(tokens[i])) {
            const num2 = stack.pop()
            const num1 = stack.pop()
            const result = operate(tokens[i], num1, num2)
            stack.push(result)
        } else {
            stack.push(parseInt(tokens[i]))
        }
    }
    return stack[0]

    function operate(operator, num1, num2) {
        switch (operator) {
            case "+": return num1 + num2
            case "-": return num1 - num2
            case "*": return num1 * num2
            case "/": return Math.trunc(num1 / num2)
        }
    }
};