const screen = {
    userProfile: document.querySelector ('.profile-data'),
    renderUser (user) {
        this.userProfile.innerHTML = `<div class="info">
                                          <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">    
                                          <div class="data">
                                              <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                              <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                              <p>${user.company ?? 'Não possui empresa cadastrada 😢'}</p>
                                              <p>${user.location ?? 'Não possui localização cadastrada 😢'}</p>
                                          </div>
                                          <div class="counters">
                                            <div class="followers">
                                              <a href="https://github.com/${user.userName}?tab=followers"><h4>👥 Seguidores</h4></a>
                                              <a href="https://github.com/${user.userName}?tab=followers"><span>${user.followers}</span>
                                            </div>
                                            <div class="following">
                                              <a href="https://github.com/${user.userName}?tab=following"><h4>👥 Seguindo</h4></a>
                                              <a href="https://github.com/${user.userName}?tab=following"><span>${user.following}</span>
                                            </div>
                                          </div>
                                      </div>`
        
        if (user.repositories.length > 0) {
            let repositoriesItems = ''
            user.repositories.forEach (repo => {              
                repositoriesItems += `<li><a href="${repo.html_url}" target="_blank"><h4>${repo.name}</h4>
                <i class="forks">🍴 ${repo.forks_count}</i>
                <i class="stars">⭐ ${repo.stargazers_count}</i>
                <i class="watchers">👀 ${repo.watchers_count}</i>
                <i class="language">👩‍💻 ${repo.language ?? 'Sem linguagem'}</i>
                </a></li>`
                console.log(repo.language)
            })
                
            this.userProfile.innerHTML += `<div class="repositories section">
                                              <h2>Repositórios (${user.public_repos})</h2>
                                              <ul>${repositoriesItems}</ul>
                                           </div>`
        }
        
        if (user.events.length > 0) {            
            let eventsItems = ''

            user.events.forEach(event => {
                if (event.payload) {
                    if (event.payload.commits) {
                        const commits = event.payload.commits
                        const commistsList = commits.map (commit => `<span>${commit.message}</span>`)

                        eventsItems += `<li><strong>${event.repo.name}:</strong> ${commistsList}</li>`
                    }
                }
            })

        this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos<h2>
                                        <ul>${eventsItems ?? 'Sem eventos 🥶'}</ul>
                                      </div>` 
        }
    },

    renderNotFound () {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado.</h3>'
    },
}

export {screen}
