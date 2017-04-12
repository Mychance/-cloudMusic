define ( function ( require, exports, module ) {

	function Reg () {
		this.name = '#register_form input[name=username]';
		this.email = '#register_form input[name=email]';
		this.pwd = '#register_form input[name=password]';
		this.repwd = '#register_form input[name=repwd]';
		this.submit = '#register_form input[type=submit]';
		this.tips = '#register_form .tips';
	}

	module.exports = Reg;

	Reg.prototype.render = function () {
		this._init();
		this._bind();
	}

	Reg.prototype._init = function () {
		
	}

	Reg.prototype._bind = function () {

		var self = this;

		$('.register').on('focus', this.name, function () {

			$(self.tips).html('');

		}).on('focus', this.email, function () {

			$(self.tips).html('');

		}).on('focus', this.pwd, function () {

			$(self.tips).html('');

		}).on('focus', this.repwd, function () {

			$(self.tips).html('');

		}).on('click', this.submit, function ( e ) {
			e = e || event;
			e.preventDefault();

			if ( !!$.trim($(self.name).val()) && !!$.trim($(self.name).val()) && !!$.trim($(self.pwd).val()) && !!$.trim($(self.repwd).val()) ) {

				$.ajax({
					url : 'user/register',
					type : 'POST',
					data : $('#register_form').serialize(),
					success : function(response) {
						if(/^\d+$/.test(response)){  
							cookie('unique', response);
							$(self.tips).html("注册成功");
							$(".register").css("display","none");
							window.location.href = './index';
					    }else{  
					    	$(self.tips).html(response);
					    }  
					}

				});

			} else {
				$(self.tips).html('表单未完成，请继续填写');

			}

		});
		$("#register_form .close").click(function(){
			$(".register").css("display","none");
		 });
	};
});