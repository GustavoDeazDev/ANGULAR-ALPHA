import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoZeroComponent } from './filho-zero.component';

describe('FilhoZeroComponent', () => {
  let component: FilhoZeroComponent;
  let fixture: ComponentFixture<FilhoZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoZeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
