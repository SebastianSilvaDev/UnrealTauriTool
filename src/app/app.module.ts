import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BuildViewComponent } from './views/build-view/build-view.component';
import { ServerTestViewComponent } from './views/server-test-view/server-test-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SettingsViewComponent,
    BuildViewComponent,
    ServerTestViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
