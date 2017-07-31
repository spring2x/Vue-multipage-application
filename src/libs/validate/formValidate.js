/*
* option.required 全局非空,
* option.pattern 全局正则表达式,
* option.condition 全局条件判断，**代替当前值，@xx@代替指定name的值
* option.tag 指定全局字段名称，只全局生效
* option.callback 验证回调函数
* option.errorTip //false默认在input同级插入, true时不做处理，其他值则通过dom查找
* fv-required 非空不赋值为真，赋值0为假
* fv-pattern 正则表达式
* fv-condition 条件语句**代替当前值，@xx@代替指定name的值
* fv-errortip 错误信息显示dom
* fv-checkevent 触发事件，默认input类为blur其他为change
* fv-tag 用于错误提示的字段名
* result.node 非法字段的dom对象
* result.type 验证非法分类required,pattern,condition
* 
* create by zhuqiang 2017/06/01
*/
$.fn.formValidate = function(option){
	var _option = {};
	if(typeof option === 'function'){
	_option.callback = option;
	}
	else if(Object.prototype.toString.call(option) === '[object Object]'){
		_option = option;
	}

	var showError = function(result, $item, $form){
		var tag = $item.attr(_option.tag || 'fv-tag') || $item.attr('name'); //input名称
		var errorTip = $item.attr('fv-errortip') || _option.errorTip;
		var errmsg = '';

		if(result){
			//错误提示
			errmsg = $item.attr('fv-' + result.type + 'msg');

			if(!errmsg){
				errmsg = tag || '';
				switch(result.type){
					case 'required':
						errmsg += '不能为空';
						break;
					case 'pattern':
						errmsg += '格式有误';
						break;
					case 'condition':
						errmsg += '条件不匹配';
						break;
					default:
						break;
				}
			}

			$item.addClass('error').removeClass('success');
		}
		else{
			errmsg = '<span class="success-tip"></span>'
			$item.addClass('success').removeClass('error');
		}

		//默认提示
		if(!errorTip){
			var $tip = $item.siblings('.error-tip');
			if(!$tip.length){
				$tip = $('<div class="error-tip"></div>');
				$item.parent().append($tip);
			}
			$tip.html(errmsg);
		}
		//指定dom提示
		else if(typeof errorTip === 'string'){
			$form.find(errorTip).html(errmsg);
		}
	};

	var hideError = function($item, $form){
		var errorTip = $item.attr('fv-errortip') || _option.errorTip;
		$item.removeClass('error').removeClass('success').siblings('.error-tip').html('');
		if(typeof errorTip === 'string'){
				$form.find(errorTip).html('');
		}
	};

	var getValidate = function($item, $form){
		var required = $item.attr('fv-required'); //非空
		var pattern = $item.attr('fv-pattern') || _option.pattern;//正则
		var condition = $item.attr('fv-condition') || _option.condition;//条件
				
		if(typeof required === 'undefined'){
			required = _option.required;
		}
		//支持html仅required
		else if(required === ''){
			required = true;
		}
		
		//单选复选只处理非空
		if($item[0].type === 'radio' || $item[0].type === 'checkbox'){
			if($item[0].name){
				value = $('[name='+ $item[0].name +']:checked').val();
			}
			else{
				value = $item[0].checked ? $item[0].value : '';
			}
			pattern = '';
			condition = '';
		}

		return {
			required: required,
			pattern: pattern,
			condition: condition
		}
	}

	var initItem = function($item, $form){
		var validate = getValidate($item, $form);
		//未初始化过的绑定默认事件
		if(!$item.data('isinit') && (validate.required || validate.pattern || validate.condition)){
			var checkEvent = $item.attr('fv-checkevent');
			var hideEvent = '';
			if(!checkEvent){
				if($item[0].tagName  === 'INPUT' || $item[0].tagName === 'TEXTAREA'){
					checkEvent = 'blur';
					hideEvent = 'input onpropertychange';
				}
				else{
					checkEvent = 'change';
				}
			}
			//绑定取消事件
			if(hideEvent){
				$item.on(hideEvent, function(){
					hideError($item, $form);
				});
			}
			//绑定触发事件
			$item.on(checkEvent, function(){
				checkItem($item, $form);
			});
			$item.data('isinit', true);
		}
	}

	var checkItem = function($item, $form){
		var validate = getValidate($item, $form);
		var required = validate.required; //非空
		var pattern = validate.pattern;//正则
		var condition = validate.condition;//条件
		var value = $item.val().trim();
		var errorTip = $item.attr('fv-errortip') || _option.errorTip;
		var result = {};

		//非空匹配
		if(required){
			if(value === ''){
				result.node = $item;
				result.type = 'required';
			}
		}
		//正则匹配
		if(!result.type && pattern){
			pattern = new RegExp(pattern);
			if(!pattern.test(value)){
				result.node = $item;
				result.type = 'pattern';
			}
		}
		//条件匹配只在非空时候匹配
		if(value !== '' && !result.type && condition){
			//提取**和@xxx@
			condition = condition.replace(/\*\*/g,value === '' ? 'undefined' : value)
			.replace(/@(.+?)@/g,function($0,$1){
				return $form.find('[name=' + $1 + ']').val() || 'undefined';
			});
			
			if(!eval(condition)){
				result.node = $item;
				result.type = 'condition';
			}
		}

		if(result.node && result.type){
			showError(result, $item, $form);
		}
		else if(required || pattern || condition){
			showError(false, $item, $form);
		}
		return result;
	}

	var run = function($form, cb){
		if(!cb) cb = _option.callback;
		//启动全部验证
		var result = {};
		$.each($form[0].elements,function(){
			result = checkItem($(this), $form);
			if(result.node || result.type){
				return false;
			}
		});
		if(typeof cb === 'function'){
			cb.call(self, result);
		}
		return result;
	}
	this.each(function(i, self){
		var $form = $(self);

		if(!$form.data('isinit')){
			//绑定验证
			$.each(self.elements,function(){
				initItem($(this), $form);
			});

			$form.on('submit', function(e, cb){
				run($form, cb);
				e.preventDefault();
			});

			self.run = function(cb){
				run($form, cb);
			}

			$form.data('isinit', true);
		}
	});

	this.run = function(cb){
		this.each(function(i, form){
			run($(form, cb));
		})
	}
	
	return this;
};
