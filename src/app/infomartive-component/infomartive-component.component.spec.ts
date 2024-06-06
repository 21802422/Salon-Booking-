import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomartiveComponentComponent } from './infomartive-component.component';

describe('InfomartiveComponentComponent', () => {
  let component: InfomartiveComponentComponent;
  let fixture: ComponentFixture<InfomartiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfomartiveComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfomartiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
