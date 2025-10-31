import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithConversion } from './table-with-conversion';

describe('TableWithConversion', () => {
  let component: TableWithConversion;
  let fixture: ComponentFixture<TableWithConversion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithConversion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithConversion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
