import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildViewComponent } from '../views/build-view/build-view.component';
import { SettingsViewComponent } from '../views/settings-view/settings-view.component';

const routes: Routes = [
  {path: '', component: SettingsViewComponent},
  {path: 'build', component: BuildViewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
