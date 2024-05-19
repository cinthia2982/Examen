import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisosListComponent } from './avisos-list.component';

describe('AvisosListComponent', () => {
  let component: AvisosListComponent;
  let fixture: ComponentFixture<AvisosListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
