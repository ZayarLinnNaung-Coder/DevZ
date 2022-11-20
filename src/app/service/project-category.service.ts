import { Injectable } from '@angular/core';
import {ProjectCategory} from "../model/ProjectCategory";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Project} from "../model/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectCategoryService {

  private defaultUrl: string = 'http://localhost:8080/project-categories';
  projectCategory: ProjectCategory[] = [
    new ProjectCategory(
      "C001",
      "Full Stack",
      [
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
        )
      ]
    ),
    new ProjectCategory(
      "C002",
      "Front End",
      [

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
        ),
        new Project(
          "https://user-images.githubusercontent.com/84829442/161571910-f2d44345-9332-46af-b37c-b3a09051b5ee.png",
          "ZPortfolio - FrontEnd",
          "ZEx currency exchanger is a greate one to convert currencies more easily.",
          [
            "Angular", "SCSS"
          ],
          "",
          "https://zayarlinnnaung.netlify.app/",
          "C002"
        )
      ]
    )
  ];

  constructor(private httpClient: HttpClient) {}

  getAllProjectCategory(): Observable<ProjectCategory[]>{
    return of(this.projectCategory);
  }
}
