new GitHubCalendar(".calendar", "Baptiste-Caral");

GitHubCalendar(".calendar", "Baptiste-Caral", { proxy (BaptisteCaral) { return fetch(`https://your-proxy.com/github?user=Baptiste-Caral`).then(r => r.text()) }});

