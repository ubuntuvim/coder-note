import Component from '@ember/component';
// import { inject as service } from '@ember/service';
// import markdownToHTML from '../utils/markdown-to-html';

export default Component.extend({
    fileName: null,
    didInsertElement() {

        let e = editormd("editormd", {
            taskList : true,
            tocm            : true,         // Using [TOCM]
            tex : true,                   // 开启科学公式TeX语言支持，默认关闭
            flowChart : true,             // 开启流程图支持，默认关闭
            sequenceDiagram : true,       // 开启时序/序列图支持，默认关闭,
            toolbarAutoFixed: false,
            toolbarIcons : function() {
                return [
                    "bold", "del", "italic", "quote", "|",
                    "h1", "h2", "h3", "h4", "h5", "h6", "|",
                    "list-ul", "list-ol", "hr", "|",
                    "watch"
                    // "link", "imageUpload", "code", "table", "emoji", "|",
                    // "insertLink", "imageUpload", "|",
                    // "watch", "preview", "|"  //"fullscreen",
                    // "help", "info", "|",
                    // "returnPreLevel", "|",
                    // "autosave"
                ];
            },
            syncScrolling : "single",
            path : "/assets/editormd/lib/" // Autoload modules mode, codemirror, marked... dependents libs path
        });
        // e.hide();
        window.markdownEditor = e;
    },
    actions: {
        showMarkdownContent(mdFileName) {
            // window.markdownEditor.show();
            this.set("fileName", mdFileName);
            let url = `/assets/json-data/${mdFileName}.md`;
            //动态设置编辑器的内容
            Ember.$.get(url, function(data) {
                // Ember.$("#editormd").empty();  //先清空原有记录
                window.markdownEditor.setValue(data);
			});

        }
    }
});
