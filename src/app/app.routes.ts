import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Projects } from './component/pages/projects/projects';
import { Contact } from './component/pages/contact/contact';
import { Skills } from './component/pages/skills/skills';
import { Education } from './component/pages/education/education';
import { Experience } from './component/pages/experiance/experience';
export const routes: Routes = [
   { path: '', component: Home },
  { path: 'projects', component: Projects },
  {path:'Education',component: Education},
  { path: 'contact', component: Contact },
  {path:'Skills',component:Skills},
  {path:'Experience',component:Experience},
  { path: '**', redirectTo: '' }
];