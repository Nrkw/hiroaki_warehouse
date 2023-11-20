<?php

namespace App\Http\Controllers\MyWordbook;

use App\Http\Controllers\Controller;
use App\Models\MyWordbook\MyWordbook;
use Illuminate\Http\Request;

class MyWordbookController extends Controller
{

    /*
        function getWords($name)
        @args
            name: 単語を追加した人のユーザーネーム
        @return
        $array[][]に、
        $array[0]['whomade'], $array[0]['wordtype'], ....
        $array[1]['whomade'], $array[1]['wordtype'], ....
        のように単語の情報を抽出して、その配列(配列の中にそれぞれの単語の連想配列が入ってる)を
        返す関数
    */
    public function getWords($name)
    {
        $array = array(array());

        $i = 0;
        $results = MyWordbook::where(["whomade" => $name])->get();
        foreach($results as $result)
        {
            $append['whomade'] = $result['whomade'];
            $append['wordtype'] = $result['wordtype'];
            $append['german'] = $result['german'];
            $append['japanese'] = $result['japanese'];
            $append['gender'] = $result['gender'];
            $append['other'] = $result['other'];
            $append['plural'] = $result['plural'];
            $append['id'] = $result['id'];

            array_push($array, $append);
            if($i == 0)
            {
                array_shift($array);
            }
            $i++;
        }
        return $array;
    }
    public function index()
    {
        //ログインしていなかったら
        if(!isset($_COOKIE['name']))
        {
            return redirect("/login");
        }
        $words = MyWordbookController::getWords($_COOKIE['name']);
        // var_dump($words);
       return view("mywordbook.index", compact("words"));
    }

    public function uploadWord($name, $word, $wordtype, $gender, $meaning)
    {
        // echo "name = " . $name . ", " . "word = " . $word . ", meaning = " . $meaning;

        MyWordbook::create([
            "whomade" => $name,
            "wordtype" => $wordtype,
            "gender" => $gender,
            "german" => $word,
            "japanese" =>$meaning,
            "other" => "",
        ]);
    }

    public function updateWord($name, $wordID, $wordtype, $gender, $meaning, $plural, $other)
    {
        MyWordbook::where("id", $wordID)->where("whomade", $name)->update([
            "wordtype" => $wordtype,
            "gender" => $gender,
            "japanese" => $meaning,
            "plural" => $plural,
            "other" => $other,
        ]);
    }
}
