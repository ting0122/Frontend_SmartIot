import { defineStore } from 'pinia'

// pinia用
export default defineStore("location", {
    state: () => ({
        isChecked: false,
        dataArr: [],


    }),
    getters: {
        getChecked: (state) => state.isChecked,
        getDataArr: (state) => state.dataArr,
    },
    actions: {
        toggleCheck() {
            this.isChecked = !this.isChecked;
        },
        //進入頁面搜尋房間或是房間id
        searchRoom(i) {
            const url = i ? `rooms/${i}` : "rooms";
            fetch(`http://localhost:8080/${url}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.dataArr = data
                    console.log(this.dataArr)
                })
        },

        //修改設備狀態或欄位
        deviceStatus(i, j, k, l, m) {
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
        },
        //搜尋列和是否使用中
        searchOnlyRoom(i, j, k, l) {
            const params = new URLSearchParams();
            //this.name 
            if (i) {
                params.append('name', i);
            }
            //this.type
            if (j) {
                params.append('type', j);
            }
            //this.area
            if (k) {
                params.append('area', k);
            }
            //this.status
            if ( l !== null) {
                params.append('status', l);
            }
            fetch(`http://localhost:8080/rooms/search?${params.toString()}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.dataArr = data
                    console.log(this.dataArr)
                })
        },
        createRoom(i,j,k) {
            let obj = {
                name: i,
                area: j,
                type: k
            }
            fetch("http://localhost:8080/rooms", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.searchRoom()
                })
        },
    }

});