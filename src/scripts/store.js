import {
    reactive
} from 'vue'

export const store = reactive({
    projects: [{
            no: 1,
            title: "Jump to Spring Framework",
            text: "Spring 앱에서 다양한 기능들 실험해보기",
            imgPath: "src/assets/card_img/card_img_1.png", 
            reg_date: "2023.3.13"
        },
        {
            no:2,
            title: "Moldoo 안드로이드 앱",
            text: "집중 관리 앱 Moldoo 개발 과정",
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