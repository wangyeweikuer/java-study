package org.wangye.crystal.commons.dao;

import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.core.Ordered;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Nov 5, 2012 11:44:57 AM
 */
public class FactoryBuilder implements FactoryBean<SqlSessionFactory>, Ordered {

	private SqlSessionFactory sqlSessionFactory;
	private final Environment environment;
	private final String configClasspath;

	public FactoryBuilder(String configClassPath, Environment environment) throws Exception {
		this.environment = environment;
		this.configClasspath = configClassPath;
	}

	private void build() throws Exception {
		InputStream is = Resources.getResourceAsStream(configClasspath);
		SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
		sqlSessionFactory = builder.build(is, environment.getId());
		Configuration config = sqlSessionFactory.getConfiguration();
		config.setEnvironment(environment);
		// config.addMappe
	}

	public SqlSessionFactory getObject() throws Exception {
		if (sqlSessionFactory == null) {
			build();
		}
		return sqlSessionFactory;
	}

	public Class<? extends SqlSessionFactory> getObjectType() {
		return sqlSessionFactory == null ? SqlSessionFactory.class : sqlSessionFactory.getClass();
	}

	public boolean isSingleton() {
		return true;
	}

	public int getOrder() {
		return -1;
	}
}
