import { Component, OnInit } from '@angular/core';
import { PriestCentersService } from './priest-centers.service';

@Component({
  selector: 'app-priest-centers',
  templateUrl: './priest-centers.component.html',
  styleUrls: ['./priest-centers.component.css']
})
export class PriestCentersComponent implements OnInit {
  public todos : string;
  constructor(private priestSrv : PriestCentersService) { }

  ngOnInit() {
    this.postTodos();
  }
  public postTodos():void{
    this.priestSrv.postTodos().subscribe(
      res=>{
        console.log(res);
        this.todos = res;
      },
      err=>{
        console.log(err);
               
      }
    );
  }
}
