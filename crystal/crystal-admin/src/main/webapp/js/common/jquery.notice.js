/**
 * 操作页面上的topmsg信息
 * @author wangye04
 */
;(function ($) {
    
	/**
	 * 移除掉页面上的notice控件
	 */
	$.fn.removeNotice = function(){
		var t = $('#notice');
		if(t.length ==0){
			return;
		}
		t.toggle(1000, function() {
			$('#notice').remove();
		});
	};
	
	$.fn.clearNotice = function(){
		var t = $('#notice');
		if(t.length ==0){
			return;
		}
		t.toggle(1000, function() {
			$('#notice').html('');
		});
	};
	
	/**
	 * @param timeout
	 */
	$.fn.autoRemoveNotice = function(timeout){
		setTimeout($.fn.removeNotice,timeout);
	};
})(jQuery);
