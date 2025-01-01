import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { ViewSubjectComponent } from './components/view-subject/view-subject.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { AllAttendanceComponent } from './components/all-attendance/all-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    AddUserComponent,
    UserProfileComponent,
    AllUserComponent,
    AddSubjectComponent,
    AllSubjectComponent,
    AddStudentComponent,
    AllStudentComponent,
    StudentProfileComponent,
    ViewSubjectComponent,
    TakeAttendanceComponent,
    AllAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }