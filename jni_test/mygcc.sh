#! /bin/bash
gcc -shared -fPIC -I $JAVA_HOME/include/ -I $JAVA_HOME/include/linux/ -I /usr/include/ JniTest.c -o libHello.so
