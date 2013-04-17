package org.wangye.crystal.commons.service.defaults;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.wangye.crystal.commons.dao.AuthorDao;
import org.wangye.crystal.commons.model.entity.Author;
import org.wangye.crystal.commons.service.AuthorService;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Nov 2, 2012 11:21:35 AM
 */
@Service
public class DefaultAuthorService implements AuthorService {

	@Autowired
	private AuthorDao authorDao;
	// @Autowired
	// @Qualifier("testList")
	// @Resource(name = "testList")
	private ArrayList<String> testList;

	// @Autowired
	// @Qualifier("testMap")
	// @Resource(name = "testMap")
	private Map<String, String> map;

	@Override
	public List<Author> findByName(String name) {
		// System.out.println("list:" + testList.size());
		// System.out.println("map:" + map.size());
		// return authorDao.getByName(name);
		return new ArrayList<Author>(0);
	}
}
