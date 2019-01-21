import {HttpClient} from "@angular/common/http";
import {Chanel} from "../model/chanel";
import {Injectable} from "@angular/core";

@Injectable()
export class ChanelServices {
    constructor(private http: HttpClient) {

    }

    /*
    Create new chanel
    */
    addChanel(chanel: Chanel){
        return this.http.post('http://localhost:8080' + 'chanel-service/addChanel', chanel);
    }
}