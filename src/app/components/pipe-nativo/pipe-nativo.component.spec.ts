import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNativoComponent } from './pipe-nativo.component';

describe('PipeNativoComponent', () => {
  let component: PipeNativoComponent;
  let fixture: ComponentFixture<PipeNativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeNativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeNativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
