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

  getAllBlogs(){
    return from(this.client.getEntries());
  }

  getBlogById(blogId: string){
    return from(this.client.getEntry(blogId));
  }

}
