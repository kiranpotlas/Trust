import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DurationComponent } from './duration/duration.component';
import { LocationComponent } from './location/location.component';
import { RoomRegistrationComponent } from './room-registration/room-registration.component';
const spiritRoutes:Routes=[
  {path:'spiritual-centers/duration',component:DurationComponent},
  {path:'spiritual-centers/location',component:LocationComponent},
  {path:'spiritual-centers/room-registration',component:RoomRegistrationComponent}
]
@NgModule({
  declarations: [DurationComponent,LocationComponent,RoomRegistrationComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(spiritRoutes)
    ],
    exports:[RouterModule]
})
export class SpiritualCentersModule { }
