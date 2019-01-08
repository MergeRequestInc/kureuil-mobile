import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PasswordServices {
    constructor(private http: HttpClient){}

    /**
     * Reset password with the email
     */
    forgotPassword(email:String) {
        return this.http.post('http://localhost:8080' + 'api/reset-password', email);
    }

    /**
     * Reset password with the email
     */
    changePassword(newPassword: String) {
        return this.http.post('http://localhost:8080'+ 'api/change-password', newPassword);

    }
}