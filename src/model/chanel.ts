import {BuilderDtoJsonAbstract} from "./builderDtoJsonAbstract";

export class Chanel extends BuilderDtoJsonAbstract{
    constructor(
        public id?: number,
        public name?: string,
        public query?: string,
    ) {
        super();
    }
}