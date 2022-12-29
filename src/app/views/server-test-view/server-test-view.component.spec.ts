import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTestViewComponent } from './server-test-view.component';

describe('ServerTestViewComponent', () => {
  let component: ServerTestViewComponent;
  let fixture: ComponentFixture<ServerTestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerTestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
