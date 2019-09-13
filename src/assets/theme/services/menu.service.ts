import { Injectable } from '@angular/core';

export class NavMenu{
  width:number;
  heght:number;
  backgroundColor:string;
  active:boolean;
  constructor(){
    this.width=0;
    this.heght=0;
    this.active=false;
  }
}


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  letfNavMenu:NavMenu=new NavMenu();
  constructor() { }

  LeftMenuClick(){

    this.letfNavMenu.active=(this.letfNavMenu.active)?false:true;
    /*
    if(this.letfNavMenu.active){
        if(this.letfNavMenu.width>0){
          this.letfNavMenu.width=0;
        }else{
          this.letfNavMenu.width=80;
        }        
    }else{
      this.letfNavMenu.active=true;
      this.letfNavMenu.width=80;
    }
    */
  }


}
