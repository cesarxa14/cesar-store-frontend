import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProductoComponent } from './banner-producto.component';

describe('BannerProductoComponent', () => {
  let component: BannerProductoComponent;
  let fixture: ComponentFixture<BannerProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
