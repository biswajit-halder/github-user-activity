async function fetchGithubUserActivity(username) {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    
    if(response.status !== 200) {
        if (response.status === 404) {
            throw new Error(`User not found!`);
        } else {
            throw new Error(`Error fetching data: ${response.status}`);
        }
    }

    return response.json()
}

function displayEvents(events) {
    if (events.length === 0) {
        console.log(`No recent activity found!`);
        process.exit();
    }

    events.forEach((event) => {
            let action;
        switch (event.type) {
            case "PushEvent":
                const commitCount = event.payload.commits.length;
                action = `Pushed ${commitCount} commit(s) to ${event.repo.name} at ${event.created_at}`;
                break;
            case "IssuesEvent":
                action = `${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} an issue in ${event.repo.name} at ${event.created_at}`;
                break;
            case "WatchEvent":
                action = `Starred ${event.repo.name} at ${event.created_at}`;
                break;
            case "ForkEvent":
                action = `Forked ${event.repo.name} at ${event.created_at}`;
                break;
            case "CreateEvent":
                action = `Created ${event.payload.ref_type} in ${event.repo.name} at ${event.created_at}`;
                break;
            default:
                action = `${event.type.replace("Event", "")} in ${event.repo.name} at ${event.created_at}`;
                break;
        }
        console.log(`- ${action}`);
    });
}

const username = process.argv[2];

if (!username) {
  console.log(`Please provide a username!`);
  process.exit(1);
}

fetchGithubUserActivity(username)
  .then((events) => displayEvents(events))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
