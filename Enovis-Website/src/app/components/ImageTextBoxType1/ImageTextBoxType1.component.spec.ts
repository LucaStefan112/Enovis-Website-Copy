import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextBoxType1Component } from './ImageTextBoxType1.component';

describe('ImageTextBoxType1Component', () => {
  let component: ImageTextBoxType1Component;
  let fixture: ComponentFixture<ImageTextBoxType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextBoxType1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextBoxType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
