������������д���·�����ʵ�ֿ���
```js
ajaxOptions: function(url, type, options) {
    var hash = this._super(url, type, options);
    hash.dataType = "jsonp";
    return hash;
}
```