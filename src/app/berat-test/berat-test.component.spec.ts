import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeratTestComponent } from './berat-test.component';

describe('BeratTestComponent', () => {
  let component: BeratTestComponent;
  let fixture: ComponentFixture<BeratTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeratTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeratTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
