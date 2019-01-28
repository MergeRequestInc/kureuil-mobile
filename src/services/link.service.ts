import {Injectable} from "@angular/core";
import {Chanel} from "../model/chanel";

@Injectable()
export class LinkService {
    private links : string[] = [];

    /*
    Add link
     */
    addLink(url: string) {
        this.links.push(url);
    }

    /*
    Get links
     */
    getLinks() {
        return this.links.slice();
    }

    /*
    Delete link
     */
    deleteLink(link: string, index: number){
        this.links.splice(index,1);
    }
}