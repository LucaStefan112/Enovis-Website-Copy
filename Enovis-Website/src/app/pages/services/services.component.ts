import { Component } from '@angular/core';
import { ImageTextSectionComponent } from '../../components/image-text-section/image-text-section.component';
import { TitleTextComponent } from '../../components/title-text/title-text.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ ImageTextSectionComponent, TitleTextComponent ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
