/// <reference path="../../src/namespaces/IShape.ts" />
/// <reference path="../../src/namespaces/Circle.ts" />
/// <reference path="../../src/namespaces/Triangle.ts" />
/// <reference path="../../src/namespaces/Line.ts" />

import { expect } from 'chai';

// import { Drawing } from '../../src/namespaces/IShape';

// import { IShape } from '../../src/namespaces/IShape';
// import { Circle } from '../../src/namespaces/Circle';
// import { Triangle } from '../../src/namespaces/Triangle';
// import { Line } from '../../src/namespaces/Line';

describe.skip('All Namespaced Classes', () => {
    var shape: Drawing.IShape;

    describe('Circle', () => {
        it('should draw a circle', () => {
            shape = new Drawing.Circle();

            expect(shape.draw()).to.equal("Circle is drawn");
        });
    });
});
