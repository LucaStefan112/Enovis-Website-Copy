import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTextMapComponent } from './contact-text-map.component';

describe('ContactTextMapComponent', () => {
  let component: ContactTextMapComponent;
  let fixture: ComponentFixture<ContactTextMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTextMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTextMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
