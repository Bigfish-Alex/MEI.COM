$(function(){
	$('#header').load('index.html');
	$('#footer').load('footer.html');
	$(window).scroll(function(event) {
		var barTop=$(window).scrollTop();
		// console.log(barTop);
		if (barTop>=528) {
			$('.page_turn_top').css({
				position: 'fixed',
				top: '40px',
			});
		}else{
			$('.page_turn_top').css({
				position: 'static',
			});
		}
	});

	// 获取商品的列表信息
	$.get('../../goodsData/goods_neil.json',function(_data){

		for(var i=0;i<_data.page1.length;i++){
			var goodsListBox=document.createElement('div');
			var _html="<a href="+"women_neil_details.html"+">"
			_html+="<img src="+_data.page1[i].imgSrc+">";
			_html+="</a>"
			_html+="<h5>"+_data.page1[i].name;+"</h5>"
			_html+="</br>"
			_html+="<div>"+_data.page1[i].describe;+"</div>"
			_html+="</br>"
			_html+="<span>"+'￥'+_data.page1[i].price;+"</span>"
			$(goodsListBox).append(_html);
			$(goodsListBox).addClass('goods_list_box');
			$('.goods_list').append(goodsListBox);
		}
		// 计算一共有多少页 l为页数
        var l=0;
		for(var n in _data){
			l++;
		}
		$('.pageNum').html(l);
		// 给下面的翻页添加按钮
		for(var b=0;b<l;b++){
			var oLi=document.createElement('li');
			$(oLi).html(b+1);
			$(oLi).appendTo('.page_turn_bottom_container ul');
		}
		$('.pageTurnBtn li').click(function(){
			console.log($(this).text());
			var turnPage="page"+$(this).text();
			turnPageFun(_data,turnPage);
		})
		$('.confirm_turn').click(function(){
			var turnPage="page"+$('.jumpPage').val();
			turnPageFun(_data,turnPage);
		})
	// 翻页功能begin
		var pageIndex=1;
		$('.pageBtn_right').click(function(){
			pageIndex++;
			
			if(pageIndex>=l){
				pageIndex=l;
			}
			var turnPage="page"+pageIndex;
			turnPageFun(_data,turnPage);
		})
		$('.pageBtn_left').click(function(){
			pageIndex--;
			if(pageIndex<=1){
				pageIndex=1;
			}
			console.log(pageIndex);
			var turnPage="page"+pageIndex;
			turnPageFun(_data,turnPage);
		})
		// 翻页功能函数 _data传入获得的json数据 turnPage是翻页到的页码
		function turnPageFun(_data,turnPage){
			for(var k in _data){
				if(turnPage==k){
					console.log(_data[k]);
					$('.goods_list').empty();
					for(var i=0;i<_data[k].length;i++){
						// console.log(_data[k][i].price);
						var goodsListBox=document.createElement('div');
						var _html="<img src="+_data[k][i].imgSrc+">";
						_html+="<h5>"+_data[k][i].name;+"</h5>"
						_html+="</br>"
						_html+="<div>"+_data[k][i].describe;+"</div>"
						_html+="</br>"
						_html+="<span>"+'￥'+_data[k][i].price;+"</span>"
						$(goodsListBox).append(_html);
						$(goodsListBox).addClass('goods_list_box');
						$('.goods_list').append(goodsListBox);
					}
				}
			}
		}	
		// 翻页功能over
	})
	// 获取商品的列表信息结束over
})