# type-guard-js

> 类型守卫

## 用法

```ts
import { StringGuard } from 'type-guard-js'

const val = 'aString'

const value = StringGuard(val)
```

## 描述

`*Guard(value:unknown[, defaultValue])`

- `value`: 代守卫参数
- `defaultValue`: 拦截后返回的默认值

## 方法

- `StringGuard`
- `NumberGuard`
- `BooleanGuard`
- `ObjectGuard`
