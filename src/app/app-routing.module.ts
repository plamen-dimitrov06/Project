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
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'faculties', component: FacultiesComponent },
  { path: 'faculties/faculty-add', component: FacultyAddComponent },
  { path: 'faculties/faculty-edit/:id', component: FacultyEditComponent },
  { path: 'faculties/faculty-delete/:id', component: FacultyDeleteComponent },
  { path: 'users', component: UsersComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/subject-add', component: SubjectAddComponent },
  { path: 'subjects/subject-edit/:id', component: SubjectEditComponent },
  { path: 'subjects/subject-delete/:id', component: SubjectDeleteComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/course-add', component: CourseAddComponent },
  { path: 'courses/course-edit/:id', component: CourseEditComponent },
  { path: 'courses/course-delete/:id', component: CourseDeleteComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component : SubjectDeleteComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
