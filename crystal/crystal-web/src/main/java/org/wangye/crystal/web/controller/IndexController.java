package org.wangye.crystal.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Mar 10, 2013 12:49:21 PM
 */
@Controller
public class IndexController {

	@RequestMapping("/")
	@ResponseBody
	public Object index() {
		return "ok";
	}
}
