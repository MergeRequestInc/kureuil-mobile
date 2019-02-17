import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthenficationServices} from "../../services/authenfication.services";
import {NavController} from "ionic-angular";
import {ConnectionPage} from "../../pages/Connection/Connection";

/**
 * Interceptor for 401 errors
 */
@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenficationServices, public navCtrl: NavController) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401 || err.status === 404) {
                            this.authService.logout();
                        }
                    }
                }
            )
        );
    }
}
