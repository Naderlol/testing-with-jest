const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('push() should add an element to the stack', () => {
    stack.push(3);
    expect(stack.peek()).toBe(3);
});

test('pop() should remove and return the top element from the stack', () => {
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(2);
    expect(stack.peek()).toBe(1);
});