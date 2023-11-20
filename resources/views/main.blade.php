<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link href="{{asset('css/main.css')}}" rel="stylesheet">
</head>
<body>
    @include('layouts.header')

    <div class="headline">
        @yield("headline")
    </div>
    @yield('contents')

    @include('layouts.footer')

</body>
</html>