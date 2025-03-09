import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

const octokit = new Octokit({
   auth: process.env.GITHUB_TOKEN,
});

const username = 'Abhijeet03s';

export async function POST(
   request: Request,
   { params }: { params: { repo: string } }
) {
   const repoName = params.repo;

   try {
      const body = await request.json();
      const { title, description } = body;

      if (!title || !description) {
         return NextResponse.json(
            { error: 'Title and description are required' },
            { status: 400 }
         );
      }

      // Create an issue
      const issueResponse = await octokit.request('POST /repos/{owner}/{repo}/issues', {
         owner: username,
         repo: repoName,
         title,
         body: description,
      });

      // Return the issue URL
      return NextResponse.json({
         message: 'Issue created successfully',
         issue_url: issueResponse.data.html_url,
         issue: issueResponse.data,
      });
   } catch (error) {
      console.error(`Error creating issue for repository ${repoName}:`, error);
      return NextResponse.json(
         { error: `Failed to create issue for repository ${repoName}` },
         { status: 500 }
      );
   }
} 