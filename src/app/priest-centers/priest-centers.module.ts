import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
const priestRoutes:Routes=[
  {path:'priest-centers/news',component:NewsComponent},
  {path:'priest-centers/videos',component:VideosComponent},
  {path:'priest-centers/photos',component:PhotosComponent}
]
@NgModule({
  declarations: [NewsComponent,PhotosComponent,VideosComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(priestRoutes)
  ],
  exports:[RouterModule]
})
export class PriestCentersModule { }
