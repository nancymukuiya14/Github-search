import { Component, OnInit } from '@angular/core';
import { Username } from './../username';
import { Repository } from './../repository';
import { GithubSearchService  } from '../github-service/github-search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userDetails: Username;
  gottenUserRepository;
 constructor(private responsesearchdata: GithubSearchService) { }

  ngOnInit(): void {
    this.getUsernameDetails('nancymukuiya14');
    this.getUserRepository('nancymukuiya14');
  }
  getUsernameDetails(username) {
    this.responsesearchdata.getUsernameDetails(username).then(
      (response) => {
        this.userDetails = this.responsesearchdata.userGottenDetails;
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


  

