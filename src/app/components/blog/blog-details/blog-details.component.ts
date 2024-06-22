import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../service/blog.service";
import {ActivatedRoute} from "@angular/router";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

declare var BLOCKS;

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  showLoading: boolean = true;

  blog: any;

  options = {
    renderNode: {
      'embedded-asset-block': (node) =>
        `<div class="contentful-img-container" >
            <img class="img-fluid" width="50%" src="${node.data.target.fields.file.url}"/>
         </div>`
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0, textSegment];
      }, []);
    }
  }

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const blogId = this.activatedRoute.snapshot.paramMap.get("id");
    
    this.showLoading = false;
    this.blogService.getBlogById(blogId).subscribe(blog => {
      this.blog = blog.fields;
      this.showLoading = false;
    });
  }

  convertToHtml(content){
    const htmlContent: string = documentToHtmlString(content, this.options);
    console.log(htmlContent)
    return htmlContent;
  }

}
