<!--
        Myドイツ語単語帳のベースになるファイル
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myドイツ語単語帳</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
@include('mywordbook.layouts.header')
@yield("contents")

@include('layouts.footer')
</body>
</html>