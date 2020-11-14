const API_URL = 'https://api.github.com/graphql';
const BAD_PRACTICE_DEMO_KEY = '544b71fed9a64753544db364647ebd7f7094e30f';

const queryGithub = maxReposLength => `
{
    viewer {
      login
      bio
      avatarUrl(size: 300)
      name
      repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            id
            name
            languages(first: 1) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            updatedAt
          }
        }
        totalCount
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
            const { bio, login, name, avatarUrl, repositories } = result.data.viewer
            const userInfo = { bio, login, name, avatarUrl };
            return { userInfo, repositories };
        })
        .catch(error => console.log(error));
};