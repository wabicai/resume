# 创建型-建造者(Builder)模式

## 什么是建造者模式

建造者模式（Builder Pattern）是一种创建型设计模式，它允许你**分步骤创建复杂对象**。该模式允许你使用相同的创建代码生成不同类型和形式的对象。

建造者模式将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

## 核心概念

### 主要角色

1. **Builder（建造者）**：定义创建产品各个部分的抽象接口
2. **ConcreteBuilder（具体建造者）**：实现Builder接口，构造和装配各个部件
3. **Director（指挥者）**：构建一个使用Builder接口的对象，负责安排已有模块的顺序
4. **Product（产品）**：被构建的复杂对象

### 使用场景

1. **对象构造复杂**：需要生成的对象具有复杂的内部结构
2. **构造步骤稳定**：对象的创建过程稳定，但配置多样化
3. **参数众多**：构造函数参数过多，可选参数较多
4. **链式调用**：希望通过链式调用的方式创建对象
5. **隔离复杂性**：需要将对象构造与表示分离

## 经典实现

### 基础实现示例

```javascript
// 产品类：复杂对象
class Computer {
  constructor() {
    this.cpu = '';
    this.ram = '';
    this.storage = '';
    this.gpu = '';
    this.monitor = '';
  }

  show() {
    console.log(`电脑配置：
      CPU: ${this.cpu}
      内存: ${this.ram}
      硬盘: ${this.storage}
      显卡: ${this.gpu}
      显示器: ${this.monitor}
    `);
  }
}

// 抽象建造者
class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }

  buildCPU(cpu) {
    this.computer.cpu = cpu;
    return this;
  }

  buildRAM(ram) {
    this.computer.ram = ram;
    return this;
  }

  buildStorage(storage) {
    this.computer.storage = storage;
    return this;
  }

  buildGPU(gpu) {
    this.computer.gpu = gpu;
    return this;
  }

  buildMonitor(monitor) {
    this.computer.monitor = monitor;
    return this;
  }

  getResult() {
    return this.computer;
  }
}

// 具体建造者：游戏电脑
class GamingComputerBuilder extends ComputerBuilder {
  buildDefaultConfig() {
    return this
      .buildCPU('Intel i9-13900K')
      .buildRAM('32GB DDR5')
      .buildStorage('2TB NVMe SSD')
      .buildGPU('NVIDIA RTX 4090')
      .buildMonitor('4K 144Hz');
  }
}

// 具体建造者：办公电脑
class OfficeComputerBuilder extends ComputerBuilder {
  buildDefaultConfig() {
    return this
      .buildCPU('Intel i5-12400')
      .buildRAM('16GB DDR4')
      .buildStorage('512GB SSD')
      .buildGPU('集成显卡')
      .buildMonitor('1080P 60Hz');
  }
}

// 指挥者：负责构建流程
class ComputerDirector {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    return this.builder.buildDefaultConfig().getResult();
  }

  customConstruct(config) {
    if (config.cpu) this.builder.buildCPU(config.cpu);
    if (config.ram) this.builder.buildRAM(config.ram);
    if (config.storage) this.builder.buildStorage(config.storage);
    if (config.gpu) this.builder.buildGPU(config.gpu);
    if (config.monitor) this.builder.buildMonitor(config.monitor);
    return this.builder.getResult();
  }
}

// 使用示例
const gamingBuilder = new GamingComputerBuilder();
const director1 = new ComputerDirector(gamingBuilder);
const gamingPC = director1.construct();
gamingPC.show();

// 自定义配置
const officeBuilder = new OfficeComputerBuilder();
const director2 = new ComputerDirector(officeBuilder);
const customPC = director2.customConstruct({
  cpu: 'AMD Ryzen 5 5600X',
  ram: '32GB DDR4'
});
customPC.show();
```

### 链式调用实现

