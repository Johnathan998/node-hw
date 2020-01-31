inquirer
    .prompt([{
        message: "Enter GitHub username",
        name: "username"
    },
    {
        message: "What is your favorite color?",
        name: "color"
    }]).then(function ({ username, color }) {
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl)
            .then(function (response) {
                const picUrl = response.data.avatar_url;
                const location = response.data.location;
                const gitHubUrl = response.data.html_url;
                const blog = response.data.blog;
                const bio = response.data.bio;
                const numRepos = response.data.public_repos;
                const numFollowers = response.data.followers;
                const numFollowing = response.data.following;
                let numStarred = 0;
