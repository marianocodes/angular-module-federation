import { Component } from '@angular/core';
import { SessionLibService } from 'session-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(public session: SessionLibService) { }

  public click() {
    this.session.setSession(!this.session.isActive)
  }
}
