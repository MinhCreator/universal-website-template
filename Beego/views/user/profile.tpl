<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{.title}}</title>
    <link rel="stylesheet" href="/static/css/app.css">
</head>
<body>
    <div class="container">
        <h1>{{.title}}</h1>
        {{if .user}}
        <div class="profile">
            <p><strong>Username:</strong> {{.user.Username}}</p>
            <p><strong>Email:</strong> {{.user.Email}}</p>
            <p><strong>Bio:</strong> {{.user.Bio}}</p>
        </div>
        {{end}}
        <a href="/user/settings">Settings</a>
        <a href="/auth/logout">Logout</a>
        <a href="/">Home</a>
    </div>
</body>
</html>
