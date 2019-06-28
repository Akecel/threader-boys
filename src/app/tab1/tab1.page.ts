import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  display: any[];
  story: any;
  test: string;
  words: any[];
  nbCharsMax: number;

  thread() {
    const nbCharsMax = 250;
    this.display = new Array();
    this.display.push("");

    if (this.story) {
      const words = this.story.split(" ");
      let rowIndex = 0;

      words.forEach((word: string) => {
        let currentRow = this.display[rowIndex];
        if ((currentRow + " " + word).length > nbCharsMax) {
          rowIndex++;
          this.display.push(word);
        } else {
          this.display[rowIndex] = currentRow + " " + word;
        }
      });
    }
  }
}