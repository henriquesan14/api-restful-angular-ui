import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPlaylistsComponent } from './listagem-playlists.component';

describe('ListagemPlaylistsComponent', () => {
  let component: ListagemPlaylistsComponent;
  let fixture: ComponentFixture<ListagemPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
