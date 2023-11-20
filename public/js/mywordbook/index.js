if(username == "")
{
    window.alert("Myドイツ語単語帳を利用するには、ログインが必要です。");
}

let MALE_NOUNS = {"Bruder":"兄弟", "Mann":"男性", "Onkel":"おじ", "Junge":"男の子", "Vater":"父","Sohn":"息子","Arzt":"医者（男性）", "Beruf":"職業", "Shüler":"生徒（男性）", "Student":"大学生（男性）", "Lehrer":"教師（男性）","Hausmann": "主夫","Fisch":"魚", "Käse":"チーズ","Kuchen":"ケーキ","Reis":"米","Salat":"サラダ","Schinken":"ハム","Zucker":"砂糖","Pfeffer":"コショウ", "Kaffee":"コーヒー", "Saft":"ジュース", "Tee":"紅茶", "Wein":"ワイン", "Durst":"のどの渇き", "Baum":"木", "Berg":"山", "Fluss":"川", "Himmel":"天、空", "Hund":"犬", "Mond":"月", "Regen":"雨", "Schnee":"雪", "See":"湖", "Stift":"ペン", "Kugelschreiber":"ボールペン", "Ehemann":"夫", "Flughafen":"空港", "Feuerwehrmann":"消防士", "stern":"星", "Vogel":"鳥", "Walt":"森", "Wind":"風","Markt":"市場、広場", "Park":"公園","Platz":"席、場所、広場", "Tisch":"テーブル","Apfel":"りんご", "Fahrplan":"時刻表", "Wagen":"自動車","Zug":"列車","Fernseher":"テレビ", "Garten":"庭","Kühlschrank":"冷蔵庫","Schlüssel":"鍵","Schrank":"戸棚、たんす","Spiegel":"鏡","Stuhl":"椅子","Brief":"手紙","Fußball":"サッカー","Urlaub":"休暇","Geburtstag":"誕生日","Freund":"友達（男性）","Name":"名前", "Schmerz":"痛み"};
let FEMALE_NOUNS = {"Mutter":"母", "Frau":"女性", "Schwester":"姉、妹", "Tochter":"娘", "Tante":"おば","Firma":"会社","Hausfrau":"主婦", "Ärztin":"医者（女性）","Shülerin":"生徒（女性）", "Studentin":"大学生（女性）", "Lehrerin":"教師（女性）", "Butter":"バター", "Marmelade":"ジャム", "Schokolade":"チョコレート", "Suppe":"スープ","Wurst":"ソーセージ","Sahne":"クリーム", "Milch":"牛乳", "Blume":"花","Katze":"猫", "Luft":"空気", "Natur":"自然", "Pflanze":"植物", "Sonne":"太陽", "Bäckerei":"パン屋", "Kirche":"教会","Polizei":"警察", "Uhr":"時計", "Tasche":"かばん", "banane":"バナナ", "Birne":"梨", "Schweiz":"スイス", "Post":"郵便局","Stadt":"町","Straße":"通り", "Fahrkarte":"乗車券","Haltestelle":"停留所","Dusche":"シャワー","Heizung":"暖房","Küche":"キッチン","Toilette":"トイレ","Tür":"ドア","Wand":"壁","Waschmaschine":"洗濯機","Wohnung":"アパート、マンション", "Zeit":"時間","Karte":"カード","Geige":"バイオリン","Oper":"オペラ","Reise":"旅行","Frage":"質問","Liebe":"愛"};
let NEUTER_NOUNS = {"Kind":"子供", "Feld":"畑", "Mädchen":"女の子", "Brot":"パン", "Brötchen":"小さいパン","Ei":"卵","Essen":"食事、食べ物","Fleisch":"肉", "Öl":"油","Salz":"塩", "Frühstück":"朝食", "Bier":"ビール", "Wasser":"水", "Meer":"海", "Kilo":"キロ（単位）", "Tier":"動物", "Wetter":"天気","Pferd":"馬", "Geschäft":"店", "Kaufhaus":"デパート", "Kino":"映画館", "Krankenhaus":"病院", "Buch":"本", "Gras":"雑草","Auto":"車","Motorrad":"バイク", "Notizbuch":"ノート","Deutschland":"ドイツ","Rathaus":"市庁舎", "Schloss":"城","Hotel":"ホテル", "Flugzeug":"飛行機", "Schiff":"船", "Taxi":"タクシー", "Bad":"風呂", "Bett":"ベッド","Fenster":"窓","Haus":"家、建物","Regal":"本棚","Telefon":"電話","Zimmer":"部屋","Bild":"絵、写真","Geld":"お金","Heft":"ノート","Papier":"紙","Wörterbuch":"辞書","Klavier":"ピアノ","Museum":"博物館", "Theater":"劇場"};
//let ALL_NOUNS = MALE_NOUNS.concat(FEMALE_NOUNS, NEUTER_NOUNS);

