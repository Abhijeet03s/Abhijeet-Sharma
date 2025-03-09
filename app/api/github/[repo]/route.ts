import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

const octokit = new Octokit({
   auth: process.env.GITHUB_TOKEN,
});

const username = 'Abhijeet03s';

export async function GET(
   request: Request,
   { params }: { params: { repo: string } }
) {
   const repoName = params.repo;

   try {
      // Repository data
      const repoResponse = await octokit.request('GET /repos/{owner}/{repo}', {
         owner: username,
         repo: repoName,
      });

      // Repository languages
      const languagesResponse = await octokit.request('GET /repos/{owner}/{repo}/languages', {
         owner: username,
         repo: repoName,
      });

      // Recent commits
      const commitsResponse = await octokit.request('GET /repos/{owner}/{repo}/commits', {
         owner: username,
         repo: repoName,
         per_page: 10,
      });

      // Return the data
      return NextResponse.json({
         repository: repoResponse.data,
         languages: languagesResponse.data,
         recent_commits: commitsResponse.data.map(commit => ({
            sha: commit.sha,
            message: commit.commit.message,
            author: commit.commit.author?.name,
            date: commit.commit.author?.date,
            url: commit.html_url,
         })),
      });
   } catch (error) {
      console.error(`Error fetching data for repository ${repoName}:`, error);
      return NextResponse.json(
         { error: `Failed to fetch data for repository ${repoName}` },
         { status: 500 }
      );
   }
} 