```javascript
// 简化版建造者模式（最常用）
class QueryBuilder {
  constructor(table) {
    this.table = table;
    this.conditions = [];
    this.orderByClause = '';
    this.limitClause = '';
    this.offsetClause = '';
  }

  where(condition) {
    this.conditions.push(condition);
    return this; // 返回this实现链式调用
  }

  and(condition) {
    this.conditions.push(`AND ${condition}`);
    return this;
  }

  or(condition) {
    this.conditions.push(`OR ${condition}`);
    return this;
  }

  orderBy(field, direction = 'ASC') {
    this.orderByClause = `ORDER BY ${field} ${direction}`;
    return this;
  }

  limit(count) {
    this.limitClause = `LIMIT ${count}`;
    return this;
  }

  offset(count) {
    this.offsetClause = `OFFSET ${count}`;
    return this;
  }

  build() {
    let query = `SELECT * FROM ${this.table}`;

    if (this.conditions.length > 0) {
      query += ` WHERE ${this.conditions.join(' ')}`;
    }

    if (this.orderByClause) {
      query += ` ${this.orderByClause}`;
    }

    if (this.limitClause) {
      query += ` ${this.limitClause}`;
    }

    if (this.offsetClause) {
      query += ` ${this.offsetClause}`;
    }

    return query;
  }
}

// 使用示例
const query = new QueryBuilder('users')
  .where('age > 18')
  .and('status = "active"')
  .orderBy('created_at', 'DESC')
  .limit(10)
  .offset(20)
  .build();

console.log(query);
// 输出: SELECT * FROM users WHERE age > 18 AND status = "active" ORDER BY created_at DESC LIMIT 10 OFFSET 20
```

## 实际应用场景

### 1. HTTP 请求构建器

```javascript
class HttpRequestBuilder {
  constructor() {
    this.method = 'GET';
    this.url = '';
    this.headers = {};
    this.params = {};
    this.body = null;
    this.timeout = 5000;
  }

  setMethod(method) {
    this.method = method.toUpperCase();
    return this;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  setHeader(key, value) {
    this.headers[key] = value;
    return this;
  }

  setHeaders(headers) {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  setParams(params) {
    this.params = { ...this.params, ...params };
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  setTimeout(timeout) {
    this.timeout = timeout;
    return this;
  }

  setAuth(token) {
    this.headers['Authorization'] = `Bearer ${token}`;
    return this;
  }

  async send() {
    // 构建完整的URL
    let fullUrl = this.url;
    if (Object.keys(this.params).length > 0) {
      const queryString = new URLSearchParams(this.params).toString();
      fullUrl += `?${queryString}`;
    }

    // 构建请求配置
    const config = {
      method: this.method,
      headers: this.headers,
      timeout: this.timeout
    };

    if (this.body) {
      config.body = JSON.stringify(this.body);
    }

    // 发送请求
    try {
      const response = await fetch(fullUrl, config);
      return await response.json();
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}

// 使用示例
const response = await new HttpRequestBuilder()
  .setMethod('POST')
  .setUrl('https://api.example.com/users')
  .setAuth('your-token-here')
  .setHeader('Content-Type', 'application/json')
  .setBody({
    name: 'John Doe',
    email: 'john@example.com'
  })
  .setTimeout(10000)
  .send();
```

### 2. 表单验证器构建

