import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageTextBoxComponent } from './components/image-text-box/image-text-box.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageTextViewComponent } from './components/image-text-view/image-text-view.component';  
import { ReviewContainerComponent } from './components/review-container/review-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ImageTextBoxComponent, TextBoxComponent, ImageTextViewComponent, ReviewContainerComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Enovis-Website';
}
