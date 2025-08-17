-- Mirror Database Initialization Script
-- 创建数据库
CREATE DATABASE IF NOT EXISTS mirror_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE mirror_db;

-- 创建灵感表
CREATE TABLE IF NOT EXISTS inspirations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    type ENUM('WRITING', 'ART', 'MUSIC', 'PHOTOGRAPHY', 'OTHER') NOT NULL,
    mood VARCHAR(100) NOT NULL,
    source VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建灵感标签表
CREATE TABLE IF NOT EXISTS inspiration_tags (
    inspiration_id BIGINT NOT NULL,
    tag VARCHAR(100) NOT NULL,
    PRIMARY KEY (inspiration_id, tag),
    FOREIGN KEY (inspiration_id) REFERENCES inspirations(id) ON DELETE CASCADE
);

-- 创建笔记表
CREATE TABLE IF NOT EXISTS notes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    date VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建笔记标签表
CREATE TABLE IF NOT EXISTS note_tags (
    note_id BIGINT NOT NULL,
    tag VARCHAR(100) NOT NULL,
    PRIMARY KEY (note_id, tag),
    FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE
);

-- 创建笔记人物表
CREATE TABLE IF NOT EXISTS note_people (
    note_id BIGINT NOT NULL,
    person VARCHAR(100) NOT NULL,
    PRIMARY KEY (note_id, person),
    FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE
);

-- 创建人物表
CREATE TABLE IF NOT EXISTS people (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    relationship VARCHAR(100) NOT NULL,
    location VARCHAR(255),
    last_interaction TIMESTAMP NULL,
    interaction_type VARCHAR(100),
    avatar VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建人物笔记表
CREATE TABLE IF NOT EXISTS person_notes (
    person_id BIGINT NOT NULL,
    note TEXT,
    PRIMARY KEY (person_id, note(100)),
    FOREIGN KEY (person_id) REFERENCES people(id) ON DELETE CASCADE
);

-- 创建人物标签表
CREATE TABLE IF NOT EXISTS person_tags (
    person_id BIGINT NOT NULL,
    tag VARCHAR(100) NOT NULL,
    PRIMARY KEY (person_id, tag),
    FOREIGN KEY (person_id) REFERENCES people(id) ON DELETE CASCADE
);

-- 创建人物喜好表
CREATE TABLE IF NOT EXISTS person_likes (
    person_id BIGINT NOT NULL,
    like_item VARCHAR(255) NOT NULL,
    PRIMARY KEY (person_id, like_item),
    FOREIGN KEY (person_id) REFERENCES people(id) ON DELETE CASCADE
);

-- 创建人物不喜好表
CREATE TABLE IF NOT EXISTS person_dislikes (
    person_id BIGINT NOT NULL,
    dislike_item VARCHAR(255) NOT NULL,
    PRIMARY KEY (person_id, dislike_item),
    FOREIGN KEY (person_id) REFERENCES people(id) ON DELETE CASCADE
);

-- 创建礼物表
CREATE TABLE IF NOT EXISTS gifts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    person_id BIGINT NOT NULL,
    type ENUM('GIVEN', 'RECEIVED') NOT NULL,
    item VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (person_id) REFERENCES people(id) ON DELETE CASCADE
);

-- 创建索引
CREATE INDEX idx_inspirations_type ON inspirations(type);
CREATE INDEX idx_inspirations_mood ON inspirations(mood);
CREATE INDEX idx_inspirations_created_at ON inspirations(created_at);
CREATE INDEX idx_notes_date ON notes(date);
CREATE INDEX idx_notes_created_at ON notes(created_at);
CREATE INDEX idx_people_name ON people(name);
CREATE INDEX idx_people_relationship ON people(relationship);
CREATE INDEX idx_people_last_interaction ON people(last_interaction);
CREATE INDEX idx_gifts_person_id ON gifts(person_id);
CREATE INDEX idx_gifts_date ON gifts(date);

-- 插入示例数据
INSERT INTO inspirations (title, content, type, mood, source) VALUES
('春天的灵感', '今天在公园里看到樱花盛开，突然有了写诗的冲动...', 'WRITING', '愉悦', '公园散步'),
('城市夜景', '夜晚的城市灯光如繁星点点，很适合拍夜景...', 'PHOTOGRAPHY', '宁静', '城市夜景'),
('爵士乐创作', '听到一段爵士乐，想要创作类似的音乐...', 'MUSIC', '兴奋', '音乐播放器');

INSERT INTO notes (title, content, date) VALUES
('今日总结', '今天完成了项目的重要部分，感觉很有成就感...', '2024-01-15'),
('会议记录', '讨论了新功能的实现方案，需要进一步细化...', '2024-01-15'),
('学习笔记', '学习了Spring Boot的新特性，收获很多...', '2024-01-14');

INSERT INTO people (name, relationship, location, last_interaction, interaction_type) VALUES
('张三', '朋友', '北京', '2024-01-10 14:30:00', '微信聊天'),
('李四', '同事', '上海', '2024-01-12 09:00:00', '工作讨论'),
('王五', '家人', '广州', '2024-01-08 18:00:00', '电话');

-- 插入标签数据
INSERT INTO inspiration_tags (inspiration_id, tag) VALUES
(1, '春天'), (1, '樱花'), (1, '诗歌'),
(2, '夜景'), (2, '城市'), (2, '摄影'),
(3, '爵士乐'), (3, '音乐创作');

INSERT INTO note_tags (note_id, tag) VALUES
(1, '总结'), (1, '工作'),
(2, '会议'), (2, '项目'),
(3, '学习'), (3, '技术');

INSERT INTO person_tags (person_id, tag) VALUES
(1, '朋友'), (1, '北京'),
(2, '同事'), (2, '上海'),
(3, '家人'), (3, '广州');

INSERT INTO person_likes (person_id, like_item) VALUES
(1, '咖啡'), (1, '旅行'),
(2, '技术'), (2, '阅读'),
(3, '美食'), (3, '运动');

INSERT INTO gifts (person_id, type, item, date) VALUES
(1, 'GIVEN', '生日礼物', '2024-01-05 10:00:00'),
(2, 'RECEIVED', '感谢卡片', '2024-01-12 16:00:00'),
(3, 'GIVEN', '新年礼物', '2024-01-01 12:00:00');
