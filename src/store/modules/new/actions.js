/* Actions are asynchronous methods. Any change to the data that implies an async function such as a
http request or a timeout, will be written as an action and will be 'dispatched' from the component using the data. */  

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {
    requestNewData: (context) => {
        if (context.state.newData.length === 0) {
            console.log("request sent!");
            Vue.http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                context.commit("setNewData", response.data.slice(0, 10));
            },
            error => {
                console.log(error);
            })
        }
    }
}
