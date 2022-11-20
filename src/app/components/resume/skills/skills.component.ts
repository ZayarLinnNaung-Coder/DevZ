import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../../model/Skill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('skills') skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
