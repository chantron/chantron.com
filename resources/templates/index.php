<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>chantron - web developer</title>
        <link rel="stylesheet" href="/assets/css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Exo+2|Space+Mono|Open+Sans" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div id="chantron"><i class="fa fa-loading fa-4x"></i></div>
        <?php require_once('ractive/main.php'); ?>
        <?php require_once('ractive/home.php'); ?>
        <?php require_once('ractive/about.php'); ?>
        <?php require_once('ractive/contact.php'); ?>
        <script src="/assets/js/chantron.js"></script>
    </body>
</html>
