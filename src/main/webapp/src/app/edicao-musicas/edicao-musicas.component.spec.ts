import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoMusicasComponent } from './edicao-musicas.component';

describe('EdicaoMusicasComponent', () => {
  let component: EdicaoMusicasComponent;
  let fixture: ComponentFixture<EdicaoMusicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoMusicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
