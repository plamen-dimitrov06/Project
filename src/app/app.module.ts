import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material-module/my-own-custom-material-module.module';
import { MatInputModule } from '@angular/material';

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
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseAddComponent } from './course-add/course-add.component';

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
    CourseAddComponent
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
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
