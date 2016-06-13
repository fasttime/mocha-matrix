/* eslint-env browser */

function Matrix(runner)
{
    'use strict';
    
    var root = document.getElementById('mocha');
    var boxList = root.appendChild(document.createElement('DIV'));
    boxList.className = 'blockList';
    var errors = document.createElement('UL');
    errors.className = 'errors';
    createBoxes(runner.total);
    var currentBlock = boxList.firstChild;
    
    runner.on(
        'test',
        function (test)
        {
            currentBlock.title = test.fullTitle();
            test.box = currentBlock;
            currentBlock = currentBlock.nextSibling;
        }
    );
    
    runner.on(
        'pass',
        function (test)
        {
            var box = test.box;
            show(box, 'test pass');
        }
    );
    
    runner.on(
        'fail',
        function (test, err)
        {
            var id = 'error-' + errors.children.length;
            var box = test.box;
            box.href = '#' + id;
            show(box, 'test fail');
            
            var li = errors.appendChild(document.createElement('LI'));
            
            var title = li.appendChild(document.createElement('H3'));
            title.id = id;
            title.textContent = test.fullTitle();
            
            var div = li.appendChild(document.createElement('DIV'));
            div.textContent = err.message;
        }
    );
    
    runner.on(
        'end',
        function ()
        {
            root.appendChild(errors);
            show(errors, 'errors');
        }
    );
    
    function createBoxes(count)
    {
        for (var index = 0; index < count; ++index)
        {
            var box = document.createElement('A');
            box.className = 'test';
            boxList.appendChild(box);
        }
    }
    
    function show(el, className)
    {
        el.className = className;
        setTimeout(
            function ()
            {
                el.className = className + ' show';
            }
        );
    }
}
