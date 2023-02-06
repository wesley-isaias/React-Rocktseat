import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,

  },

  seeds(server) {
    server.db.loadData ({
      transactions:[
        {
          id:1,
          title: 'Freelance de website',
          type: 'deposit',
          category:'Dev',
          createdAt: new Date ('2023-06-02 16:20:00'),
        },
        {
          id:2,
          title: 'Aluguel',
          type: 'withdraw',
          category:'Home',
          createdAt: new Date ('2023-06-01 10:27:00'),
        }
      ],
    })
  },

  routes (){
    this.namespace = 'api';
    this.get ('/transactions', ()=> {
      return this.schema.all ('transaction')


    })

    this.post ('/transactions', (schema, request)=> {
      const data = JSON.parse (request.requestBody)

      return schema.create ('transaction', data)

    })

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
