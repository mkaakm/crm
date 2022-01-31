
import Router from 'vue-router'


export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'online-product',
            meta:{layout:'empty'},
            component: ()=> import('./views/OnlineProducts')
        },
        {
            path:'/administrators',
            name:'administrators',
            meta:{layout:'main'},
            component: ()=> import('./views/Administrators')
        },
        {
            path:'/clients',
            name:'clients',
            meta:{layout:'main'},
            component: ()=> import('./views/Clients')
        },
        {
            path:'/documents',
            name:'documents',
            meta:{layout:'main'},
            component: ()=> import('./views/Documents')
        },
        {
            path:'/edit-online-product1',
            name:'edit-online-product1',
            meta:{layout:'main'},
            component: ()=> import('./views/EditOnlineProduct1')
        },
        {
            path:'/edit-online-product2',
            name:'edit-online-product2',
            meta:{layout:'main'},
            component: ()=> import('./views/EditOnlineProduct2')
        },
        {
            path:'/orders',
            name:'order',
            meta:{layout:'main'},
            component: ()=> import('./views/Orders')
        },
        {
            path:'/payments',
            name:'payment',
            meta:{layout:'main'},
            component: ()=> import('./views/Payments')
        },
        {
            path:'/settings',
            name:'settings',
            meta:{layout:'main'},
            component: ()=> import('./views/Settings')
        },
    ]
})
