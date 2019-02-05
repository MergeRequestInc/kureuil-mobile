import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SERVER_API_URL} from "../services-common/constrant/variables.constrant";

@Injectable()
export class PasswordServices {
    constructor(private http: HttpClient){}

    /**
     * Reset password with the email
     */
    forgotPassword(email:string) {
        return this.http.post(SERVER_API_URL + '/account/reset-password/init', email);
    }
}