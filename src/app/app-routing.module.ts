import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ResumeComponent} from "./components/resume/resume.component";
import {ProjectComponent} from "./components/project/project.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogDetailsComponent} from "./components/blog/blog-details/blog-details.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