let COPY_MALE_NOUNS = Object.assign({}, MALE_NOUNS);
let COPY_FEMALE_NOUNS = Object.assign({}, FEMALE_NOUNS);
let COPY_NEUTER_NOUNS = Object.assign({},NEUTER_NOUNS);
Object.assign(COPY_MALE_NOUNS, COPY_FEMALE_NOUNS);
Object.assign(COPY_MALE_NOUNS, COPY_NEUTER_NOUNS);
let ALL_NOUNS = COPY_MALE_NOUNS;
let candidate = document.getElementById('candidate');
for(let key in ALL_NOUNS)
{
    let new_option = document.createElement('option');
    new_option.innerHTML = key;
    candidate.appendChild(new_option);
}

document.getElementById("send").addEventListener("click", function()
{
    if(username == "")
    {
        window.alert("会員登録をして下さい。既にアカウントを作られた方はログインしてください。");
        return;
    }

    let text = document.getElementById("text").value;
    $.get("https://script.google.com/macros/s/AKfycbwylxDJXSnr8RTkTp1RGNJ0QjLsj0Z_T92WAqQDFjJve5NrVrVorfHp1pxPZenBS2Ghaw/exec?text=" + text + "&source=de&target=ja")
    .done(function(data)
    {
        if(data.text == "Bad Request")
        {
            window.alert("不正な値が入力されました。");
            return;
        }
        //console.table("返ってきたtext: " + data.text);
        if(window.confirm("単語: \"" + text + "\"、意味：「" + data.text + "」で単語リストに追加します。よろしいですか？"))
        {
            //Google APIから返ってきた情報でそのままDBに保存
            
            let gender = getGender(text);

            makeWord(text, data.text, gender);
        }else
        {
            if(window.confirm("意味を書き換えますか？"))
            {
                let meaning = window.prompt("意味を書き換えてください");

                //Google翻訳がおかしな意味を表示した場合、正しい意味をユーザーが入力して、ユーザーが入力
                if(window.confirm("単語： \"" + text + "\"、意味：「" + meaning + "」で単語リストに追加します。よろしいですか？"))
                {
                    let gender = getGender(text);
                    makeWord(text, meaning, gender);
                }else
                {
                    return;
                }
            }else
            {
                //cancel.
                return;
            }
        }
    }).fail(function()
    {
        window.alert("通信エラーが発生しました。通信環境が良い所でもう一度お試しします。");
    });
    /*
    $.get('./upload/word/' + name + "/" + text)
    .done(function(data)
    {
        window.alert("プロフィールを変更しました。");
    }).fail(function()
    {
        window.alert("プロフィールを変更できませんでした。");
    });
    */
    
});

//ajax通信でDBに単語を追加する
function makeWord(word, meaning, gender)
{
    let wordtype = "none";
    if(gender == "male" || gender == "female" || gender == "neuter")
    {
        wordtype = "名詞";
    }
    // console.log(wordtype);
    console.log('./mywordbook/upload/word/' + username + "/" + word + "/" + wordtype + "/" + gender + "/" + meaning);
    $.get('./mywordbook/upload/word/' + username + "/" + word + "/" + wordtype + "/" + gender + "/" + meaning)
    .done(function(data)
    {
        window.alert("データを追加しました。");
        window.location.reload();
    }).fail(function()
    {
        window.alert("データを追加できませんでした。");
    });
}


/*
    追加する単語が名詞の場合、男性名詞、女性名詞、中性名詞かどうか判定する。
    どれにもあてはまらない（前置詞、動詞など）単語の場合、"none"を返す。

    @return
    男性名詞のとき -> "male"
    女性名詞のとき -> "female"
    中性名詞のとき -> "neuter"

    どれでもないとき -> "none"
*/
function getGender(word)
{
    //一文字目だけ大文字にする。
    let Word = word.charAt(0).toUpperCase() + word.slice(1);
    if(MALE_NOUNS[word] != undefined)
    {
        return "male";
    }else if(FEMALE_NOUNS[word] != undefined)
    {
        return "female";
    }else if(NEUTER_NOUNS[word] != undefined)
    {
        return "neuter";
    }else
    {
        return "none";
    }
}


