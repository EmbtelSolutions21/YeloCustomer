import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  currentpath = "";
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
        this.currentpath = fragment;
    })
  }

}
