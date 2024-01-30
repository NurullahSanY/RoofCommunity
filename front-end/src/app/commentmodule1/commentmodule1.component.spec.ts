import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commentmodule1Component } from './commentmodule1.component';

describe('Commentmodule1Component', () => {
  let component: Commentmodule1Component;
  let fixture: ComponentFixture<Commentmodule1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Commentmodule1Component]
    });
    fixture = TestBed.createComponent(Commentmodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