function getWordInformation(id)
{
    let tr = document.getElementById("word-" + id);
    let tds = tr.childNodes;

    let i = 0;

    let Deutsch = "";
    let meaning = "";
    let gender = "";
    let plural = "";
    let other = "";
    let wordtype = "";
    tds.forEach(function (td)
    {
        if(i == 1)
        {
            //ドイツ語単語が入ってるtd

            Deutsch = td.innerHTML;
        }else if(i == 2)
        {
            //意味が入ってるtd
            meaning = td.innerHTML;
        }else if(i == 3)
        {
            //性別が入ってるtd
            let span = td.innerHTML;
            if(span.indexOf(DISPLAY_MALE) != -1)
            {
                gender = "male";
            }else if(span.indexOf(DISPLAY_FEMALE) != -1)
            {
                gender = "female";
            }else if(span.indexOf(DISPLAY_NEUTER) != -1)
            {
                gender = "neuter";
            }else
            {
                gender = "none";
            }
        }else if(i == 4)
        {
            //複数形が入ってるtd
            plural = td.innerHTML;
        }else if(i == 5)
        {
            //その他の情報が入ってるtd
            other = td.innerHTML;
        }else if(i == 6)
        {
            wordtype = td.innerHTML;
            console.log("wordtype: " + wordtype);
        }
        i++
    });
    //上のforEach分で、設定がクリックされた単語の詳細情報が分かってる。
    return {"Deutsch": Deutsch, "meaning": meaning, "gender": gender, "plural": plural, "other": other, "wordtype": wordtype};
    
}
//単語の設定を表示する
function showDialog(id)
{
    let info = getWordInformation(id);
    let Deutsch = info['Deutsch'];
    let meaning = info['meaning'];
    let gender = info['gender'];
    let plural = info['plural'];
    let other = info['other'];
    let wordtype = info['wordtype'];

    //スタイル設定。
    let div = document.getElementById("setting-dialog-" + id);
    div.style.display = "flex";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.backdropFilter = "blur(2px)";
    div.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    div.style.justifyContent = "space-around";

    let innerDiv = document.createElement("div");
    innerDiv.id = "setting-inner-" + id;
    innerDiv.style.backgroundColor = "white";

    let closeButton = document.createElement("button");
    closeButton.className = "word-fontsize";
    //closeButton.onclick = "closeDialog(" + id + ")";
    closeButton.setAttribute("onclick", "closeDialog( " + id + ")");
    closeButton.innerHTML = "閉じる";
    closeButton.style.display = "fixed";

    innerDiv.appendChild(closeButton);
    /*
        ここから、以下のようなdivタグを作りたい。
        <div style="display: flex; flex-direction: column;"> <!-- <---- これがinnerDiv -->
            <p>ドイツ語の単語(Deutsch変数)</p>
            <div style="display: flex; flex-direction: row;">
                <p>意味</p>
                <input type="text" value="もともと入ってたmeaning" placeholder="意味を入力">
            </div>
        </div>

        !!!TODO!!!
        それぞれ、編集された値を送信時に取り出せるように、それぞれにid属性を付与する。
    */
   innerDiv.style.display = "flex";
   innerDiv.style.flexDirection = "column";
   innerDiv.style.width = "80vw";
   
   //ドイツ語の単語をpタグの中に入れて、それをinnerDivの子要素として追加
   let pDeutsch = document.createElement("p");

   pDeutsch.className = "word-fontsize-bigger";
   pDeutsch.style.textAlign = "center";
   pDeutsch.innerHTML = Deutsch;
   pDeutsch.id = "deutsch-" + id;
   innerDiv.appendChild(pDeutsch);

   //ドイツ語の意味を編集するためのdivを作成し、そこにpタグとinput[type="text"]を作成。
   //それらをdivMeaningRow(作成したdivタグ)の中に入れ、divMeaningRowをinnerDivに追加


   let divMeaningRow = document.createElement("div");
   divMeaningRow.style.display = "flex";
   divMeaningRow.style.flexDirection = "row";
   divMeaningRow.style.textAlign = "center";

   let pMean = document.createElement("p");
   pMean.innerHTML = "意味";
   pMean.className = "word-fontsize"; //画面の横幅に合わせてフォントサイズを自動調整.
   pMean.style.margin = "auto";
   pMean.style.marginTop = "1rem";
   pMean.style.marginBottom = "1rem";
   pMean.style.display = "inline";
   let inputMean = document.createElement("input");
   inputMean.type = "text";
   inputMean.style.width = "50%";
   inputMean.style.display = "inline";
   inputMean.className = "word-fontsize"; //画面の横幅に合わせてフォントサイズを自動調整.
   inputMean.value = meaning;

   //ID付与。
   inputMean.id = "meaning-" + id;
   
   divMeaningRow.appendChild(pMean);
   divMeaningRow.appendChild(inputMean);

   innerDiv.appendChild(divMeaningRow);

    /*
    男性名詞、女性名詞、中性名詞、その他を選ぶことができるラジオボタンを
    divGender内に作成、その後、innerDivにdivGenderを追加
   */
   let divGender = document.createElement("div");
   divGender.style.display = "flex";
   divGender.style.flexDirection = "row";
   divGender.style.textAlign = "center";

   let radioGenderMale = document.createElement("input");
   let radioGenderFemale = document.createElement("input");
   let radioGenderNeuter = document.createElement("input");
   let radioGenderNone = document.createElement("input");

   //ID付与。
   radioGenderMale.id = "gender-male-" + id;
   radioGenderFemale.id = "gender-female-" + id;
   radioGenderNeuter.id = "gender-neuter-" + id;
   radioGenderNone.id = "gender-none-" + id;
   
   let labelGenderMale = document.createElement("label");
   let labelGenderFemale = document.createElement("label");
   let labelGenderNeuter = document.createElement("label");
   let labelGenderNone = document.createElement("label");

   labelGenderMale.style.display = "inline";
   labelGenderFemale.style.display = "inline";
   labelGenderNeuter.style.display = "inline";
   labelGenderNeuter.style.display = "inline";
   labelGenderMale.className = "word-fontsize";
   labelGenderFemale.className = "word-fontsize";
   labelGenderNeuter.className = "word-fontsize";
   labelGenderNone.className = "word-fontsize";

   labelGenderMale.innerHTML = "男性";
   labelGenderFemale.innerHTML = "女性";
   labelGenderNeuter.innerHTML = "中性";
   labelGenderNone.innerHTML = "性別なし";

   labelGenderMale.className = "word-fontsize-smaller";
   labelGenderFemale.className = "word-fontsize-smaller";
   labelGenderNeuter.className = "word-fontsize-smaller";
   labelGenderNone.className = "word-fontsize-smaller";

   radioGenderMale.type = "radio";
   radioGenderFemale.type = "radio";
   radioGenderNeuter.type = "radio";
   radioGenderNone.type = "radio";

   radioGenderMale.value = "male";
   radioGenderFemale.value = "female";
   radioGenderNeuter.value = "neuter";
   radioGenderNone.value = "none";

   radioGenderMale.name = "gender";
   radioGenderFemale.name = "gender";
   radioGenderNeuter.name = "gender";
   radioGenderNone.name = "gender";

   //デフォルトで「性別なし」にチェックがつくようにする。

   //データベースにある性別情報から、情報がある場合あらかじめチェックをつけておく。
   switch(gender)
   {
    case "male":
        radioGenderMale.checked = true;
        break;
    case "female":
        radioGenderFemale.checked = true;
        break;
    case "neuter":
        radioGenderNeuter.checked = true;
        break;
    default:
        radioGenderNone.checked = true;
        break;
   }
    divGender.appendChild(radioGenderMale);
    divGender.appendChild(labelGenderMale);
    divGender.appendChild(radioGenderFemale);
    divGender.appendChild(labelGenderFemale);
    divGender.appendChild(radioGenderNeuter);
    divGender.appendChild(labelGenderNeuter);
    divGender.appendChild(radioGenderNone);
    divGender.appendChild(labelGenderNone);

    innerDiv.appendChild(divGender);

    let divWordtype = document.createElement("div");
   divWordtype.style.display = "flex";
   divWordtype.style.flexDirection = "row";
   divWordtype.style.width = "100%";

   pWordtype = document.createElement("p");
   pWordtype.className = "word-fontsize-smaller";
   pWordtype.innerHTML = "品詞";
   pWordtype.display = "inline";

   let inputWordtype = document.createElement("input");
   inputWordtype.type = "text";
   inputWordtype.className = "word-fontsize-smaller";
   inputWordtype.value = wordtype;
   inputWordtype.style.display = "inline";

   //ID付与。
   inputWordtype.id = "wordtype-" + id;
   divWordtype.appendChild(pWordtype);
   divWordtype.appendChild(inputWordtype);

   innerDiv.appendChild(divWordtype);

    let divPlural = document.createElement("div");
    divPlural.style.display = "flex";
    divPlural.style.flexDirection = "row";
    divPlural.style.width = "100%";

    let pPlural = document.createElement("p");
    pPlural.className = "word-fontsize-smaller";
    pPlural.innerHTML = "複数形";
    pPlural.style.display = "inline";

    let inputPlural = document.createElement("input");
    inputPlural.type = "text";
    inputPlural.className = "word-fontsize-smaller";
    inputPlural.style.display = "inline";
    inputPlural.value = plural;

    //ID付与。
    inputPlural.id = "plural-" + id;

    divPlural.appendChild(pPlural);
    divPlural.appendChild(inputPlural);

    innerDiv.appendChild(divPlural);

    divOther = document.createElement("div");
    divOther.display = "flex";
    divOther.style.flexDirection = "row";

    let pOther = document.createElement("p");
    pOther.className = "word-fontsize";
    pOther.innerHTML = "備考";
    pOther.style.display = "inline";

    let inputOther = document.createElement("input");
    inputOther.type = "text";
    inputOther.value = other;
    inputOther.className = "word-fontsize";
    inputOther.style.display = "inline";

    // ID付与。
    inputOther.id = "other-" + id;

    divOther.appendChild(pOther);
    divOther.appendChild(inputOther);

    innerDiv.appendChild(divOther);

    let sendButton = document.createElement("button");
    sendButton.innerHTML = "更新";
    sendButton.className ="word-fontsize";
    sendButton.setAttribute("onclick", "updateWord(" + id + ")");
    //send.click(closeDialog(id));
    innerDiv.appendChild(sendButton);

    let aVerbFormen = document.createElement("a");
    aVerbFormen.href = "https://www.verbformen.com/conjugation/?w=" + Deutsch;
    aVerbFormen.target = "_blank";
    aVerbFormen.innerHTML = "VerbFormenで検索";

    innerDiv.appendChild(aVerbFormen);
    


    div.appendChild(innerDiv);
}

