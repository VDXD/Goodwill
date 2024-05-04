import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'project', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
];
