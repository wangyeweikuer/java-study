package org.wangye.crystal.commons.module.velocity;

import java.io.StringWriter;
import java.io.Writer;
import java.util.Properties;

import org.apache.velocity.context.Context;
import org.apache.velocity.exception.MethodInvocationException;
import org.apache.velocity.exception.ParseErrorException;
import org.apache.velocity.exception.ResourceNotFoundException;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Oct 1, 2012 9:13:44 AM
 */
public class VelocityEngine extends org.apache.velocity.app.VelocityEngine {

	private String rootDirPath;
	private String encoding;

	public VelocityEngine(Properties properties) {
		init(properties);
	}

	public String mergeTemplate(String templateName, Context context) throws ResourceNotFoundException,
	        ParseErrorException, MethodInvocationException {
		Writer writer = new StringWriter();
		super.mergeTemplate(rootDirPath + "/" + templateName, encoding, context, writer);
		return writer.toString();
	}

	public String getRootDirPath() {
		return rootDirPath;
	}

	public void setRootDirPath(String rootDirPath) {
		this.rootDirPath = rootDirPath;
	}

	public String getEncoding() {
		return encoding;
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}
}
