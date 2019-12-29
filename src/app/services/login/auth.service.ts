import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User as FirebaseUser, UserCredential } from '@firebase/auth-types';
import { FlashMessageService } from '../flashMessage/flash-message.service';

@Injectable()
export class AuthService {
  authState: FirebaseUser = null;
  users: AngularFirestoreCollection<User>;
  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private fs: FlashMessageService,
              private router: Router) {
    this.users = this.db.collection('users');
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }


  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState.displayName || 'User without a Name';
    }
  }

  //// Social Auth ////

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.authState = credential.user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }


  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((res: UserCredential) => {
        this.authState = res.user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(login) {
    return this.afAuth.auth.createUserWithEmailAndPassword(login.email, login.password, )
      .then((credential: UserCredential) => {
        this.authState = credential.user;
        this.updateUserData();
        this.afAuth.auth.currentUser.updateProfile({displayName: login.username});
        this.fs.success('Sign up success', 'You\'ve been logged in');
      })
      .catch(error => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/weak-password') {
            this.fs.error('Sign up error', 'The password is too weak.');
          } else {
            this.fs.error('Sign up error', errorMessage);
          }
          console.log(error);
      });
  }

  emailLogin(login) {
    return this.afAuth.auth.signInWithEmailAndPassword(login.email, login.password)
      .then((res: UserCredential) => {
        this.authState = res.user;
        this.updateUserData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }


  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  //// Helpers ////

  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    console.log(this.currentUser);

    this.users.doc(this.currentUserId).set({
      email: this.currentUser.email,
      username: this.currentUser.displayName
    });


  }

}
