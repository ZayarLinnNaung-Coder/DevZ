import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Project} from "../model/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private defaultUrl = 'http://localhost:8080/projects';

  private projects: Project[] = [
    new Project(
      "https://i.ibb.co/x7t1Bys/webserver.jpg",
      "ZWebServer",
      "Custom web server with thread per request model using pure Java",
      [
        "Java"
      ],
      "https://github.com/ZayarLinnNaung-Coder/ZWebServer",
      "",
      "C001"
    ),
    new Project(
      "https://i.ibb.co/fGxxdZz/Asset-1-100.jpg",
      "ZORM - Framework",
      "Mini framework inspired from Hibernate and JPA. Developed without any orm libraries or based but in pure Java",
      [
        "Java"
      ],
      "https://github.com/ZayarLinnNaung-Coder/Z_ORM",
      "",
      "C001"
    ),
    new Project(
      "https://user-images.githubusercontent.com/84829442/202894698-66c6ef96-9fa6-4653-ba30-32cbd73b8a38.gif",
      "ZCMS - FullStack",
      "Demo for content management system (not for production)",
      [
        "Angular", "Spring Web Flux", "MongoDB", "Spring Security"
      ],
      "https://github.com/ZayarLinnNaung-Coder/ZCMS_FullStack",
      "",
      "C001"
    ),
    new Project(
      "https://i.ibb.co/KbQ3LpP/usermanagement.jpg",
      "User Management - FullStack",
      "Demo for perfect Spring Security (Authentication + Role Based Authorization)",
      [
        "Angular", "Spring Boot", "Spring Data JPA", "Spring Security"
      ],
      "https://github.com/ZayarLinnNaung-Coder/UserManagement_FullStack",
      "",
      "C001"
    ),
    new Project(
      "https://www.advisoryexcellence.com/wp-content/uploads/2022/01/ECOMMERCE-PHOTO.jpg",
      "Ecommerce - FullStack",
      "Demo Ecommerce Project Using Spring and Angular",
      [
        "Angular", "Spring Boot", "Spring Data JPA"
      ],
      "https://github.com/ZayarLinnNaung-Coder/Ecommerce_FullStack-",
      "",
      "C001"
    ),
    new Project(
      "https://thumbs.dreamstime.com/b/demo-rubber-stamp-word-inside-illustration-82944937.jpg",
      "Blog Demo - FullStack",
      "Demostration authentication, JWT and posting new blog",
      [
        "Angular", "Spring Boot", "Spring Data JPA", "Spring Security"
      ],
      "https://github.com/ZayarLinnNaung-Coder/Blog_FullStack",
      "",
      "C001"
    ),
    new Project(
      "https://user-images.githubusercontent.com/84829442/161571910-f2d44345-9332-46af-b37c-b3a09051b5ee.png",
      "ZPortfolio - FrontEnd",
      "Demo portfolio for Angular Practice",
      [
        "Angular", "SCSS"
      ],
      "",
      "https://zayarlinnnaung.netlify.app/",
      "C002"
    ),
    new Project(
      "https://i.ibb.co/LdGsBHd/ZColor-Kit.jpg",
      "ZColorKit - FrontEnd",
      "Can easily choose and change color soften and darken amount",
      [
        "HTML", "CSS", "Javascript"
      ],
      "https://github.com/ZayarLinnNaung-Coder/ZColorKit",
      "",
      "C002"
    ),
    new Project(
      "https://github.com/ZayarLinnNaung-Coder/Currency-Exchanger/raw/master/light.jpg",
      "ZEx - FrontEnd",
      "ZEx currency exchanger is a greate one to convert currencies more easily.",
      [
        "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"
      ],
      "https://github.com/ZayarLinnNaung-Coder/Currency-Exchanger/raw/master/light.jpg",
      "",
    "C002"
    )
  ];

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return of(this.projects);
  }

}
