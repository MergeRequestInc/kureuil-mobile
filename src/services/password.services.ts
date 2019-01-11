import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PasswordServices {
    constructor(private http: HttpClient){}

    /**
     * Reset password with the email
     */
    forgotPassword(email:string) {
        return this.http.post('http://localhost:8080' + '/account/reset-password/init', email);
    }
}