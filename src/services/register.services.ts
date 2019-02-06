import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SERVER_API_URL} from "../services-common/constrant/variables.constrant";

@Injectable()
export class RegisterServices {
    constructor(private http:HttpClient){

    }

    register(name: string, email: string, password: string){
        const data = {name: name, email: email, password: password};
        return this.http.post(SERVER_API_URL + 'user/register', data);
    }
}