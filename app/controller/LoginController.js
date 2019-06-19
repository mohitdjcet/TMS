Ext.define('TMS.controller.LoginController', {
    extend: 'Ext.app.Controller',
    models: [],
    views: ['TMS.view.Login'],
    init: function () {
    	console.log("regiter listeners...");
        this.control({
        	"#loginButton": {
			click: this.doLogin,
			}
        });
    },
    doLogin: function () {
    	var username =Ext.getCmp("username").getValue();
    	var password =Ext.getCmp("password").getValue();
		Ext.Ajax.request({
		    url: 'http://localhost:3000/users',
		    method: 'GET',
	      	params: { 
	   		'username':username,'password':password
			},
		     success: function(response, opts) {
		         var obj = Ext.decode(response.responseText);
		         console.log(obj);
                 if(obj.length === 1){
                     Ext.History.add('#register');
                 }else{
                     alert('Login failed');
                 }
		     },
		     failure: function(response, opts) {
		         console.log('server-side failure with status code ' + response.status);
		     }
		 });
    }
});
