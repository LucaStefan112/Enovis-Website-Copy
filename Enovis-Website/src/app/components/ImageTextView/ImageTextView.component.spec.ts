import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextViewComponent } from './ImageTextView.component';

describe('ImageTextViewComponent', () => {
  let component: ImageTextViewComponent;
  let fixture: ComponentFixture<ImageTextViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
