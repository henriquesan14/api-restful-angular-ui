import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlaylistsComponent } from './cadastro-playlists.component';

describe('CadastroPlaylistsComponent', () => {
  let component: CadastroPlaylistsComponent;
  let fixture: ComponentFixture<CadastroPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
