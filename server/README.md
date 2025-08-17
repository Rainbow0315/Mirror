# Mirror Server

基于Spring Boot + Kotlin + MySQL的后端服务，为Mirror应用提供API支持。

## 技术栈

- **框架**: Spring Boot 3.2.0
- **语言**: Kotlin 1.9.20
- **数据库**: MySQL 8.0
- **ORM**: Spring Data JPA + Hibernate
- **安全**: Spring Security
- **构建工具**: Gradle

## 项目结构

```
src/main/kotlin/com/mirror/
├── MirrorApplication.kt          # 主应用类
├── config/                       # 配置类
│   └── SecurityConfig.kt         # 安全配置
├── controller/                   # 控制器层
│   └── InspirationController.kt  # 灵感控制器
├── dto/                          # 数据传输对象
│   ├── InspirationDto.kt
│   ├── NoteDto.kt
│   └── PersonDto.kt
├── entity/                       # 实体类
│   ├── Inspiration.kt
│   ├── Note.kt
│   └── Person.kt
├── exception/                    # 异常处理
│   └── GlobalExceptionHandler.kt
├── repository/                   # 数据访问层
│   ├── InspirationRepository.kt
│   ├── NoteRepository.kt
│   └── PersonRepository.kt
└── service/                      # 业务逻辑层
    └── InspirationService.kt
```

## 功能模块

### 1. 灵感管理 (Inspiration)
- 创建、查询、更新、删除灵感
- 按类型、心情、标签筛选
- 关键词搜索
- 获取所有类型和心情

### 2. 笔记管理 (Note)
- 创建、查询、更新、删除笔记
- 按日期、标签、人物筛选
- 关键词搜索

### 3. 人物管理 (Person)
- 创建、查询、更新、删除人物信息
- 管理人物喜好、礼物记录
- 按关系、位置、标签筛选

## 数据库设计

### 主要表结构
- `inspirations`: 灵感表
- `notes`: 笔记表
- `people`: 人物表
- `gifts`: 礼物表
- 各种关联表用于存储标签、喜好等

## 运行说明

### 环境要求
- JDK 17+
- MySQL 8.0+
- Gradle 7.0+

### 配置数据库
1. 创建MySQL数据库：
```sql
CREATE DATABASE mirror_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. 修改 `application.yml` 中的数据库连接信息：
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mirror_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    username: your_username
    password: your_password
```

### 启动应用
```bash
# 开发模式
./gradlew bootRun

# 构建并运行
./gradlew build
java -jar build/libs/mirror-server-0.0.1-SNAPSHOT.jar
```

### API文档
应用启动后，可以通过以下地址访问：
- 健康检查: http://localhost:8080/api/health
- 应用信息: http://localhost:8080/api/info
- 指标监控: http://localhost:8080/api/metrics

## API端点

### 灵感相关
- `GET /api/inspirations` - 获取所有灵感
- `GET /api/inspirations/{id}` - 获取指定灵感
- `POST /api/inspirations` - 创建灵感
- `PUT /api/inspirations/{id}` - 更新灵感
- `DELETE /api/inspirations/{id}` - 删除灵感
- `GET /api/inspirations/type/{type}` - 按类型获取灵感
- `GET /api/inspirations/mood/{mood}` - 按心情获取灵感
- `GET /api/inspirations/search?keyword=xxx` - 搜索灵感

## 开发计划

- [ ] 完成笔记和人物的Service和Controller
- [ ] 添加JWT认证
- [ ] 添加文件上传功能
- [ ] 添加缓存支持
- [ ] 添加单元测试
- [ ] 添加API文档 (Swagger)
- [ ] 添加日志记录
- [ ] 添加数据验证

## 部署

### Docker部署
```bash
# 构建镜像
docker build -t mirror-server .

# 运行容器
docker run -p 8080:8080 mirror-server
```

### 生产环境配置
- 修改 `application.yml` 中的生产环境配置
- 配置数据库连接池
- 配置日志级别
- 配置CORS策略