function updateWord(id)
{
    // let sendDeutsch = document.getElementById("deutsch-" + id);
    let sendMeaning = document.getElementById("meaning-" + id);
    let sendGenderMale = document.getElementById("gender-male-" + id);
    let sendGenderFemale = document.getElementById("gender-female-" + id);
    let sendGenderNeuter = document.getElementById("gender-neuter-" + id);
    let sendGenderNone = document.getElementById("gender-none-" + id);
    let sendPlural = document.getElementById("plural-" + id);
    let sendOther = document.getElementById("other-" + id);
    let sendWordtype = document.getElementById("wordtype-" + id);


    let genderCode = "none";
    let displayGender = "none"
    if(sendGenderMale.checked)
    {
        genderCode = "male";
        displayGender = DISPLAY_MALE;
    }else if(sendGenderFemale.checked)
    {
        genderCode = "female";
        displayGender = DISPLAY_FEMALE;
    }else if(sendGenderNeuter.checked)
    {
        genderCode = "neuter";
        displayGender = DISPLAY_NEUTER;
    }else if(sendGenderNone.checked)
    {
        genderCode = "none";
        displayGender = DISPLAY_NONE;
    }



    let info = {"meaning": sendMeaning.value, "gender": genderCode, "display-gender": displayGender, "plural": sendPlural.value, "other": sendOther.value, "wordtype": sendWordtype.value};

    /*
    if(sendPlural.value == "")
    {
        info['plural'] = "none";
    }
    */
    /*
        以下のような情報が入ってきている。(2023/11/19時点。)
        let Deutsch = info['Deutsch'];
        let meaning = info['meaning'];
        let gender = info['gender']; -->GenderCode(male, female, neuter, none)
        let displayGender = info['display-gender'] -> 画面表示するための性別（男性、女性、中性、なし）
        let plural = info['plural'];
        let other = info['other'];

    */
   if(window.confirm("意味：" + info['meaning'] + ", 性別：" + info['display-gender'] + ", 複数形：" + info['plural'] + ", その他：" + info['other'] + "で送信します。よろしいですか？"))
   {

    if(info['meaning'] == "")
    {
        info['meaning'] = "none";
    }
    if(info['plural'] == "")
    {
        info['plural'] = "none";
    }
    if(info['wordtype'] == "")
    {
        info['wordtype'] = "none";
    }
    console.log("gender = " + info['gender']);
    if(info['other'] == "")
    {
        info['other'] = "none";
    }
    //情報を更新。
    $.get("./mywordbook/update/word/" + username + "/" + id + "/" + info['wordtype'] + "/" + info['gender'] + "/" + info['meaning'] + "/" + info['plural'] + "/" + info['other'] )
    .done(function()
    {
        window.alert("データを更新しました。");
        window.location.reload();
    }).fail(function()
    {
        window.alert("データの更新に失敗しました。");
    });
   }
}

function closeDialog(id)
{
    let div = document.getElementById("setting-dialog-" + id);
    div.innerHTML = "";
    div.style.display = "none";
}