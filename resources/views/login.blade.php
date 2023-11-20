@extends('main')

@section('title', "ログイン")
@section('headline', "ログイン")

@section('contents')
<link rel="stylesheet" href="{{asset('css/login.css')}}">
<form class="login-form" action="{{url('/trylogin')}}" method="POST" onsubmit="return (check() );">
        @csrf
        <input type="text" placeholder="ニックネーム" name="nickname" id="nickname">

        <input type="password" placeholder="パスワード" name="password" id="password">

        <input type="submit" value="送信">
</form>
<script src="{{asset('js/login.js')}}">
</script>
@endsection