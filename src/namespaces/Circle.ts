/// <reference path = "IShape.ts" /> 

namespace Drawing {
    export class Circle implements IShape {
        public draw() {
            return "Circle is drawn";
        }
    }
}