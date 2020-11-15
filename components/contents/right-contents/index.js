export const getContentRight = repos => `
    <div id="contents-right">
        <div class="search-repo">
            <input placeholder="Find a repository..." type="text"  />
            <div class="search-repo-btns">
                <div class="select-btns">
                    <button>
                        <span>Type: All</span>
                        <span>&#9662;</span>
                    </button>
                    <button>
                        <span>Language: All</span>
                        <span>&#9662;</span>
                    </button>
                </div>
                <button id="new-repo-btn">
                    <span>New</span>
                </button>
            </div>
        </div>

        <div id="repos">
            ${repos.map(repo => {
                return `
                <div class="repo">
                    <div class="repo-left">
                        <div class="repo-name">
                            <span>${repo.name}</span>
                        </div>
                        <div class="repo-other-info">
                            ${
                                repo.lang ? `
                                <div class="lang">
                                    <div class="lang-color" style="background-color:${repo.lang.color}"></div>
                                    <span>${repo.lang.name}</span>
                                </div>
                                `
                                : ''
                            }
                            <div class="date">${repo.updatedAt}</div>
                        </div>
                    </div>
                    <div class="flex"></div>
                    <div class="star-btn">
                        <button>
                            <span>&#x2606;</span>
                            <span>Star</span>
                        </button>
                    </div>
                </div>
                `
            }).join('')}
        </div>
    </div>
`