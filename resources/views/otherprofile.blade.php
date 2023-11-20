@extends('main')
<link rel="stylesheet" href="{{asset('css/otherprofile.css')}}">
@php
    $title = $profile['name'] . "のプロフィール";
    $introduction = $profile['introduction'];
    if($introduction == "")
    {
        $introduction = $profile['name'] . "さんはまだ自己紹介文を書いていません。";
    }

    $role = "init";

    if($profile['role'] == "ninja")
    {
        $role = "ニンジャ";
    }else if($profile['role'] == "mentor")
    {
        $role = "メンター";
    }else if($profile['role'] == "other")
    {
        $role = "その他";
    }
@endphp
@section('title', $title)
@section ('headline', $title)

@section('contents')
<div class="container">
    <div class="head">
        @if($profile['icon'] == "")
        <img src="{{asset('images/default-icon.jpeg')}}" class="headimg">
        @else
        {{--  アイコンが設定されていた場合は、public/storage/(ユーザー名)/ファイル名 とする。 --}}
        <img src="{{asset('storage/' . $profile['name'] . '/' . $profile['icon'])}}" class="headimg">
        @endif

        <p>{{$profile['name']}}</p>
    </div>
@php
    
@endphp
    <p>{{$role}}</p>
    
    <p>自己紹介文</p>
    <p class="headname">{{$introduction}}</p>


</div>
@endsection