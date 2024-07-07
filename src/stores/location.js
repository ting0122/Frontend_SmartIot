import { defineStore } from 'pinia'

// pinia用
export default defineStore("location", {
    state: () => ({
        isChecked: false,
        dataArr:[],


    }),
    getters: {
        getChecked: (state) => state.isChecked,
        getDataArr: (state) => state.dataArr,
    },
    actions: {
        toggleCheck() {
            this.isChecked = !this.isChecked;
        },
        searchRoom(i) {
            fetch(`http://localhost:8080/rooms/${i}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.dataArr = data.devices
                })
        },
        deviceStatus(i,j,k,l,m){
            let changeobj = {
                id: i,
                type: j,
                name: k,
                status: l,
                roomId: m

            }
            fetch(`http://localhost:8080/devices`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(changeobj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)                    
                })
        }
    }
});
