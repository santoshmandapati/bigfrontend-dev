
function $(el) {
    return {
        css : function(styleProperty, styleValue) {
            el.style[styleProperty] = styleValue;
            return this;
        }
    }
}

$('#button')
    .css('background', 'red')
    .css('color', 'green');