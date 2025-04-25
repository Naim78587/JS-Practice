const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr'];
const salary=[20000,15000,12000,25000,35000];
days.forEach(function(day) {
    document.querySelector('.p1').innerHTML += day + ' ';
});

salary.forEach(function(sal){
    document.querySelector('.p2').innerHTML+=sal+', ';
});
