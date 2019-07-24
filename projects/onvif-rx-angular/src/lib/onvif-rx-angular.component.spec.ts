import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnvifRxAngularComponent } from './onvif-rx-angular.component';

describe('OnvifRxAngularComponent', () => {
  let component: OnvifRxAngularComponent;
  let fixture: ComponentFixture<OnvifRxAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnvifRxAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnvifRxAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
