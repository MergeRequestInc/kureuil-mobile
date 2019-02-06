import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Storage} from "@ionic/storage";
import {catchError} from "rxjs/operators";
import {_throw} from "rxjs/observable/throw";


/**
 * Interceptor for all requests and if the user is connected, set a header with the token
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private localStorage:Storage, private sessionStorage:Storage) {}
    //
    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
    //         return next.handle(request);
    //     }
    //
    //     const token = this.localStorage.get('Authorization') || this.sessionStorage.get('Authorization');
    //     if (!!token) {
    //         request = request.clone({
    //             setHeaders: {
    //                 Authorization: 'Bearer ' + token
    //             }
    //         });
    //     }
    //     return next.handle(request);
    // }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let promise = this.localStorage.get('Authorization');

        return Observable.fromPromise(promise)
            .mergeMap(token => {
                let clonedReq = this.addToken(request, token);
                return next.handle(clonedReq).pipe(catchError(error => {
                    // Perhaps display an error for specific status codes here already?
                    let msg = error.message;

                    // Pass the error to the caller of the function
                    return _throw(error);
                })
                );
            });
    }

    private addToken(request: HttpRequest<any>, token: any) {
        if (token) {
            let clone: HttpRequest<any>;
            clone = request.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                    Authorization: `Bearer ${token}`
                }
            });
            return clone;
        }

        return request;
    }
}
