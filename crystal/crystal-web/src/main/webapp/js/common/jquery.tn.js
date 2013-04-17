/**
 * @fileOverview
 * the script for Offer
 * @author hi:lovexctk <zhangwei11@baidu.com>
 * @version 2012-6-6
 */

/**
 *@param $
 */
;(function ($) {
	$.fn.encodeHtml = function(str){  
		var div = document.createElement("div");
		div.appendChild(document.createTextNode(str));
		return div.innerHTML;
	}   

	$.fn.decodeHtml = function(str){   
		var div = document.createElement("div");
		div.innerHTML = str;
		return div.innerHTML;
	}   
    
     /**
     *@fileOverview 选择是否分成的“是”选项时，显示提示框
     *@example 
        $(".radioClass").profitSharingTip()
       @returns 分成
     */
    $.fn.profitSharingTip = function(){
        var $this = $(this);   
        var $divideTip = $("<span class='tip'>需要分成请登录<a href='http://union.baidu.com' target='_blank'>联盟系统</a>（union.baidu.com）申请。</span>");
        $(".iform_activity td:eq(2)").append($divideTip);
        
        return this.each(function (){
            $this.each(function(){
                if($(this).val()=="1"){
                    $divideTip.show();
                }else if($(this).val()=="0"){
                    $divideTip.hide();
                }
                $(this).change(function(){
                    if($(this).val()=="1"){
                        $divideTip.show();
                    }else if($(this).val()=="0"){
                        $divideTip.hide();
                    }                
                });
            });
        });     
    };
     
     
     

    /**
     *@fileOverview 表单必填项验证
     *@example 
        $(".required").validate()
     */
    $.fn.validate = function(){

        $this = $(this);
        
        return this.each(function (){     
            $this.each(function(){
                var $warn = $('<div class="warn">请填写"'+$(this).attr("data")+'"栏</div>');                     
                $("#applyForm").append($warn);  
                $(this).blur(function(){
                    if($(this).val()=="" || $(this).val()==this.defaultValue){
                        $warn.show();
                        if($(this).is("textarea")){
                            $(this).addClass("warn-input");
                        }
                        if($(this).is("input:text")){
                            $(this).parent().parent().addClass("warn-input");
                        }
                    }                     

                });
                $(this).focus(function(){
                    $warn.hide();
                    if($(this).is("textarea")){
                        $(this).removeClass("warn-input");
                    }
                    if($(this).is("input")){
                        $(this).parent().parent().removeClass("warn-input");
                    }                   
                });
            });            
        });
        
    };
    

    /**
     *@fileOverview 页尾始终固定在浏览器底部。仅当页面内容超出浏览器窗口高度时，页尾显示在内容下方。
     *@example 
        $("#footer").footerLocate()
     */
    $.fn.footerLocate = function(){
        var timer;
        
        return this.each(function (){
            var $this = $(this);
            var pos = function(){
                //有滚动条
                if($(window).height() < $(document).height()){     
                    $this.removeClass("footer");
                }else{
                    $this.addClass("footer");
                }
            }
            pos();
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function (){
                $(window).resize(function(){
                    pos();
                });
            },2000);
        });
        
    };
    


    /**
     *@fileOverview 点击箭头翻转
     *@example 
        $("#arrowLink").overturn()
     */
    $.fn.overturn = function(sortFunc){
        
        return this.each(function (){          
            $(this).click(function(){
            	if($(this).children().hasClass("arrow-up")) {
            		$(this).children().removeClass("arrow-up");
                    var field = $(this).children().attr("data-field");
                    sortFunc({orderBy:field, isAsc:false, currentPage:1});
            	} else {
            		$(this).children().addClass("arrow-up").addClass("arrow");
            		var field = $(this).children().attr("data-field");
            		sortFunc({orderBy:field, isAsc:true, currentPage:1});
            	}
                
            });                      
        });
        
    };
        


    /**
     *@fileOverview 提示
     *@example 
        $("#tipBox").tips()
     */
    $.fn.tips = function(ops){
        
        var $this = $(this);   
        
        return this.each(function (){          
            $this.each(function(){
                var $tip = $("<div class='jqtip' style='display:none;'><span class='jqtip-top'></span><div class='jqtip-cont'>"+$(this).attr("data")+"</div><span class='jqtip-bottom'></span></div>");
                $(this).hover(function(){               
                    $("body").append($tip);
                    $tip.css({
                        "top": $(this).offset().top,
                        "left": $(this).offset().left
                    })
                    $tip.fadeIn();
                },function(){
                    $tip.remove();
                });            
            });                                 
        });
        
    };
    

    /**
     *@fileOverview 鼠标滑过时按钮变色
     *@example 
        $("#buttonBox").btnHover({
            
        })
     */
    $.fn.btnHover = function(){
        var $this = $(this);
        
        return this.each(function (){
            
            $this.hover(function(){
                //$(this).addClass("submit-outer-on");
                //$(this).children().addClass("submit-inner-on");
                $(this).addClass("btn-query-on");
            },function(){
                //$(this).removeClass("submit-outer-on");
                //$(this).children().removeClass("submit-inner-on");
                $(this).removeClass("btn-query-on");
            });
            
        });
    }; 

    /**
     *@fileOverview 点击表单详情后展开表格
     *@example 
        $("#detailLink").detail({
            
        })
     */
    $.fn.detail = function(){
        var curIndex = 0;
        return this.each(function (){
            $(this).click(function(){
                var $li = $(this).parent().parent().parent("li");
                var $table = $(this).parent().parent().next();
                var $lis = $(this).parent().parent().parent().parent().find("li");
                
                if(curIndex != 0){
                   $lis.eq(curIndex).removeClass("tr-current");
                   $lis.eq(curIndex).find("div[class='result-tb-content']").hide();
                }
                
                $li.addClass("tr-current");
                $table.show();
                curIndex = $li.index();
            });
        });
    }; 
    
     /**
     *@fileOverview 点击表单详情后展开表格
     *@example 
        $("#detailLink").detailForQuery({
            
        })
        @returns 
     */
    $.fn.detailForQuery = function(){
        var curIndex = 0;
        var lastTitle = "";
        return this.each(function (){
            $(this).click(function(){
                var $li = $(this).parent().parent("li");
                var $table = $(this).parent().next();
                var $lis = $(this).parent().parent().parent().find("li");
                var $tables = $(this).parent().parent().parent().find("table");
                
                var myself = false;
                if($li.hasClass('tr-current')){
                	myself = true;
                }
                if(curIndex != 0){
                	var ahref = $lis.eq(curIndex).children().last().prev().children();
                	ahref.text(lastTitle);
                	$lis.eq(curIndex).removeClass("tr-current");
                	$tables.eq(curIndex-1).hide();
                }
                if(myself){
                	curIndex = 0;
                	lastTitle = "";
                	return;
                }
                var ahref = $($li.children()).last().prev().children();
                lastTitle = ahref.text();
                ahref.text('收起详情');
                $table.show();
                $li.addClass("tr-current");
                curIndex = $li.index();
            });
        });
    }; 
    
    
    /**
     *@fileOverview 点击单选按钮后禁用整个表单
     *@example 
        $("#radioBtn").disable({
            "applyFormId":"",
            "tipId",""
        })
     */
    $.fn.disable = function(ops){
        var defaults = {
            "applyFormId":"",
            "tipId":""
        };
        var op = $.extend(defaults, ops);
        var $this = $(this); 
        var tipId = op.tipId;
        var href = $("#tmplView").attr("href");
        return this.each(function (){
            $this.each(function(){
            	 if($(this+":checked").val()==1){
                	clearMenus();
                    $(".iform_activity").find("input,textarea").not($(":radio[name=needProfitSharing]")).attr("disabled","disabled").addClass("gray");
                    $(".iform_activity").parent().parent().next().find("input").attr("disabled","disabled").addClass("gray");
                    $("#applyBtn").find("input").attr("disabled","disabled");
                    $("#applyPrecessName").attr("disabled","disabled");
                    $(".dropdown-toggle").removeAttr("data-toggle").parent().parent().addClass("disabled");
                    // $("#tmplView").attr("href","#").addClass("disabled");
                    $(".template-wrapper").addClass("template-wrapper-disabled");
                    $(".flow-wrapper").addClass("flow-wrapper-disabled");
                    $(".submit-outer").addClass("submit-outer-disabled");
                    $("#applyBtn").unbind("mouseenter mouseleave");
                    $("#"+tipId).show();
                    $(".warn").hide();
                }else{
                	clearMenus();
                    $(".iform_activity").find("input,textarea").removeAttr("disabled").removeClass("gray");
                    $(".iform_activity").parent().parent().next().find("input").removeAttr("disabled").removeClass("gray");
                    $("#applyBtn").find("input").removeAttr("disabled");
                    $("#applyPrecessName").removeAttr("disabled");
                    $(".dropdown-toggle").attr("data-toggle","dropdown").parent().parent().removeClass("disabled");
                  //  $("#tmplView").attr("href",href).removeClass("disabled");
                    $(".template-wrapper").removeClass("template-wrapper-disabled");
                    $(".flow-wrapper").removeClass("flow-wrapper-disabled");
                    $(".submit-outer").removeClass("submit-outer-disabled");
                    $("#applyBtn").btnHover();
                    $("#"+tipId).hide();    
                    
                }
                $(this).change(function(){
                	clearMenus();
                    if($(this).val()==1){
                        $(".iform_activity").find("input,textarea").not($(":radio[name=needProfitSharing]")).attr("disabled","disabled").addClass("gray");
                        $(".iform_activity").parent().parent().next().find("input").attr("disabled","disabled").addClass("gray");
                        $("#applyBtn").find("input").attr("disabled","disabled");
                        $("#applyPrecessName").attr("disabled","disabled");
                        $(".dropdown-toggle").removeAttr("data-toggle").parent().parent().addClass("disabled");
                       // $("#tmplView").attr("href","#").addClass("disabled");
                        $(".template-wrapper").addClass("template-wrapper-disabled");
                        $(".flow-wrapper").addClass("flow-wrapper-disabled");
                        $(".submit-outer").addClass("submit-outer-disabled");
                        $("#applyBtn").unbind("mouseenter mouseleave");
                        $("#"+tipId).show();
                        $(".warn").hide();
                    }else{
                        $(".iform_activity").find("input,textarea").removeAttr("disabled").removeClass("gray");
                        $(".iform_activity").parent().parent().next().find("input").removeAttr("disabled").removeClass("gray");
                        $("#applyBtn").find("input").removeAttr("disabled");
                        $("#applyPrecessName").removeAttr("disabled");
                        $(".dropdown-toggle").attr("data-toggle","dropdown").parent().parent().removeClass("disabled");
                        //$("#tmplView").attr("href",href).removeClass("disabled");
                        $(".template-wrapper").removeClass("template-wrapper-disabled");
                        $(".flow-wrapper").removeClass("flow-wrapper-disabled");
                        $(".submit-outer").removeClass("submit-outer-disabled");
                        $("#applyBtn").btnHover();
                        $("#"+tipId).hide();
                    }
                });
            });
        });                 
    }; 
    

    /**
     *@fileOverview 文本框选中时清除默认值
     *@example 
        $("#inputBox").clearDefault({
            "inputClass": 
        })
     */
    $.fn.clearDefault = function(ops){
        var defaults = {
        
        };
        var op = $.extend(defaults, ops);
        var $this = $(this);

        return this.each(function (){
            $this.each(function(){
                $(this).focus(function(){
                    var txt_value = $(this).val();
                    if(txt_value==this.defaultValue){
                        $(this).val("").addClass("input-txt");
                    }
                });
                $(this).blur(function(){
                    var txt_value = $(this).val();
                    if(txt_value==""){
                        $(this).val(this.defaultValue).removeClass("input-txt");
                    }
                });
            });
        });                 
    }; 
    
    
    
    /**
     *@fileOverview 点击“更多查询条件时”出现高级查询表单
     *@example 
        $("#moreLink").more({
            "simpleId":,
            "advancedId"
        })
     */
    $.fn.more = function(ops){
        var defaults = {
            "simpleId":"",
            "advancedId":""
        };
        var op = $.extend(defaults, ops);
        var $this = $(this);
        var simpleId = op.simpleId;
        var advancedId = op.advancedId;

        return this.each(function (){
            $this.click(function(){
                $("#"+simpleId).attr("style","display:none;");
                $("#"+advancedId).attr("style","display:block;");
            });
        });                 
    }; 
    
    
    /**
     *@fileOverview 分页链接选中时背景颜色变化
     *@example 
        $("#pagingLink").paging({
        })
     */
    $.fn.paging = function(){
        var $this = $(this);
        return this.each(function (){
            $this.each(function(){
                $(this).click(function(){
                    $(this).parent().siblings().removeClass("current");
                    $(this).parent().addClass("current");
                });
            });
        });                 
    }; 



    /**
     * @fileOverview 文字截断
     * @param {String} 要被截的文字
     * @param {number} 字节数
     * @example 
        $.subStr("文字",10);
     */
    $.subStr = function(str, length){
        str = str || "";
        var len = length*2;
        if(str.length*2 <= len) {
            return str;
        }
        var strlen = 0;
        var s = "";
        for(var i = 0;i < str.length; i++) {
            s = s + str.charAt(i);
            // 汉字
            if (str.charCodeAt(i) > 128) {
                strlen = strlen + 2;
                if(strlen >= len){
                    return s.substring(0,s.length-1) + "...";
                }
            } else {
                strlen = strlen + 1;
                if(strlen >= len){
                    return s.substring(0,s.length-2) + "...";
                }
            }
        }
        return s;
    };
    
    
    /**
     * @fileOverview 页面渲染
     * @param {Object} [ops] options页面渲染选项参数
     * @config {String} [tpl] 要渲染的模板
     * @config {String} [dataUrl] 获取数据，发送请求的URL地址
     * @config {String} [sendData] 请求时，发送的数据
     * @config {String} [type] 请求发送的类型。默认为GET
     * @config {Boolean} [container] 目标容器（渲染到哪）
     * @config {Function} [callback] 回调函数，渲染完毕后执行
     * @example 
        $("#box").render({
            "tpl": config.tmplArr["list"],
            "dataUrl": config.urls["list"]
        });
     */
    $.fn.render = function(ops){
        var defaults = {
            "tpl":"",
            "dataUrl":"",   
            "sendData":{},
            "type": "get",
            "container":"",
            "callback": function (){}
        };
        var op = $.extend(defaults, ops),
            self = op.container || this;
            self.addClass("loading");
            self.empty();
        
        $.ajax({
            url: op.dataUrl,
            type: op.type,
            data: op.sendData,
            dataType: "json",
            success: function(data){
                data.urlParamObj = op.sendData;
                self.hasClass("xhrError") && self.removeClass("xhrError");
                
                setTimeout(function(){
                    
                    var options = {
                        //subStr template feild   
                        subStr: $.subStr
                    };
                    
                    self.removeClass("loading");
                    
                    self.empty();
                    
                    // 错误判断
                    if (data.resultCode != 0){
                        self.addClass("xhrError").html(data.resultMsg);
                    } else {
                        $.tmpl(op.tpl, data.result, options).appendTo( self );
                        op.callback && op.callback.call(self, data);
                    }
                    
                }, 500);
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                self.addClass("xhrError").html( textStatus);
            }
        });
    };
    
    
    /**
     *@fileOverview 消息提示
     *@example 
        $("#msgBox").alert()
     */
    $.fn.alert = function(cont, type){
        var $this = $(this);
        var type = type || "success";
        
        
        return this.each(function (){
            var $close = $("<span class='close'>×</span>");
            
            $this.html(cont);
            $close.appendTo($this)
            $this.addClass(type);
            $this.fadeIn();
            
            $close.click(function (){
                $this.html("");
				
                $this.fadeOut();
            });
            
        });
    }
    
    
    /**
     * @fileOverview 下拉菜单
     * @param {String} [element] element需要文字提示的元素
     * @param {Object} [options] options文字提示选项参数
     * @example 
        $("#element").dropdown();
     */
    var toggle = '[data-toggle="dropdown"]', 
        Dropdown = function (element) {
            var $el = $(element).delegate(this.toggle, 'click.dropdown.data-api');
            
            $('html').live('click.dropdown.data-api', function () {
                $el.parent().removeClass('open');
            });
      }

    Dropdown.prototype = {
    constructor: 
        Dropdown,
        toggle: function (e) {
            var $this = $(this),
                $parent,
                selector,
                isActive;

            if ($this.is('.disabled, :disabled')) {
                return;
            };

            selector = $this.attr('data-target');

            if (!selector) {
                selector = $this.attr('href');
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
            };

            $parent = $(selector);
            $parent.length || ($parent = $this.parent());

            isActive = $parent.hasClass('open');

            var _this = $(this);
            $parent.delegate("li>a", "click", function(e){
                e.preventDefault();

                dropdownCallbackFn(this);
                
                if($(this).find(".title").length > 0) {
                    _this.find("span").html($(this).find(".title").text());
                } else {
                    _this.find("span").html($(this).text());
                }

                $("#categoryName").val($(this).attr("data-type"));
            });

            clearMenus();

            if (!isActive) {
                $parent.toggleClass('open');
            }
            
            return false;
            
        }
    }

    function clearMenus() {
        $(toggle).parent().removeClass('open');
    }


    /* DROPDOWN PLUGIN DEFINITION
    * ========================== */

    $.fn.dropdown = function (option) {
        return this.each(function () {
            var $this = $(this), 
                data = $this.data('dropdown');
            if (!data) {
                $this.data('dropdown', (data = new Dropdown(this)));
            }
            if (typeof option == 'string') {
                data[option].call($this);
            }
        })
    }

    $.fn.dropdown.Constructor = Dropdown;


    /* APPLY TO STANDARD DROPDOWN ELEMENTS
    * =================================== */

    $(function () {
        $('html').live('click.dropdown.data-api', clearMenus)
        $('body')
            .delegate('.dropdown form', 'click.dropdown', function (e) { e.stopPropagation() })
            .delegate(toggle, 'click.dropdown.data-api', Dropdown.prototype.toggle)
    })
    
})(jQuery);