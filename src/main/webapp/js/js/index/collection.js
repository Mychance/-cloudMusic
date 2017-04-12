/*
* 	添加到歌单
*/
define(function(require,exports,module){
	
	function Collection(){
		this.tit = '#collection_form .tit';
		this.ul = '#collection_form .j-flag ul';
		this.li = '#collection_form .j-flag ul li';
		this.submit = '#createList_form  input[type=submit]';
		this.cancel = '#createList_form  input[type=button]';
	}
	
	module.exports = Collection;
	
	Collection.prototype.render = function(){
		this._init();
		this._bindUI();
	};
	
	Collection.prototype._init = function(){
		
	};
	
	Collection.prototype._bindUI = function(){
		var self = this;
		$('.store').on('click', this.tit, function(){
			$(".collection").css("display","none");
			var musicId = $(self.ul).attr("musicId");
			var multi = $(self.ul).attr("multi");
			$("#createList_form .submit .musicId").val(musicId);
			$("#createList_form .submit .multi").val(multi);
			$(".createList").css("display","block");
		}).on('click',this.li, function(){
			var multi = $(self.ul).attr("multi");
			var musicListId = $(this).attr("musicListId");
			if(multi=="true"){
				$('.play-form .form-tab ul li').each(function(index,item){
					var musicId = $(item).attr("data-id");
					$.get("index/addMusicToList?musicId="+musicId+"&musicListId="+musicListId,function(result){
						$(".collection").css("display","none");
						alert(result);
					});
				});
			}else{
				
				var musicId = $(self.ul).attr("musicId");
				
				$.get("index/addMusicToList?musicId="+musicId+"&musicListId="+musicListId,function(result){
					$(".collection").css("display","none");
					alert(result);
				});
			}
			
		});
		
		$('.createList').on('click',this.submit,function(e){
			e = e || event;
			e.preventDefault();
			var listName = $("#createList_form input[type=text]").val(); 
			if($.trim(listName)!=""){
				var creatorId = cookie('unique');
				$.get("index/addMusicList?listName="+listName+"&creatorId="+creatorId,function(musicListId){
					var multi = $("#createList_form .submit .multi").val();
					if(multi=="true"){
						$('.play-form .form-tab ul li').each(function(index,item){
							var musicId = $(item).attr("data-id");
							$.get("index/addMusicToList?musicId="+musicId+"&musicListId="+musicListId,function(result){
								$(".createList").css("display","none");
							});
						});
						alert("收藏成功");
						
					}else{
						var musicId = $("#createList_form .submit .musicId").val();
						$.get("index/addMusicToList?musicId="+musicId+"&musicListId="+musicListId,function(result){
							$(".createList").css("display","none");
							alert(result);
						});
					}
					
				});
			}else{
				$('#createList_form .tips').html("歌单名不能为空！");
			}
		}).on('click',this.cancel,function(){
			$(".createList").css("display","none");
		});
		
		$('.collection .close').click(function(){
			$(".collection").css("display","none");
		});
		$('.createList .close').click(function(){
			$(".createList").css("display","none");
		});
	};
});