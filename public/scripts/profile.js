function createProfile(fields) {
    fetch(`/api/profiles`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function followProfile(fields) {
    fetch(`/api/profiles/follow`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function unfollowProfile(fields) {
    fetch(`/api/profiles/unfollow`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function deleteProfile(fields) {
    fetch(`/api/profiles`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function viewAllProfiles(fields) {
    fetch('/api/profiles')
      .then(showResponse)
      .catch(showResponse);
}

function viewUserProfiles(fields) {
    fetch(`/api/profiles?user=${fields.username}`)
      .then(showResponse)
      .catch(showResponse);
}