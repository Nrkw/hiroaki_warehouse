@extends('main')

@section('title', "会員登録")
@section('headline', "アカウント作成フォーム")

@section('contents')
<link rel="stylesheet" href="{{asset('css/adduserview.css')}}">
    <form class="useradd" action="{{url('/adduser')}}" method="POST" onsubmit="return (check() );">
        @csrf
        <input type="text" placeholder="ニックネーム" name="nickname" id="nickname">
        <p id="isokay">ニックネームが使用できるか、ここに表示されます。</p>

        <input type="text" placeholder="メールアドレス" name="email" id="email">
        <input type="password" placeholder="パスワード(8文字以上)" name="password" id="pass-first">
        <input type="password" placeholder="パスワード（確認用）" id="pass-second">
        <p id="check-pass"></p>
        <!-- パスワードが一致していない場合はここに「違っています」というpタグを追加 -->

        <p>ドイツ語の基本を学習中の方は「ニンジャ」、ドイツ語を教えられる方は「メンター」を選択してください。</p>
        <div class="role">
            <input type="radio"  name="role" value="ninja" checked><p>ニンジャ</p>
            <input type="radio" name="role" value="mentor"><p>メンター</p>
            <input type="radio" name="role" value="other"><p>その他（ドイツ語を学習中ではない）</p>        </div>

        <input type="submit" id="submit-button" value="送信" style="margin-top: 1rem;">
    </form>

<script src="{{asset('js/adduserview.js')}}">
</script>
@endsection