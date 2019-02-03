import {Injectable} from "@angular/core";
import {Chanel} from "../model/chanel";
import {HttpClient} from "@angular/common/http";
import {query} from "@angular/animations";
import {Link} from "../model/link";

@Injectable()
export class LinkService {
    constructor(public http: HttpClient){

    }

    /*
    Add link
     */
    addLink(link: Link) {
        return this.http.post('localhost:8080/' + 'links', link);

    }

    /*
    Get links
     */
    getLinks() {
        return this.http.get<string[]>('localhost:8080/' + 'links/' + query);

    }

    /*
    Delete link
     */
    deleteLink(link: string, index: number){
        return this.http.delete('localhost:8080/' + 'links/' + index);

    }

    /*
    Update link
     */
    updateLink(link: string){
        return this.http.put('localhost:/8080/' + 'links', link);
    }
}