import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DonationsComponent } from './donations/donations.component';
import { OurImpactComponent } from './our-impact/our-impact.component';
const orphanRoutes:Routes=[
  {path:'orphanage/donations',component:DonationsComponent},
  {path:'orphanage/our-impact',component:OurImpactComponent}
]
@NgModule({
  declarations: [DonationsComponent,OurImpactComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(orphanRoutes)
  ],
  exports:[RouterModule]
})
export class OrphanageModule { }
