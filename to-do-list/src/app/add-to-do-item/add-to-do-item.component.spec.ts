import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoItemComponent } from './add-to-do-item.component';

describe('AddToItemComponent', () => {
  let component: AddToDoItemComponent;
  let fixture: ComponentFixture<AddToDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToDoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
