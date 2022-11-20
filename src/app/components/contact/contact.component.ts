import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('mapRef') mapRef: ElementRef<HTMLElement>;
  showLoading: boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    let contactSectionClassList = document.getElementById('contactSection')!.classList;
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 150){
        contactSectionClassList.add('active');
      }else{
        contactSectionClassList.remove('active');
      }
    })
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.mapRef.nativeElement, 'load', e => {
      this.showLoading = false;
    })
  }
}
