import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeFormComponent } from './pokemon-type-form.component';

describe('PokemonTypeFormComponent', () => {
  let component: PokemonTypeFormComponent;
  let fixture: ComponentFixture<PokemonTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
