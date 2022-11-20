import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BlogService} from "../../../service/blog.service";
import {ProjectService} from "../../../service/project.service";
import {Project} from "../../../model/Project";

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

  showLoading: boolean = true;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}


  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(
      projects => {
        this.projects = projects.sort(
          (x, y) => x.categoryId.localeCompare(y.categoryId)
        ).slice(0, 4);
        this.showLoading = false;
      }
    )
  }

}
