import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlaylistsComponent } from './lista-playlists.component';

describe('ListaPlaylistsComponent', () => {
  let component: ListaPlaylistsComponent;
  let fixture: ComponentFixture<ListaPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
