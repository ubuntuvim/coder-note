import Service from '@ember/service';

export default Service.extend({
    editormd: null,
    init() {
        this._super(...arguments);
      },
    setEditor(editor) {
        if (this.getEditor() === null || !this.getEditor()) {
            console.log("------------" + editor);
            this.set('editormd', editor);
        }
    },
    getEditor() {
        this.get('editormd');
    }
});
