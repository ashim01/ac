import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '', component : HomepageComponent
  },
  {
    path: 'aboutComponent', component : AboutComponent
  },
  {
    path: 'experienceComponent', component : ExperienceComponent
  },
  {
    path: 'contactComponent', component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
