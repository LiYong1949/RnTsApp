/*eslint no-undef: "error"*/

export { };
declare global{
  var _PROPS: any;
  var G_CONFIG: any;
  var G_HTTP_WHITELIST: Array<string>;
  var G_LOCALSTORAGE_REMOVE: (name: string) => void;
  var G_LOCALSTORAGE_CLEAR: () => void;
  var G_LOCALSTORAGE_GET: (name: string) => any;
  var G_LOCALSTORAGE_SET: (name: string, datas: any) => void;
  var G_DATE_FORMAT: (time: any, type: string, defaultValue: any) => void;
}
