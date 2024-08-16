import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTextsImageComponent } from './title-texts-image.component';

describe('TitleTextsImageComponent', () => {
  let component: TitleTextsImageComponent;
  let fixture: ComponentFixture<TitleTextsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleTextsImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleTextsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
