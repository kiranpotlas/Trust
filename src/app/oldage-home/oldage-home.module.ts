import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
const oldageRoutes:Routes=[
  {path:'oldage-home/about',component:AboutComponent},
  {path:'oldage-home/help',component:HelpComponent},
  {path:'oldage-home/join',component:JoinComponent}
]
@NgModule({
  declarations: [HelpComponent,JoinComponent, AboutComponent],
  imports: [
    CommonModule,FormsModule, RouterModule.forChild(oldageRoutes)
  ],
  exports:[RouterModule]
})
export class OldageHomeModule { }
