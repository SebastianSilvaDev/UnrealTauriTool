import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SettingsViewComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
