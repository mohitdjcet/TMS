Ext.define('TMS.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',
    title: 'Login',
    frame: true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },

    items: [
        {
            id: 'username',
            allowBlank: false,
            fieldLabel: 'User ID',
            name: 'user',
            emptyText: 'user id'
        },
        {
            id: 'password',
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        },
        {
            xtype: 'checkbox',
            fieldLabel: 'Remember me',
            name: 'remember'
        }
    ],

    buttons: [
        {
            text: 'Register',
            handler: ()=> {
                Ext.History.add('#register')
            }
        },
        {
            text: 'Login',
            itemId: 'loginButton'
        }
    ]
});