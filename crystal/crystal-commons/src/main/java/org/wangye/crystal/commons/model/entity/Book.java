package org.wangye.crystal.commons.model.entity;

import java.util.Date;

import org.wangye.crystal.commons.model.enums.FileType;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 28, 2012 6:10:51 PM
 */
public class Book {

	private Integer Id;
	private Date gmtCreate;
	private Date gmtModify;
	/** 文件名 */
	private String name;
	/** 文件路径 */
	private String filepath;
	/** 文件类型 */
	private FileType fileType;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFilepath() {
		return filepath;
	}

	public void setFilepath(String filepath) {
		this.filepath = filepath;
	}

	public FileType getFileType() {
		return fileType;
	}

	public void setFileType(FileType fileType) {
		this.fileType = fileType;
	}
}
