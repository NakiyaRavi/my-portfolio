import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Project } from './project/project';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
   { path: '', component: Home },
   { path: 'home', component: Home },
   { path: 'about', component: About },
   { path: 'skills', component: Skills },
   {path:'projects',component:Project},
   {path:'contact',component:Contact},
   { path: '**', component: NotFound},
     

];
// Add more routes here as needed