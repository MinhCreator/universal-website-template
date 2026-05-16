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
        <h1>Welcome to {{.title}}</h1>
        <p>{{.description}}</p>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/auth/login">Login</a>
            <a href="/auth/register">Register</a>
        </nav>
    </div>
    <script src="/static/js/app.js"></script>
</body>
</html>
