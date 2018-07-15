import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material-module/my-own-custom-material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StructureComponent } from './structure/structure.component';
import { HomeComponent } from './home/home.component';
// User related components/services
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
// Faculty component import
import { FacultiesComponent } from './faculties/faculties/faculties.component';
import { FacultyAddComponent } from './faculties/faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculties/faculty-edit/faculty-edit.component';
import { FacultyDeleteComponent } from './faculties/faculty-delete/faculty-delete.component';
// Course component import
import { CoursesComponent } from './courses/courses/courses.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CourseDeleteComponent } from './courses/course-delete/course-delete.component';
// Subject component import
import { SubjectsComponent } from './subjects/subjects/subjects.component';
import { SubjectAddComponent } from './subjects/subject-add/subject-add.component';
import { SubjectEditComponent } from './subjects/subject-edit/subject-edit.component';
import { SubjectDeleteComponent } from './subjects/subject-delete/subject-delete.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StructureComponent,
    HomeComponent,
    FacultyAddComponent,
    RegisterComponent,
    LoginComponent,
    FacultiesComponent,
    FacultyEditComponent,
    FacultyDeleteComponent,
    CoursesComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    SubjectsComponent,
    SubjectAddComponent,
    SubjectEditComponent,
    SubjectDeleteComponent,
    UnauthorizedComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModuleModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
