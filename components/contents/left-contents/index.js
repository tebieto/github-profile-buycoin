export const getContentLeft = userInfo => `
    <div id="contents-left">
        <div class="profile">
            <div class="avatar">
                <img src="${userInfo.avatarUrl}" />
            </div>
            <div id="personal-info">
                <div class="name">${userInfo.name}</div>
                <div class="username">${userInfo.login}</div>
            </div>
        </div>
        <button>
            <span>&#9786;</span>
            <span id="set-status">Set status</span>
        </button>
        <div class="bio">${userInfo.bio}</div>
    </div>
`