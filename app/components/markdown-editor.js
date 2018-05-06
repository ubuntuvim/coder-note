import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        var editor = editormd("editormd2", {
            width   : "90%",
            height  : 640,
            syncScrolling : "single",
            path : "assets/editor.md/lib/" // Autoload modules mode, codemirror, marked... dependents libs path
        });
    }
});
