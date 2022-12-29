import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildViewComponent } from './build-view.component';

describe('BuildViewComponent', () => {
  let component: BuildViewComponent;
  let fixture: ComponentFixture<BuildViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
