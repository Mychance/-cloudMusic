<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
	<link rel="stylesheet" href="css/frame.css"/>
	<link rel="stylesheet" href="css/music.css"/>
	<link rel="stylesheet" href="css/index.css"/>
	<link rel="shortcut icon" type="image/x-icon" href="image/favicon.ico" />
</head>
<body>

<!-- 播放条 -->
<div class="fix-bottom">
    <div class="fix-lock">
        <div class="lock-img"><a href="javascript:;" class="unlock"></a></div>
    </div>
    <div class="fix-play">
        <div class="play-btns" id="play-btns">
            <a href="javascript:;" class="prv" title="上一首"></a>
            <a href="javascript:;" id="data-ps" class="ply" title="播放"><!--.pas--></a>
            <a href="javascript:;" class="nxt" title="下一首"></a>
        </div>
        <div class="play-head">
            <a href="#"><img src="image/default_album.jpg" alt=""></a>
        </div>
        <div class="play-ing" id="play-ing">
            <div class="ptitle">
                <a href="#" class="title" title="曲名"></a>
                <a href="#" class="singer" title="演绎者"></a>
            </div>
            <div class="pbar">
                <div class="barbg"><!-- 总进度条 -->
                    <div class="rdy"></div><!-- 已加载 -->
                    <div class="cur">
                        <div class="cur-inner">
                            <span class="btn-cur"><i></i></span>
                        </div>'
                        <!-- <span class="btn-cur" id="data-cur"><i><!-- loading... --></i></span>
                    </div>
                </div>
                <span class="clock"><i>00:00</i> / <em>00:00</em></span>
            </div>
        </div>
        <div class="play-oper" id="play-oper">
            <a href="javascript:;" class="icon-colle" title="收藏"></a>
            <a href="javascript:;" class="icon-share" title="分享"></a>
        </div>
        <div class="play-form">
            <div class="form-title">
                <h3>播放列表</h3>
                <a href="javascript:;" class="icon-colle"><span></span>收藏全部</a>
                <span>|</span>
                <a href="javascript:;" class="icon-empty"><span></span>清空</a>
                <a href="javascript:;" class="table-close" title="关闭"></a>
            </div>
            <div class="form-tab" id="form-tab">
                <ul class="mtab" id="mtab"><!-- 播放列表 --></ul>    
                <div class="empty">播放列表为空哦</div>
            </div>
            <div class="scrol"><span class="icon-scl"></span></div>
        </div>
        <div class="play-ctrl" id="play-ctrl">
            <div class="cbar">  
                <div class="barbg"><!-- 音量调节条 -->
                    <div class="cur">
                        <span class="btn-cur" id="ctrl-cur"></span>
                    </div>
                </div>
            </div>        
            <a href="javascript:;" class="icon-vol" title="音量"></a>
            <a href="javascript:;" class="icon-loop" id="data-lop" title="循环"></a>
            <div class="lp-tip">单曲循环</div>
            <span class="music-list">
                <a href="javascript:;" class="icon-list" title="播放列表">0</a>
                <em>已添加到播放列表</em>
            </span>
        </div>
       
    </div>
    <audio id="player" controls="false">
        <source src=""></source>
        <embed src="" type="" controls="false">
    </audio>
</div>

<script type="text/javascript" src="js/sea.js"></script>
<script type="text/javascript">
    
    //设置configuration
    seajs.config({
        
        alias: {
            "jquery" : "jquery/jquery.js"
        }
    });
    //引入main.js
    seajs.use('js/index/main');

</script>   
</body>
</html>