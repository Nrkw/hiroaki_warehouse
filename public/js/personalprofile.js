function sendintro(name)
{
    let text = document.getElementById("intro").value;
    $.get('./upload/introduction/' + name + "/" + text)
    .done(function(data)
    {
        window.alert("プロフィールを変更しました。");
    }).fail(function()
    {
        window.alert("プロフィールを変更できませんでした。");
    });
}

function sendemail(name)
{
    let address = document.getElementById("email").value;
    if(!address.match(/.+@.+\..+/))
    {
        window.alert("正しいメールアドレスを入力してください。");
        return;
    }
    $.get('./upload/email/' + name + "/" + address)
    .done(function()
    {
        window.alert("メールアドレスを変更しました。");
    }).fail(function()
    {
        window.alert("メールアドレスを変更できませんでした。");
    });
}