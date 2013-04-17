package org.wangye.crystal.commons.dao;

import java.util.List;

import org.wangye.crystal.commons.model.entity.Author;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Oct 31, 2012 4:50:53 PM
 */
public interface AuthorDao {

	// @Select("SELECT * FROM author WHERE name = #{name}")
	// Author getByName(@Param("name") String name);
	List<Author> getByName(String name);

	// @SelectProvider(method = "", type = Author.class)
	Author getById(int id);
}
