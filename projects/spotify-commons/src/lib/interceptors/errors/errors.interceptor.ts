import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { statusErrors, codeErrors } from './errors.constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SpotifyErrorsInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(request)
    .pipe(
    catchError((err: HttpErrorResponse) => {
    let message: string;

    if (err.error?.message) {
      message = err.error.message;
    } else {
      message = statusErrors.get(err.status) || 'Error Interno';
    }

    this.snackBar.open(message, 'cerrar', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center' });
    return throwError(err);
    })
    );
  }
}
