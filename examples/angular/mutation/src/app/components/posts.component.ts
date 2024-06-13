import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import {
  injectMutation,
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental'
import { lastValueFrom } from 'rxjs'
import { PostsService } from '../services/posts-service'
import type { Post } from '../services/posts-service'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'posts',
  standalone: true,
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  #postsService = inject(PostsService)

  postsQuery = injectQuery(() => ({
    queryKey: ['posts'],
    queryFn: async () => lastValueFrom(this.#postsService.allPosts$()),
  }))

  addPostMutation = injectMutation(() => {
    const postsService = inject(PostsService)
    return {
      mutationKey: ['addPost'],
      mutationFn: async (newPost: Pick<Post, 'title' | 'body'>) =>
        lastValueFrom(postsService.addPost$(newPost)),
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['posts'] })
      },
    }
  })

  queryClient = injectQueryClient()
}
