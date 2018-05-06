import Component from '@ember/component';
import { inject as service } from '@ember/service';
import markdownToHTML from '../utils/markdown-to-html';

export default Component.extend({
    fileName: null,
    didInsertElement() {
        let e = editormd("editormd", {
            syncScrolling : "single",
            path : "/assets/editormd/lib/" // Autoload modules mode, codemirror, marked... dependents libs path
        });
        e.hide();
        window.markdownEditor = e;
    },
    actions: {
        showMarkdownContent(mdFileName) {
            this.set("fileName", mdFileName);
            let url = `/assets/json-data/${mdFileName}.md`;
            //动态设置编辑器的内容
            $.get(url, function(data) {
                Ember.$("#editormd-view").empty();  //先清空原有记录
                markdownToHTML("editormd-view", {markdown : data});
			});

        },
        // 双击预览页面转到编辑模式
        edit(fileName) {
            console.log('fileName == ' + fileName);
            //动态设置编辑器的内容
            let url = `/assets/json-data/${fileName}.md`;
            $.get(url, function(data) {
                // Ember.$("#editormd-view").hide();
                window.markdownEditor.setValue(data);
                window.markdownEditor.show();
			});
        }
    }
});
