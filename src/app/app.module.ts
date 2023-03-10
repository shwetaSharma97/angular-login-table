import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { HttpInterceptorInterceptor } from './common/interceptors/http-interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { LoginPageComponent } from './core/component/login-page/login-page.component';
import { DataTableComponent } from './core/component/data-table/data-table.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      preventDuplicates: true,
      maxOpened: 1,
      autoDismiss: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    ModalModule.forRoot(),
    TableModule
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    DataTableComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
