import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent } from './structure/structure.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// Faculty components
import { FacultiesComponent } from './faculties/faculties/faculties.component';
import { FacultyAddComponent } from './faculties/faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculties/faculty-edit/faculty-edit.component';
import { FacultyDeleteComponent } from './faculties/faculty-delete/faculty-delete.component';
// Course components
import { CoursesComponent } from './courses/courses/courses.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CourseDeleteComponent } from './courses/course-delete/course-delete.component';
// Subject components
import { SubjectsComponent } from './subjects/subjects/subjects.component';
import { SubjectAddComponent } from './subjects/subject-add/subject-add.component';
import { SubjectEditComponent } from './subjects/subject-edit/subject-edit.component';
import { SubjectDeleteComponent } from './subjects/subject-delete/subject-delete.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'structure', component: StructureComponent, canActivate: [AuthGuardService] },
  // Faculty routes
  { path: 'faculties', component: FacultiesComponent, canActivate: [AuthGuardService] },
  { path: 'faculties/faculty-add', component: FacultyAddComponent, canActivate: [AuthGuardService] },
  { path: 'faculties/faculty-edit/:id', component: FacultyEditComponent, canActivate: [AuthGuardService] },
  { path: 'faculties/faculty-delete/:id', component: FacultyDeleteComponent, canActivate: [AuthGuardService] },
  // Subject routes
  { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuardService] },
  { path: 'subjects/subject-add', component: SubjectAddComponent, canActivate: [AuthGuardService] },
  { path: 'subjects/subject-edit/:id', component: SubjectEditComponent, canActivate: [AuthGuardService] },
  { path: 'subjects/subject-delete/:id', component: SubjectDeleteComponent , canActivate: [AuthGuardService]},
  // Course routes
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService] },
  { path: 'courses/course-add', component: CourseAddComponent, canActivate: [AuthGuardService] },
  { path: 'courses/course-edit/:id', component: CourseEditComponent, canActivate: [AuthGuardService] },
  { path: 'courses/course-delete/:id', component: CourseDeleteComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component : ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'users', component: UsersComponent}
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
