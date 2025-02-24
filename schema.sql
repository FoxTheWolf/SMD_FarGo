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
    ('Tensiômetro', 'https://picsum.photos/200/300', 'Tensiômetro para medição de pressão arterial.'),
    ('Cadeira de rodas', 'https://picsum.photos/200/300', 'Cadeira de rodas para pacientes com mobilidade reduzida.'),
    ('Colchão', 'https://picsum.photos/200/300', 'Colchão para pacientes hospitalizados.'),
    ('Chuveiro', 'https://picsum.photos/200/300', 'Chuveiro para pacientes hospitalizados.'),
    ('Ventilador', 'https://picsum.photos/200/300', 'Ventilador para pacientes hospitalizados.'),
    ('Pia', 'https://picsum.photos/200/300', 'Pia para lavagem de mãos.'),
    ('Máquina de diálise', 'https://picsum.photos/200/300', 'Máquina de diálise para pacientes com doenças renais.'),
    ('Máquina de anestesia', 'https://picsum.photos/200/300', 'Máquina de anestesia para cirurgias.'),
    ('Máquina de ressuscitação', 'https://picsum.photos/200/300', 'Máquina de ressuscitação para pacientes em parada cardíaca.'),
    ('Máquina de raio X', 'https://picsum.photos/200/300', 'Máquina de raio X para diagnósticos.'),
    ('Máquina de ultrassom', 'https://picsum.photos/200/300', 'Máquina de ultrassom para diagnósticos.'),
    ('Máquina de eletroencefalografia', 'https://picsum.photos/200/300', 'Máquina de eletroencefalografia para diagnósticos.'),
    ('Máquina de eletrocardiografia', 'https://picsum.photos/200/300', 'Máquina de eletrocardiografia para diagnósticos.'),
    ('Máquina de endoscopia', 'https://picsum.photos/200/300', 'Máquina de endoscopia para diagnósticos.'),
    ('Máquina de broncoscopia', 'https://picsum.photos/200/300', 'Máquina de broncoscopia para diagnósticos.'),
    ('Máquina de colonoscopia', 'https://picsum.photos/200/300', 'Máquina de colonoscopia para diagnósticos.'),
    ('Máquina de sigmoidoscopia', 'https://picsum.photos/200/300', 'Máquina de sigmoidoscopia para diagnósticos.'),
    ('Máquina de gastroscopia', 'https://picsum.photos/200/300', 'Máquina de gastroscopia para diagnósticos.'),
    ('Máquina de laparoscopia', 'https://picsum.photos/200/300', 'Máquina de laparoscopia para diagnósticos.'),
    ('Máquina de radioterapia', 'https://picsum.photos/200/300', 'Máquina de radioterapia para tratamento de câncer.'),
    ('Máquina de quimioterapia', 'https://picsum.photos/200/300', 'Máquina de quimioterapia para tratamento de câncer.'),
    ('Máquina de hemodiálise', 'https://picsum.photos/200/300', 'Máquina de hemodiálise para pacientes com doenças renais.'),
    ('Máquina de hemofilia', 'https://picsum.photos/200/300', 'Máquina de hemofilia para pacientes com doenças hemorrágicas.'),
    ('Máquina de perfusão', 'https://picsum.photos/200/300', 'Máquina de perfusão para pacientes com doenças cardíacas.'),
    ('Máquina de oxigenação', 'https://picsum.photos/200/300', 'Máquina de oxigenação para pacientes com doenças respiratórias.'),
    ('Máquina de ventilação', 'https://picsum.photos/200/300', 'Máquina de ventilação para pacientes com doenças respiratórias.'),
    ('Máquina de monitoramento', 'https://picsum.photos/200/300', 'Máquina de monitoramento para pacientes com doenças cardíacas.'),
    ('Máquina de estimulação', 'https://picsum.photos/200/300', 'Máquina de estimulação para pacientes com doenças neurológicas.'),
    ('Máquina de tratamento de dor', 'https://picsum.photos/200/300', 'Máquina de tratamento de dor para pacientes com dor crônica.'),
    ('Máquina de tratamento de feridas', 'https://picsum.photos/200/300', 'Máquina de tratamento de feridas para pacientes com feridas graves.'),
    ('Máquina de tratamento de queimaduras', 'https://picsum.photos/200/300', 'Máquina de tratamento de queimaduras para pacientes com queimaduras graves.')


CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    horario DATETIME DEFAULT CURRENT_TIMESTAMP,
    setor VARCHAR(255),
    tipo_pedido VARCHAR(255),
    status VARCHAR(255),
    observacoes VARCHAR(255),
    feedback_enfermagem VARCHAR(255),
    descricao VARCHAR(255)
);

CREATE TABLE pedidos_insumos (
    id_pedido INT,
    id_insumo INT,
    quantidade INT,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
    FOREIGN KEY (id_insumo) REFERENCES insumos(id)
);
INSERT INTO pedidos (setor, tipo_pedido, status, observacoes, feedback_enfermagem, descricao) VALUES
    ('Pediatria', 'individual', 'aberto', 'Pedido de insumos para pediatria', 'Urgente', ''),
    ('Cardiologia', 'coletivo', 'cancelado', 'Pedido de equipamentos para cardiologia', 'Fornecimento atrasado', ''),
    ('Oncologia', 'individual', 'aprovado', 'Pedido de medicamentos para oncologia', 'Revisado e aprovado', ''),
    ('Neurologia', 'coletivo', 'aberto', 'Pedido de insumos para neurologia', 'Aguardando aprovação', ''),
    ('Ortopedia', 'individual', 'cancelado', 'Pedido de materiais ortopédicos', 'Pedido duplicado', ''),
    ('Ginecologia', 'coletivo', 'aprovado', 'Pedido de equipamentos para ginecologia', 'Entrega agendada', ''),
    ('Urologia', 'individual', 'aberto', 'Pedido de insumos para urologia', 'Aguardando feedback', ''),
    ('Dermatologia', 'coletivo', 'cancelado', 'Pedido de produtos dermatológicos', 'Erro no pedido', ''),
    ('Psiquiatria', 'individual', 'aprovado', 'Pedido de medicamentos psiquiátricos', 'Recebido e em uso', ''),
    ('Oftalmologia', 'coletivo', 'aberto', 'Pedido de equipamentos para oftalmologia', 'Revisão pendente', ''),
    ('Radiologia', 'individual', 'aprovado', 'Pedido de filme radiográfico', 'Aprovado para uso', ''),
    ('Endocrinologia', 'coletivo', 'aberto', 'Pedido de insumos para endocrinologia', 'Aguardando confirmação', ''),
    ('Gastroenterologia', 'individual', 'cancelado', 'Pedido de medicamentos gastrointestinais', 'Cancelado devido a erro', ''),
    ('Hematologia', 'coletivo', 'aprovado', 'Pedido de reagentes hematológicos', 'Entrega confirmada', ''),
    ('Reumatologia', 'individual', 'aberto', 'Pedido de insumos reumatológicos', 'Aguardando inspeção', ''),
    ('Infectologia', 'coletivo', 'cancelado', 'Pedido de antissépticos', 'Cancelamento solicitado', ''),
    ('Nefrologia', 'individual', 'aprovado', 'Pedido de equipamentos para diálise', 'Recebido', ''),
    ('Pneumologia', 'coletivo', 'aberto', 'Pedido de inaladores', 'Em processamento', ''),
    ('Otorrinolaringologia', 'individual', 'cancelado', 'Pedido de materiais otológicos', 'Cancelado por duplicidade', ''),
    ('Patologia', 'coletivo', 'aprovado', 'Pedido de lâminas e reagentes', 'Pronto para uso', '');

CREATE TABLE login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    senha VARCHAR(255),
    privilegio INT
);
# tabela de usuários do sistema de pedidos, 1 e enfermeiro, 2 e farmacia

INSERT INTO login (nome, senha, privilegio) VALUES
    ('admin', 'admin',1),
    ('enfermagem', 'admin',1);