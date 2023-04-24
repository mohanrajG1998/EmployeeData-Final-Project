import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdataComponent } from './insert.component';

describe('InsertComponent', () => {
  let component: InsertdataComponent;
  let fixture: ComponentFixture<InsertdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
