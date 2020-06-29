import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mudarIdioma: boolean = false;
  languageId: string = 'PT';

  languague: any;

  topPosToStartShowing = 110;
  showButton: boolean;

  constructor(private commonLanguage: CommonService) {
    this.languague = [
      {
        id: 'PT',
        img: '/assets/bandeiraPT.jpg',
        legend: 'Português',

      },
      {
        id: 'EN',
        img: '/assets/bandeiraENG.jpg',
        legend: 'English',
      }
    ]
  }

  ngOnInit(): void {
    this.showButton = false;
    this.checkScroll();
  }

  @HostListener('window:scroll')

  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.showButton = true;

    } else {
      this.showButton = false;
    }
  }

  onChangeLanguage(ev) {
    this.languageId = ev;
    this.mudarIdioma = this.commonLanguage.changeLanguage(ev);
  }

  scrollToElement(eve): void {
    let sendServer
    sendServer = this.commonLanguage.scrollToElement(eve);

  }



}
