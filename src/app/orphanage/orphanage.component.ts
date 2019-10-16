import { Component, OnInit } from '@angular/core';
import { OrphanageService } from './orphanage.service';

@Component({
  selector: 'app-orphanage',
  templateUrl: './orphanage.component.html',
  styleUrls: ['./orphanage.component.css']
})
export class OrphanageComponent implements OnInit {
  public posts: string;
  constructor(private orphanSrv : OrphanageService) { }

  ngOnInit() {
    this.postUsers();
  }
  public postUsers():void{
    this.orphanSrv.postUsers().subscribe(
      res=>{
        console.log(res);
        this.posts = res;
      },
      err=>{
        console.log(err);
                
      }
    );
  }

}
