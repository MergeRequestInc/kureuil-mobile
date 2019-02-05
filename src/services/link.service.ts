import {Injectable} from "@angular/core";
import {Chanel} from "../model/chanel";
import {HttpClient} from "@angular/common/http";
import {query} from "@angular/animations";
import {Link} from "../model/link";
import {SERVER_API_URL} from "../constrant/variables.constrant";

@Injectable()
export class LinkService {
    constructor(public http: HttpClient){

    }

    /*
    Add link
     */
    addLink(link: Link) {
        return this.http.post(SERVER_API_URL + '/links', link,{responseType: 'text'});

    }

    /*
    Get links
     */
    getLinks(query: string) {
        return this.http.get<string[]>(SERVER_API_URL + '/links/' + query);

    }

    /*
    Delete link
     */
    deleteLink(link: string, index: number){
        return this.http.delete(SERVER_API_URL + '/links/' + index,{responseType: 'text'});

    }

    /*
    Update link
     */
    updateLink(link: string){
        return this.http.put(SERVER_API_URL + '/links', link, {responseType: 'text'});
    }

    getLinkById(id: number){
        return this.http.get<Link>( SERVER_API_URL + '/links/' + id);

    }
}