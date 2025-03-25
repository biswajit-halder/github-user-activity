# github-user-activity

## Overview
GitHub User Activity CLI is a simple command-line interface (CLI) tool that allows users to fetch and display recent activity from a specified GitHub user. This project helps practice working with APIs, handling JSON data, and building CLI applications without using external libraries.

Sample solution for the <a href="https://roadmap.sh/projects/github-user-activity" rel="nofollow">github-user-activity</a> challenge from <a href="https://roadmap.sh/" rel="nofollow">roadmap.sh</a>.

## Features
- Accepts a GitHub username as an argument.
- Fetches recent activity from the GitHub API.
- Displays activity in a user-friendly format.
- Handles errors such as invalid usernames or API failures gracefully.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/github-activity-cli.git
   cd github-activity-cli
   ```
2. Ensure you have a programming environment set up (e.g., Python, Node.js, or another language of choice).

## Usage
Run the CLI tool by providing a GitHub username:
```sh
./github-activity <username>
```
Example:
```sh
./github-activity biswajit-halder
```
### Expected Output:
```
- Pushed 1 commit(s) to biswajit-halder/task-tracker at 2025-03-24T18:58:32Z
- Created repository in biswajit-halder/task-tracker at 2025-03-23T17:01:09Z
- Created branch in biswajit-halder/task-tracker at 2025-03-23T17:01:09Z
```

## API Endpoint Used
This tool fetches activity data from the following GitHub API endpoint:
```
https://api.github.com/users/<username>/events
```
Example:
```
https://api.github.com/users/biswajit-halder/events
```

## Error Handling
- Invalid usernames will return an appropriate error message.
- API failures (e.g., rate limiting, network errors) are handled gracefully.
