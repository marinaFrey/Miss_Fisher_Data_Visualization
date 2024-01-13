import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudersComponent } from './muders.component';

describe('MudersComponent', () => {
  let component: MudersComponent;
  let fixture: ComponentFixture<MudersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
