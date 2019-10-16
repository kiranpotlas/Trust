import { Component, OnInit } from '@angular/core';
import { OldageHomeService } from './oldage-home.service';

@Component({
  selector: 'app-oldage-home',
  templateUrl: './oldage-home.component.html',
  styleUrls: ['./oldage-home.component.css']
})
export class OldageHomeComponent implements OnInit {
  public users:string; 
  constructor(private oldageSrv : OldageHomeService) { }

  ngOnInit() {
    this.getUsers();
  }
  public getUsers():void{
    this.oldageSrv.getUsers().subscribe(
      res=>{
         console.log(res);
         this.users = res;
      },
      err=>{
          console.log(err);
          
      }
    );
  }
}
