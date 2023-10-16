import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { FirestoreService } from '@core/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private _firestoreService: FirestoreService,
  ) {}
  
  ngOnInit(): void {
    // this._firestoreService.afAuth.onAuthStateChanged( (user) => {
      
    // } )
  }
  
  GoogleLogin() {
    // this._firestoreService.logWithGoogle().then(res => {
    //   console.log(res)
    //   this.router.navigate(['/'])
    // });
  }

  FacebookLogin() {
    // this._firestoreService.logWithFacebook().then(res => {
    //   console.log(res)
    //   this.router.navigate(['/'])
    // });;
  }
}
