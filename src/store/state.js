// 管理对应的状态
// 默认城市
let defaultCity = '长沙'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {

}


export default {
  city: defaultCity
}