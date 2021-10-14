export interface course {
    id: number,
    dept_code: string,
    serial: string,
    course_name: string,
    teacher: string,
    time: string,
    dept_name: string,
    comment_num: number
}

// 範例
// "id":363,
// "系號":"A9",
// "選課序號":"046",
// "課程名稱":"音樂舞蹈戲劇",
// "老師":"林怡薇",
// "時間":"[2]3~4 ",
// "學分":2,
// "選必修":"必修",
// "系所名稱":"通識中心 ",
// "comment_num":77,
// "課程碼":"A92E700"

// {
//     "/course": {
//         "target": "https://nckuhub.com/",
//         "changeOrigin": true,
//         "secure": true
//     }
// }
// "proxyConfig": "./proxy.conf.json"