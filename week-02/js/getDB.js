window.onload = function () {
    const url = "/week-02/task.json"

    /**
     * 读取json文件
     */
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            let playlist = json[`playlist`];
            let songlist = json[`songlist`];
            let mvlist = json[`mvlist`];

            let playlistStr = ``
            let songlistStr = ``
            let mvlistStr = ``

            for (let i = 0; i < playlist.length; i++) {
                playlistStr = playlistStr + `   
                        <li class="item">
                        <div class="img-box">
                            <img class="image"
                                src= ${playlist[i]['cover']}
                                alt="">
                            <div class="play_logo"></div>
                            <div class="mask"></div>
                        </div>
                            <div class="playlist__title_txt"><span>${playlist[i]['title']}</span></div>
                            <div class="playlist_other"><span>播放量: </span>${(playlist[i]['listen_num'] / 10000).toFixed(1)}万</div>
                        </li>
                    `
            }
            for (let i = 0; i < songlist.length; i++) {

                let sings = '';
                if (songlist[i]['singer'].length > 1) {
                    for (let j = 0; j < songlist[i]['singer'].length; j++) {
                        sings = sings + songlist[i]['singer'][j] + '/';
                    }
                } else {
                    sings = songlist[i]['singer'][0];
                }


                songlistStr = songlistStr + `
                        <li class="item">
                            <div class="img-box ">
                                <img class="mod_slide_img"
                                    src= ${songlist[i]['cover']}
                                    alt="">
                                <div class="play_logo1"></div>
                                <div class="mask1"></div>
                            </div>
                            <div class="detail">
                                <div class="song-name">${songlist[i]['name']}${songlist[i]['subtitle']}</div>
                                <div class="singer-name">${sings}</div>
                            </div>
                            <div class="time">
                                <span class="time-length">02.56</span>
                            </div>
                        </li>
                `
            }
            for (let i = 0; i < mvlist.length; i++) {
                mvlistStr = mvlistStr + ``
            }

            // document.querySelector('#playlist').innerHTML = playlistStr;
            // document.querySelector('#songlist').innerHTML = songlistStr;
            // document.querySelector('#mvlist').innerHTML = mvlistStr;
        }
    }

}