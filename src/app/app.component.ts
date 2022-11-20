import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Zayar Linn Naung - A Full Stack Developer';

  colorList: string[] = [
    '#05ce91', '#33A9FE', '#F47960', '#35DF91', '#FAC762', '#DDFA03'
  ]

  toggleSocialWrapper(){
    document.getElementById('socialWrapper')!.classList.toggle('active');
  }

  changeTheme(color: string){
    console.log((<HTMLElement>document.querySelector(':root')).style);
    document.documentElement.style.setProperty('--theme-primary-color', color);
  }

  toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
  }

  ngOnInit(): void {

  }

  downloadCV() {
    window.open("/assets/cv/zayarlinnnaung-dev.cv.pdf","_blank");
  }
}
