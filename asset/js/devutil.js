if (typeof window.console != 'object'){
    window.console = {log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){}};
}
if (typeof console.debug != 'object')
    console.debug = console.log;
console.l = console.log;
console.log = console.debug;
