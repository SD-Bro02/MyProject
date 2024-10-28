show databases;
use mcprojecttest01;
INSERT INTO user_info (user_name, user_email, user_mobile_number, user_password) VALUES
('john_doe', 'john.doe@example.com', '1234567890', 'password123'),
('jane_smith', 'jane.smith@example.com', '0987654321', 'mypassword'),
('alice_jones', 'alice.jones@example.com', '5556667777', 'alicepass'),
('bob_brown', 'bob.brown@example.com', '4443332222', 'bobsecurepass');

select * from user_info;

