import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpenMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let headerClassList = document.getElementById('header')!.classList;
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 150){
        if(!headerClassList.contains('active')){
          headerClassList.add('active');
        }
      }else{
        if(headerClassList.contains('active')){
          headerClassList.remove('active');
        }
      }
    })
  }

  toggleNavbar(){
    this.isOpenMode = !this.isOpenMode;
    document.getElementById('header')!.classList.toggle('open');
  }
}
