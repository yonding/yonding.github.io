<template>
    <div id="chatMenu" v-if="!isStarted">
        <button @click="()=>{isCreating=true; isJoining=false; warning=false;}">NEW ROOM</button> &nbsp;
        <button @click="()=>{isJoining=true; isCreating=false; warning=false;}">JOIN ROOM</button>
        <transition :duration="{ enter: 550, leave: 0 }" name="nested">
            <form v-if="isCreating" onsubmit="return false;" class="outer">
                <fieldset class="inner">
                    <legend>NEW ROOM</legend>
                    <hr>
                    <div style="height: 15px;"></div>
                    ROOM NAME <br>
                    <input v-model=roomName type="text" /> <br />
                    <div style="height: 10px;"></div>
                    PASSWORD <br>
                    <input v-model=password type="text" /> <br><br>
                    <p v-if="blankWarning" id="blankWarning" style="color: rgb(164, 55, 55);">방 이름과 비밀번호를 입력해주세요.</p>
                    <p v-if="alreadyExist" id="alreadyExist" style="color: rgb(164, 55, 55);">동일한 방 이름이 이미 존재합니다.</p>
                    <p v-if="serverError" id="serverError" style="color: rgb(164, 55, 55);">서버 연결 실패</p>
                    <button @click="createRoom();">CREATE</button>
                </fieldset>
            </form>
        </transition>
        <transition :duration="{ enter: 550, leave: 0 }" name="nested">
            <form v-if="isJoining" onsubmit="return false;" class="outer">
                <fieldset class="inner">
                    <legend>JOIN ROOM</legend>
                    <hr>
                    <div style="height: 15px;"></div>
                    ROOM NAME <br>
                    <input v-model=roomName type="text" /> <br />
                    <div style="height: 10px;"></div>
                    PASSWORD <br>
                    <input v-model=password type="text" /> <br><br>
                    <p v-if="blankWarning" id="blankWarning" style="color: rgb(164, 55, 55);">방 이름과 비밀번호를 입력해주세요.</p>
                    <p v-if="wrongWarning" id="wrongWarning" style="color: rgb(164, 55, 55);">방 이름 또는 비밀번호가 틀렸습니다.</p>
                    <p v-if="fullWarning" id="fullWarning" style="color: rgb(164, 55, 55);">해당 방의 인원이 초과되었습니다.</p>
                    <p v-if="serverError" id="serverError" style="color: rgb(164, 55, 55);">서버 연결 실패</p>
                    <button @click="joinRoom();">JOIN</button>
                </fieldset>
            </form>
        </transition>
    </div>
    <div class="video-container">
        <div id="videos" v-if="isStarted">
            <video id="user-1" class="video-player" autoplay playsinline muted></video>
            <video id="user-2" class="video-player" autoplay playsinline></video>
        </div>
        <div v-if="isStarted">
            <button id="hangupButton" @click="hangup();">HANG UP</button>
        </div>
    </div>
</template>

<script>
import {
    create,
    join,
    close
} from "@/scripts/videoChat.js";

export default {
    name: 'VideoChat',
    el: '#chatMenu',
    data() {
        return {
            isStarted: false,
            isCreating: false,
            isJoining: false,
            blankWarning: false,
            wrongWarning: false,
            alreadyExist: false,
            fullWarning: false,
            serverError: false,
            roomName: '',
            password: ''
        }
    },
    methods: {
        createRoom() {
            if (this.roomName == '' || this.password == '') {
                this.isStarted = false;
                this.alreadyExist = false;
                this.blankWarning = true;
                return;
            } else {
                fetch('https://signaling.store/creatable?roomName=' + this.roomName, {})
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                        if (data == "false") {
                            this.isStarted = false;
                            this.blankWarning = false;
                            this.alreadyExist = true;
                        } else {
                            this.isCreating = false;
                            this.isStarted = true;
                            create(this.roomName, this.password);
                        }
                    })
                    .catch(error => {
                        this.serverError = true;
                        console.error('Error:', error);
                    });
            }
        },
        joinRoom() {
            if (this.roomName == '' || this.password == '') {
                this.isStarted = false;
                this.fullWarning = false;
                this.wrongWarning = false;
                this.blankWarning = true;
                return;
            } else {
                fetch('https://signaling.store/joinable', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "roomName": this.roomName,
                            "password": this.password
                        })
                    })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                        if (data == "null" || data == "wrong") {
                            this.isStarted = false;
                            this.blankWarning = false;
                            this.fullWarning = false;
                            this.wrongWarning = true;
                        } else if (data == "full") {
                            this.isStarted = false;
                            this.wrongWarning = false;
                            this.blankWarning = false;
                            this.fullWarning = true;
                        } else {
                            this.isJoining = false;
                            this.isStarted = true;
                            join(this.roomName, this.password);
                        }
                    })
                    .catch(error => {
                        this.serverError = true;
                        console.error('Error:', error);
                    });
            }
        },
        hangup() {
            close();
            this.isStarted = false;
        }
    }
}
</script>

<style scoped>
#videos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
}

.video-player {
    background-color: rgb(230, 230, 230);
    width: 100%;
    height: 370px;
}

form {
    width: 400px;
    margin: 50px auto 0px;
    background-color: rgb(247, 247, 247);
    border: 1px solid lightgray;
    padding: 20px;
}

legend {
    font-weight: 800;
}

fieldset {
    font-size: 20px;
    margin: 5px;
}

input {
    width: 250px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding: 15px;
    background-color: rgb(233, 233, 233);
    margin: 10px auto;
}

button {
    font-size: 20px;
    border: 1px solid lightgray;
    padding: 10px 20px;
    margin: auto 10px;
    background-color: white;
}

.nested-enter-active {
    transition: all 0.3s ease-in-out;
}

.nested-enter-from {
    transform: translateY(30px);
    opacity: 0;
}

.nested-enter-active .inner {
    transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner {
    transform: translateY(30px);
    opacity: 0.001;
}

#hangupButton {
    margin: 10px auto;
}

button:hover {
    font-size: 20px;
    box-shadow: 0 0 0 1px rgb(107, 107, 107) inset;
    background-color: rgb(240, 239, 239);
}

input:focus {
    background-color: rgb(219, 233, 237);
}

@media (max-width: 768px) {
    button {
        font-size: 15px;
        border: 1px solid lightgray;
        padding: 5px 10px;
        margin: auto 5px;
        background-color: white;
    }
    button:hover {
        font-size: 15px;
        box-shadow: 0 0 0 1px rgb(107, 107, 107) inset;
        background-color: rgb(240, 239, 239);
    }
    h1 {
        font-size: 26px;
        line-height: 1.5em;
    }
    h2 {
        font-size: 23px;
    }
    p {
        font-size: 15px;
    }
    #videos {
        display: block;
    }
    .video-player {
        background-color: rgb(230, 230, 230);
        width: 320px;
        margin: 2px auto;
        height: 230px;
    }
    form {
        width: 280px;
        margin: 25px auto 0px;
        background-color: rgb(247, 247, 247);
        border: 1px solid lightgray;
        padding: 10px;
    }
    legend {
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 0;
    }
    fieldset {
        font-size: 18px;
        margin: 5px;
    }
    hr {
        margin-bottom: 0;
    }
    input {
        width: 200px;
        height: 40px;
        font-size: 18px;
        text-align: center;
        border: 0;
        border-radius: 10px;
        outline: none;
        padding: 10px;
        background-color: rgb(233, 233, 233);
        margin: 5px auto;
    }
    #chatMenu{
        margin: 20px 0px 30px;
    }
}
</style>
