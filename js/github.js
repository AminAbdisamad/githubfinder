/**
 * @name: UserFinder
 * @author : Mohamed A. Abdisamad
 * @version : 1.0
 * @description : This app finds a user profile from github
 */

/* Github class*/

class GITHUB {
  constructor() {
    this.clientId = '7b36dd192d27002bfa0b';
    this.clientSecret = 'ae6185f4fba7ea7fc7a5779cbe3337096dcc3310';
    this.repo_count = 10;
    this.sorted = 'created: asc';
  }
  async getUser(user) {
    const res = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.clientId
      }&client_secret=${this.clientSecret}`
    );
    const resRepo = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repo_count
      } & sort=${this.sorted} & client_id=${this.clientId}&client_secret=${
        this.clientSecret
      }`
    );
    const profileInfo = await res.json();
    const RepoInfo = await resRepo.json();
    return {
      profile: profileInfo,
      repos: RepoInfo
    };
  }
}
