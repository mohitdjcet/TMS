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
            id: 'FirstName',
            allowBlank: false,
            fieldLabel: 'First Name',
            name: 'First Name',
            emptyText: 'user id'
        },
        {
            id: 'LastName',
            allowBlank: false,
            fieldLabel: 'Last Name',
            name: 'pass',
            emptyText: 'Last Name',
            inputType: 'name'
        },
        {
            id: 'Email-ID',
            allowBlank: false,
            fieldLabel: 'Email-ID',
            name: 'pass',
            emptyText: 'Email-ID',
            inputType: 'name'
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
        },
        {
            text: 'Login',
            handler: ()=> {
                Ext.History.add('#login')
            }
        }
    ]
});