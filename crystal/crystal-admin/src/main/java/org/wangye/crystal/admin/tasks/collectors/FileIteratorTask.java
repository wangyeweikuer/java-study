package org.wangye.crystal.admin.tasks.collectors;

import java.io.File;
import java.util.Collection;

import javax.annotation.PostConstruct;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.wangye.crystal.commons.service.BookService;

/**
 * TODO 请注释：
 * 
 * @author wangye04 笨笨
 * @email wangye04@baidu.com
 * @datetime Sep 29, 2012 4:35:30 PM
 */
@Service("fileIteratorTask")
public class FileIteratorTask implements Runnable {

	@Autowired
	private BookService bookService;
	@Value("#{file['rootDirPath']}")
	private String rootDirPath;
	private File rootDir;

	@PostConstruct
	public void init() {
		rootDir = new File(rootDirPath);
		if (!rootDir.isDirectory()) {
			String fmt = "rootDirPath[%s] isn't a valid directory!";
			throw new IllegalArgumentException(String.format(fmt, rootDirPath));
		}
	}

	@Override
	public void run() {
		Collection<File> files = FileUtils.listFiles(rootDir, null, true);
		if (CollectionUtils.isNotEmpty(files)) {
			for (File f : files) {
				String name = f.getName();
				String path = f.getAbsolutePath();
				if (bookService.canFind(name, path)) {
					bookService.update(name, path);
				} else {
					bookService.createNewOne(name, path);
				}
			}
		}
	}
}
