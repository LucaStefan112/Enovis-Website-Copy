import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarevoComponent } from './clarevo.component';

describe('ClarevoComponent', () => {
  let component: ClarevoComponent;
  let fixture: ComponentFixture<ClarevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarevoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
