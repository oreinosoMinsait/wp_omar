import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  selected: boolean[] = [false, false];

  onMouseEnter(index: number) {
    this.selected[index] = true;
  }

  onMouseLeave(index: number) {
    this.selected[index] = false;
  }
}
