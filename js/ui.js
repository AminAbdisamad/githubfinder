// UI Class

class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
    this.message = document.querySelector('#message');
  }
  /**
   * Display User profile
   * */
  showUser(user) {
    this.profile.innerHTML = `<div class="">
    <div class="row">
    <div class="col m3 grey lighten-4">
    <img class="responsive-img circle" src="${user.avatar_url}">
    <p class="blue-text"><i class="material-icons left">person_pin</i>${
      user.name
    }</p>
    <p class="grey-text small"><i class="material-icons left">work</i>${
      user.bio
    }</p>
    <p class="grey-text"><i class="material-icons left">group_work</i>${
      user.company
    }</p>
    <p class="grey-text"><i class="material-icons left">web</i>${user.blog}</p>
      <p class="grey-text"><i class="material-icons left">add_location</i>${
        user.location
      }</p>
      <p class="grey-text"><i class="material-icons left">date_range</i>${
        user.created_at
      }</p>
      <a href="${
        user.html_url
      }" target="_blank" class="btn-small btn-waves">View Profile</a>
    </div>
    <div class="col m9 grey lighten-3">
                        <nav>
                            <div class="nav-wrapper white">
                                <ul>
                                    <li><a class="blue-text" href="sass.html">Public Repos:<span class="badge red-text">${
                                      user.public_repos
                                    }</span></a></li>
                                    <li><a class="blue-text" href="sass.html">Public gists<span class="badge">${
                                      user.public_gists
                                    }</span></a></li>
                                    <li><a class="blue-text" href="#!">Followers<span class="badge">${
                                      user.followers
                                    }</span></a></li>
                                    <li><a class="blue-text" href="#!">Following<span class="badge">${
                                      user.following
                                    }</span></a></li>
                                   
                                </ul>
                            </div>
                        </nav>
                        <br>
                        <h5 class="blue-text">Popular Repositories</h5>
                        <br>
                        <div id="showrepo"></div>
                    </div>
                </div>`;
  }
  /**
   * Clear User profile
   * */

  clearProfile() {
    this.profile.innerHTML = '';
  }
  /**
   * Show User Repositories
   * */
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `<ul class="collections">
      <div class="row ">
      <div class="col s6">
      <li class="collection-item">
          <a href="${repo.html_url}">${repo.name}</a>
          </li>
          </div>
          <div class="col s6">
          <li class="collection-item">
          <a href="#!" class="secondary-content"><span id="notifica" data-badge="${
            repo.stargazers_count
          }" class="icon material-icons mdl-badge">star</span></a>
          <a href="#!" class="secondary-content"><span id="notifica" data-badge="${
            repo.forks_count
          }" class="icon material-icons mdl-badge">shares</span></a>
          <a href="#!" class="secondary-content"><span id="notifica" data-badge="" class="icon material-icons mdl-badge blue-text"></span>${
            repo.language
          }</a>
          
          </li>
         </div>
         </div> 
      </ul>`;
    });
    document.getElementById('showrepo').innerHTML = output;
  }

  /**
   * Show Alert - Not Found
   * */
  showAlert(text, bgColor, txColor) {
    const div = document.createElement('div');
    div.classList.add(`${bgColor}`, `${txColor}`, 'alert');
    div.style.padding = '10px';
    div.style.margin = '5px';
    div.style.textIndent = '10px';
    div.style.borderRadius = '5px';
    div.appendChild(document.createTextNode(text));
    const alertPlaceHolder = document.querySelector('.alertPlaceHolder');
    const searchUser = document.querySelector('.searchUser');
    alertPlaceHolder.insertBefore(div, searchUser);
    /**
     * Clear Alert after 3s
     * */
    setTimeout(() => {
      if (div) {
        div.remove();
      }
    }, 3000);
  }
}
