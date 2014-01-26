// DED.util.substitute()函数的使用例子
var substitutionObject = {
  name: "world",
  place: "Google"
};
var text = 'Hello {name}, welcome to {place}';
var replacedText = DED.util.substitute(text, substitutionObject);
console.log(replacedText); 
// produces "Hello world, welcome to Google"

// 原来fooMail的API中getMail的使用方式
fooMail.getMail(function(text) {
  $('message-pane').innerHTML = text;
});

// 为dedMail添加适配器，使其调用方式和fooMail的一样
var dedMailtoFooMailAdapter = {};
dedMailtoFooMailAdapter.getMail = function(id, callback) {
  dedMail.getMail(id, function(resp) {
    var resp = eval('('+resp+')');
    var details =  '<p><strong>From:</strong> {from}<br>';
    details += '<strong>Sent:</strong> {date}</p>';
    details += '<p><strong>Message:</strong><br>';
    details += '{message}</p>';
    callback(DED.util.substitute(details, resp));
  });
};
// Other methods needed to adapt dedMail to the fooMail interface.
...

// Assign the adapter to the fooMail variable.
// 把适配器赋给fooMail变量，这样就不用修改客户端的其他代码了
fooMail = dedMailtoFooMailAdapter;
