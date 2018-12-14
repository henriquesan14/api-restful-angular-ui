import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlaylistComponent } from './cadastro-playlist.component';

describe('CadastroPlaylistComponent', () => {
  let component: CadastroPlaylistComponent;
  let fixture: ComponentFixture<CadastroPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
