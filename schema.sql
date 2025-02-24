CREATE DATABASE smd_fargo;
USE smd_fargo;

CREATE TABLE insumos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    foto VARCHAR(255),
    descricao VARCHAR(255)
);

INSERT INTO insumos (nome, foto, descricao) VALUES
    ('Tesoura', 'https://picsum.photos/200/300', 'Tesoura cirúrgica para cortes precisos em bandagens e materiais.'),
    ('Seringa', 'https://picsum.photos/400/300', 'Seringa descartável para aplicação de medicamentos.'),
    ('Bandagens', 'https://picsum.photos/300/300', 'Bandagens adesivas para curativos rápidos.'),
    ('Máscara', 'https://picsum.photos/200/300', 'Máscara facial para proteção contra agentes contaminantes.'),
    ('Agulha', 'https://picsum.photos/200/300', 'Agulha hipodérmica para uso em conjunto com seringas.'),
    ('Esparadrapo', 'https://picsum.photos/200/300', 'Fita adesiva para fixação de curativos e bandagens.'),
    ('Compressa', 'https://picsum.photos/200/300', 'Compressa de gaze esterilizada para feridas.'),
    ('Álcool', 'https://picsum.photos/200/300', 'Álcool 70% para desinfecção de superfícies e pele.'),
    ('Termômetro', 'https://picsum.photos/200/300', 'Termômetro digital para medição de temperatura corporal.'),
    ('Luva', 'https://picsum.photos/200/300', 'Luva de látex para proteção das mãos durante procedimentos.'),
    ('Curativo', 'https://picsum.photos/200/300', 'Curativo adesivo para pequenos ferimentos.'),
    ('Gaze', 'https://picsum.photos/200/300', 'Gaze esterilizada para curativos.'),
    ('Micropore', 'https://picsum.photos/200/300', 'Fita micropore para fixação de curativos.'),
    ('Desinfetante', 'https://picsum.photos/200/300', 'Desinfetante hospitalar para superfícies.'),
    ('Algodão', 'https://picsum.photos/200/300', 'Algodão hidrófilo para limpeza e curativos.'),
    ('Jaleco', 'https://picsum.photos/200/300', 'Jaleco hospitalar para proteção individual.'),
    ('Estetoscópio', 'https://picsum.photos/200/300', 'Estetoscópio para auscultação de sons corporais.'),
    ('Oxímetro', 'https://picsum.photos/200/300', 'Oxímetro de pulso para medição de saturação de oxigênio.'),
    ('Bisturi', 'https://picsum.photos/200/300', 'Bisturi cirúrgico para incisões precisas.'),
    ('Sonda', 'https://picsum.photos/200/300', 'Sonda para procedimentos médicos específicos.'),
    ('Lamparina', 'https://picsum.photos/200/300', 'Lamparina para esterilização de instrumentos.'),
    ('Cânula', 'https://picsum.photos/200/300', 'Cânula nasal para suplementação de oxigênio.'),
    ('Lanceta', 'https://picsum.photos/200/300', 'Lanceta para punção capilar.'),
    ('Eletrodo', 'https://picsum.photos/200/300', 'Eletrodo para monitoramento cardíaco.'),
    ('Autoclave', 'https://picsum.photos/200/300', 'Autoclave para esterilização de materiais.'),
    ('Pipeta', 'https://picsum.photos/200/300', 'Pipeta para dosagem precisa de líquidos.'),
    ('Centrífuga', 'https://picsum.photos/200/300', 'Centrífuga para separação de componentes líquidos.'),
    ('Espéculo', 'https://picsum.photos/200/300', 'Espéculo para exames ginecológicos.'),
    ('Abaixador de língua', 'https://picsum.photos/200/300', 'Abaixador de língua para exames orais.'),
    ('Tensiômetro', 'https://picsum.photos/200/300', 'Tensiômetro para medição de pressão arterial.');


CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    horario DATETIME DEFAULT CURRENT_TIMESTAMP,
    setor VARCHAR(255),
    tipo_pedido VARCHAR(255)
);

CREATE TABLE pedidos_insumos (
    id_pedido INT,
    id_insumo INT,
    quantidade INT,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
    FOREIGN KEY (id_insumo) REFERENCES insumos(id)
);


CREATE TABLE login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    senha VARCHAR(255),
    privilegio INT
);
# tabela de usuários do sistema de pedidos, 1 e enfermeiro, 2 e farmacia

INSERT INTO login (nome, senha, privilegio) VALUES
    ('admin', 'admin', 2);