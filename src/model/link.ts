import {Tag} from "./tag";
import {BuilderDtoJsonAbstract} from "./builderDtoJsonAbstract";

export class Link extends BuilderDtoJsonAbstract {
    constructor(
        public id?: number,
        public url?: string,
        public tags?: Tag[]
    ) {
        super();
    }
}
