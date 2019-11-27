package org.protobuff.demo.Controller;

import org.protobuff.demo.model.StudentProto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
public class StudentController {

    @RequestMapping(value = "/students/all", produces = "application/x-protobuf")
    StudentProto.StudentCollection getAllCustomers() {
        return StudentProto.StudentCollection
                .newBuilder()
                .addAllStudents(
                        Collections.nCopies(10, StudentProto.Student
                                .newBuilder()
                                .setId(1)
                                .setFirstName("Anvay")
                                .setLastName("Rajhansa").build()
                        )
                ).build();
    }
}
