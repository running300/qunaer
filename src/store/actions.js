// 2.接受组件派发的东西,定义对应的处理函数
// (一个对象方便下面的操作,组件里面派发的数据内容)
function changeCityName(ctx, city) {
  // 3.提交给mutations
  ctx.commit("changeCityName", city);
}

export default {
  changeCityName
}