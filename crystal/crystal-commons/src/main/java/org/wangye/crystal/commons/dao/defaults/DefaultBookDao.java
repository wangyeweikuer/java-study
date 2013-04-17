package org.wangye.crystal.commons.dao.defaults;

import java.util.Arrays;
import java.util.List;

import org.wangye.crystal.commons.dao.AbstractDao;
import org.wangye.crystal.commons.dao.BookDao;
import org.wangye.crystal.commons.model.entity.Book;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 29, 2012 5:30:33 PM
 */
public class DefaultBookDao extends AbstractDao implements BookDao {

	@Override
	protected String appendPrefix(String filename) {
		return "book/" + filename;
	}

	@Override
	public boolean canFind(String path) {
		// String sql = genSql("findBook", "path", path);
		// List<Integer> ids = jdbcTemplate.queryForList(sql, Integer.class);
		// return CollectionUtils.isNotEmpty(ids);
		return false;
	}

	@Override
	public void insert(Book book) {
		insert(Arrays.asList(new Book[]{book}));
	}

	@Override
	public void insert(List<Book> bookList) {
		// String sql = genSql("insert", "bookList", bookList);
		// jdbcTemplate.update(sql);
	}

	@Override
	public List<Book> listBooksByPath(String path) {
		// String sql = genSql("listBooksByPath", "path", path);
		// RowMapper<Book> rowMapper = new BeanPropertyRowMapper<Book>(Book.class);
		// List<Book> ll = jdbcTemplate.query(sql, rowMapper);
		// return ll;
		return null;
	}

	@Override
	public List<Book> findByName(String name) {
		return null;
		// TODO
	}

	@Override
	public void update(Book b) {
		// TODO
	}
}
