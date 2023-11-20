@extends('main')
@if(!isset($msg))
    @section('title', '処理に成功しました。')
    @section ('headline', '処理に成功しました。')

    @section ('contents')

    @endsection
@else
<!-- $msgが渡されていたら -->
    @section('title', $msg)
    @section ('headline', $msg)

    @section ('contents')
        
    @endsection
@endif


