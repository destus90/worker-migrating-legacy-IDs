import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'worker-migrating-legacy-IDs';

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
