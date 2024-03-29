import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { LoaderComponent } from './shared/loader/loader.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { SkipInterceptor } from './core/interceptors/skip.interceptor';
import { MessageDialogComponent } from './core/error/message-dialog/message-dialog.component';
import { MessagesErrorService } from './core/error/messages-error.service';
import { UsersComponent } from './pages/users/users.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableFormComponent } from './aux-pages/table-form/table-form.component';
import { TermsComponent } from './pages/terms/terms.component';
import { WebsitesComponent } from './pages/websites/websites.component';
import { ServicesComponent } from './pages/services/services.component';
import { TableComponent } from './shared/table/table.component';
import { MetadataComponent } from './pages/metadata/metadata.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { TagInputModule } from 'ngx-chips';
import { DocsComponent } from './pages/docs/docs.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    ProfileComponent,
    DashboardComponent,
    MessageDialogComponent,
    UsersComponent,
    TableFormComponent,
    TermsComponent,
    WebsitesComponent,
    ServicesComponent,
    TableComponent,
    MetadataComponent,
    PreferencesComponent,
    DocsComponent
  ],
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HighlightModule
  ],
  providers: [
    { provide: HIGHLIGHT_OPTIONS, useValue: {fullLibraryLoader: () => import('highlight.js')}},
    { provide: HTTP_INTERCEPTORS, useClass: SkipInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: MessagesErrorService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
