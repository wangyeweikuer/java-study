package org.wangye.crystal.commons.model.entity;

import java.util.Date;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 28, 2012 6:25:37 PM
 */
public class Tag {

	private Integer Id;
	private Date gmtCreate;
	private Date gmtModify;
	private Integer bookId;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public Date getGmtCreate() {
		return gmtCreate;
	}

	public void setGmtCreate(Date gmtCreate) {
		this.gmtCreate = gmtCreate;
	}

	public Date getGmtModify() {
		return gmtModify;
	}

	public void setGmtModify(Date gmtModify) {
		this.gmtModify = gmtModify;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

}
