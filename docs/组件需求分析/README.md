---
sidebarDepth: 2
---
# 组件需求分析

## Input
- 支持 input, focus, blur, change 事件
- 存在 error, disabled, readOnly 等状态

## Popover
- 用户可能在 popover 的容器元素上添加 click事件,然后希望点击 button 后能触发容器元素的 click 事件(利用事件冒泡机制),所以 popover 的内部元素的 click 不能用 stop 修饰符
- 点击按钮后显示 content-wrapper,然后点击其它位置隐藏 content-wrapper;
- 点击显示出来的 content-wrapper 不隐藏 content-wrapper (因为浏览网站者可能有复制文本内容的需求)
- 显示出来的 content-wrapper 有一个关闭键,点击关闭 content-wrapper
- button 支持 click,hover 两种事件
- popover 与 toast 的共同点在于:都可通过点击按钮弹出,都可手动关闭
- popover 与 toast 的区别在于:
    * 如果弹出 toast 后再次点击按钮,那么将关闭旧的 toast 并创建一个新的 toast
    * 如果弹出 popover 后再次点击按钮,那么仅关闭当前的 popover
    * 手动关闭 toast 会触发 callback
    * 手动关闭 popover 不会触发 callback
    * toast 没有设置"点击 toast 以外其他位置关闭 toast"
    * toast 不会自动关闭

## Carousel
- 不采用有缝轮播（无法直接从3到1,不好）
- 支持点击 dot 切换 slide-item
- 支持 mouseenter 暂停动画；mouseouter 继续播放
- 支持自动播放
- 支持移动端（touch 事件）



## Pager
- 第一页显示,最后一页显示,当前页与前后两页显示,共7页
- 如果总页数<7,则全部显示
- 用户可以选择当前页的前一页/后一页,可以选择指定页
- 每页选择多少条不由pager负责
- 当前页不可点击

## Validator(开发中...)
- 两种验证方式
    * 即时验证:邮箱格式不对
    * 异步验证:用户名被占用（需要后端查验）
- 邮箱验证
    * @前后不用验证
    * 正则:/.+@.+/  
- 手机验证
    * 1开头,接10个数字
- errors 优先级
    * required 最高。即不会出现 errors={required:'必填',pattern:'格式不正确',...}
    * pattern,minLength 同级。即可能出现 errors={pattern:'格式不正确',minLength:'太短'}   
- 如果 pattern 正确,那么 errors['email']['pattern']应该是 undefiend(即不存在),而不应该是{}   
- 如果 email 正确,那么 errors['email']应该是 undefiend,而不应该是{} 
- 没有任何错误的情况下,errors 应该为{}  
- 不存在的规则,报错
- 用户可以自定义规则
- 提供向validator添加公共方法的接口
    
## Table(开发中...)
> 数据排序由后端实现
> 前端永远拿不到所有数据,否则浏览器会炸掉
- 展示数据（带边框,紧/松,单双）
- 选中数据（单选/全选/半选）
    * 判断用户是否选中所有数据不能用 return this.dataSource.length === this.selectedItems.length
    * 应该去判断两个数组的元素id是否完全一致
- 展示排序
    * height 不排序,name 升序,score 由用户选择排序方式
    ```
    orderBy:{
      name:'asc', 
      score:true
    },
   ```
- 固定表头
    * 用户传递一个height:包含表头的高度
    * 用户给出各列宽度,而不是直接指定整个table的宽度。
- 行可展开

    
## Uploader(开发中...)
- 支持自动上传和手动上传
- 对于文件/图片列表,可显示进度（真/假）,及删除文件/图片
    * 进度信息由浏览器提供
- 支持拖曳上传    
- 对于头像上传,不需要列表
      
