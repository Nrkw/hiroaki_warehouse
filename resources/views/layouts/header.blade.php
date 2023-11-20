<link href="{{asset('css/header.css')}}" rel="stylesheet">
<div class="header">

    <div>
        <img src="{{asset('images/header.jpg')}}">
        <div>

            <h1>Hiroakiの倉庫</h1>
        </div>
    </div>

    <!-- メインメニュー-->
    <div class="header-menu-div">
        <?php
            $contents = ["TOP" => "/", "Myドイツ語単語帳" => "/mywordbook"];
            if(!isset($_COOKIE['name']))
            {
                $add_contents = ["ログイン" => "/login", "会員登録" => "/adduserview"];
                $contents = array_merge($contents, $add_contents);
            }else
            {

                $add_contents = ["プロフィール" => '/profile/' . $_COOKIE["name"], "ログアウト" => "/logout"];
                $contents = array_merge($contents, $add_contents);
            }
        ?>

        @foreach($contents as $key => $content)
            <a href="{{url($content)}}" class="header-menu-a">{{$key}}</a>
        @endforeach
    </div>
</div>