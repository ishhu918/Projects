import { Component } from '@angular/core';

@Component({
  selector: 'app-display-input-value-app',
  standalone: true,
  imports: [],
  templateUrl: './display-input-value-app.component.html',
  styleUrl: './display-input-value-app.component.css',
})
export class DisplayInputValueAppComponent {
  appTitle = 'Display Input Value on Screen on button click';
  displayValue = '';
  getValue(input: HTMLInputElement) {
    this.displayValue += ' '+input.value;
    input.value='';
  }
}
