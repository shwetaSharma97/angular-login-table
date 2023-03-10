import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  readonly toasterTypes: any = {
    '0': 'success',
    '1': 'error',
    '2': 'warning',
    '3': 'info'
  };
  constructor(private toastr: ToastrService) { }

  showToast(prop) {
    const type = this.toasterTypes[prop.type || '3'];
    this.toastr[type](prop.title, prop.message);
  }

}