```javascript
class FormValidatorBuilder {
  constructor(fieldName) {
    this.fieldName = fieldName;
    this.rules = [];
  }

  required(message = '此字段为必填项') {
    this.rules.push({
      validate: (value) => value !== null && value !== undefined && value !== '',
      message
    });
    return this;
  }

  minLength(length, message = `最小长度为${length}个字符`) {
    this.rules.push({
      validate: (value) => value && value.length >= length,
      message
    });
    return this;
  }

  maxLength(length, message = `最大长度为${length}个字符`) {
    this.rules.push({
      validate: (value) => !value || value.length <= length,
      message
    });
    return this;
  }

  pattern(regex, message = '格式不正确') {
    this.rules.push({
      validate: (value) => !value || regex.test(value),
      message
    });
    return this;
  }

  email(message = '请输入有效的邮箱地址') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.pattern(emailRegex, message);
  }

  custom(validateFn, message) {
    this.rules.push({
      validate: validateFn,
      message
    });
    return this;
  }

  build() {
    return {
      fieldName: this.fieldName,
      validate: (value) => {
        for (const rule of this.rules) {
          if (!rule.validate(value)) {
            return {
              valid: false,
              message: rule.message
            };
          }
        }
        return { valid: true };
      }
    };
  }
}

// 使用示例
const emailValidator = new FormValidatorBuilder('email')
  .required('邮箱不能为空')
  .email('请输入有效的邮箱格式')
  .build();

const passwordValidator = new FormValidatorBuilder('password')
  .required('密码不能为空')
  .minLength(8, '密码至少8个字符')
  .maxLength(20, '密码最多20个字符')
  .pattern(/[A-Z]/, '密码必须包含至少一个大写字母')
  .pattern(/[a-z]/, '密码必须包含至少一个小写字母')
  .pattern(/[0-9]/, '密码必须包含至少一个数字')
  .build();

// 验证
console.log(emailValidator.validate('test@example.com')); // { valid: true }
console.log(passwordValidator.validate('Pass123')); // { valid: false, message: '密码至少8个字符' }
```

### 3. UI 组件构建器

```javascript
class DialogBuilder {
  constructor() {
    this.config = {
      title: '提示',
      content: '',
      width: '400px',
      height: 'auto',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: true,
      confirmText: '确定',
      cancelText: '取消',
      onConfirm: null,
      onCancel: null,
      onClose: null,
      modal: true,
      closeOnClickModal: true,
      customClass: ''
    };
  }

  setTitle(title) {
    this.config.title = title;
    return this;
  }

  setContent(content) {
    this.config.content = content;
    return this;
  }

  setSize(width, height) {
    this.config.width = width;
    this.config.height = height;
    return this;
  }

  hideCloseButton() {
    this.config.showCloseButton = false;
    return this;
  }

  hideCancelButton() {
    this.config.showCancelButton = false;
    return this;
  }

  hideConfirmButton() {
    this.config.showConfirmButton = false;
    return this;
  }

  setConfirmText(text) {
    this.config.confirmText = text;
    return this;
  }

  setCancelText(text) {
    this.config.cancelText = text;
    return this;
  }

  onConfirm(callback) {
    this.config.onConfirm = callback;
    return this;
  }

  onCancel(callback) {
    this.config.onCancel = callback;
    return this;
  }

  onClose(callback) {
    this.config.onClose = callback;
    return this;
  }

  setModal(modal) {
    this.config.modal = modal;
    return this;
  }

  setCloseOnClickModal(close) {
    this.config.closeOnClickModal = close;
    return this;
  }

  setCustomClass(className) {
    this.config.customClass = className;
    return this;
  }

  show() {
    // 创建对话框DOM元素
    const dialog = this.createDialogElement();
    document.body.appendChild(dialog);
    return dialog;
  }

  createDialogElement() {
    const dialog = document.createElement('div');
    dialog.className = `dialog ${this.config.customClass}`;
    dialog.style.width = this.config.width;
    dialog.style.height = this.config.height;

    // 创建内容
    let html = `
      <div class="dialog-header">
        <h3>${this.config.title}</h3>
        ${this.config.showCloseButton ? '<button class="close-btn">×</button>' : ''}
      </div>
      <div class="dialog-body">${this.config.content}</div>
      <div class="dialog-footer">
        ${this.config.showCancelButton ? `<button class="cancel-btn">${this.config.cancelText}</button>` : ''}
        ${this.config.showConfirmButton ? `<button class="confirm-btn">${this.config.confirmText}</button>` : ''}
      </div>
    `;

    dialog.innerHTML = html;

    // 绑定事件
    this.bindEvents(dialog);

    return dialog;
  }

  bindEvents(dialog) {
    if (this.config.showCloseButton) {
      dialog.querySelector('.close-btn')?.addEventListener('click', () => {
        this.config.onClose?.();
        dialog.remove();
      });
    }

    if (this.config.showCancelButton) {
      dialog.querySelector('.cancel-btn')?.addEventListener('click', () => {
        this.config.onCancel?.();
        dialog.remove();
      });
    }

    if (this.config.showConfirmButton) {
      dialog.querySelector('.confirm-btn')?.addEventListener('click', () => {
        this.config.onConfirm?.();
        dialog.remove();
      });
    }
  }
}

// 使用示例
new DialogBuilder()
  .setTitle('删除确认')
  .setContent('确定要删除这条记录吗？')
  .setSize('500px', '200px')
  .setConfirmText('删除')
  .setCancelText('取消')
  .onConfirm(() => {
    console.log('执行删除操作');
  })
  .onCancel(() => {
    console.log('取消删除');
  })
  .show();
```

