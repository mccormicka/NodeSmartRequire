'use strict';

describe('SHOULD', function () {

    beforeEach(function(){
        require('../index');
    });

    it('Be able to acquire index', function () {
        var test = require('../index');
        expect(test).not.toBeNull();
    });

    it('Be able to require normal Node Module', function (done) {
        expect(require('http')).toBeTruthy();
        done();
    });


    it('Be able to find a module by its path relative to the base', function (done) {
        expect(require('./testclass')).toBeTruthy();
        done();
    });

    it('Be able to find a module relatively', function (done) {
        expect(require('test/testing/testclass')).toBeTruthy();
        done();
    });

    it('Be able to find submodules relatively', function (done) {
        expect(require('test/testing/testinsiderequire').relative).toBeTruthy();
        done();
    });

    it('Be able to find submodules from base', function (done) {
        expect(require('test/testing/testinsiderequire').full).toBeTruthy();
        done();
    });

    it('Be able to find files outside of the directory', function (done) {
        expect(require('lib/SampleFile')).toBeTruthy();
        done();
    });
});