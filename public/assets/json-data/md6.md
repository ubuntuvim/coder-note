��ʱ�俴��������϶�˵��Ember.js��Ŀ�У�����Ҫ���Լ��������۹����ˣ�

[https://github.com/duoshuo/node-duoshuo](https://github.com/duoshuo/node-duoshuo)


### ��̬����

```js
DUOSHUO.initSelector('.ds-share',{type:'ShareWidget'});
```
[http://dev.duoshuo.com/docs/50b344447f32d30066000147](http://dev.duoshuo.com/docs/50b344447f32d30066000147)

����վ����ѯ�ʣ�ϣ������ҳ�������б���ʵ�֣������һ����ťչ�������µ����ۡ��Ĺ��ܡ�

��ʵ���ڵĶ�˵���Ѿ�֧��������ģʽ��ʵ�ַ����������ӣ�

1.���ȼ��ض�˵embed.js�������룬������duoshuoQuery����head�ڼ��룺
```
<script>var duoshuoQuery = {short_name:"��Ķ�˵��������"};</script>
<script src="http://static.duoshuo.com/embed.js"></script>
```
��˵����������ָ��ע���˵ʱ����д��abc.duoshuo.com�е�abc���֣�

2.��дһ��javascript���������º���Ϊʾ����
```
function toggleDuoshuoComments(container){
    var el = document.createElement('div');//��div����Ҫ����class="ds-thread"
    el.setAttribute('data-thread-key', '���µı���ID');//��ѡ����
    el.setAttribute('data-url', '����ҳ����ַ');//��ѡ����
    el.setAttribute('data-author-key', '���ߵı����û�ID');//��ѡ����
    DUOSHUO.EmbedThread(el);
    jQuery(container).append(el);
}
```
3.�ڰ�ť������onclick�¼���
```html
<a href="javascript:void(0);" onclick="toggleDuoshuoComments('#comment-box');">չ������</a>

<div id="comment-box" ></div>
```
���Ƶģ������Ҫ��ҳ�������֮�󣬶�̬����������ˢ�£������`DUOSHUO.ThreadCount`������


## disqus

[https://github.com/sir-dunxalot/ember-disqus](https://github.com/sir-dunxalot/ember-disqus)