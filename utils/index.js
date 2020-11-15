import { API_KEY_URL } from '../config.js';
import { getLocalTime } from './date.js'
const GITHUB_API_URL = 'https://api.github.com/graphql';

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

export const fetchApiKey = () => {
  return fetch(API_KEY_URL, { method: 'POST' })
    .then(res => res.json())
    .then(data => data.key)
}

export const fetchProfileAndRepos = async () => {
    const GITHUB_API_KEY = await fetchApiKey();
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GITHUB_API_KEY}`
        },
        body: JSON.stringify({
            query: queryGithub(20)
        })
    };

    return fetch(GITHUB_API_URL, options)
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