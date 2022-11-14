## 安装

```shell
npm install@zgeaw/FormDesign
```

**NodeJs:**

请自行导入`ElementUI`并挂载

```js
import FormCreate from "@zgeaw/FormCreate";
import FormDesign from "@zgeaw/FormDesign";

Vue.use(FormCreate);
Vue.use(FormDesign);
```

## 使用

```html
<FormDesign ref="designer" />
```

## 组件`props`

- **menu**`MenuList` 重新配置拖拽的组件
- **height**`int|string` 设计器组件高度, 默认`100%`

## 组件方法

- 获取当前生成表单的生成规则

  ```ts
  type getRule = () => Rule[];
  ```

  **示例: `this.$refs.designer.getRule()`**

- 获取当前表单的全局配置

  ```ts
  type getOption = () => Object;
  ```

- 设置当前生成表单的规则

  ```ts
  type setRule = (rules: Rule[]) => void;
  ```

- 设置当前表单的全局配置

  ```ts
  type setOption = (option: Object) => void;
  ```

- 增加一组拖拽组件

  ```ts
  type addMenu = (menu: Menu) => void;
  ```

- 删除一组拖拽组件

  ```ts
  type removeMenu = (name: string) => void;
  ```

- 批量覆盖插入拖拽组件

  ```ts
  type setMenuItem = (name: string, items: MenuItem[]) => void;
  ```

- 插入一个拖拽组件到分组

  ```ts
  type appendMenuItem = (name: string, item: MenuItem) => void;
  ```

- 删除一个拖拽组件

  ```ts
  type removeMenuItem = (item: string | MenuItem) => void;
  ```

- 新增一个拖拽组件的生成规则

  ```ts
  type addComponent = (item: DragRule) => void;
  ```
