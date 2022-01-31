const findNarcissusFrom = require('./index');

const people = [
    {name: 'Alex', know: ['Jhon']},
    {name: 'Jhon', know: []},
    {name: 'Eva', know: ['Alex', 'Jhon']},
    {name: 'Ivan', know: ['Jhon', 'Eva']},
];
const people1 = [
    {name: 'Alex', know: ['Jhon']},
    {name: 'Jhon', know: ['Alex']},
    {name: 'Eva', know: ['Alex', 'Jhon']},
    {name: 'Ivan', know: ['Eva']},
];
const people2 = [
    {name: 'Alex', know: ['Eva']},
    {name: 'Jhon', know: []},
    {name: 'Eva', know: ['Alex', 'Jhon']},
    {name: 'Ivan', know: ['Jhon', 'Eva']},
];

test('Narcissus is Jhon', () => {
    expect(findNarcissusFrom(people)).toBe('Jhon');
});

test('Narcissus does not exist', () => {
    expect(findNarcissusFrom(people1)).toBe('');
});

test('Narcissus does not exist', () => {
    expect(findNarcissusFrom(people2)).toBe('');
});
