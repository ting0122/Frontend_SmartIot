import { defineStore } from 'pinia'

// pinia用
export default defineStore("location", {
    state: () => ({
        deviceArr: [],
        roomArr: [],
        dataArr: [],
        oneRoom: {},
        localRoomId: null,
        localRoomArea: ""


    }),
    getters: {
        getDeviceArr: (state) => state.deviceArr,
        getRoomArr: (state) => state.roomArr,
        getDataArr: (state) => state.dataArr,
        getLocalRoomId: (state) => state.localRoomId,
        getLocalRoomArea: (state) => state.localRoomArea,
        getOneRoomArr: (state) => state.oneRoom,
    },
    actions: {
        //進入頁面搜尋全房間
        searchAllRoom() {
            fetch(`http://localhost:8080/rooms`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log('搜尋房間data', data)
                    this.roomArr = data
                    console.log('搜尋房間roomArr', this.roomArr)
                })
        },
        //進入頁面搜尋房間id
        searchRoom(i) {
            this.localRoomId = i
            fetch(`http://localhost:8080/rooms/${i}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log('搜尋房間oneRoom', data)
                    this.oneRoom = data
                    this.localRoomArea = data.area
                    console.log(this.localRoomArea)
                    this.searchDevice(null, null, this.localRoomArea, null)
                    console.log('搜尋房間oneRoom', this.oneRoom)
                })
        },
        //房間搜尋列和是否使用中
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
            if (l !== null) {
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
                    this.roomArr = data
                    console.log(this.roomArr)
                })
        },
        //建立房間
        createRoom(i, j, k) {
            let obj = {
                name: i,
                area: j,
                type: k,
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
                    this.searchAllRoom()
                })
        },
        //新增/修改設備狀態或欄位
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
                    // this.searchRoom(this.localRoomId)
                    this.searchDevice(null, null, null, null)
                })
        },
        //搜尋設備
        searchDevice(i, j, k, l, useLocalRoomArea = false) {
            
            
            if (useLocalRoomArea) {
                k = this.localRoomArea;
            }
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
            if (l !== null) {
                params.append('status', l);
            }
            fetch(`http://localhost:8080/devices/search?${params.toString()}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.deviceArr = data
                    console.log(this.deviceArr)
                })
        },
    }

});