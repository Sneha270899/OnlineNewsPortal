import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsPortal';

  isDisabled=true;
  toggleButton()
  {
    this.isDisabled=!this.isDisabled;
  }

  display=false;
  toggleShow()
  {
    this.display=!this.display;
  }
  
  imgShow=false;
  img="https://cache.desktopnexus.com/thumbseg/658/658213-bigthumbnail.jpg";
  toggleImg()
  {
    this.imgShow=!this.imgShow;
  }
  
}
  

