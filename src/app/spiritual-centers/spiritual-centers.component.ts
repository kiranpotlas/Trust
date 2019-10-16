import { Component, OnInit } from '@angular/core';
import { SpiritualCentersService } from './spiritual-centers.service';

@Component({
  selector: 'app-spiritual-centers',
  templateUrl: './spiritual-centers.component.html',
  styleUrls: ['./spiritual-centers.component.css']
})
export class SpiritualCentersComponent implements OnInit {
  public albums :string;
  constructor(private spiritualSrv : SpiritualCentersService) { }

  ngOnInit() {
  this.getAlbums();
  }
  public getAlbums():void{
    this.spiritualSrv.getAlbums().subscribe(
      res=>{
        console.log(res);
        this.albums = res;
      }
    )
  }
}
