import { bootstrapApplication } from '@angular/platform-browser'
import { MutationExampleComponent } from './app/app.component'
import { appConfig } from './app/app.config'

bootstrapApplication(MutationExampleComponent, appConfig).catch((err) =>
  console.error(err),
)
