import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isShowLoader: boolean = false;
  constructor() { }

  showLoader() {
    this.isShowLoader = true;
  }
  hideLoader() {
    this.isShowLoader = false;
  }
}
