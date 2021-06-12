import { AboutComponent } from './website/about/about.component';
import { MytestComponent } from './website/mytest/mytest.component';
import { FooterComponent } from './website/footer/footer.component';
import { AdsComponent } from './website/ads/ads.component';
import { ChangePassComponent } from './website/change-pass/change-pass.component';
import { MatchRequestComponent } from './coach/match-request/match-request.component';
import { EqRequestComponent } from './coach/eq-request/eq-request.component';
import { AddMatchDetailsComponent } from './admin/add-match-details/add-match-details.component';
import { HeaderComponent } from './website/header/header.component';
import { CoachPanelComponent } from './coach/coach-panel/coach-panel.component';
import { PlayerPanelComponent } from './player/player-panel/player-panel.component';
import { AddEqComponent } from './admin/add-eq/add-eq.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';
import { AddTrainingComponent } from './admin/add-training/add-training.component';
import { AddMatchComponent } from './admin/add-match/add-match.component';
import { AddCoachComponent } from './admin/add-coach/add-coach.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { HomeComponent } from './website/home/home.component';
import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { SignInComponent } from './website/sign-in/sign-in.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path:  'home', component:HomeComponent},
  { path:  'admin-panel', component:AdminPanelComponent},
  { path:  'sign-in', component:SignInComponent},
  { path:  'add-player', component:AddPlayerComponent},
  { path:  'add-employee', component:AddEmployeeComponent},
  { path:  'add-coach', component:AddCoachComponent},
  { path:  'add-match', component:AddMatchComponent},
  { path:  'add-training', component:AddTrainingComponent},
  { path:  'add-news', component:AddNewsComponent},
  { path:  'add-eq', component:AddEqComponent},
  { path:  'player-panel', component:PlayerPanelComponent},
  { path:  'coach-panel', component:CoachPanelComponent},
  { path:  'header', component:HeaderComponent},
  { path:  'add-match-details', component:AddMatchDetailsComponent},
  { path:  'eq-request', component:EqRequestComponent},
  { path:  'match-request', component:MatchRequestComponent},
  { path:  'change-pass', component:ChangePassComponent},
  { path:  'ads', component:AdsComponent},
  { path:  'footer', component:FooterComponent},
  { path:  'test', component:MytestComponent},
  { path:  'about', component:AboutComponent},
  

  

  





  { path:  '**', component:HomeComponent},

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
