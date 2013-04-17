package org.wangye.crystal.commons.service.defaults;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.wangye.crystal.commons.dao.BookDao;
import org.wangye.crystal.commons.model.entity.Book;
import org.wangye.crystal.commons.service.BookService;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 29, 2012 5:15:32 PM
 */
@Service
@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, timeout = -1, rollbackFor = {RuntimeException.class})
public class DefaultBookService implements BookService {

	@Autowired
	private BookDao bookDao;

	public void init() {
		System.out.println("xxx");
	}

	@Override
	public boolean canFind(String name, String path) {
		return bookDao.canFind(path);
	}

	@Override
	public List<Book> listBooksByPath(String path) {
		return bookDao.listBooksByPath(path);
	}

	@Override
	public void update(String name, String path) {
		if(canFind(name, path)){
			List<Book> books = findByName(name);
			for(Book b : books){
				bookDao.update(b);
			}
		}
	}

	@Override
	public void createNewOne(String name, String path) {
	}

	@Override
	public List<Book> findByName(String name) {
		return bookDao.findByName(name);
	}

}
