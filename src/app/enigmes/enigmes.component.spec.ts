import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmesComponent } from './enigmes.component';

describe('EnigmesComponent', () => {
  let component: EnigmesComponent;
  let fixture: ComponentFixture<EnigmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnigmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
