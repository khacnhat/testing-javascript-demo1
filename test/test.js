'use strict';

const add = require('../src/calculator.js');

var assert = require('assert');

describe('Calculator', function() {
    describe('#add', function() {
        it('1 + 1 = 2', function() {
            assert.equal(add(1, 1), 2);
        });

        it('MAX + 1 should throw exception', function() {
            assert.throws(
                function () {
                        add(Number.MAX_VALUE, 1);
                    },
                Error, 'Overload error');
        });

        it('MIN + -1 should throw exception', function() {
            assert.throws(
                function () {
                    add(Number.MIN_VALUE, -1);
                },
                Error, 'Overload error');
        });
    });
});