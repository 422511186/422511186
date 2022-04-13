const url = "./db/task.json"
/**
 * 读取json文件
 */
let request = new XMLHttpRequest()
request.open("get", url)

request.send(null)

request.onload = function () {
    if (request.status === 200) {
        let json = JSON.parse(request.responseText)

        const main_ul = document.querySelector('#main-ul')
        let str = ``
        for (let i = 0; i < json.length; i++) {
            str += `
                            <li>
                                <img class="img" src=./${json[i].cover} alt="">
                                <div class="main-detail">
                                    <div class="left">
                                        <img src=./${json[i].avatar} alt="">
                                        <span class="name">${json[i].name}</span>
                                        <span class="tag">${json[i].badge.toUpperCase()}</span>
                                    </div>
                                    <div class="right">
                                        <span><i class="ic love-icon"></i>${json[i].likes}</span>
                                        <span><i class="ic count-icon"></i>${json[i].views}</span>
                                    </div>
                                </div>
                            </li>
                        `

        }
        main_ul.innerHTML = str
    }
}

