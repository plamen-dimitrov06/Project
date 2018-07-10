import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material-module/my-own-custom-material-module.module';
import { MatInputModule } from '@angular/material';

import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { StructureComponent } from './structure/structure.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { APIService } from './api.service';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StructureComponent,
    HomeComponent,
    UsersComponent,
    FacultyAddComponent,
    RegisterComponent,
    LoginComponent,
    FacultiesComponent,
    FacultyEditComponent,
    FacultyDeleteComponent,
    CoursesComponent,
    FileSelectDirective,
    CourseAddComponent,
    DataTableComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    SubjectsComponent,
    SubjectAddComponent,
    SubjectEditComponent,
    SubjectDeleteComponent
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
  providers: [AuthenticationService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
