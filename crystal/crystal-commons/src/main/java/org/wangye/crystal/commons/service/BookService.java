package org.wangye.crystal.commons.service;

import java.util.List;

import org.wangye.crystal.commons.model.entity.Book;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 29, 2012 5:14:50 PM
 */
public interface BookService {

	/**
	 * @param name
	 * @param path
	 * @return
	 */
	boolean canFind(String name, String path);

	/**
	 * @param name
	 * @param path
	 */
	void update(String name, String path);

	/**
	 * @param name
	 * @param path
	 */
	void createNewOne(String name, String path);

	/**
	 * @param path
	 * @return
	 */
	List<Book> listBooksByPath(String path);

	/**
	 * @param name
	 * @return
	 */
	List<Book> findByName(String name);

}
