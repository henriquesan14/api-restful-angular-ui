import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  menuAberto = true;
  constructor() { }
  aberto = false;
  largura = window.innerWidth;

  ngOnInit() {
    if (this.largura < 900) {
      this.menuAberto = false;
    }
  }

  toggle(){
    this.menuAberto = !this.menuAberto;
  }

  toggle2(){
    this.aberto = !this.aberto;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      // tslint:disable-next-line:no-unused-expression
      event.target.innerWidth;
      if (window.innerWidth < 900){
        this.menuAberto = false;
      } else {
        this.menuAberto = true;
      }
  }


}
