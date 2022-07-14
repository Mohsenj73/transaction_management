import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpError } from '../model/HttpErrors';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (!navigator.onLine) {
          this.handleConnectionRefused();
        } else {
          this.handleHttpError(err);
        }
        return throwError(err);
      })
    );
  }
  private handleConnectionRefused() {
    window.confirm('Your Connection Refused, Please Check internet connection');
  }
  private handleHttpError(error: HttpErrorResponse) {
    if (error.status == HttpError.BadRequest && !!error.error) {
      window.confirm(`Your Model is invalid! ${error.message}`);
    }
    if (error.status == HttpError.ServerError && !!error.error) {
      window.confirm(`The server has some Errors! ${error.message}`);
    }
    if (error.status == HttpError.Unautorize && !!error.error) {
      window.confirm(`Please login...`);
    }
  }
}
