/*
*
*/
define( function( require, exports, module ) {

	function Index() {
		this.btnDwn = '.btns .btn-down';		//宣传栏左侧的下载按钮
		this.btnSm = '.btns .sm';				//宣传栏左侧的其他按钮
		this.slides = '.slides';				//滚动框
		this.sliUL = '.slides ul.points';		//滚动框 图片
		this.sliTips = '.slides ul.sub-tips li';//滚动图小按钮

		this.SIZE;							//滚动图片宽度
		this.LENGTH;						//滚动图片数量
		this._timer;						//滚动定时器

		this.btnNews = '.aside ul.aside-tab li';	//宣传栏右侧的导航

		this.rank = '.rank dl';

		this.rankALLPlay = '.rank dl dt .dt-txt a.icon-play';	//飙升榜
		this.rankALLStore = '.rank dl dt .dt-txt a.icon-store';	//飙升榜

		this.rankLI = '.rank dl dd';							//排行榜li
		this.rankLIPlay = '.rank dl dd .dd-oper a.icon-play';	//排行榜li的播放按钮
		this.rankLIAdd = '.rank dl dd .dd-oper a.icon-add';		//排行榜li的添加按钮
		this.rankLIStore = '.rank dl dd .dd-oper a.icon-store';	//排行榜li的收藏按钮

		this.mlist = '.play-form .form-tab ul.mtab';			//播放列表ul
		this.numMusic = '.play-ctrl a.icon-list';				//播放列表数目
	}

	module.exports = Index;

	Index.prototype.render = function() {
		this._init();
		this._load();
		this._bind();
	}

	Index.prototype._init = function() {

		var self = this;
		this.SIZE = $(this.sliUL).find('img').width();
		this.LENGTH = $(this.sliUL).find('img').length;

		$(this.sliUL).css('width', this.SIZE*this.LENGTH + 'px');

		this._fnTimer(0);
//		$(".login").draggable();
//		$(".register").draggable();
	}

	Index.prototype._fnTimer = function(i) {

		var index = i || 0;
		var self = this;	
		var SIZE = this.SIZE;
		var LENGTH = this.LENGTH;
		
		this._timer && clearInterval(this._timer);

		ahead();
		
		this._timer = setInterval(ahead, 6000);

		function ahead() {

			$ (self.sliUL ).animate({
				left: -index * SIZE+ 'px'
			}, 500);

			$( self.sliTips ).removeClass('active').eq( index ).addClass('active');

			index = (++index >= LENGTH ? 0 : index);

		}
	};
	
	Index.prototype._load = function() {
		var self = this; 

		$.get('index/getNews', function(result) {
			var json = $.parseJSON(result);
			var html = '';
			$.each(json, function (index, value) {
				html += '<li>' +
							'<a href="javascript:;">'+value.title+'</a>' +
							'<span>'+value.pubDate.substring(5,10)+'</span>' +
					'</li>';
			});	
			$('ul.aside-list').append(html).find('a').first().attr('class', 'active');		
		});

		rank(1);
		rank(2);
		rank(0);
		function rank(i) {
			
			$.get('index/getRank/' + i, function(list) {
				var html = '';
				$.each(list, function (index, value) {
					html += '<dd data-id="' + value.musicId + '">' +
								'<span>' + (index+1) + '</span>' +
								'<a href="javascript:;">'+value.name+'</a>' +
								'<div class="dd-oper">' +
									'<a href="javascript:;" class="icon-play"></a>' +
									'<a href="javascript:;" class="icon-add"></a>' +
									'<a href="javascript:;" class="icon-store"></a>' +
									'<input type="hidden" class="src" value='+value.src+'>'+
							'</div>' +
						'</dd>';
				});	

				html += '<div class="dd"><a href="javascript:;" class="dd-more">查看更多&gt;</a></div>';

				$(self.rank).eq(i).append(html);		
				$(self.rank).eq(i).children('dd:even').css('background','#e8e8e8');		
			});
		}
		
		
	};

	Index.prototype._bind = function() {

		var self = this;
		
		$('.wrap .main-top').on({
			mouseover: function () {
				$(this).animate({fontSize: "19px"});
			},
			mouseleave: function () {
				$(this).animate({fontSize: "20px"});
			}
		}, this.btnDwn ).on({

			mouseover: function () {
				$(this).animate({textIndent: "0"}, 400);
			},
			mouseleave: function () {
				$(this).animate({textIndent: "10px"}, 300);
			}
		}, this.btnSm).on({

			mouseover: function() {
				$(self.sliTips).parent('ul').attr('class', 'sub-tips sub-bg');	//加背景
			},
			mouseout: function() {
				$(self.sliTips).parent('ul').attr('class', 'sub-tips');		//移除背景
			}

		}, this.slides).on('click', this.sliTips, function() {

			self._fnTimer($(this).index());

		}).on('click', this.btnNews, function() {

			$(self.btnNews).children('a').attr('class', '');
			$(self.btnNews).eq($(this).index()).children('a').addClass('active');
		});
		 $(".list").click(function(){
		    	$(".list").removeClass("active");
		    	$(this).addClass("active");
		    	$("div .sub-list").css("display","none");
		    });
		 $(".find").click(function(){
			 $("div .sub-list")[0].style.display='block';
		 });
		 $(".sub-title").click(function(){
			 $(".sub-title").removeClass("active");
			 $(this).addClass("active");
		 });
		 $(".user-login").click(function(){
			 $(".login").css("display","block");
		 });
		
		$('.wrap .main-rank').on('click', this.rankALLPlay, function () {

			var addID = 0,
				html = '',
				index = $(this).parents('dl').index() / 2;

			$.ajax({
				'url': 'index/getRank/1',
				
				'success': function(list) {
					
					$.each(list, function(index, value) {
						addID = value.musicId;
						if (index == 0) {
							$('audio')[0].src = value.src;
							$('audio')[0].musicId = addID;
							$('audio')[0].play();
						} else {
							existID = 0,
							html = '',
							i = $( self.mlist ).children('li').length;
							for (  ; i >= 0; i--) {
								existID = $( self.mlist ).children('li').eq(i).attr('data-id');
								if ( addID == existID ) {
									break;
									
								} else if ( i == 0) {
									$.get('index/getMInfo/' + addID, function(music) {
										html = '<li data-id="' + music.musicId + '">' +
											'<div class="abs-stus"><span class="icn-stus"></span></div>' +
											'<div class="col col-1">' + music.name + '</div>' +
											'<div class="col col-2">' +
											'<a href="javascript:;" class="icn-col" title="收藏"></a>' +
											'<a href="index/download/?src='+music.src+'" class="icn-dwn" title="下载"></a>' +
											'<a href="javascript:;" class="icn-del" title="删除"></a>' +
											'</div>' +
											'<div class="col col-3">' + music.singerName + '</div>' +
											'<div class="col col-4">03:23</div>' +
											'</li>';
										$(self.mlist).append(html);
										var num = $(self.numMusic).text();
										$(self.numMusic).text(++num);
										$(self.mlist).siblings('.empty').hide();
									});
								}
							}
						}
					});
				}
			});

		}).on('click', this.rankALLStore, function () {

			if (cookie('unique')) {
				var t = $(this).attr('data-type');
				$.ajax({
					'url': 'index/colMusic',
					'type': 'POST',
					'data': {
						uid : cookie('unique'),
						type: t
					},
					'success': function(res) {
						alert(res);
					}
				});
			} else {
				alert('您尚未登录');
			}

		}).on({

			mouseover : function() {
				$(this).children('a').first().attr('class', 'title');
				$(this).children('div.dd-oper').show();
			},
			mouseleave : function() {
				$(this).children('a').first().removeClass('title');
				$(this).children('div.dd-oper').hide();
			}

		}, this.rankLI ).on('click', this.rankLIPlay, function() {
			var src = $(this).siblings('.src').val();
//			var addID = $(this).parents('dd').attr('data-id');
//			$.get('index/getMInfo/' + addID, function(res) {
//				var info = $.parseJSON(res)[0];
//				$('audio')[0].src = info.src;
//				$('audio')[0].play();
//			});
			$('audio')[0].src = src;
			$('audio')[0].musicId = $(this).parents('dd').attr('data-id');
			$('audio')[0].play();
			$(".fix-bottom .fix-play .play-ctrl .ml-tip").html("已开始播放").css("display","block");
//			$('audio .playId').val($(this).parents('dd').attr('data-id'));
		}).on('click', this.rankLIAdd, function() {

			var addID = $(this).parents('dd').attr('data-id');
			self._appendEle( addID );
			
		}).on('click', this.rankLIStore, function() {
			if ( !cookie('unique') ) {
				alert('您尚未登录');

			} else {
				var trgid = $(this).parents('dd').attr('data-id');
				$('#collection_form .j-flag ul').attr("musicId",trgid);
				$('#collection_form .j-flag ul').attr("multi",false);
				$.get("index/getLists?creatorId="+cookie('unique'),function(lists){
					$("#collection_form .j-flag ul").html('');
					$.each(lists,function(index,list){
						
						$("#collection_form .j-flag ul").append('<li musicListId="'+list.id+'"><div class="item">'
								+'<div class="left"><a href="javascript:void(0)" class="avatar" target="_blank"><img alt="" src="image/store-icon.jpg"></a></div>'
								+'<p class="name f-thide"><a class="s-fc0" href="javascript:void(0)" target="_blank">&nbsp'+list.listName+'</a></p>'
								+'<p class="s-fc3">&nbsp'+list.musicNum+'首</p>'
								+'</div></li>');

					});
				});
				$(".store").css("display","block");
				
			}
		});

	};

	Index.prototype._appendEle = function (addID) {

		var self = this,
			existID = 0,
			html = '',
			i = $( self.mlist ).children('li').length;

		for (  ; i >= 0; i--) {
			existID = $( self.mlist ).children('li').eq(i).attr('data-id');
			if ( addID == existID ) {
				break;

			} else if ( i == 0) {
				$.get('index/getMInfo/' + addID, function(music) {
					html = '<li data-id="' + music.musicId + '">' +
						'<div class="abs-stus"><span class="icn-stus"></span></div>' +
						'<div class="col col-1">' + music.name + '</div>' +
						'<div class="col col-2">' +
						'<a href="javascript:;" class="icn-col" title="收藏"></a>' +
						'<a href="index/download?src='+music.src+'" class="icn-dwn" title="下载"></a>' +
						'<a href="javascript:;" class="icn-del" title="删除"></a>' +
						'</div>' +
						'<div class="col col-3">' + music.singerName + '</div>' +
						'<div class="col col-4">03:23</div>' +
						'</li>';
					$(self.mlist).append(html);
					var num = $(self.numMusic).text();
					$(self.numMusic).text(++num);
					$(self.mlist).siblings('.empty').hide();
				});
			}
		}
		$(".fix-bottom .fix-play .play-ctrl .ml-tip").html("已添加至播放列表").css("display","block");
		
	};

});