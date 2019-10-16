import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OldageHomeComponent } from './oldage-home/oldage-home.component';
import { OrphanageComponent } from './orphanage/orphanage.component';
import { PriestCentersComponent } from './priest-centers/priest-centers.component';
import { SpiritualCentersComponent } from './spiritual-centers/spiritual-centers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OldageHomeModule } from './oldage-home/oldage-home.module';
import { OrphanageModule } from './orphanage/orphanage.module';
import { PriestCentersModule } from './priest-centers/priest-centers.module';
import { SpiritualCentersModule } from './spiritual-centers/spiritual-centers.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const Holyroutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'oldage-home',component:OldageHomeComponent},
  {path:'orphanage',component:OrphanageComponent},
  {path:'priest-centers',component:PriestCentersComponent},
  {path:'spiritual-centers',component:SpiritualCentersComponent},
  {path:'registration/registration.component.html',component:RegistrationComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations:[HomeComponent,OldageHomeComponent,OrphanageComponent,PriestCentersComponent,RegistrationComponent,SpiritualCentersComponent,AboutUsComponent,ContactUsComponent,NotFoundComponent],
  imports: [CommonModule,FormsModule,OldageHomeModule,OrphanageModule,PriestCentersModule,SpiritualCentersModule,RouterModule.forRoot(Holyroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
