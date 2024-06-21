import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  appTitle = 'Counter App';
  count: number = 0o0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
