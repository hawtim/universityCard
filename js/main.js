//  //获取下拉列表选中项的文本
//     function getSelectedText(){
//     	var i ;
//         var jiner=document.getElementById("money");
//         for(i=0;i<jiner.length;i++){
//             if(jiner[i].selected==true){
//                 return jiner[i].innerText;//关键是通过option对象的innerText属性获取到选项文本
//             }
//         }
//     }
// //获取下拉列表选中项的值
//     function getSelectedValue(){
//         var jiner=document.getElementById("money");
//         return jiner.value;      //如此简单，直接用其对象的value属性便可获取到
//     }


// var valueNumber = jiner.options[jiner.selectedIndex];
// 	function checkOption(){
// 	    if(window.confirm('您选择了'+valueNumber.text+',按[确定]开始升级'))
// 	    {
// 	   console.log(valueNumber.value);
// 	    }
// 	}


// function getOptions()
//   {
//   var x=document.getElementById("money");
//   var y="";
//   var i=0;
//   for (i=0;i<x.length;i++)
//     {
//     y+=x.options[i].text;
//     y+="<br />";
//     }
//   console.log(y);
//   }

//以上是尝试以想要获得select的option值的js代码
//不过均失败了，感觉上还是基础没过关
//会继续努力。
function hideInput(){
	
}

function myFunction(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var tijiao = document.getElementById("tijiao");
	var para = document.getElementById("alert");
	var xingming = document.getElementById("name");
	var xuehao = document.getElementById("id");
	var jiner = document.getElementById('moneyAmount');

	// console.log(jiner.options[]);
	// console.log(jiner.options.value);
	console.log(xingming.value);
	console.log(xuehao.value);
	// if(xingming || xuehao != 1){
	// 	tijiao.href="javascript:;";
	// 		para.style.display = "block";
	// 	}
	//
	//以下这句话想要达到的结果就是姓名和学号的布尔值都是true，
	//而金额的选项的value值不为none的时候，条件成立&& jiner.options.value != "none" 
	if(xingming.value && xuehao.value  && jiner.value == 1 ){
			tijiao.href="file:///G:/wamp/www/universityCard/pages/confirm.html";
			para.style.display = "none";
			// console.log(jiner.options.value);
		}else{
			tijiao.href="javascript:;";
			para.style.display = "block";
			// console.log(jiner.options.value);
			console.log("false");
		}
	}
// window.onload = myFunction;
