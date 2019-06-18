Ext.application({
    name: 'TMS',

    // models: ['TMS.model.Customers'],
    // stores: ['TMS.store.Customers'],
    controllers: ['LoginController'],
    views: ['Login','Viewport','Register','Home'],

    launch: function () {
        console.log("hello MVC App")
        //   'TMS.view.Login'
    },

    defaultToken: 'login',
    enableRouter: true,
    autoCreateViewport: true,

    // mainView: 'TMS.view.Login',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    routes: {
        'login': {
            action: 'goLogin',
            before: 'beforeLogin',
        },
        'register': {
            action: 'goRegister',
            before: 'beforeRegister',
        },
        'home': {
            action: 'goHome',
        },
    },
    onUnmatchedRoute: function (hash) {
        alert(" Error 404 View not found " + hash);
    },
    beforeLogin: function (action) {
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goLogin: function () {
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('TMS.view.Login');
        target.add(view);
    },
    beforeRegister: function (action) {
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goRegister: function () {
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('TMS.view.Register');
        target.add(view);
    },
    goHome: function () {
        Ext.log(">> goHome");
        viewport = Ext.getCmp('viewport');
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('TMS.view.Home');
        target.add(view);
    },
    

});