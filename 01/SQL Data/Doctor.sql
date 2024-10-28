show databases;
use mcprojecttest01;
INSERT INTO doctor_info (doctor_name, doctor_email, doctor_mobile_number, doctor_password) VALUES
('doctorjohn_doe', 'john.doctordoe@example.com', '12345doctor67890', 'passwdoctorord123'),
('doctorjane_smith', 'jane.doctorsmith@example.com', '0987doctor654321', 'mypassdoctorword'),
('doctoralice_jones', 'alice.doctorjones@example.com', '555doctor6667777', 'alicdoctorepass'),
('doctorbob_brown', 'bob.doctorbrown@example.com', '444333doctor2222', 'bobsedoctorcurepass');

select * from doctor_info;