import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeCatalogComponent } from './prize-catalog.component';

describe('PrizeCatalogComponent', () => {
  let component: PrizeCatalogComponent;
  let fixture: ComponentFixture<PrizeCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
