import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: { image: string }[];

  constructor() { }

  ngOnInit() {
    this.slides = [{image: 'assets/images/products/chair.jpg'}, {image: 'assets/images/products/chair-3.jpeg'}];
  }
}
