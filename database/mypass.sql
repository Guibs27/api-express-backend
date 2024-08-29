CREATE DATABASE mypass;
USE mypass;

DROP TABLE account;
DROP TABLE user;

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  pass VARCHAR(255) NOT NULL
);

CREATE TABLE account (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  logo_image VARCHAR(1000),
  pass VARCHAR(500) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

INSERT INTO user VALUES (NULL, 'g.bizerra@aluno.ifsp.edu.br', '123teste');
SELECT * FROM user;

INSERT INTO account VALUES (NULL, 'Gmail', 'g.bizerra@aluno.ifsp.edu.br', 'https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png', '123teste', 1);
INSERT INTO account VALUES (NULL, 'Instagram', 'g.bizerra@aluno.ifsp.edu.br', 'https://static.vecteezy.com/system/resources/thumbnails/038/447/961/small/ai-generated-instagram-logo-free-png.png', '123teste', 1);
INSERT INTO account VALUES (NULL, 'GitHub', 'g.bizerra@aluno.ifsp.edu.br', 'https://www.svgrepo.com/show/447137/github-fill.svg', '123teste', 1);
SELECT * FROM account;


UPDATE account SET logo_image = "https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" WHERE id = 1;