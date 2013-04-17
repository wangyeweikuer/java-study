package org.wangye.crystal.admin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.wangye.crystal.commons.model.entity.Author;
import org.wangye.crystal.commons.model.entity.Book;
import org.wangye.crystal.commons.service.AuthorService;
import org.wangye.crystal.commons.service.BookService;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 28, 2012 6:18:36 PM
 */
@Controller
@RequestMapping("/")
public class BookController {

	@Autowired
	private BookService bookService;
	@Autowired
	private AuthorService authorService;

	@RequestMapping("/author")
	@ResponseBody
	public List<Author> findByName(@RequestParam("name") String name) {
		return authorService.findByName(name);
	}

	@RequestMapping("/book")
	@ResponseBody
	public List<Book> findByBookName(@RequestParam("name") String name) {
		return bookService.findByName(name);
	}

	@RequestMapping("/list")
	@ResponseBody
	public Object listBooks(@RequestParam("path") String path, Model model) {
		List<Book> books = bookService.listBooksByPath(path);
		model.addAttribute("bookList", books);
		// throw new IllegalArgumentException("xxxx");
		// return "listBooks";
		Map<String, String> map = new HashMap<String, String>();
		map.put("aa", "aa");
		map.put("bb", "bb");
		return map;
	}

	@ResponseBody
	@ExceptionHandler
	public String handleException(Exception e) {
		return e.getMessage();
	}
}
