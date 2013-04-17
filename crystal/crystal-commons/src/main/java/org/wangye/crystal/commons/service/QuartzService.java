package org.wangye.crystal.commons.service;

import org.quartz.JobDetail;
import org.quartz.Trigger;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Jan 10, 2013 11:42:06 PM
 */
public interface QuartzService {

	/**
     * @param JobDetail
     * @param trigger
	 * @throws Exception 
     */
    void saveJobs(JobDetail JobDetail, Trigger trigger) throws Exception;
}
