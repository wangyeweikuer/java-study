package org.wangye.crystal.commons.service.quartz;

import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.impl.JobDetailImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.wangye.crystal.commons.service.QuartzService;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Jan 10, 2013 11:41:13 PM
 */
public class DefaultQuartzService implements QuartzService {

	@Autowired
	private Scheduler scheduler;

	public void saveJobs(JobDetail JobDetail, Trigger trigger) throws Exception {
		JobDetailImpl jobDetailImpl = new JobDetailImpl();
//		Class<? extends Job> jobClass = ;
//		jobDetailImpl.setJobClass(jobClass );
		scheduler.scheduleJob(JobDetail, trigger);
	}

}
