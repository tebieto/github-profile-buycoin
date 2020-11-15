import { GITHUB_API_KEY} from '../config.js';
import { getLocalTime } from './date.js'
const API_URL = 'https://api.github.com/graphql';
const BAD_PRACTICE_DEMO_KEY = GITHUB_API_KEY;

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
            const { totalCount, edges } = repositories;

            const repos = edges.map(repo => {
              const {name, updatedAt: time, languages} = repo.node;
              const updatedAt = getLocalTime(time);
              const edges = languages.edges[0];
              let lang;
              if(edges) lang = edges.node;
              return { name, updatedAt, lang };
            });

            return { userInfo, repos, totalCount};
        })
};