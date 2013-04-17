#include <stdio.h>
#include "JniTest.h"
#include <jni.h>
 
JNIEXPORT void JNICALL Java_JniTest_output(JNIEnv * jnienv, jobject job)
{  
		  printf("Hello,ZYC!\n");  
} 
