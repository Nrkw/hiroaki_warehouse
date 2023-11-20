@extends('main')

@section('title', 'エラーが発生しました。')
@section ('headline', 'エラーが発生しました。もう一度試してみてください。')

@section ('contents')

@if(isset($msg))
<p style="font-size: 25px;text-align:center;">エラー内容： {{$msg}}</p>
@endif

@endsection