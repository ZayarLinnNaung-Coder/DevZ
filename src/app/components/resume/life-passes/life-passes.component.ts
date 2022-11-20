import {Component, Input, OnInit} from '@angular/core';
import {LifePasses} from "../../../model/LifePasses";

@Component({
  selector: 'app-life-passes',
  templateUrl: './life-passes.component.html',
  styleUrls: ['./life-passes.component.scss']
})
export class LifePassesComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('lifePassArray') lifePassArray: LifePasses [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
