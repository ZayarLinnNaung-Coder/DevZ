import { Component, OnInit } from '@angular/core';
import {Project} from "../../model/Project";
import {ProjectCategoryService} from "../../service/project-category.service";
import {ProjectService} from "../../service/project.service";
import {ProjectCategory} from "../../model/ProjectCategory";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  p: number = 1;
  projectList = [];
  projectCategoryList: ProjectCategory[] = [];

  filterProjectList: Project[] = [];

  constructor(private projectCategoryService: ProjectCategoryService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectCategoryService.getAllProjectCategory().subscribe(projectCategoryList => {
      this.projectCategoryList = projectCategoryList;
      console.log(this.projectCategoryList)
    })

    this.projectService.getAllProjects().subscribe(projectList => {
      this.projectList = projectList;
      this.filterProjectList = projectList;
      console.log(this.filterProjectList)
    })
  }

  filterProductByCategory(categoryId: string, event: Event){
    this.p = 1;
    let targetElementClassList = (<HTMLElement> event.currentTarget).classList;
    document.querySelectorAll('.link').forEach(el => {
      let classList = el.classList;
      if(classList.contains('active')){
        classList.remove('active')
      }
    })
    targetElementClassList.add('active');

    if(categoryId == ''){
      this.filterProjectList = this.projectList;
      return;
    }
    this.filterProjectList = this.projectList.filter(project => {
      console.log("Comparing....")
      console.log(categoryId + 'and' + project.categoryId)
      if(project.categoryId == categoryId){
        return project
      }
    });
  }

}
