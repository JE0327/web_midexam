let player;//YouTube Player
let currentPlay=0;//記錄目前撥到第幾首歌
//YouTube API Ready
function onYouTubeIframeAPIReady(){
    //console.log("YT ready");
    player =new YT.Player("player",{
        width:"640",
        height:"390",
        videoId:playList[currentPlay],
        playerVars:{
            autoplay:0,//是否自動撥放
            controls:0,//是否顯示控制項
            start:playTime[currentPlay][0],//開始秒數
            end:playTime[currentPlay][1],//結束秒數
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}
//YouTube Player Ready
function onPlayerReady(event){

}//Player State Change
function onPlayerStateChange(event){

}
