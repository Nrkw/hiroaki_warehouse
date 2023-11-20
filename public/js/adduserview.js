let isNickname_okay = false;

let nickname = document.getElementById("nickname");
console.log("HELLO");


nickname.addEventListener("input", function()
{
    //ここにAjax使ってユーザー名かぶってないか調べる

    let isokay = document.getElementById('isokay');

    isokay.innerHTML = "Okです。";
    isNickname_okay = true;
});

let first_password = document.getElementById("pass-first");
let second_password = document.getElementById("pass-second");

second_password.addEventListener("input", function()
{
    let check_pass = document.getElementById("check-pass");

    if(first_password.value === "")
    {
        check_pass.innerHTML = "パスワードを入力してください。";
        return;
    }

    if(first_password.value == second_password.value)
    {
        check_pass.innerHTML = "パスワードが一致しています。";
    }else
    {
        check_pass.innerHTML = "一度目に入力したパスワードと異なっています。";
    }
});

function check()
{
    let email = document.getElementById("email");
    //パスワードが未入力の場合、問答無用でreturn false
    if(first_password.value === "")
    {
        window.alert("パスワードを入力してください");
        return false;
    }
    if(!isNickname_okay)
    {
        window.alert("ニックネームを入力してください。");
        return false;
    }
    if(email.value === "")
    {
        window.alert("メールアドレスを入力してください。");
        return false;
    }
    if(first_password.value == second_password.value)
    {
        //もし入力されたパスワードが
        if(first_password.value.length < 8)
        {
            window.alert("パスワードは8文字以上にしてください。");
            return false;
        }else
        {
            //8文字以上のパスワードが入力されていたら、正しいメールアドレスか判定
            if (!email.value.match(/.+@.+\..+/))
            {
                window.alert('正しいメールアドレスを入力してください。'); 
                return false;
            }
            //ただしいメールアドレスなら、return true
            return true;
        }
    }else
    {
        window.alert("入力されたパスワード一度目と二度目で異なっています。")
        return false;
    }
}