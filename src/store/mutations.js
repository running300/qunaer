// 4.修改数据
function changeCityName(state, city) {
  state.city = city;
  // 保存数据免得刷新,不是这个页面
  localStorage.city = city;
}

export default {
  changeCityName
}