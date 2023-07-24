import { Component } from '@angular/core';
import { Data } from '../../../interfaces/data';
import { HappinessService } from '../../../providers/happiness.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public data : Data[] = [];

  constructor(private dataProvider: HappinessService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Data[]).slice(0,10); 
    })
  }
}
