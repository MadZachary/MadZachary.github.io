//This is just to fix an issue on other browsers
            var cursorContainer;
            var removeCursorContainer = setInterval(function() {
                cursorContainer = document.getElementById('cursor-container');
                if (cursorContainer) {
                    cursorContainer.parentNode.removeChild(cursorContainer);
                    clearInterval(removeCursorContainer);
                }
            }, 10); 