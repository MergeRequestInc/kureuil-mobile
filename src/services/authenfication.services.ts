import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SERVER_API_URL} from "../services-common/constrant/variables.constrant";
import {Storage} from "@ionic/storage";

@Injectable()
export class AuthenficationServices {
    constructor(private http: HttpClient, private localStorage: Storage) {

    }
    /**
     * Login with the email and password
     */
    login(email: string, password:string) {
        const data = {email: email, password: password};
        return this.http.post(SERVER_API_URL + '/user/login', data,{observe: 'response'});
    }

    /**
     * Disconnect the current user
     */
    logout() {
        // remove user from local storage to log user out
        this.localStorage.remove('currentUser');
        this.localStorage.remove('isLoggedIn');
    }

    /**
     * Check if current user is logged in
     */
    isLogin() {
        return !!this.localStorage.get('isLoggedIn');
    }
}