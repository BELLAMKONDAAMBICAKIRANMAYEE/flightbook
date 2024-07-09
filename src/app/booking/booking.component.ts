import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.bookingForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post('http://localhost:5000/booking', this.bookingForm.value).subscribe(response => {
      console.log(response);
    });
  }
}
