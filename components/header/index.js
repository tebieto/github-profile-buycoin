export const getPageHeader = avatarUrl =>`
    <div id="header">
    <img src="./assets/menu.png" alt="" id="menu-icon">
    <div id="header-left">
        <div id="logo">
            <img src="./assets/apple-touch-icon.png">
        </div>
        <div id="header-search">
            <input placeholder="Search or jump to..." type="text"  />
            <button>/</button>
        </div>
        <div id="header-links">
            <div class="link">Pull Requests</div>
            <div class="link">Issues</div>
            <div class="link">Market Place</div>
            <div class="link">Explore</div>
        </div>
    </div>
    <div class="flex"></div>
    <div id="header-right">
        <div id="header-icons">
            <button id="notification-btn">
                <img  class="icon" src="./assets/notification.png" />
            </button>
            <button id="plus-btn">
                <img  class="icon" src="./assets/plus.png" />
                <span>&#9662;</span>
            </button>
            <button id="avatar-btn">
                <img  class="avatar" src="${avatarUrl}" />
                <span>&#9662;</span>
            </button>
        </div>
    </div>
    </div>
`;