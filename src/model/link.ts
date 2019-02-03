import {Tag} from "./tag";

export class Link  {
    constructor(
        public id: number,
        public url: string,
        public tags: Tag[]
    ){}
}