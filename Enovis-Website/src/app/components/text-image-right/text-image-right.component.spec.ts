import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageRightComponent } from './text-image-right.component';

describe('TextImageRightComponent', () => {
  let component: TextImageRightComponent;
  let fixture: ComponentFixture<TextImageRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
