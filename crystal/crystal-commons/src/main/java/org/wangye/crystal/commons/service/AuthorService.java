package org.wangye.crystal.commons.service;

import java.util.List;

import org.wangye.crystal.commons.model.entity.Author;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Nov 2, 2012 11:20:56 AM
 */
public interface AuthorService {

	List<Author> findByName(String name);
}
