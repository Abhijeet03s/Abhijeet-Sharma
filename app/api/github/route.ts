import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

const octokit = new Octokit({
   auth: process.env.GITHUB_TOKEN,
});

const username = 'Abhijeet03s';

export async function GET() {
   try {
      // User data
      const userResponse = await octokit.request('GET /users/{username}', {
         username,
      });

      // Repositories
      const reposResponse = await octokit.request('GET /users/{username}/repos', {
         username,
         per_page: 100,
         sort: 'updated',
      });

      // Return the data
      return NextResponse.json({
         user: userResponse.data,
         repositories: reposResponse.data.map(repo => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            url: repo.html_url,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
         })),
      });
   } catch (error) {
      console.error('Error fetching GitHub data:', error);
      return NextResponse.json(
         { error: 'Failed to fetch GitHub data' },
         { status: 500 }
      );
   }
} 