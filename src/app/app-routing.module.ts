import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StructureComponent } from './structure/structure.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseAddComponent } from './course-add/course-add.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'faculties', component: FacultiesComponent },
  { path: 'faculties/faculty-add', component: FacultyAddComponent },
  { path: 'faculties/faculty-edit/:id', component: FacultyEditComponent },
  { path: 'faculties/faculty-delete/:id', component: FacultyDeleteComponent },
  { path: 'users', component: UsersComponent },
  { path: 'subjects', component: UsersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/course-add', component: CourseAddComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
