/*	
<li class="pre"><a href="#">上一页</a></li>
<li><a class="paging-num" href="#">1</a></li>
<li>……</li>
<li><a class="paging-num" href="#">5</a></li>
<li><a class="paging-num" href="#">6</a></li>
<li class="current"><a class="paging-num" href="#">7</a></li>
<li><a class="paging-num" href="#">8</a></li>
<li><a class="paging-num" href="#">9</a></li>
<li>……</li>
<li><a class="paging-num" href="#">20</a></li>
<li class="next"><a href="#">下一页</a></li>
 */
/**
 * 通用的组分页
 * 
 * @param locationId
 *            需要将动态产生的元素展示在这个母元素的内容
 * @param lastParams
 *            上一次请求的参数
 * @param callbackName
 *            当用户点击(onclick事件触发）分页组件链接的时候，需要执行的操作：callback =
 *            function(currentPage){}
 * @param dontDisplayNum
 *            当查询出来的条数小于等于这个数值的时候，就不展示分页组件了(默认为0）
 * @author wangye04
 */
function Pagination(locationId, lastParams, callbackName, dontDisplayNum) {
	this.locationId = locationId;
	this.callbackName = callbackName;
	this.lastParams = lastParams;
//	this.jsonParseFunc = JSON.stringify;
	this.dontDisplayNum = !dontDisplayNum ? 0 : dontDisplayNum;// 在多少数据的时候，不需要再展示了

	/**
	 * 自动展示分页数据，同时生成一个隐藏的表单
	 */
	this.after = function() {
		var arn = $('#allRecordNum');
		var allRecordNum = (arn.length > 0 ? parseInt(arn.val()) : 0);
		if (!allRecordNum || allRecordNum <= this.dontDisplayNum) { // 如果个数小于等于这个数值的时候，就不展示列表，直接展示详情
			this.fillElementContent("");
			return;
		}
		var pageSize = parseInt($('#pageSize').val());
		var currentPage = parseInt($('#currentPage').val());
		this.mydisplay(allRecordNum, pageSize, currentPage);
	};
	/**
	 * @param params
	 * @param nowParams
	 */
	this.before = function(params, nowParams) {
		var cp = params.currentPage;
		if (!nowParams && !this.lastParams) {
		} else if (!nowParams || !this.lastParams) {
			cp = 1;
		} else {
			delete this.lastParams['currentPage'];
			delete this.lastParams['orderBy'];
			delete this.lastParams['isAsc'];
			if(this.jsonParseFunc(this.lastParams) != this.jsonParseFunc(nowParams)){
				cp = 1;
			}
		}
		nowParams['currentPage'] = cp;
		nowParams['orderBy'] = params.orderBy;
		nowParams['isAsc'] = params.isAsc;
		this.lastParams = nowParams;
	};

	/**
	 * 将对象（这里只针对map类型且无嵌套的对象）转化成一个字符串，用来简单替换window.JSON.stringify()方法，因为在ie下没有这个方法
	 * @param params 对象
	 * @returns 返回json字符串；如果对象是null，则返回null
	 */
	this.jsonParseFunc = function(params){
		if(!params){
			return null;
		}
		var s = '{';
		var first = true;
		for(var key in params){
			if(!first){
				s+=',';
			}
			first = false;
			s += key + ':';
			var val = params[key];
			if(typeof val == 'function'){
				continue;
			}
			if(val == null){
				s+='null';
			}else{
				s+='\"'+encodeURIComponent(val)+'\"';
			}
		}
		s+='}';
		return s;
	};
	
	/**
	 * 执行
	 * 
	 * @param allRecordNum
	 * @param pageSize
	 * @param currentPage
	 */
	this.mydisplay = function(allRecordNum, pageSize, currentPage) {
		var allPageNum = this.validateAndGetAllPageNums(allRecordNum, pageSize, currentPage);
		if (allPageNum == 0) {
			this.fillElementContent("");
			return;
		}
		var content = this.autoCalculate(allPageNum, currentPage, allRecordNum);
		this.fillElementContent(content);
	};

	/**
	 * 动态计算新产生的分页模块内容
	 * 
	 * @param allPageNum
	 * @param currentPage
	 * @param allRecordNum
	 * @returns 返回计算后得到的结果
	 */
	this.autoCalculate = function(allPageNum, currentPage, allRecordNum) {
		var pre = this.getPreLink(allPageNum, currentPage);
		var nex = this.getNextLink(allPageNum, currentPage);
		var midArray = this.getMiddleArray(allPageNum, currentPage);
		var mid = this.getMidLink(allPageNum, currentPage, midArray);
		var hint = this.getPageHint(allPageNum, allRecordNum);
		return pre + mid + nex + hint;
	};

	/**
	 * 生成最后的提示文案：共 113 条记录	// 生成最后的提示文案：共 12 页 113 条记录
	 * @param allPageNum
	 * @param allRecordNum
	 * @returns 提示文案
	 */
	this.getPageHint = function(allPageNum, allRecordNum) {
		return '共 <b>' + allRecordNum + '</b> 条记录';
	};
	/**
	 * 获取中间部分的内容
	 * 
	 * @param allPageNum
	 * @param currentPage
	 * @param midArray
	 * @returns {String}
	 */
	this.getMidLink = function(allPageNum, currentPage, midArray) {
		var str = "";
		if (midArray[0] > 1) {
			str += this.getLink(1, null, 'paging-num', 1);
		}
		if (midArray[0] > 2) {
			str += '<li style="width:20px;">...</li>';
		}
		for ( var i = 0; i < midArray.length; i++) {
			if (midArray[i] == currentPage) {
				str += this.getLink(midArray[i], 'current', 'paging-num', midArray[i] + '');
			} else {
				str += this.getLink(midArray[i], null, 'paging-num', midArray[i] + '');
			}
		}
		if (midArray[midArray.length - 1] < allPageNum - 1) {
			str += '<li style="width:20px;">...</li>';
		}
		if (midArray[midArray.length - 1] < allPageNum) {
			str += this.getLink(allPageNum, null, 'paging-num', allPageNum + '');
		}
		return str;
	};

	/**
	 * @param allPageNum
	 * @param currentPage
	 * @returns 返回两侧的数据
	 */
	this.getMiddleArray = function(allPageNum, currentPage) {
		var arr = [];
		arr.push(currentPage);
		var pre = currentPage - 1;
		var nex = currentPage + 1;
		var midSize = 3;
		while (arr.length < midSize && (pre >= 1 || nex <= allPageNum)) {
			if (pre >= 1) {
				arr.push(pre--);
				if (arr.length == midSize) {
					break;
				}
			}
			if (nex <= allPageNum) {
				arr.push(nex++);
				if (arr.length == midSize) {
					break;
				}
			}
		}
		return arr.sort(function(a, b) {
			return a - b;
		});
	};
	/**
	 * 拼接每个元素
	 * 
	 * @param currentPage
	 * @param liclass
	 * @param aclass
	 * @param display
	 * @returns {String}
	 */
	this.getLink = function(currentPage, liclass, aclass, display) {
		var str = '';
		if (liclass != null) {
			str += '<li class="' + liclass + '">';
		} else {
			str += '<li>';
		}
		var onclick = '';
		if (currentPage != -1 && liclass != 'current') {
			var o = this.lastParams;
			var params = {
				currentPage : currentPage,
				orderBy : o.orderBy,
				isAsc : o.isAsc
			};
			onclick = ' onclick=\'' + callbackName + '(' + this.jsonParseFunc(params) + ');\'';
		}
		var ac = '';
		if (aclass != null) {
			ac = ' class="' + aclass + '"';
		}
		//计算宽度
		var widthstyle = '';
		var wd = Math.floor(currentPage / 1000);
		if(wd > 0){ // wd == 0 采取默认情况
			wd = Math.floor(wd / 10);
			if(wd == 0){
				widthstyle = 'style="width:33px;"';
			}
			else{
				widthstyle = 'style="width:38px;"';
			}
		}
		str += '<a '+widthstyle+' href="javascript:void(0)" ' + onclick + ' ' + ac + '>' + display + '</a></li>';
		return str;
	};
	/**
	 * 生成“上一页”的代码
	 * 
	 * @param allPageNum
	 * @param currentPage
	 * @returns {String}
	 */
	this.getPreLink = function(allPageNum, currentPage) {
		return this.getLink(currentPage - 1 < 1 ? -1 : currentPage - 1, 'pre', null, '上一页');
	};
	/**
	 * 生成“下一页”的代码
	 * 
	 * @param allPageNum
	 * @param currentPage
	 * @returns {String}
	 */
	this.getNextLink = function(allPageNum, currentPage) {
		return this.getLink(currentPage + 1 > allPageNum ? -1 : currentPage + 1, 'next', null, '下一页');
	};

	/**
	 * 校验数据是否正确
	 * 
	 * @param allRecordNum
	 * @param pageSize
	 * @param currentPage
	 * @returns 总的页面数
	 */
	this.validateAndGetAllPageNums = function(allRecordNum, pageSize, currentPage) {
		// if (!allRecordNum || allRecordNum < 0) {
		// throw new "allRecordNum[" + allRecordNum + "] isn't valid!";
		// }
		// if (!pageSize || pageSize <= 0) {
		// throw new "pageSize[" + pageSize + "] isn't valid!";
		// }
		// if (!currentPage || currentPage < 1) {
		// throw new "currentPage[" + currentPage + "] isn't valid!";
		// }
		var allPageNum = (allRecordNum + pageSize - 1) / pageSize;
		allPageNum = Math.floor(allPageNum);
		// if (allPageNum != 0 && currentPage > allPageNum) { //
		// 可能存在allPageNum==0&&currentPage==1
		// throw new "currentPage[" + currentPage + "] isn't between 1 and " +
		// allPageNum + "]!";
		// }
		return allPageNum;
	};

	/**
	 * @param content
	 *            填充内容
	 */
	this.fillElementContent = function(content) {
		var parent = $("#" + this.locationId);
		if (parent.length == 0) {
			// throw new "can't find parent element by id[" + this.locationId +
			// "]!";
			return;
		}
		parent.html(content);
	};
};
