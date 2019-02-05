import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SERVER_API_URL} from "../constrant/variables.constrant";
import {Storage} from "@ionic/storage";


/**
 * Interceptor for all requests and if the user is connected, set a header with the token
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private localStorage:Storage, private sessionStorage:Storage) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
            return next.handle(request);
        }

        const token = this.localStorage.get('Authorization') || this.sessionStorage.get('Authorization');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    }
}
