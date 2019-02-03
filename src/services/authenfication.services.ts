import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthenficationServices {
    constructor(private http: HttpClient) {

    }
    /**
     * Login with the email and password
     */
    login(email: string, password:string) {
        const data = {email: email, password: password};
        return this.http.post('http://localhost:8080' + '/user/login', data,{responseType: 'text'});
    }

    /**
     * Disconnect the current user
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
    }

    /**
     * Check if current user is logged in
     */
    isLogin() {
        return !!localStorage.getItem('isLoggedIn');
    }
}