import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Username } from './../username';
import { Repository } from './../repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  userGottenDetails: Username;
  repository: Repository;


  constructor(private http: HttpClient) {
    this.userGottenDetails = new Username(
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      new Date(),
    );
   this.repository = new Repository(
      '',
      '',
      '',
      new Date()
   );




  };
  getUsernameDetails(username) {
    interface ApiUserDetails {
      name: string;
      avatar_url: string;
      html_url: string,
      location: string;
      bio: string;
      twitter_username: string;
      public_repos: number;
      created_at: Date;
    }
    let userPromiseDetails = new Promise<void>((resolve, reject) => {
      this.http
      .get<ApiUserDetails>(environment.url + "/"+ username + "?access_token=" + environment.apikey)

        .toPromise()
        .then(
          (response) => {
            console.log(response);
            this.userGottenDetails = response;
            console.log(this.userGottenDetails);
            resolve();
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    });
    return userPromiseDetails;
  }


getRepositoryUser(username) {
  interface ApiRepositoryuser {
    name: string;
    html_url: string;
    description: string;
    created_at: Date;
    language?: string;
  }

  let UserRepositoryPromise = new Promise<void>((resolve, reject) => {
    this.http
    .get<ApiRepositoryuser>(environment.url + "/"+ username + '/repos?access_token=' + environment.apikey)

      .toPromise()
      .then(
        (response) => {
          this.repository = response;
          resolve();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
  });
  return UserRepositoryPromise;
}
}

