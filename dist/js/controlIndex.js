!function(n,e){function t(n){this.curIndex=0,this.len=n}t.prototype.getNewIndex=function(n){return"prev"===n?this.curIndex--:"next"===n&&this.curIndex++,(this.curIndex+this.len)%this.len},e.index=t}(window.Zepto,window.player||(window.player={}));