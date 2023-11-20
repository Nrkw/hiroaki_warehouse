<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
    /*
        TODO
        ・getPartProfileData()にも
        ・getAllProfileData()にも
        アイコンと自己紹介文を取得して返す。
        ただし、アイコンと自己紹介がないときのデフォルト画像・文章を返すプログラムも作成する。
    */
    function getPartProfileData($result)
    {
        $return_array['name'] = $result['name'];
        $return_array['role'] = $result['role'];
        $return_array['introduction'] = $result['introduction'];
        $return_array['icon'] = $result['icon'];
        return $return_array;
    }

    //自分のプロフィールを見たときに表示する。
    //なので、プロフィール編集用のテキストボックスを表示するように
    function getAllProfileData($result)
    {
        $return_array['name'] = $result['name'];
        $return_array['email'] = $result['email'];
        $return_array['role'] = $result['role'];
        $return_array['introduction'] = $result['introduction'];
        $return_array['icon'] = $result['icon'];

        return $return_array;
    }
    //会員登録するためのページを表示する
    function addUserView()
    {
        return view('adduserview');
    }

    //入力された会員情報をデータベースに保存し、その結果を表示する。
    function addUser(Request $request)
    {
        //以下のようにすると情報を取得できる
        // var_dump($request['nickname']);
        $data['nickname'] = $request['nickname'];
        $data['email'] = $request['email'];
        $data['password'] = $request['password'];

        $data['role'] = $request['role'];

        $user = new User();
        $user->writeUser($data);

        $msg = "アカウント作成に成功しました。";
        return view('success', compact("msg"));
    }
    function login()
    {
        //もし、ログインしているのにログインしようとしたら
        if(isset($_COOKIE['name']))
        {
            $msg = "あなたは既にログインしています。";
            return view("error", compact('msg'));
        }else
        {
            return view("login");
        }
    }
    function trylogin(Request $request)
    {
        $results = User::where("name", $request['nickname'])->get();
        foreach($results as $result)
        {
            if(password_verify($request['password'], $result->password) )
            {
                setcookie("name", $result->name);
                $msg = "ログインに成功しました。";
                return view("success", compact("msg"));
            }
        }

        $msg = "パスワードまたはメールアドレスが違います。";
        return view("error", compact("msg"));
    }

    function logout()
    {
        setcookie("name", "", time() - 30);
        
        $msg = "ログアウトしました。";
        return view("success", compact("msg"));
    }
    function showProfile($username)
    {
        $isExist = false;
        //まず、送られてきたニックネームのアカウントが存在しているか確認する。
        $results = User::where("name", $username)->get();

        foreach($results as $result)
        {
            $isExist = true;
        }

        //与えられたユーザーネームが存在していなかったらエラー。
        if(!$isExist)
        {
            $msg = "ユーザー「" . $username . "」は存在しません。";
            return view("error", compact("msg"));
        }

        //ここから下に処理が来るということは、ユーザーが存在していたということ。



        $name = $username;

        //usernameで検索したヒットした最初の人のプロフィールを見せる。
        //usernameはかぶらない用になっているはずなので、問題ない。

        $profile = null;

        
        //閲覧しようとしている人物のプロフィールとログイン中のユーザーが違ったら
        //もしくは、ログインしていなかったら
        if($username != $_COOKIE["name"] || !isset($_COOKIE["name"]))
        {
            //個人情報を保存しないプロフィール表示
            foreach($results as $result)
            {
                $profile = UserController::getPartProfileData($result);
            }
            return view("otherprofile", compact("profile"));
        }else
        {
            foreach($results as $result)
            {
                $profile = UserController::getAllProfileData($result);
            }
            //個人情報（メールアドレス等）を閲覧・変更できるプロフィール
            return view("personalprofile", compact("profile"));
        }
    }

    function uploadIntroduction($name,$text)
    {
        User::where("name", $name)->update(['introduction' => $text]);
        /*
        foreach($users  as $user)
        {
            echo "OK.";
            $user->update([
                "introduction" => $text,
            ]);
        }
        echo "OKOasdasda.";
        */
        echo "Ok.";

        

    }
    function uploadEmail($name, $address)
    {
        User::where("name", $name)->update(['email' => $address]);
        echo "OK.";
    }
    function returnIcon($username)
    {

        $results = User::where("name", $username)->get();
        $isExist = false;
        foreach($results as $result)
        {
            if($result['icon'] == "")
            {
                //header('Content-Type: image/jpeg;');

                //もし、アイコンが設定されていなかったら
                $file = public_path('images/default-icon.jpeg');
                // var_dump($file);
                //readfile($file);
                //phpinfo();

                //readfile($file);
                //$mime_type = \File::mimeType($file);
                //$headers = ['Content-Type:image/jpg'];
                //response()->file($file, $headers);
                response()->file($file);
                return;
            }else
            {
                header('Content-Type: image/jpg');
                echo imagecreatefromstring($result['icon']);
                return;
            }
        }
        //ユーザーがいなかった場合
        header('Content-Type: image/jpg');
        readfile( "./../../../public/images/default-icon.jpg" );
    }
}
