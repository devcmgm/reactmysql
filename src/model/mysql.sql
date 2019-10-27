create table employees(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   email VARCHAR(40) NOT NULL,
   address VARCHAR(40) NOT NULL,
   phone BIGINT NOT NULL,
   roleId INT,
   PRIMARY KEY ( id )
);

create table roles  (id INT NOT NULL AUTO_INCREMENT, role VARCHAR(40) NOT NULL, PRIMARY KEY (id) );
