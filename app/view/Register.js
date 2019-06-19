Ext.define('TMS.view.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'register-form',
    title: 'Register',
    frame: true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },

    items: [
        {
            allowBlank: false,
            fieldLabel: 'First Name',
            name: 'name',
            emptyText: 'First Name'
        },
        {
            allowBlank: false,
            fieldLabel: 'Last Name',
            name: 'username',
            emptyText: 'Last Name',
            inputType: 'name'
        },
        {

            allowBlank: false,
            fieldLabel: 'Password',
            name: 'password',
            emptyText: 'Password',
            inputType: 'Password'
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
            itemId: 'registerBtn',
        },
        {
            text: 'Login',
            handler: () => {
                Ext.History.add('#login')
            }
        }
    ]
});