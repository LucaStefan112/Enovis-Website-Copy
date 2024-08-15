import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageLeftComponent } from './text-image-left.component';

describe('TextImageLeftComponent', () => {
  let component: TextImageLeftComponent;
  let fixture: ComponentFixture<TextImageLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
