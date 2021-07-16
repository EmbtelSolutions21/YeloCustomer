import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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
