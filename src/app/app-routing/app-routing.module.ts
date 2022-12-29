import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildViewComponent } from '../views/build-view/build-view.component';
import { ServerTestViewComponent } from '../views/server-test-view/server-test-view.component';
import { SettingsViewComponent } from '../views/settings-view/settings-view.component';

const routes: Routes = [
  {path: '', component: SettingsViewComponent},
  {path: 'build', component: BuildViewComponent},
  {path: 'server-test', component: ServerTestViewComponent}
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
