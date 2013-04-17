package org.wangye.crystal.commons.dao;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.core.Ordered;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Nov 5, 2012 11:44:57 AM
 */
public class SessionBuilder implements FactoryBean<SqlSession>, Ordered, BeanFactoryAware {

	private SqlSessionFactory sqlSessionFactory;

	@Override
	public SqlSession getObject() throws Exception {
		return sqlSessionFactory.openSession();
	}

	@Override
	public Class<? extends SqlSession> getObjectType() {
		return SqlSession.class;
	}

	@Override
	public boolean isSingleton() {
		return false;
	}

	@Override
	public int getOrder() {
		return 0;
	}

	@Override
	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		sqlSessionFactory = beanFactory.getBean(SqlSessionFactory.class);
	}
}