### 4. 配置对象构建（实际项目中最常见）

```javascript
class WebpackConfigBuilder {
  constructor() {
    this.config = {
      mode: 'development',
      entry: './src/index.js',
      output: {},
      module: { rules: [] },
      plugins: [],
      devServer: {},
      optimization: {}
    };
  }

  setMode(mode) {
    this.config.mode = mode;
    return this;
  }

  setEntry(entry) {
    this.config.entry = entry;
    return this;
  }

  setOutput(output) {
    this.config.output = { ...this.config.output, ...output };
    return this;
  }

  addLoader(test, loader, options = {}) {
    this.config.module.rules.push({
      test,
      use: {
        loader,
        options
      }
    });
    return this;
  }

  addPlugin(plugin) {
    this.config.plugins.push(plugin);
    return this;
  }

  setDevServer(options) {
    this.config.devServer = { ...this.config.devServer, ...options };
    return this;
  }

  enableOptimization() {
    this.config.optimization = {
      minimize: true,
      splitChunks: {
        chunks: 'all'
      }
    };
    return this;
  }

  build() {
    return this.config;
  }
}

// 使用示例
const config = new WebpackConfigBuilder()
  .setMode('production')
  .setEntry('./src/main.js')
  .setOutput({
    filename: '[name].[contenthash].js',
    path: '/dist'
  })
  .addLoader(/\.js$/, 'babel-loader', {
    presets: ['@babel/preset-env']
  })
  .addLoader(/\.css$/, 'css-loader')
  .enableOptimization()
  .build();
```

## 建造者模式 vs 工厂模式

### 主要区别

| 特性 | 建造者模式 | 工厂模式 |
|------|-----------|----------|
| **关注点** | 关注对象的构建过程 | 关注对象的创建 |
| **复杂度** | 适合构建复杂对象 | 适合创建简单对象 |
| **构建步骤** | 分步骤构建，顺序可能重要 | 一步创建完成 |
| **返回结果** | 通常返回一个复杂的、定制化的对象 | 返回不同类型的对象实例 |
| **使用场景** | 对象有很多可选配置 | 需要根据条件创建不同类型的对象 |
| **灵活性** | 更灵活，可以自由组合配置 | 相对固定，根据参数选择创建哪个对象 |

### 代码对比

```javascript
// 工厂模式：关注"创建什么对象"
class CarFactory {
  static createCar(type) {
    switch(type) {
      case 'sedan':
        return new Sedan();
      case 'suv':
        return new SUV();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Unknown car type');
    }
  }
}

// 使用：一步创建
const car = CarFactory.createCar('sedan');

// ====================================

// 建造者模式：关注"如何构建对象"
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  setSeats(seats) {
    this.car.seats = seats;
    return this;
  }

  build() {
    return this.car;
  }
}

// 使用：分步骤构建
const car = new CarBuilder()
  .setEngine('V8')
  .setColor('red')
  .setWheels(4)
  .setSeats(5)
  .build();
```

### 选择建议

**选择建造者模式的情况：**
- 对象有多个可选参数（超过3-4个）
- 需要链式调用提升代码可读性
- 对象构建过程复杂，需要分步骤完成
- 想要隐藏对象的内部实现细节

**选择工厂模式的情况：**
- 需要根据类型创建不同的对象
- 对象创建逻辑简单
- 需要解耦对象的创建和使用
- 创建对象的种类比较固定

