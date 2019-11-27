# spring-react-proto-buffer

Sample application for proto-buffer implementation with spring boot and react. 

The respective student.java (present in spring app) and student.js (present in react app) are generated from student.proto file with following commands.

# Generate java file : protoc --java_out=. student.proto 

# Generate js file : pbjs -t static-module -w commonjs -o ./student.js ./student.proto 