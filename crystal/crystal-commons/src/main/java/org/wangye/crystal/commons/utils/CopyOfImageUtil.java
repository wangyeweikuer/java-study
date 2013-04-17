package org.wangye.crystal.commons.utils;
//package org.wangye.crystal.commons.utils;
//
//import java.awt.Image;
//import java.awt.image.BufferedImage;
//import java.awt.image.RenderedImage;
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.math.BigDecimal;
//
//import javax.imageio.ImageIO;
//
//import org.apache.commons.io.FileUtils;
//import org.apache.commons.io.IOUtils;
//
//import com.sun.image.codec.jpeg.JPEGCodec;
//import com.sun.image.codec.jpeg.JPEGEncodeParam;
//import com.sun.image.codec.jpeg.JPEGImageEncoder;
//
///**
// * TODO 请注释：
// * 
// * @author wangye04 笨笨
// * @email wangye04@baidu.com
// * @datetime Dec 14, 2012 6:06:15 PM
// */
//public class CopyOfImageUtil {
//
//	public static void main(String[] args) throws Exception {
//		File f1 = new File("/home/wangye04/Pictures/1.jpg");
//		File f2 = new File("/tmp/1.jpg");
//		File f3 = new File("/tmp/1.png");
//		reduceImg(f1, f2, 200, 200);
//		transform(f2, f3, ImgType.png);
//	}
//
//	@SuppressWarnings("restriction")
//	public static void reduceImg(File srcfile, File distFile, int maxWidth, int maxHeight) throws IOException {
//		if (!srcfile.exists()) {
//			return;
//		}
//		Image src = ImageIO.read(srcfile);
//		int currentWidth = src.getWidth(null);
//		int currentHeight = src.getHeight(null);
//
//		// width and height not overflow
//		if (currentWidth <= maxWidth && currentHeight <= maxHeight) {
//			FileUtils.copyFile(srcfile, distFile);
//			return;
//		}
//
//		int newWidth = 0;
//		int newHeight = 0;
//
//		BigDecimal ch = new BigDecimal(currentHeight);
//		float wh = new BigDecimal(currentWidth).divide(ch, 4, BigDecimal.ROUND_DOWN).floatValue();
//
//		// width overflow and height is not height
//		if (currentWidth > maxWidth && currentHeight <= maxHeight) {
//			newWidth = maxWidth;
//			newHeight = new BigDecimal(maxWidth).divide(new BigDecimal(wh), 0, BigDecimal.ROUND_DOWN).intValue();
//
//			// width is not overflow and height is not overflow
//		} else if (currentWidth <= maxWidth && currentHeight > maxHeight) {
//			newWidth = new BigDecimal(maxHeight).multiply(new BigDecimal(wh)).intValue();
//			newHeight = maxHeight;
//			// width overflow and height overflow
//		} else {
//			newWidth = maxWidth;
//			newHeight = new BigDecimal(maxWidth).divide(new BigDecimal(wh), 0, BigDecimal.ROUND_DOWN).intValue();
//			if (newHeight > maxHeight) {
//				newHeight = maxHeight;
//				newWidth = new BigDecimal(maxHeight).multiply(new BigDecimal(wh)).intValue();
//			}
//		}
//
//		BufferedImage tag = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_RGB);
//		Image img = src.getScaledInstance(newWidth, newHeight, Image.SCALE_SMOOTH);
//		tag.createGraphics().drawImage(img, 0, 0, null);
//		FileOutputStream out = new FileOutputStream(distFile);
//		try {
//			JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(out);
//			JPEGEncodeParam param = encoder.getDefaultJPEGEncodeParam(tag);
//			param.setQuality(0.9f, false);
//			encoder.encode(tag, param);
//		} finally {
//			IOUtils.closeQuietly(out);
//		}
//	}
//
//	/**
//	 * 将原始的图片类型，转型成需要的图片类型
//	 * 
//	 * @param srcFile
//	 * @param distFile
//	 * @param type
//	 * @throws Exception
//	 */
//	public static void transform(File srcFile, File distFile, ImgType type) throws Exception {
//		RenderedImage img = ImageIO.read(srcFile);
//		ImageIO.write(img, type.name(), distFile);
//	}
//
//	public static boolean isGif(File srcFile) throws IOException {
//		byte[] imageByte = new byte[10];
//		FileInputStream fileInputStream = new FileInputStream(srcFile);
//		fileInputStream.read(imageByte);
//		fileInputStream.close();
//
//		if (imageByte[0] == 'G' && imageByte[1] == 'I' && imageByte[2] == 'F') {
//			return true;
//		}
//		return false;
//	}
//
//	public static boolean isImage(File file) throws IOException {
//		BufferedImage image = null;
//		try {
//			image = ImageIO.read(file);
//			if (null == image || image.getWidth() <= 0) {
//				return false;
//			}
//			return true;
//		} catch (Exception e) {
//			e.printStackTrace();
//			return false;
//		}
//	}
//
//}