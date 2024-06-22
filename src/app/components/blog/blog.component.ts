import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../service/blog.service";
import {from, Observable} from "rxjs";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  showLoading: boolean = true;
  blogs$ : any;
  filteredBlogs: any;
  achieves: string[] = [];
  categories: string[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.showLoading = false;
    this.blogService.getAllBlogs().subscribe(entries => {
      this.blogs$ = entries.items;
      this.filteredBlogs = this.blogs$.sort(
        (x, y) => Date.parse(y.fields.publishedDate) - Date.parse(x.fields.publishedDate)
      )
      this.getAllAchieveAndCategory(this.blogs$);
      this.showLoading = false;
    });

    this.captureSearchButtonEvent();
  }

  private getAllAchieveAndCategory(blogs){
    blogs.forEach(blog => {
      const achieveName: string = blog.fields.achieve;
      const categoryName: string = blog.fields.category;

      if(!this.achieves.includes(achieveName)){
        this.achieves.push(achieveName);
      }

      if(!this.categories.includes(categoryName)){
        this.categories.push(categoryName);
      }
    })
  }

  private captureSearchButtonEvent() {
    let optionsDiv = document.getElementById('optionsDiv');
    let blogSection = document.getElementById('blogSection');
    document.getElementById('searchBtnContainer').addEventListener('click', (event) => {
      optionsDiv.classList.add('active');
      event.stopPropagation();
    });

    blogSection.addEventListener('click', (event) => {
      optionsDiv.classList.remove('active');
      event.stopPropagation();
    });

    optionsDiv.addEventListener('click', (event) => {
      event.stopPropagation();
    })
  }

  filterByCategory(category, event) {
    this.removeActiveClasses(['.category', '.achieve']);
    event.target.classList.add('active');
    if(category == 'all'){
      this.filteredBlogs = this.blogs$;
      return;
    }
    this.filteredBlogs = this.blogs$.filter(blog => blog.fields.category == category);
  }

  filterByAchieve(achieve, event) {
    this.removeActiveClasses(['.category', '.achieve']);
    event.target.classList.add('active');
    this.filteredBlogs = this.blogs$.filter(blog => blog.fields.achieve == achieve)
  }

  private removeActiveClasses(classNames: string[]) {
    classNames.forEach(
      name => document.querySelectorAll(name).forEach(
        category => category.classList.remove('active')
      )
    )
  }

  searchBlog(keyword: string) {
    this.filteredBlogs = this.blogs$.filter(
      blog => blog.fields.title.toLowerCase().includes(keyword.toLowerCase())
    )
  }
}
