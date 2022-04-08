import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { UserStore } from "./user-store";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [UserStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
