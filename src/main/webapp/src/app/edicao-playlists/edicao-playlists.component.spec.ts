import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPlaylistsComponent } from './edicao-playlists.component';

describe('EdicaoPlaylistsComponent', () => {
  let component: EdicaoPlaylistsComponent;
  let fixture: ComponentFixture<EdicaoPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
