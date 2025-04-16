import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { meterialmodule } from './meterial.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TriningComponent } from './trining/trining.component';
import { NewTriningComponent } from './new-trining/new-trining.component';
import { CurrentTriningComponent } from './current-trining/current-trining.component';
import { PastTriningComponent } from './past-trining/past-trining.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DateAdapter,MAT_DATE_FORMATS,MAT_DATE_LOCALE} from '@angular/material/core';
import {MaterialPersianDateAdapter,PERSIAN_DATE_FORMATS}from './persian-dateadapter';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { StopTriningComponent } from './current-trining/stop-trining/stop-trining.component'
import { AuthService } from './auth/auth.service';
import { TrainingService } from './trining/training.service';
import { PersianDatePipe } from './persian-date.pipe';
import { TranslationPipe } from './translation.pipe';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { paginatorTranslite } from './paginator.translite';
import { AngularFireModule} from '@angular/fire/compat';
import {evnironment} from '../evnironment/evnironment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UIservice } from './shared/UI.service';
import { AddTrainingComponent } from './add-training/add-training.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TriningComponent,
    NewTriningComponent,
    CurrentTriningComponent,
    PastTriningComponent,
    WelcomeComponent,
    HeaderComponent,
    SidebarComponent,
    StopTriningComponent,
    PersianDatePipe,
    TranslationPipe,
    AddTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    meterialmodule,
    FlexLayoutModule,
    FormsModule,
   BrowserAnimationsModule,
   AngularFireModule.initializeApp(evnironment.firebase),
   AngularFireAuthModule
  ],
  providers: [{provide:MatPaginatorIntl,useClass:paginatorTranslite},
    provideAnimationsAsync(),
    {provide:DateAdapter,useClass:MaterialPersianDateAdapter,deps:[MAT_DATE_LOCALE]},
    {provide:MAT_DATE_FORMATS,useValue:PERSIAN_DATE_FORMATS},AuthService,TrainingService,UIservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
