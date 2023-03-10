import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpService } from '../../../common/services/http.service';

@Component({
	selector: 'angular-app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
	bsModal: BsModalRef;
	tableList: any = [];
	selectedItem: any = [];
	columns: any[] = [
		{
			name: "User Name",
			field: "userName",
		},
		{
			name: "Phone Number",
			field: "phoneNo",
		},
		{
			name: "Email ID",
			field: "emailID",
		}
	];
	constructor(private httpService: HttpService, private modalService: BsModalService) { }

	ngOnInit() {
		this.getdata();
	}


	onModalPopup(template: TemplateRef<any>) {
		this.bsModal = this.modalService.show(template, {
			animated: true,
			backdrop: 'static',
			class: 'modal-sm modal-dialog-centered'
		});
	}

	getdata() {
		this.httpService.get()
			.subscribe(data => {
				this.tableList = data;
				console.log(this.tableList)
			});
	}

	itemSelected(item) {
		this.selectedItem.push(this.tableList[item].id);
	}

	deleteData() {
		this.selectedItem.forEach(id => {
			this.httpService.delete(id).subscribe((data) => {
				this.getdata();
				this.bsModal.hide();
			})
		});

	}
}
