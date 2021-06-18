import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { AboutComponent } from './website/about/about.component';
import { SignInComponent } from './website/sign-in/sign-in.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { HomeComponent } from './website/home/home.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddCoachComponent } from './admin/add-coach/add-coach.component';
import { AddMatchComponent } from './admin/add-match/add-match.component';
import { AddTrainingComponent } from './admin/add-training/add-training.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';
import { AddEqComponent } from './admin/add-eq/add-eq.component';
import { PlayerPanelComponent } from './player/player-panel/player-panel.component';
import { CoachPanelComponent } from './coach/coach-panel/coach-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMatchDetailsComponent } from './admin/add-match-details/add-match-details.component';
import { EqRequestComponent } from './coach/eq-request/eq-request.component';
import { MatchRequestComponent } from './coach/match-request/match-request.component';
import { ChangePassComponent } from './website/change-pass/change-pass.component';
import { AdsComponent } from './website/ads/ads.component';
import { MytestComponent } from './website/mytest/mytest.component';
//import { FormsModule } from '@angular/forms';
//////////////////////////////////
import { DatePipe } from '@angular/common';
//import { HttpModule } from '@angular/http';
//import { RoutingConfig } from "./app.routes";
//import { NgxQRCodeModule } from 'ngx-qrcode2';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SignInComponent,
    AdminPanelComponent,
    AddPlayerComponent,
    HomeComponent,
    AddEmployeeComponent,
    AddCoachComponent,
    AddMatchComponent,
    AddTrainingComponent,
    AddNewsComponent,
    AddEqComponent,
    PlayerPanelComponent,
    CoachPanelComponent,
    AddMatchDetailsComponent,
    EqRequestComponent,
    MatchRequestComponent,
    ChangePassComponent,
    AdsComponent,
    MytestComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //HttpModule,
    //NgxQRCodeModule,
    //RoutingConfig,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
