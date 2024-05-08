const _ = require('underscore');

let stack = [];

function resetStack() {
    stack = [];
}

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    if (stack.length === 0) {
        return undefined;
    } else {
        return stack.pop();
    }
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

exports.resetStack = resetStack;