import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit {
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
