import { Username } from './../username';
import { GithubSearchService } from './../github-service/github-search.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-page',
  templateUrl: './username-page.component.html',
  styleUrls: ['./username-page.component.css']
})
export class UsernamePageComponent implements OnInit {


  username='';
  userDetails :Username;
  gottenUserRepository:any;

  constructor(private responsesearchdata :GithubSearchService) { }
  
  ngOnInit(): void {
  }

  searchUserDetails() :  void {
    console.log(this.username);
    this.getUsernameDetails(this.username);
    this.getUserRepository(this.username);
  }


  getUsernameDetails(username) {
    this.responsesearchdata.getUsernameDetails(username).then(
      (response) => {
        this.userDetails = this.responsesearchdata.userGottenDetails;
        console.log(this.userDetails);
      },
      (error) => {
        console.log(error);
      }
      );
    }
    getUserRepository(username) {
      this.responsesearchdata.getRepositoryUser(username).then(
        (response) => {
          this.gottenUserRepository = this.responsesearchdata.repository;
        }

      );
    }
  }
