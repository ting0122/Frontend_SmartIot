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
        async searchDevices() {
            const params = new URLSearchParams();

            if (this.name) {
                params.append('name', this.name);
            }
            if (this.type) {
                params.append('type', this.type);
            }
            if (this.status !== null) {
                params.append('status', this.status);
            }

            const url = `http://localhost:8080/devices/search?${params.toString()}`;

            try {
                const response = await fetch(url);
                if (response.ok) {
                    this.devices = await response.json();
                } else {
                    console.error('Failed to fetch devices:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        }
    }

});
