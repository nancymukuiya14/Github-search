import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from './../github-service/github-search.service';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.css']
})
export class RepositoryPageComponent implements OnInit {

  username='';
  gottenUserRepository:any;


  constructor(private responsesearchdata :GithubSearchService) { }

  ngOnInit(): void {
  }

  searchUserDetails() :  void {
    console.log(this.username);
    this.getUserRepository(this.username);
  }
  getUserRepository(username) {
    this.responsesearchdata.getRepositoryUser(username).then(
      (response) => {
        this.gottenUserRepository = this.responsesearchdata.repository;
      }

    );
  }
}
