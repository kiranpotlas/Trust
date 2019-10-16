import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { OldageHomeService } from './oldage-home/oldage-home.service';
import { OrphanageService } from './orphanage/orphanage.service';
import { PriestCentersService } from './priest-centers/priest-centers.service';
import { SpiritualCentersService } from './spiritual-centers/spiritual-centers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [OldageHomeService,OrphanageService,PriestCentersService,SpiritualCentersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
