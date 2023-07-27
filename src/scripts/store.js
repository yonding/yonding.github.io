import {
    reactive
} from 'vue'

export const store = reactive({
    projects: [{
            no: 1,
            title: "zeroMQ",
            text: "이건 제로 메세지 큐",
            imgPath: "src/assets/card_img/card_img_1.png", 
            reg_date: "2023.3.13"
        },
        {
            no:2,
            title: "RabbitMQ",
            text: "이건 rabbit message 큐",
            imgPath: "../assets/card_img/card_img_1.png",
            reg_date: "2023.3.13"
        },
        {
            no:3,
            title: "P2P와 WebRTC",
            text: "WebRTC로 구현한 P2P 화상회의",
            tag: ["WebRTC"]
        }
    ]
})