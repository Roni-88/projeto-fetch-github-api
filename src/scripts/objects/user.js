const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    company: '',
    location: '',
    userName: '',
    repositories: [],
    public_repos: 0,
    setInfo (gitHubUser) {
        console.log(gitHubUser)
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.company = gitHubUser.company
        this.location = gitHubUser.location
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.followers_url = gitHubUser.followers_url
        this.following = gitHubUser.following
        this.following_url = gitHubUser.following_url
        this.public_repos = gitHubUser.public_repos
    },
    setRepositories (repositories) {
        this.repositories = repositories
    },
    setEvents (events) {
        this.events = events
    }
}

export {user}
