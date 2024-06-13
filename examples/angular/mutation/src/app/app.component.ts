import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental'
import { PostsComponent } from './components/posts.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mutation-example',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AngularQueryDevtools, PostsComponent],
})
export class MutationExampleComponent {
  postId = signal(-1)
}
