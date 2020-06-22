(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(require('jquery')):typeof define==='function'&&define.amd?define(['jquery'],factory):(factory(global.jQuery))}(this,(function($){'use strict';$=$&&$.hasOwnProperty('default')?$['default']:$;
/**
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
$.extend($.expr.pseudos||$.expr[':'],{'in-viewport':$.expr.createPseudo?$.expr.createPseudo(function(argsString){return function(currElement){return isInViewport(currElement,getSelectorArgs(argsString))}}):function(currObj,index,meta){return isInViewport(currObj,getSelectorArgs(meta[3]))}});$.fn.isInViewport=function(options){return this.filter(function(i,el){return isInViewport(el,options)})};$.fn.run=run;function run(args){var this$1=this;if(arguments.length===1&&typeof args==='function'){args=[args]}
if(!(args instanceof Array)){throw new SyntaxError('isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions')}
args.forEach(function(arg){if(typeof arg!=='function'){console.warn('isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions');console.warn('isInViewport: Ignoring non-function values in array and moving on')}else{[].slice.call(this$1).forEach(function(t){return arg.call($(t))})}});return this}
function getScrollbarWidth(viewport){var el=$('<div></div>').css({width:'100%'});viewport.append(el);var scrollBarWidth=viewport.width()-el.width();el.remove();return scrollBarWidth}
function isInViewport(element,options){var ref=element.getBoundingClientRect();var top=ref.top;var bottom=ref.bottom;var left=ref.left;var right=ref.right;var settings=$.extend({tolerance:0,viewport:window},options);var isVisibleFlag=!1;var $viewport=settings.viewport.jquery?settings.viewport:$(settings.viewport);if(!$viewport.length){console.warn('isInViewport: The viewport selector you have provided matches no element on page.');console.warn('isInViewport: Defaulting to viewport as window');$viewport=$(window)}
var $viewportHeight=$viewport.height();var $viewportWidth=$viewport.width();var typeofViewport=$viewport[0].toString();if($viewport[0]!==window&&typeofViewport!=='[object Window]'&&typeofViewport!=='[object DOMWindow]'){var viewportRect=$viewport[0].getBoundingClientRect();top=top-viewportRect.top;bottom=bottom-viewportRect.top;left=left-viewportRect.left;right=right-viewportRect.left;isInViewport.scrollBarWidth=isInViewport.scrollBarWidth||getScrollbarWidth($viewport);$viewportWidth-=isInViewport.scrollBarWidth}
settings.tolerance=~~Math.round(parseFloat(settings.tolerance));if(settings.tolerance<0){settings.tolerance=$viewportHeight+settings.tolerance}
if(right<=0||left>=$viewportWidth){return isVisibleFlag}
isVisibleFlag=settings.tolerance?top<=settings.tolerance&&bottom>=settings.tolerance:bottom>0&&top<=$viewportHeight;return isVisibleFlag}
function getSelectorArgs(argsString){if(argsString){var args=argsString.split(',');if(args.length===1&&isNaN(args[0])){args[1]=args[0];args[0]=void 0}
return{tolerance:args[0]?args[0].trim():void 0,viewport:args[1]?$(args[1].trim()):void 0}}
return{}}})))