import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterUserComponent } from "./register-user/register-user.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },

  {
    path: "register-user",
    component: RegisterUserComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
