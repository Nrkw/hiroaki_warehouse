@php
    $name = "";
    if(isset($_COOKIE['name']))
    {
        $name = $_COOKIE['name'];
    }


        //名詞の性別の表示名をここで宣言。
    //(この変数を使ってjavascriptでも変数宣言。)
    $DISPLAY_MALE = "男";
    $DISPLAY_FEMALE = "女";
    $DISPLAY_NEUTER = "中";
    $DISPLAY_NONE = "無";
@endphp

@extends('mywordbook.main')

@section('title', 'Myドイツ語単語帳')
@section('headline', 'Myドイツ語単語帳')
@section('contents')

<link rel="stylesheet" href="{{asset('css/mywordbook/index.css')}}">
<div class="container">
    <a href="{{url('/')}}">TOPページに戻る</a>
    <a href="#addword-dialog" id="addword">単語を追加</a>

    <div id="addword-dialog" class="addword-dialog" tabindex="-1">
        <a href="#" class="overlay" aria-label="閉じる"></a>
        <div class="addword-content" >
            <!-- ここに中身を表示 -->
            <a href="#" class="close" aria-label="閉じる">&times;</a>
            <input type="text" list="candidate" id="text" placeholder="ドイツ語単語を入力" style="font-size: 30px;">
            <input type="button" value="送信" class="submit-button" id="send">
            <div class="candidate">
                <datalist id="candidate">
                    <!--ここにJavaScriptで動的にOptionタグを追加 -->
                </datalist>
            </div>
        </div>
    </div>


    <div>
        <table>
            <tr class="headline">
                <th>ドイツ語</th> <th>意味</th><th>性別</th><th>複数</th><!--<th>他</th>--><th>設定</th>
            </tr>
    @foreach($words as $word)
    @php
        if(!isset($word['id']))
        {
            continue;
        }
        if($word['wordtype'] == "none")
        {
            $word['wordtype'] = "";
        }
        if($word['plural'] == "none")
        {
            $word['plural'] = "";
        }
        if($word['other'] == "none")
        {
            $word['other'] = "";
        }
        $gender = "";
        $gender_color = "black";
        switch($word['gender'])
        {
            case "male":
                $gender = $DISPLAY_MALE;
                $gender_color = "blue";
                break;
            case "female":
                $gender = $DISPLAY_FEMALE;
                $gender_color = "#FF69B4";
                break;
            case "neuter":
                $gender = $DISPLAY_NEUTER;
                $gender_color = "#835D6A";
                break;
        }
    @endphp

            <tr class="words" id="word-{{$word['id']}}">
                <td>{{$word['german']}}</td><td>{{$word['japanese']}}</td><td><span style="color: {{$gender_color}};">{{$gender}}</span></td><td>{{$word['plural']}}</td></td><td hidden>{{$word['other']}}</td><td hidden>{{$word['wordtype']}}<td><div class="outer" onclick="showDialog({{$word['id']}})"><div class="iconGear"><div></div></div></div></td>
            </tr>
            <div id="setting-dialog-{{$word['id']}}" style="display: none;">
<!--                <div id="setting-inner-{{$word['id']}}" style=" background-color: white;">-->
<!--                    <button class="word-fontsize" onclick="closeDialog({{$word['id']}})" style="display: fixed;">閉じる</button> -->
<!--                </div>-->
            </div>
    @endforeach
        </table>
    </div>
</div>
<script>
    let username = "{{$name}}";
    let DISPLAY_MALE = "{{$DISPLAY_MALE}}";
    let DISPLAY_FEMALE = "{{$DISPLAY_FEMALE}}";
    let DISPLAY_NEUTER = "{{$DISPLAY_NEUTER}}";
    let DISPLAY_NONE = "{{$DISPLAY_NONE}}";
</script>
<script src="{{asset('js/mywordbook/index.js')}}"></script>
@endsection