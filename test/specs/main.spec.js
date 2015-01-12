document.body.innerHTML = __html__['_site/index.html'];

var utils = skyComponents['utils'];

//utils.init(); //live events don't init for karma, so init them here if you need to

describe('utils module can ', function () {

    it('sum an array of numbers', function () {

        expect(utils.sum([1,2,3])).toBe(6);

    });

});