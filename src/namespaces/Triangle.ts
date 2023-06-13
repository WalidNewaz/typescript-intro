/// <reference path = "IShape.ts" /> 

namespace Drawing {
    export class Triangle implements IShape {
        public draw() {
            return "Triangle is drawn";
        }
    }
}