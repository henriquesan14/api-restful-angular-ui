import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMusicasComponent } from './listagem-musicas.component';

describe('ListagemMusicasComponent', () => {
  let component: ListagemMusicasComponent;
  let fixture: ComponentFixture<ListagemMusicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemMusicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
