import { AuthService } from '../auth.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  @ViewChild('carousel') carousel!: ElementRef;
  carouselImages: string[] = [
    'assets/images/tajmahal.jpg',
    'chichen.jpg',
    'christtheredeemer.jpg',
    'colosseum.jpg',
    'machupicchu.jpg',
    'petrajordan.jpg',
    'pyramidofgiza.jpg',
  ];

  carouselInterval = 3000;

  constructor(public authService: AuthService) {}

  // startCarousel() {
  //   if (typeof $ !== 'undefined') {
  //     $(this.carousel.nativeElement).carousel({
  //       interval: this.carouselInterval,
  //     });
  //   }
  // }
  // ngAfterViewInit() {
  //   if (typeof $ !== 'undefined') {
  //     $(this.carousel.nativeElement).carousel({
  //       interval: this.carouselInterval,
  //     });
  //   }
  // }
  // ngOnInit() {
  //   this.startCarousel();
  // }
  
  logout() {
    this.authService.logout();
  }
}
