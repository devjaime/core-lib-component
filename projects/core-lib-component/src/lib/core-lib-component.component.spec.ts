import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLibComponentComponent } from './core-lib-component.component';

describe('CoreLibComponentComponent', () => {
  let component: CoreLibComponentComponent;
  let fixture: ComponentFixture<CoreLibComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLibComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
