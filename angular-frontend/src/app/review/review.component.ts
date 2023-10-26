// review.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  userRating: string = '5'; // Default rating
  userComment: string = '';
  reviews: Array<{ rating: string, comment: string }> = [];

  submitReview() {
    // Add the user's review to the reviews array
    this.reviews.push({ rating: this.userRating, comment: this.userComment });
    // Clear the input fields
    this.userRating = '5';
    this.userComment = '';
  }
}
