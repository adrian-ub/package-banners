import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewImageComponent } from './preview-image.component';

describe('PreviewImageComponent', () => {
  let component: PreviewImageComponent;
  let fixture: ComponentFixture<PreviewImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
