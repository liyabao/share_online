layui.define(['tree'], function (exports) {
    // var lay = layui;
    //树形菜单layui.tree
    layui.tree({
        elem: '#demo',
        nodes: [
            {
                name: '父节点1',
                children:
                [
                    {
                        name: '子节点11'
                    },
                    {
                        name: '子节点12'
                    }
                ]
            }, 
            {
                name: '父节点2',
                children: [
                    {
                        name: '子节点21'
                    }, {
                        name: '子节点22'
                    }
                ]
            }
        ]
    })

    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});

