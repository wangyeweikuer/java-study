package org.wangye.crystal.commons.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.wangye.crystal.commons.model.entity.Book;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 29, 2012 5:30:33 PM
 */
public interface BookDao {

	boolean canFind(String path);

	@Insert("insert into book() values ();")
	void insert(Book b);

	void insert(List<Book> bookList);

	List<Book> listBooksByPath(String path);

	@Select("select * from book where name = #{name}")
	List<Book> findByName(String name);

    void update(Book b);
}
