import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxChartComponent } from './ajax-chart.component';

describe('AjaxChartComponent', () => {
  let component: AjaxChartComponent;
  let fixture: ComponentFixture<AjaxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
