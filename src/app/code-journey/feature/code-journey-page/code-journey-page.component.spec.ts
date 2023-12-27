import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeJourneyPageComponent } from './code-journey-page.component';

describe('CodeJourneyPageComponent', () => {
  let component: CodeJourneyPageComponent;
  let fixture: ComponentFixture<CodeJourneyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CodeJourneyPageComponent]
    });
    fixture = TestBed.createComponent(CodeJourneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
