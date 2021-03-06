/**
 * popup date picker
 * @author yiminghe@gmail.com
 */
KISSY.add('date/popup-picker', function (S, DatePicker, AlignExtension, Shim) {
    var PopupDatePickerRender = DatePicker.getDefaultRender().extend({}, {
        ATTRS: {
            contentTpl: {
                value: '<div ' +
                    'class="{{getBaseCssClasses "content"}}">' +
                    '{{{include "date/picker/picker-tpl"}}}' +
                    '</div>'
            }
        }
    });
    return DatePicker.extend([Shim, AlignExtension], {
    }, {
        xclass: 'popup-date-picker',
        ATTRS: {
            xrender: {
                value: PopupDatePickerRender
            }
        }
    });
}, {
    requires: [
        'date/picker',
        'component/extension/align',
        'component/extension/shim'
    ]
});