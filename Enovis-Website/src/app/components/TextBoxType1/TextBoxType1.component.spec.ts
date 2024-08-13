import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxType1Component } from './TextBoxType1.component';

describe('TextBoxType1Component', () => {
  let component: TextBoxType1Component;
  let fixture: ComponentFixture<TextBoxType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBoxType1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
