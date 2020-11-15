import { getPageHeader } from './components/header/index.js';
import { getPageContents } from './components/contents/index.js';
import { fetchProfileAndRepos} from './utils/index.js';

const renderPage = data => {
    const node = document.getElementById("app");
    const pageHeader = getPageHeader(data.userInfo.avatarUrl);
    const pageContent = getPageContents(data);
    if(!node || !pageHeader || !pageContent) return alert('error');
    const page = `${pageHeader}${pageContent}`;
    node.innerHTML = page;
}

fetchProfileAndRepos()
    .then(data => {
        if(!data)return;
        renderPage(data);
    })
    .catch(error => {
        alert("Check internet connection, change the GITHUB api key in config.js to a valid one and refresh page")
    });