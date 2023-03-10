import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import {tap, finalize} from 'rxjs/operators';
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private appService: AppService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    let ok: string;

    return next.handle(req).pipe(
      tap(

        event => {
          ok = event instanceof HttpResponse ? 'succeeded' : '';
          if (ok === 'succeeded') {
            this.appService.hideLoader();
          }
        },
        error => {
          ok = 'failed';
          this.appService.hideLoader();
        }
      ),

      finalize(() => {
        this.appService.hideLoader();
      })
    );
  }
}

