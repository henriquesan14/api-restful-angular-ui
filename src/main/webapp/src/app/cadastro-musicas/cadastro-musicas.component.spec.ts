import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMusicasComponent } from './cadastro-musicas.component';

describe('CadastroMusicasComponent', () => {
  let component: CadastroMusicasComponent;
  let fixture: ComponentFixture<CadastroMusicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMusicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
