var dir=[];
$.ajax({
    url: '/index',
    type: 'get',
    // dataType: 'jsonp',                   
    success: function(data) {
        dir=data;
        console.log(data);
        //动态加载标签
        // var html="";
        // for(var i=0;i<data.length;i++)
        // {
        //     html+="<li style='list-style:none;cursor: pointer;'>"+data[i]+"</li>";
        // }
        // $('#detailed_dir').html(html);                        
    }
}
);



layui.define(['tree'], function (exports) {
    // var lay = layui;
    //树形菜单layui.tree
    layui.tree({
        elem: '#demo',
        nodes: dir
    })

    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});