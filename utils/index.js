const API_URL = 'https://api.github.com/graphql';
const BAD_PRACTICE_DEMO_KEY = '544b71fed9a64753544db364647ebd7f7094e30f';

const queryGithub = maxReposLength => `
    {
        viewer {
        login
        name
        bio
        repositories(first: ${maxReposLength}) {
            edges {
            node {
                id
                name
            }
            }
        }
        }
    }
`;

export const fetchProfileAndRepos = () => {
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${BAD_PRACTICE_DEMO_KEY}`
        },
        body: JSON.stringify({
            query: queryGithub(20)
        })
    };

    return fetch(API_URL, options)
        .then(res => res.json())
        .then(result => {
            const { bio, login, name, repositories } = result.data.viewer
            const userInfo = { bio, login, name };
            return { userInfo, repositories };
        })
        .catch(error => console.log(error));
};