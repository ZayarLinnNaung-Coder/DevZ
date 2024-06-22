import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../service/blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  showLoading: boolean = true;
  blogs: any;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {

    this.showLoading = false;
    this.blogService.getAllBlogs().subscribe(
      blogs => {
        this.blogs = blogs.items.slice(0, 4);
        this.showLoading = false
      }
    )
  }
}
