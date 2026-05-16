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
        <form action="/user/settings" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="email" name="email" placeholder="Email" required>
            <textarea name="bio" placeholder="Bio"></textarea>
            <button type="submit">Save</button>
        </form>
        <a href="/user/profile">Back to Profile</a>
        <a href="/">Home</a>
    </div>
</body>
</html>
