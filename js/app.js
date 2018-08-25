// Initialize object
const github = new GITHUB();
// Init UI object
const ui = new UI();
const findUser = document.querySelector('#user');
findUser.addEventListener('keyup', getUser);
function getUser(e) {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText).then(data => {
      //User Found
      if (data.profile.message !== 'Not Found') {
        ui.showUser(data.profile);
        // console.log(data.profile);
        ui.showRepos(data.repos);
        console.log(data.repos);
      } else {
        //User could not found
        ui.showAlert('User Not Found', 'red', 'white-text');
      }
    });
  } else {
    //clear the profile
    ui.clearProfile();
  }
}
