import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { StaffDeleteModalComponent } from 'src/assets/theme/modals/staff-delete-modal/staff-delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { STAFFS } from '../models/mock-staff';
import { Staff } from '../models/staff.model';


const MODALS={
  staffDeleteModel:StaffDeleteModalComponent
};


@Injectable({
  providedIn: 'root'
})

export class StaffService {
  STAFF_LIST:Staff[]=[];
  activeStaff:Staff;
  modalRef:any;


  constructor(private modalService:NgbModal) { 
    this.loadStaffs();
  }


  getSatffs(): Observable<Staff[]>{
    return of (STAFFS);
  }

  loadStaffs(){
    this.getSatffs().subscribe(staffs=>this.STAFF_LIST=staffs);
  }

  SearchStaff(id:number):Observable<Staff>{
    return of(this.STAFF_LIST.find((staff:Staff)=>staff.id==id));
}

SetActiveStaff(id:number){
 this.SearchStaff(id).subscribe(staff=>{
   this.activeStaff=staff;
 });
}


confirmDeleteStaff(staffId:string){
  this.modalRef=this.modalService.open(MODALS['staffDeleteModal']);
  this.modalRef.componentInstance.staffId=staffId;
}

deleteStaff(staffId:string){
  this.modalRef.close();
   alert(staffId);

   /* an http request should be implemented here for delete operation  in  database */
}

}

