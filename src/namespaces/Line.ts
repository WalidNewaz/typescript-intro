/// <reference path = "IShape.ts" /> 

namespace Drawing {
    export class Line implements IShape {
        public draw() {
            return "Line is drawn";
        }
    }
}