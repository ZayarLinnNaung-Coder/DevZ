import { Injectable } from '@angular/core';
import {createClient} from "contentful";
import {environment as env} from "../../environments/environment";
import {from, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  private client = createClient({
    space: env.spaceId,
    accessToken: env.accessToken
  })

  private filterQuery = {
    content_type: env.devz
  };

  getAllBlogs(){
    return from(this.client.getEntries(this.filterQuery));
  }

  getBlogById(blogId: string){
    return from(this.client.getEntry(blogId));
  }

}
