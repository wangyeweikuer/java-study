package org.wangye.crystal.commons.dao.defaults;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.wangye.crystal.commons.dao.AuthorDao;
import org.wangye.crystal.commons.dao.BaseDao;
import org.wangye.crystal.commons.model.entity.Author;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Nov 5, 2012 10:24:42 AM
 */
public class DefaultAuthorDao extends BaseDao implements AuthorDao {

	@Autowired
	private SqlSessionFactory sqlSessionFactory;

	@Override
	public List<Author> getByName(String name) {
		SqlSession sqlSession = null;
		try {
			sqlSession = sqlSessionFactory.openSession();;
			String statement = "org.wangye.crystal.common.model.entity.Author.getByName";
			List<Author> reslist = sqlSession.<Author> selectList(statement, name);
			return reslist;
		} finally {
			if (sqlSession != null) {
				sqlSession.close();
			}
		}
	}

	@Override
	public Author getById(int id) {
		return null;
	}
}
