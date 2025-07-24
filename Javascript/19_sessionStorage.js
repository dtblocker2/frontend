/* It will persist only for one session ie you can refresh the page but closing tab will clear session storage */

// basic commands are same as local storage
sessionStorage.setItem('color','blue');
const color = sessionStorage.getItem('color');
sessionStorage.removeItem('color');
sessionStorage.clear();

// also it is not synced across multiple tabs of same website each tab gets its own session storage


