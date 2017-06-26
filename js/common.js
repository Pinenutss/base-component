$(function(){
//判断设备显示字体
    if(judge.platform() == "ios"){
		var str = "<style> body{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif!important;}</style>";
		$('head').append(str);
	}
	if(judge.platform()=="android"){
		var str = "<style>body{ font-family: 'RobotoRegular', 'Droid Sans', sans-serif!important;}</style>";
		$('head').append(str);
	}

   //新闻切换
    // $('.tab_Bar .tab_Trigger').click(function()
    //     {
    //     	var index=$(this).index();
    //         $(this).addClass("active").siblings().removeClass("active");
    //         $('.tab_Content').hide();
    //         $('.tab_Content').eq(index).show();
    //     });

    // 提交disabled
    $(".feedback-button").click(function(){
        $('input, select, button,textarea').prop('disabled',true);
    })

})

$(function(){

  Function.prototype.addMethod = function(name,fn){
      this[name] = fn;
      return this;
  }

  var methods = function(){};

  methods.addMethod('tab_func',function(ele_f,ele_c,ele_content){
    $(ele_f).on('click',ele_c,function(){
      var index=$(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $(ele_content).hide();
      $(ele_content).eq(index).show();
    });
    return this;
  }).addMethod('Alt',function(sss){
    alert(sss);
    return this;
  })

  methods.tab_func('.tab_Bar','.tab_Trigger').Alt('很高兴见到你~');

})
//弹窗控件
/*
打开弹窗 dialog.open(params)
params.t  : 弹窗标题(留空)
params.c  : 弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
params.lb : 左按钮文字，事件绑定#js_dialog_func(留空)，需要事件代理
params.rb : 右按钮文字，默认关闭弹窗

关闭弹窗 dialog.close()
*/
var dialog = {
    'open':function(t,c,lb,rb){
        var t = t || undefined,
            lb = lb || undefined,
            c = c || '窗口内容',
            rb = rb || '确定';
        var dialogStr = '<div id="js_dialog">';
            dialogStr += '<div class="ui-mask"></div>';
            dialogStr += '<div class="ui-dialog">';
        if(t !== undefined){
            dialogStr += '<div class="ui-dialog__hd"><strong class="ui-dialog__title">'+t+'</strong></div>';
        }else{}
        dialogStr += '<div class="ui-dialog__bd">'+c+'</div>';
            dialogStr += '<div class="ui-dialog__ft">';
            if(lb !== undefined){
                dialogStr += '<a href="javascript:;" id="js_dialog_func" class="ui-dialog__btn">'+lb+'</a>';
            }
            dialogStr += '<a href="javascript:;" class="ui-dialog__btn primary" onclick="dialog.close()">'+rb+'</a>';

        dialogStr += '</div></div></div>';
        $('body').append(dialogStr);
        $('#js_dialog').show();
        return this;
    },
    'close':function(){
       $('#js_dialog').remove();
    }
}

// /点击倒计时/ //
var validCode = true;
$("#verification_code").click(function() {

    var time = 60;
    var code = $(this);
    if (validCode) {
        validCode = false;
        code.attr("disabled", true);

        var t = setInterval(function() {
            time--;
            code.html(time + "秒");
            if (time == 0) {
                clearInterval(t);
                code.html("重新获取");
                validCode = true;
                code.removeAttr("disabled");
            };
        }, 1000);
    }
});
// 获取 url 参数

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
