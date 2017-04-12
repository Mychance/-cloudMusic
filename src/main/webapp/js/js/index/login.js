/*
* 	登录、注册框
*/
define( function ( require, exports, module ) {

	function Login() {
		this.user = '#login_form input[name=email]';
		this.pwd = '#login_form input[name=password]';
		this.submit = '#login_form input[type=submit]';
		this.tips = '#login_form .tips';
	}

	module.exports = Login;	

	Login.prototype.render = function() {
		this._init();
		this._bindUI();
	};

	Login.prototype._init = function() {
		 
		 
	};

	Login.prototype._bindUI = function() {
		var self = this;
		$('.login').on('focus', this.user, function() {

			$(self.tips).html('');

		}).on('focus', this.pwd, function() {

			$(self.tips).html('');

		}).on('click', this.submit, function(e) {
			e = e || event;
			e.preventDefault();

			if ( $.trim($(self.user).val()) != '' && $.trim($(self.pwd).val()) != '' ) {
				$.ajax({
					url : 'user/login',
					type : 'POST',
					data : $('#login_form').serialize(),
					success : function( response) {
//						if (response && response != 'false') {
//							cookie('unique', response);
//							window.location.href = './index.html';
//						} else {
//							$(self.tips).html('帐号与密码不匹配，请重新输入');
//						}
						if((/^\d+$/.test(response))){  
							cookie('unique', response);
							$(self.tips).html("登录成功");
							window.location.href = './index';  
							
					    }else{  
					    	$(self.tips).html(response);
					    }  
					}

				});

			} else {
				$(self.tips).html('请输入帐号和密码');
				
			}
		});
		$("#login_form .close").click(function(){
			$(".login").css("display","none");
		 });
		$("#toReg").click(function(){
			$(".login").css("display","none");
			$(".register").css("display","block");
		});
		
	};



});