Ext.define('TMS.view.Viewport', {
    extend: 'Ext.container.Viewport',

    id: 'viewport',
    layout: 'border',

    items: [
        {
            xtype: 'container',
            itemId: 'viewport-target',
            region: 'center',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },

        },
        {
            title: 'TMS Application',
            region: 'north',
        tools: [{
                xtype: 'button',
                text: 'Home',
                handler: () => {
                    Ext.History.add('#home');
                }
            }, {
                xtype: 'button',
                text: 'Login',
                handler: () => {
                    Ext.History.add('#login');
                }
            }, {
                xtype: 'button',
                text: 'Create an account',
                handler: () => {
                    Ext.History.add('#register');
                }
            }]
        },

        {
            title: '@ Created by Infogain.pvt.Ltd',
            region: 'south',
            flex: .1
        }
    ]

});
