$.ajax({
    url: '/index',
    type: 'get',
    // dataType: 'jsonp',                   
    success: function(data) {
        console.log(data);
        var html="";
        for(var i=0;i<data.length;i++)
        {
            html+="<li style='list-style:none;cursor: pointer;'>"+data[i]+"</li>";
        }
        $('#detailed_dir').html(html);                        
    }
}
);