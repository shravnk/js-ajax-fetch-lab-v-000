function getIssues() {

}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  $("#results").html(`<a href="${json.html_url}">Visit Fork Page</a>`)
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const link = `https://api.github.com/repos/${repo}/forks`
  fetch(link, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '64301029edf08bc255b1280b192367add889b39e'
}
