import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { AvailableServiceComponent } from './components/home/available-service/available-service.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectComponent } from './components/project/project.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import {IconsModule} from "./icons/icons.module";
import { AvailableComponent } from './components/home/available/available.component';
import {FeaturedProjectsComponent} from "./components/home/featured-projects/featured-projects.component";
import { BlogsComponent } from './components/home/blogs/blogs.component';
import { LifePassesComponent } from './components/resume/life-passes/life-passes.component';
import { SkillsComponent } from './components/resume/skills/skills.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingPageComponent,
    AvailableServiceComponent,
    ResumeComponent,
    ProjectComponent,
    BlogComponent,
    ContactComponent,
    AvailableComponent,
    FeaturedProjectsComponent,
    BlogsComponent,
    LifePassesComponent,
    SkillsComponent,
    BlogDetailsComponent,
    LoadingComponent
  ],
  imports: [
    IconsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
