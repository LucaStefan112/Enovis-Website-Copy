import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryFooterComponent } from './secundary-footer.component';

describe('SecundaryFooterComponent', () => {
  let component: SecundaryFooterComponent;
  let fixture: ComponentFixture<SecundaryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecundaryFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundaryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
