import {Project} from "./Project";

export class ProjectCategory{
  id: string;
  name: string;
  projects: Project[];

  constructor(id: string, name: string, projects: Project[]) {
    this.id = id;
    this.name = name;
    this.projects = projects;
  }
}
