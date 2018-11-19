/* eslint-env browser */

'use strict';

function Matrix(runner)
{
    var root = document.getElementById('mocha');
    var boxList = root.appendChild(document.createElement('DIV'));
    boxList.className = 'blockList';
    var errors = document.createElement('UL');
    errors.className = 'errors';
    createBoxes(runner.total);
    var currentBlock = boxList.firstChild;

    runner.on
    (
        'test',
        function (test)
        {
            currentBlock.title = test.fullTitle();
            test.box = currentBlock;
            currentBlock = currentBlock.nextSibling;
        }
    );

    runner.on
    (
        'pass',
        function (test)
        {
            var box = test.box;
            box.className += ' pass show';
        }
    );

    runner.on
    (
        'fail',
        function (obj, err)
        {
            var id = 'error-' + errors.children.length;
            if (obj.type === 'test')
            {
                var box = obj.box;
                box.href = '#' + id;
                box.className += ' fail show';
            }
            var li = errors.appendChild(document.createElement('LI'));
            var title = li.appendChild(document.createElement('H3'));
            title.id = id;
            title.textContent = obj.fullTitle();
            var div = li.appendChild(document.createElement('DIV'));
            div.textContent = err.message;
        }
    );

    runner.on
    (
        'end',
        function ()
        {
            root.appendChild(errors);
            errors.className = 'errors';
            setTimeout
            (
                function ()
                {
                    errors.className += ' show';
                }
            );
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
}
