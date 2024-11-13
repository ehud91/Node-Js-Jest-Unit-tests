/*
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
*/

/*
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
*/

/*
test('object assignment', () => {
    const data = { one : 1};
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2});
});
*/

/*
test('null is falsy', () => {
    //const n = null;
    const n = 0;
    expect(n).toBeFalsy();
});
*/

/*
test('one is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});
*/

/*
const myFunction = require('./myfunction')

test('throws on invalid input', () => {
    expect(() => {
        //myFunction('String')
        myFunction(3)
    }).toThrow();
});
*/

/*
const fetchData = require('./fetchFunction');

test('the data is peanut butter', done => {

    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch(error) {
            done(error);
        } 
    }

    fetchData(callback);
});
*/

/*
const fetchPromise = require('./promiseTest');

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
});
*/

/*
const fetchPromise = require('./promiseTest');

test('the data is peanut putter', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});
*/

/*
const mockCallback = jest.fn(x => 42 + x);
mockCallback(0);
mockCallback(1);
*/

/*
test('mock implementation of basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
});
*/

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});