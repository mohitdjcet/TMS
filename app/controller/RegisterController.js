Ext.define('TMS.controller.RegisterController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.register',
    init: function (application) {
        this.control({
            "#registerBtn": {
                click: 'onRegister'
            }
        });
    },
    onRegister: btn => {
        const form = btn.up('register-form').getForm();
        const formValues = form.getValues();
        const id = Math.ceil(Math.random() * 1000000);
        const obj = { id, ...formValues };
        form.isValid() ? Ext.Ajax.request({
            //             url: TMS.Constants.BASE_URL + '/users',
            url: 'http://localhost:3000/users',
            method: 'POST',
            params: obj,
            success: (res, opts) => {
                console.log(res.responseText);
                Ext.Msg.alert('Success', 'Successfully registered')
            },
            failure: (res, opts) => {
                console.log(res.responseText);
                Ext.Msg.alert('Failed', 'Failure in registering')
            }
        }) : Ext.Msg.alert('Failed', 'Failure in registering');
    }
}); 