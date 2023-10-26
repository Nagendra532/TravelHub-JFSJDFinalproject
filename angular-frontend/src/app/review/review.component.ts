import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  reviews: any[] = [];
  review: any = {
    name: '',
    rating: 1,
    comment: '',
  };

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviews = this.reviewService.getReviews();
  }

  submitReview(): void {
    this.reviewService.addReview(this.review);
    this.reviews = this.reviewService.getReviews();
    this.review = {
      name: '',
      rating: 1,
      comment: '',
    };
  }
}
