import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component'
import { StructureComponent } from './structure/structure.component'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'users', component: UsersComponent },
  { path: 'subjects', component: UsersComponent },
  { path: 'faculties', component: UsersComponent },
  { path: 'stats', component: UsersComponent }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
