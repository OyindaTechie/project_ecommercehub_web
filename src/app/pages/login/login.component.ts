import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceapiService } from 'src/app/Service/serviceapi.service';

declare var $: any;
declare var toastr: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginformform : FormGroup;
  signupformform: FormGroup
  logintext = 'Login'


  constructor(private fb: FormBuilder, public serviceapi: ServiceapiService) { 
       
    this.loginformform = this.fb.group({
      email: new FormControl('',     Validators.compose(
        [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required])),
      password: new FormControl('', Validators.required)
    });


           
    this.signupformform = this.fb.group({
      email: new FormControl('',     Validators.compose(
        [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required])),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    
    });
  }

  signupbool = false;

  ngOnInit(): void {

    
  }


  showsignup() {

    this.signupbool = true;
  }

  showlogin() {

    this.signupbool = false;
  }


  onsubmitlogin(val: any) {
 

    this.logintext = 'One Sec...'

    this.serviceapi.login(val.email, val.password).then(data => {
      console.log(data);
      this.logintext = 'Login'
     var  logindata : any = data;

      if(logindata.access_token) {

        this.successmessage('login successful!'),

        localStorage.setItem('token', logindata.access_token)

       
        localStorage.setItem('user', logindata.user.name)

        setTimeout(() => {
          window.location.href = '#/buy';
          window.location.reload();
        }, 2000);

        return
      }
      

      this.failuremessage('Check your credentials');
    })

  }


  onsubmitsignup(val: any) {
    console.log(val);


    this.serviceapi.signup(val.name, val.email, val.phone, val.address, val.password).then(data => {
      console.log(data);

     var  logindata : any = data;

      if(logindata.success) {

        this.successmessage('Created successful, you can now proceed to login'),

  
        this.signupbool = false;
        this.signupformform.reset();

        return
      }
      

      this.failuremessage('Check your details');
    })


  }



  Toadmin() {
    window.location.href = '#/admin';
  }



successmessage(message: any){

  // Display a success toast, with a title
toastr.success(message)
}



failuremessage(message: any){

  // Display a success toast, with a title
toastr.error(message)
}


infomessage(message: any){

  // Display a success toast, with a title
toastr.info(message)
}

}
