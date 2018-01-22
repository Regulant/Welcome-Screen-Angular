import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminListeComponent } from './termin-liste.component';

describe('TerminListeComponent', () => {
  let component: TerminListeComponent;
  let fixture: ComponentFixture<TerminListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
