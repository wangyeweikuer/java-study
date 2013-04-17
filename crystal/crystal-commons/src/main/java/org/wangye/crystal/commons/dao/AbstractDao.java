package org.wangye.crystal.commons.dao;

import java.util.HashMap;
import java.util.Map;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Oct 1, 2012 9:01:00 AM
 */
public abstract class AbstractDao {

	// @Autowired
	// protected JdbcTemplate jdbcTemplate;

//	@Autowired
//	protected VelocityEngine velocityEngine;

	protected String appendPrefixAndSuffix(String filename) {
		return appendPrefix(filename) + ".vm";
	}

	protected abstract String appendPrefix(String filename);

	protected String genSql(String filename, Map<String, Object> params) {
//		String templatePath = appendPrefixAndSuffix(filename);
//		StringWriter sw = new StringWriter();
//		velocityEngine.mergeTemplate(templatePath, "UTF-8", new VelocityContext(params), sw);
//		return sw.toString();
		return null;
	}

	protected String genSql(String filename, String key, Object object) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put(key, object);
		return genSql(filename, params);
	}
}
