import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class RegisterServices {
    constructor(private http:HttpClient){

    }

    register(email: string, password: string){
        const data = {email: email, password: password};
        return this.http.post('http://localhost:8080' + '/user/register', data);
    }
}