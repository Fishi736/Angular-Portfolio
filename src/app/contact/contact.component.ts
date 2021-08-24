import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import swal from 'sweetalert';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactform = this.fb.group({
    user_name: ["", [Validators.required]],
    user_email: ["", [Validators.required, Validators.email]],
    message: ["", [Validators.required, Validators.maxLength(256)]]
  })


  ngOnInit() { }


  sendEmail(e) {
    if (this.contactform.value.user_name === "" || this.contactform.value.user_email === "" || this.contactform.value.message === "") {
      swal("Oops!", "Please fill all the details", "warning");

    } else {
      e.preventDefault()
      emailjs.send("service_52638ct", "template_k33cops", {
        to_name: "Nisha",
        from_name: this.contactform.value.user_email,
        message: this.contactform.value.message,
      }, "user_ydoA8YEDvqFknQ9SYpkBn");
      swal("Good job!", "You clicked the button!", "success");
    }
  }


  
}
