---
title: Input
---
# 输入框
## 基础用法
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

## Input Attributes
> - value/v-model: 类型string/number
> - readonly: 是否只读,boolean类型,默认值为“true”。
> - error: 错误信息,string类型。
> - disabled: boolean类型,默认值为“true”。
## Events
> - blur:在 Input 失去焦点时触发	,回调参数(event: Event)
> - focus:	在 Input 获得焦点时触发	,回调参数(event: Event)
> - change:	在 Input change 时触发	,回调参数(value: string | number)
> - input:	在 Input 值改变时触发	,回调参数(value: string | number)
