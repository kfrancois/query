import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  #http = inject(HttpClient)

  allPosts$ = () =>
    this.#http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')

  addPost$ = (payload: Pick<Post, 'title' | 'body'>) =>
    this.#http.post('https://jsonplaceholder.typicode.com/posts', payload)
}

export interface Post {
  id: number
  title: string
  body: string
}
