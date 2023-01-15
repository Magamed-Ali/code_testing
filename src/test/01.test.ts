import {mult, splitIntoWords, sum} from './01';


let a : number
let b: number
let c: number

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be correct', () => {
    //data
    a = 100;
    b = 20;
    c = 30;

    //action
    const result1 = sum(a, b);
    const result2 = sum(c, b);

    //expert result
    expect(result1).toBe(120)
    expect(result2).toBe(50)
})

test('mult should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = mult(a, b);
    const result2 = mult(c, b);

    //expert result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test("splitting into words should be correct", () => {
    const sent1 = "Hello my friend!"
    const sent2 = "JS - programming language."

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")


})


