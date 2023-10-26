import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviewsKey = 'customerReviews';

  constructor() {}

  getReviews(): any[] {
    const reviewsData = localStorage.getItem(this.reviewsKey);
    return reviewsData ? JSON.parse(reviewsData) : [];
  }

  addReview(review: any): void {
    const reviews = this.getReviews();
    reviews.push(review);
    localStorage.setItem(this.reviewsKey, JSON.stringify(reviews));
  }
}