## 优点

1. **封装性好**：将复杂对象的创建过程封装在建造者内部
2. **可读性强**：链式调用使代码更加流畅易读
3. **灵活性高**：可以自由组合配置，创建不同表示的对象
4. **易于扩展**：新增配置项不会影响现有代码
5. **参数检查**：可以在build阶段统一进行参数验证
6. **避免构造函数膨胀**：解决构造函数参数过多的问题

```javascript
// 不使用建造者模式（构造函数参数过多）
const user = new User('John', 'Doe', 'john@example.com', 30, 'USA', 'New York', '10001', true, 'Admin', new Date());

// 使用建造者模式（清晰易读）
const user = new UserBuilder()
  .setFirstName('John')
  .setLastName('Doe')
  .setEmail('john@example.com')
  .setAge(30)
  .setCountry('USA')
  .setCity('New York')
  .setZipCode('10001')
  .setActive(true)
  .setRole('Admin')
  .setCreatedAt(new Date())
  .build();
```

## 缺点

1. **代码量增加**：需要创建多个建造者类
2. **性能开销**：相比直接实例化，会有额外的性能消耗（通常可忽略）
3. **过度设计**：对于简单对象，使用建造者模式会显得冗余
4. **学习成本**：团队成员需要理解这种模式

## 最佳实践

### 1. 参数校验

```javascript
class UserBuilder {
  constructor() {
    this.user = {
      name: '',
      email: '',
      age: 0
    };
  }

  setName(name) {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    this.user.name = name;
    return this;
  }

  setEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
    this.user.email = email;
    return this;
  }

  setAge(age) {
    if (age < 0 || age > 150) {
      throw new Error('Age must be between 0 and 150');
    }
    this.user.age = age;
    return this;
  }

  build() {
    // 最终校验
    if (!this.user.name || !this.user.email) {
      throw new Error('Name and email are required');
    }
    return this.user;
  }
}
```

### 2. 使用 TypeScript 增强类型安全

```typescript
interface IUser {
  name: string;
  email: string;
  age?: number;
  phone?: string;
  address?: string;
}

class UserBuilder {
  private user: Partial<IUser> = {};

  setName(name: string): this {
    this.user.name = name;
    return this;
  }

  setEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  setAge(age: number): this {
    this.user.age = age;
    return this;
  }

  setPhone(phone: string): this {
    this.user.phone = phone;
    return this;
  }

  setAddress(address: string): this {
    this.user.address = address;
    return this;
  }

  build(): IUser {
    if (!this.user.name || !this.user.email) {
      throw new Error('Name and email are required');
    }
    return this.user as IUser;
  }
}
```

### 3. 支持重置和复用

```javascript
class RequestBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.config = {
      method: 'GET',
      headers: {},
      params: {},
      body: null
    };
    return this;
  }

  setMethod(method) {
    this.config.method = method;
    return this;
  }

  // ... 其他方法

  build() {
    const result = { ...this.config };
    this.reset(); // 构建后自动重置，支持复用
    return result;
  }
}

// 复用同一个 builder
const builder = new RequestBuilder();

const request1 = builder
  .setMethod('GET')
  .setUrl('/api/users')
  .build();

const request2 = builder
  .setMethod('POST')
  .setUrl('/api/posts')
  .build();
```

## 总结

建造者模式是一种强大的创建型设计模式，特别适合用于构建复杂的、具有多个可选配置的对象。在现代JavaScript开发中，它被广泛应用于各种场景：

1. **SQL查询构建器**：如Knex.js、Sequelize
2. **HTTP请求库**：如Axios的配置
3. **UI组件库**：如各种对话框、表单构建器
4. **测试框架**：如Jest的测试构建
5. **配置对象**：如Webpack、Babel配置

合理使用建造者模式可以大幅提升代码的可读性和可维护性，但要注意避免过度设计，在简单场景下直接使用对象字面量或工厂函数可能更合适。

**关键原则：当你发现构造函数参数超过3-4个，或者需要频繁创建配置复杂的对象时，就应该考虑使用建造者模式。**
