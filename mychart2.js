var chrt=document.getElementById("mychart2").getContext("2d");
var mychart=new Chart(chrt,{
    type:'bar',
    data:{
        labels:['blantyre','kasungu','mphalombe','likoma','machinga','lilongwe'],
        datasets:[{
            label:'data',
            data:[3,7,9,5,7,3],
            backgroundColor:'skyblue',
        }]
    }
})