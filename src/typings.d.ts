/* SystemJS module definition */

declare module "*.json" {
    const value: any;
    export default value;
}

declare var module: NodeModule;

declare var tinymce: any;

interface NodeModule {
  id: string;
}
