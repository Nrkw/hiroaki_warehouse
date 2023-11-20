@extends ('main')

@php
    $title = $profile['name'] . "のプロフィール";

    $introduction = $profile['introduction'];
    if($introduction == "")
    {
        $introduction = $profile['name'] . "はまだ自己紹介文を書いていません。";
    }
@endphp


@section('title', $title)
@section('headline', $title)
    
@section('contents')

<link rel="stylesheet" href="{{asset('css/personalprofile.css')}}">
<div class="container">
    <div class="head">
        
        @if($profile['icon'] == "")
        <img class="headimg" src="{{asset('images/default-icon.jpeg')}}">
        @else
        {{--  アイコンが設定されていた場合は、public/storage/(ユーザー名)/ファイル名 とする。 --}}
        <img src="{{asset('storage/' . $profile['name'] . '/' . $profile['icon'])}}">
        @endif

        <p class="headname">{{$profile['name']}}</p>
    </div>

    <p class="profile">紹介文</p>
    <textarea cols="40" rows="10" class="introduction" id="intro">{{$introduction}}</textarea>
    <br>
    <button class="profile"onclick="sendintro('{{$profile['name']}}')">変更</button>

    <p class="profile">メールアドレス</p>

    <input class="profile" type="text" value="{{$profile['email']}}" id="email">
    <button class="profile" onclick="sendemail('{{$profile['name']}}')">変更</button>
</div>

<script src="{{asset('js/personalprofile.js')}}"></script>
@endsection