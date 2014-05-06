/*
    Touch'n'learn - Fun and easy lessons for kids
    Copyright (C) 2012 by Alessandro Portale
    http://touchandlearn.sourceforge.net

    This file is part of Touch'n'learn

    Touch'n'learn is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Touch'n'learn is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Touch'n'learn; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
*/

var events;
(function (events) {
    function addListeners(element, eventHandler) {
        element['eventHandler'] = eventHandler;
        var touch = 'ontouchstart' in document.documentElement;
        if (touch) {
            if (eventHandler.mouseDown)
                element.addEventListener('touchstart', onTouchStart, false);
            if (eventHandler.mouseMove)
                element.addEventListener('touchmove', onTouchMove, false);
            if (eventHandler.mouseUp) {
                element.addEventListener('touchend', onMouseUp, false);
                element.addEventListener('touchleave', onMouseUp, false);
                element.addEventListener('touchcancel', onMouseUp, false);
            }
        } else {
            if (eventHandler.mouseDown)
                element.addEventListener('mousedown', onMouseDown, false);
            if (eventHandler.mouseMove)
                element.addEventListener('mousemove', onMouseMove, false);
            if (eventHandler.mouseUp) {
                element.addEventListener('mouseup', onMouseUp, false);
                element.addEventListener('mouseout', onMouseUp, false);
                element.addEventListener('mousecancel', onMouseUp, false);
            }
        }
    }
    events.addListeners = addListeners;

    function onMouseDown(event) {
        this.eventHandler.mouseDown(event.clientX, event.clientY);
    }

    function onTouchStart(event) {
        event.preventDefault();
        if (event.touches.length === 1)
            this.eventHandler.mouseDown(event.touches[0].clientX, event.touches[0].clientY);
    }

    function onMouseMove(event) {
        this.eventHandler.mouseMove(event.clientX, event.clientY);
    }

    function onTouchMove(event) {
        event.preventDefault();
        if (event.touches.length === 1)
            this.eventHandler.mouseMove(event.touches[0].clientX, event.touches[0].clientY);
    }

    function onMouseUp(event) {
        this.eventHandler.mouseUp(event.clientX, event.clientY);
    }
})(events || (events = {}));
var browser = {
    cssTags: function () {
        var cssTagsKey = 'cachedTags';
        if (!(cssTagsKey in browser)) {
            var testStyle = document.body.style;
            if ('webkitTransform' in testStyle) {
                browser[cssTagsKey] = {
                    transform: 'webkitTransform',
                    transformOrigin: 'webkitTransformOrigin',
                    transitionDuration: 'webkitTransitionDuration',
                    transitionProperty: 'webkitTransitionProperty',
                    transitionEnd: 'webkitTransitionEnd',
                    transitionTimingFunction: 'webkitTransitionTimingFunction'
                };
            } else if ('MozTransform' in testStyle) {
                browser[cssTagsKey] = {
                    transform: 'MozTransform',
                    transformOrigin: 'MozTransformOrigin',
                    transitionDuration: 'MozTransitionDuration',
                    transitionProperty: 'MozTransitionProperty',
                    transitionEnd: 'transitionend',
                    transitionTimingFunction: 'MozTransitionTimingFunction'
                };
            } else if ('OTransform' in testStyle) {
                browser[cssTagsKey] = {
                    transform: 'OTransform',
                    transformOrigin: 'OTransformOrigin',
                    transitionDuration: 'OTransitionDuration',
                    transitionProperty: 'OTransitionProperty',
                    transitionEnd: 'OTransitionEnd',
                    transitionTimingFunction: 'OTransitionTimingFunction'
                };
            } else if ('msTransform' in testStyle) {
                browser[cssTagsKey] = {
                    transform: 'msTransform',
                    transformOrigin: 'msTransformOrigin',
                    transitionDuration: 'msTransitionDuration',
                    transitionProperty: 'msTransitionProperty',
                    transitionEnd: 'transitionend',
                    transitionTimingFunction: 'msTransitionTimingFunction'
                };
            } else if ('Transform' in testStyle) {
                browser[cssTagsKey] = {
                    transform: 'Transform',
                    transformOrigin: 'TransformOrigin',
                    transitionDuration: 'TransitionDuration',
                    transitionProperty: 'TransitionProperty',
                    transitionEnd: 'TransitionEnd',
                    transitionTimingFunction: 'TransitionTimingFunction'
                };
            }
        }
        return browser[cssTagsKey];
    },
    cssTranslate: function (x, y) {
        var has3dKey = 'cssTranslateHas3d';
        if (!(has3dKey in browser)) {
            var dummyStyle = document.createElement('div').style;
            var transformTag = browser.cssTags().transform;
            var cssTextBefore = dummyStyle.cssText;
            dummyStyle[transformTag] = 'translate3d(0px, 0px, 0px)';
            browser[has3dKey] = dummyStyle.cssText !== cssTextBefore;
        }
        return browser[has3dKey] ? 'translate3d(' + x + 'px, ' + y + 'px, 0)' : 'translate(' + x + 'px, ' + y + 'px)';
    },
    canScaleWithoutArtifacts: function () {
        var canScaleWithoutArtifactsKey = 'cachedCanScaleWithoutArtifacts';
        if (!(canScaleWithoutArtifactsKey in browser)) {
            var agent = navigator.userAgent.toLowerCase();
            browser[canScaleWithoutArtifactsKey] = agent.indexOf("android") == -1 || agent.indexOf("chrome") > -1 || agent.indexOf("firefox") > -1 || agent.indexOf("opera") > -1;
        }
        return browser[canScaleWithoutArtifactsKey];
    }
};
// This file has been generated by svg2code

var objects = {
    elements: {
        'id_rooster': { id: 'id_rooster', bounds: { x: 388.7, y: -16.7, width: 88.0, height: 81.2 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(423.1, 9.8);
            c.bezierCurveTo(422.3, 8.6, 420.1, 4.7, 419.8, 3.3);
            c.bezierCurveTo(421.4, 3.5, 422.5, 3.9, 424.0, 4.8);
            c.bezierCurveTo(425.2, 3.8, 426.3, 4.5, 426.7, 5.1);
            c.bezierCurveTo(426.5, 4.4, 426.0, 3.2, 426.8, 1.7);
            c.bezierCurveTo(428.8, -1.8, 433.1, 0.8, 433.0, 3.5);
            c.bezierCurveTo(433.0, 5.0, 431.3, 5.7, 432.0, 7.0);
            c.bezierCurveTo(432.6, 8.2, 434.7, 7.6, 435.5, 8.4);
            c.bezierCurveTo(436.9, 9.8, 435.0, 10.5, 434.5, 11.4);
            c.bezierCurveTo(434.1, 12.1, 437.5, 12.7, 435.5, 14.8);
            c.bezierCurveTo(434.7, 15.7, 433.1, 15.0, 432.4, 15.9);
            c.bezierCurveTo(431.7, 16.8, 433.0, 16.6, 432.6, 18.4);
            c.bezierCurveTo(432.1, 20.2, 430.9, 21.5, 430.8, 23.2);
            c.bezierCurveTo(430.7, 24.3, 430.5, 25.6, 431.8, 27.5);
            c.bezierCurveTo(433.1, 29.4, 434.2, 29.7, 436.0, 30.6);
            c.bezierCurveTo(436.8, 31.0, 444.6, 31.8, 443.4, 30.9);
            c.bezierCurveTo(441.2, 29.1, 438.6, 26.1, 438.7, 23.2);
            c.bezierCurveTo(438.7, 20.2, 440.3, 17.4, 440.3, 18.6);
            c.bezierCurveTo(440.2, 20.1, 440.6, 22.3, 442.8, 22.1);
            c.bezierCurveTo(445.1, 22.0, 444.3, 19.5, 448.3, 18.0);
            c.bezierCurveTo(452.3, 16.4, 454.9, 16.1, 458.7, 16.0);
            c.bezierCurveTo(462.5, 16.0, 464.1, 17.6, 463.4, 17.8);
            c.bezierCurveTo(462.4, 18.0, 456.3, 19.0, 455.9, 20.6);
            c.bezierCurveTo(455.8, 21.1, 459.9, 22.2, 462.4, 24.4);
            c.bezierCurveTo(464.0, 25.6, 464.7, 26.3, 466.2, 29.4);
            c.bezierCurveTo(467.6, 32.5, 468.2, 35.6, 467.9, 37.2);
            c.bezierCurveTo(467.9, 37.5, 465.3, 35.3, 464.8, 35.7);
            c.bezierCurveTo(464.4, 35.9, 466.2, 37.9, 466.0, 40.5);
            c.bezierCurveTo(465.8, 43.5, 464.7, 47.0, 464.2, 47.6);
            c.bezierCurveTo(463.6, 48.2, 463.0, 43.4, 462.3, 45.2);
            c.bezierCurveTo(461.9, 46.3, 461.6, 47.6, 459.9, 49.8);
            c.bezierCurveTo(458.2, 52.0, 456.9, 53.5, 455.6, 53.9);
            c.bezierCurveTo(454.3, 54.4, 456.0, 50.4, 454.7, 49.0);
            c.bezierCurveTo(454.3, 48.7, 453.1, 51.0, 451.9, 51.0);
            c.bezierCurveTo(451.1, 51.0, 450.6, 49.0, 450.0, 49.0);
            c.bezierCurveTo(449.3, 49.1, 450.1, 50.9, 449.2, 51.3);
            c.bezierCurveTo(448.3, 51.6, 447.3, 49.9, 446.2, 50.5);
            c.bezierCurveTo(445.2, 51.2, 446.2, 53.6, 444.9, 53.9);
            c.bezierCurveTo(443.6, 54.3, 442.4, 51.8, 441.2, 51.9);
            c.bezierCurveTo(439.9, 51.9, 440.9, 53.6, 439.8, 54.2);
            c.bezierCurveTo(438.8, 54.9, 436.9, 53.9, 436.7, 54.4);
            c.bezierCurveTo(436.7, 54.6, 436.5, 56.2, 436.9, 57.4);
            c.bezierCurveTo(437.3, 58.5, 438.6, 58.2, 438.5, 59.2);
            c.bezierCurveTo(438.4, 60.1, 437.6, 59.6, 436.6, 61.1);
            c.bezierCurveTo(435.5, 62.5, 435.6, 65.0, 434.1, 64.4);
            c.bezierCurveTo(432.6, 63.9, 436.9, 58.8, 426.4, 64.3);
            c.bezierCurveTo(426.0, 63.6, 428.6, 60.7, 428.0, 59.9);
            c.bezierCurveTo(427.3, 59.1, 424.6, 61.1, 423.9, 60.9);
            c.bezierCurveTo(423.3, 60.7, 423.6, 59.8, 425.4, 59.0);
            c.bezierCurveTo(427.2, 58.2, 429.3, 58.6, 431.1, 57.7);
            c.bezierCurveTo(432.8, 56.7, 432.3, 56.6, 432.7, 55.5);
            c.bezierCurveTo(433.1, 54.4, 432.7, 53.4, 432.6, 53.2);
            c.bezierCurveTo(432.3, 52.8, 431.5, 55.3, 430.5, 54.7);
            c.bezierCurveTo(429.5, 54.1, 430.2, 52.1, 428.7, 50.7);
            c.bezierCurveTo(427.2, 49.3, 426.1, 50.2, 424.7, 49.0);
            c.bezierCurveTo(423.2, 47.9, 423.6, 46.8, 422.9, 46.2);
            c.bezierCurveTo(422.2, 45.6, 423.9, 48.5, 421.0, 46.0);
            c.bezierCurveTo(418.2, 43.4, 413.9, 40.7, 410.7, 36.7);
            c.bezierCurveTo(409.7, 35.4, 409.0, 32.9, 409.3, 30.8);
            c.bezierCurveTo(410.2, 25.4, 412.6, 24.4, 412.4, 23.5);
            c.bezierCurveTo(412.2, 22.6, 411.3, 21.5, 412.1, 17.4);
            c.bezierCurveTo(412.9, 13.4, 419.9, 10.4, 420.1, 11.2);
            c.bezierCurveTo(419.8, 10.4, 419.1, 8.6, 419.3, 8.3);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(428.1, 59.2);
            c.bezierCurveTo(429.1, 59.0, 428.1, 60.9, 429.2, 60.2);
            c.bezierCurveTo(429.9, 59.8, 432.2, 59.6, 432.9, 59.1);
            c.bezierCurveTo(433.5, 58.7, 433.5, 56.4, 432.7, 57.3);
            c.bezierCurveTo(430.3, 58.8, 426.5, 58.5, 424.8, 60.2);
            c.bezierCurveTo(425.2, 60.3, 427.1, 59.4, 428.1, 59.2);
            c.closePath();
            c.fillStyle = 'rgb(255, 128, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(435.8, 53.5);
            c.bezierCurveTo(436.2, 55.0, 435.6, 56.6, 436.1, 58.1);
            c.bezierCurveTo(436.7, 59.6, 437.7, 58.7, 437.9, 59.1);
            c.bezierCurveTo(438.1, 59.5, 435.9, 60.0, 435.5, 60.9);
            c.bezierCurveTo(435.1, 61.8, 434.9, 63.5, 434.3, 63.6);
            c.bezierCurveTo(433.7, 63.6, 435.8, 60.7, 433.7, 60.9);
            c.bezierCurveTo(431.5, 61.0, 427.8, 63.4, 427.2, 63.6);
            c.bezierCurveTo(426.4, 63.9, 428.7, 61.5, 430.4, 60.4);
            c.bezierCurveTo(432.1, 59.2, 433.2, 60.7, 433.9, 59.0);
            c.bezierCurveTo(434.5, 57.3, 433.6, 54.8, 433.6, 53.4);
            c.bezierCurveTo(433.6, 52.5, 435.7, 53.2, 435.8, 53.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(427.5, 1.9);
            c.bezierCurveTo(429.0, -0.4, 431.1, 0.8, 431.9, 2.6);
            c.bezierCurveTo(432.6, 4.1, 430.2, 6.2, 430.9, 7.2);
            c.bezierCurveTo(431.8, 8.6, 434.3, 8.2, 434.8, 9.2);
            c.bezierCurveTo(434.7, 11.2, 431.4, 11.2, 434.3, 12.8);
            c.bezierCurveTo(436.2, 13.7, 434.7, 15.4, 433.2, 14.7);
            c.bezierCurveTo(432.3, 14.3, 432.1, 15.9, 431.6, 15.2);
            c.bezierCurveTo(430.5, 9.0, 428.9, 5.2, 427.3, 5.4);
            c.bezierCurveTo(427.8, 4.2, 426.8, 3.2, 427.5, 1.9);
            c.closePath();
            c.fillStyle = 'rgb(255, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(420.0, 11.9);
            c.bezierCurveTo(420.9, 12.0, 423.9, 13.2, 423.4, 14.1);
            c.bezierCurveTo(423.4, 16.9, 423.4, 20.1, 421.7, 22.3);
            c.bezierCurveTo(413.4, 30.6, 407.7, 15.8, 418.2, 12.6);
            c.bezierCurveTo(419.6, 12.5, 419.2, 11.8, 420.0, 11.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(421.2, 4.3);
            c.bezierCurveTo(421.2, 5.2, 422.8, 9.4, 425.6, 11.0);
            c.bezierCurveTo(424.1, 10.7, 421.2, 9.7, 420.2, 9.3);
            c.bezierCurveTo(419.9, 9.3, 420.9, 11.4, 422.0, 11.9);
            c.bezierCurveTo(423.6, 12.2, 425.4, 11.9, 426.5, 11.9);
            c.bezierCurveTo(425.6, 10.6, 425.5, 10.1, 425.6, 8.7);
            c.bezierCurveTo(424.8, 7.6, 424.8, 7.6, 425.1, 6.7);
            c.bezierCurveTo(424.3, 5.8, 422.1, 4.6, 421.2, 4.3);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(426.0, 8.9);
            c.bezierCurveTo(425.8, 10.0, 426.5, 11.6, 427.4, 12.4);
            c.bezierCurveTo(425.7, 12.2, 425.0, 12.4, 424.4, 12.8);
            c.bezierCurveTo(424.8, 23.4, 420.2, 28.7, 413.1, 24.3);
            c.bezierCurveTo(408.5, 32.6, 408.5, 35.3, 422.0, 45.0);
            c.bezierCurveTo(423.8, 45.5, 421.7, 41.7, 422.7, 41.5);
            c.bezierCurveTo(423.8, 41.3, 425.6, 45.0, 426.0, 44.3);
            c.bezierCurveTo(426.4, 43.6, 423.4, 39.9, 424.2, 38.7);
            c.bezierCurveTo(425.1, 37.5, 428.7, 41.2, 429.4, 39.6);
            c.bezierCurveTo(430.1, 37.9, 426.0, 33.5, 427.1, 32.1);
            c.bezierCurveTo(428.1, 30.7, 432.3, 35.1, 433.4, 34.5);
            c.bezierCurveTo(434.5, 33.8, 432.1, 31.8, 431.2, 30.1);
            c.bezierCurveTo(430.2, 28.4, 431.7, 29.7, 431.1, 27.9);
            c.bezierCurveTo(430.6, 26.1, 429.4, 25.2, 429.7, 22.9);
            c.bezierCurveTo(430.1, 20.6, 432.9, 19.4, 431.9, 17.6);
            c.bezierCurveTo(430.1, 14.1, 429.8, 10.8, 428.8, 7.9);
            c.bezierCurveTo(428.4, 9.2, 426.6, 9.3, 426.0, 8.9);
            c.closePath();
            c.fillStyle = 'rgb(249, 182, 40)';
            c.fill();
            c.beginPath();
            c.moveTo(437.2, 31.6);
            c.bezierCurveTo(442.4, 32.1, 448.7, 31.4, 450.9, 35.5);
            c.bezierCurveTo(452.3, 39.7, 450.4, 44.1, 449.5, 47.4);
            c.bezierCurveTo(448.9, 49.4, 449.9, 50.3, 448.8, 50.7);
            c.bezierCurveTo(443.4, 46.2, 446.0, 53.0, 444.6, 53.3);
            c.bezierCurveTo(437.4, 47.2, 441.3, 53.2, 439.0, 53.9);
            c.bezierCurveTo(431.7, 48.6, 432.7, 52.8, 430.9, 53.6);
            c.bezierCurveTo(428.6, 44.2, 424.7, 54.1, 423.1, 42.4);
            c.bezierCurveTo(431.4, 50.5, 423.7, 39.7, 424.9, 39.1);
            c.bezierCurveTo(425.6, 38.7, 430.3, 41.8, 430.6, 40.8);
            c.bezierCurveTo(434.9, 44.1, 442.7, 45.8, 442.6, 43.3);
            c.bezierCurveTo(441.9, 38.4, 434.0, 35.5, 434.7, 34.6);
            c.bezierCurveTo(435.6, 33.5, 431.5, 30.2, 431.7, 29.5);
            c.bezierCurveTo(432.1, 28.4, 434.1, 31.1, 437.2, 31.6);
            c.closePath();
            c.fillStyle = 'rgb(128, 64, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(442.1, 28.9);
            c.bezierCurveTo(438.2, 25.1, 439.2, 19.8, 439.7, 20.1);
            c.bezierCurveTo(440.2, 20.4, 440.0, 23.0, 443.1, 23.3);
            c.bezierCurveTo(444.5, 23.5, 444.3, 20.8, 445.4, 24.1);
            c.bezierCurveTo(446.1, 26.5, 449.8, 32.3, 449.6, 32.6);
            c.bezierCurveTo(449.0, 33.3, 444.0, 30.8, 442.1, 28.9);
            c.closePath();
            c.fillStyle = 'rgb(0, 64, 128)';
            c.fill();
            c.beginPath();
            c.moveTo(446.1, 23.5);
            c.bezierCurveTo(444.9, 19.9, 448.5, 18.7, 452.2, 17.5);
            c.bezierCurveTo(455.9, 16.2, 461.3, 16.7, 462.2, 17.1);
            c.bezierCurveTo(463.0, 17.5, 457.1, 18.1, 454.9, 20.0);
            c.bezierCurveTo(453.9, 20.9, 452.6, 23.5, 452.5, 26.5);
            c.bezierCurveTo(452.4, 30.0, 451.4, 35.5, 450.7, 33.9);
            c.bezierCurveTo(450.3, 32.8, 447.1, 26.4, 446.1, 23.5);
            c.closePath();
            c.fillStyle = 'rgb(13, 77, 102)';
            c.fill();
            c.beginPath();
            c.moveTo(453.1, 26.6);
            c.bezierCurveTo(453.5, 21.6, 454.1, 20.9, 457.2, 22.2);
            c.bezierCurveTo(459.5, 23.0, 461.6, 24.0, 464.1, 26.9);
            c.bezierCurveTo(466.6, 29.8, 467.8, 36.3, 467.3, 36.2);
            c.bezierCurveTo(466.1, 35.9, 461.7, 30.1, 458.2, 30.3);
            c.bezierCurveTo(454.7, 30.5, 452.3, 38.3, 451.8, 36.7);
            c.bezierCurveTo(451.4, 35.3, 452.8, 30.7, 453.1, 26.6);
            c.closePath();
            c.fillStyle = 'rgb(26, 90, 77)';
            c.fill();
            c.beginPath();
            c.moveTo(458.3, 31.0);
            c.bezierCurveTo(461.1, 30.5, 463.4, 34.4, 464.6, 37.1);
            c.bezierCurveTo(465.9, 39.9, 465.0, 46.6, 464.0, 46.6);
            c.bezierCurveTo(463.7, 46.6, 463.4, 41.9, 459.5, 39.7);
            c.bezierCurveTo(456.5, 37.9, 452.1, 40.2, 452.2, 38.9);
            c.bezierCurveTo(452.4, 37.6, 455.9, 31.4, 458.3, 31.0);
            c.closePath();
            c.fillStyle = 'rgb(38, 102, 51)';
            c.fill();
            c.beginPath();
            c.moveTo(458.6, 40.1);
            c.bezierCurveTo(460.6, 41.1, 461.7, 42.2, 461.4, 45.2);
            c.bezierCurveTo(461.1, 48.1, 456.3, 53.4, 455.7, 53.1);
            c.bezierCurveTo(455.2, 52.9, 456.8, 47.3, 455.8, 44.5);
            c.bezierCurveTo(454.8, 41.7, 451.3, 42.2, 451.7, 41.2);
            c.bezierCurveTo(452.1, 40.3, 456.6, 39.1, 458.6, 40.1);
            c.closePath();
            c.fillStyle = 'rgb(51, 115, 26)';
            c.fill();
            c.beginPath();
            c.moveTo(455.3, 46.5);
            c.bezierCurveTo(455.1, 47.5, 452.4, 50.6, 451.7, 50.2);
            c.bezierCurveTo(450.9, 49.7, 449.8, 48.1, 450.0, 47.7);
            c.bezierCurveTo(450.6, 46.5, 451.0, 42.4, 451.8, 42.5);
            c.bezierCurveTo(452.6, 42.5, 456.2, 43.3, 455.3, 46.5);
            c.closePath();
            c.fillStyle = 'rgb(64, 128, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(439.0, 39.7);
            c.bezierCurveTo(437.9, 39.4, 433.1, 36.4, 432.4, 36.4);
            c.bezierCurveTo(431.8, 36.4, 437.0, 39.4, 439.6, 40.4);
            c.bezierCurveTo(442.1, 41.4, 442.2, 43.2, 441.4, 43.6);
            c.bezierCurveTo(434.6, 43.6, 430.4, 41.6, 427.6, 32.6);
            c.bezierCurveTo(428.4, 31.8, 430.8, 34.5, 433.9, 35.7);
            c.bezierCurveTo(436.7, 36.8, 440.2, 40.0, 439.0, 39.7);
            c.closePath();
            c.fillStyle = 'rgb(13, 77, 102)';
            c.fill();
            c.beginPath();
            c.moveTo(425.8, 5.9);
            c.bezierCurveTo(425.8, 5.6, 425.5, 5.4, 425.2, 5.6);
            c.bezierCurveTo(425.0, 5.7, 424.9, 5.9, 425.2, 6.2);
            c.bezierCurveTo(424.9, 5.9, 424.5, 5.6, 424.3, 5.5);
            c.bezierCurveTo(424.3, 5.0, 424.8, 4.7, 425.2, 4.7);
            c.bezierCurveTo(425.6, 4.6, 426.3, 5.0, 426.2, 5.5);
            c.bezierCurveTo(426.1, 5.6, 425.8, 5.8, 425.8, 5.9);
            c.lineTo(425.8, 5.9);
            c.moveTo(427.4, 6.1);
            c.bezierCurveTo(426.6, 5.5, 425.2, 6.5, 425.5, 7.5);
            c.bezierCurveTo(425.9, 8.7, 427.1, 8.7, 427.7, 8.0);
            c.bezierCurveTo(428.1, 7.5, 428.3, 6.6, 427.4, 6.1);
            c.moveTo(427.1, 7.0);
            c.bezierCurveTo(427.4, 7.1, 427.4, 7.5, 427.2, 7.7);
            c.bezierCurveTo(427.0, 7.9, 426.5, 7.9, 426.4, 7.5);
            c.bezierCurveTo(426.3, 7.1, 426.8, 6.8, 427.1, 7.0);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
        }},
        'id_airplane': { id: 'id_airplane', bounds: { x: 436.7, y: 82.8, width: 74.3, height: 75.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(460.6, 98.0);
            c.bezierCurveTo(460.1, 94.2, 459.5, 88.8, 459.5, 84.9);
            c.bezierCurveTo(461.2, 84.3, 462.1, 84.3, 464.4, 84.3);
            c.bezierCurveTo(468.8, 92.7, 472.7, 99.8, 476.5, 106.8);
            c.bezierCurveTo(484.5, 106.2, 489.4, 106.6, 497.0, 107.0);
            c.bezierCurveTo(497.9, 106.0, 500.3, 102.9, 501.2, 101.6);
            c.bezierCurveTo(501.7, 100.8, 505.9, 101.0, 506.0, 101.6);
            c.bezierCurveTo(506.5, 103.4, 506.6, 106.1, 506.5, 108.1);
            c.bezierCurveTo(508.5, 108.4, 511.0, 109.0, 510.7, 109.9);
            c.bezierCurveTo(506.3, 110.7, 502.5, 111.7, 501.4, 113.4);
            c.bezierCurveTo(496.6, 116.8, 491.1, 120.2, 484.0, 123.0);
            c.bezierCurveTo(487.4, 133.6, 489.8, 138.3, 493.1, 153.3);
            c.bezierCurveTo(492.0, 154.3, 489.2, 154.6, 487.6, 154.3);
            c.bezierCurveTo(483.8, 148.5, 481.7, 145.8, 478.0, 140.0);
            c.bezierCurveTo(474.2, 142.7, 470.1, 135.9, 473.0, 131.8);
            c.bezierCurveTo(472.9, 131.5, 470.3, 127.4, 469.7, 126.1);
            c.bezierCurveTo(463.7, 127.4, 451.7, 128.1, 445.9, 123.4);
            c.bezierCurveTo(446.5, 119.7, 450.6, 115.8, 452.3, 114.2);
            c.bezierCurveTo(454.4, 111.8, 461.1, 110.1, 462.7, 109.5);
            c.bezierCurveTo(462.6, 108.3, 462.5, 107.5, 462.2, 106.1);
            c.bezierCurveTo(457.3, 106.5, 458.4, 99.3, 460.6, 98.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(453.9, 114.4);
            c.bezierCurveTo(459.7, 110.0, 476.8, 106.0, 497.5, 108.0);
            c.bezierCurveTo(498.5, 106.6, 500.0, 104.3, 502.0, 102.0);
            c.bezierCurveTo(503.0, 101.8, 503.3, 101.8, 505.1, 101.9);
            c.bezierCurveTo(505.8, 103.5, 505.6, 107.3, 505.6, 108.0);
            c.bezierCurveTo(503.9, 108.4, 502.6, 109.0, 501.7, 109.5);
            c.bezierCurveTo(503.6, 109.2, 504.3, 108.8, 506.2, 108.7);
            c.bezierCurveTo(506.9, 108.9, 508.6, 108.9, 509.6, 109.5);
            c.bezierCurveTo(502.9, 110.4, 502.6, 111.6, 500.5, 113.1);
            c.bezierCurveTo(493.9, 117.2, 490.7, 119.2, 483.7, 121.8);
            c.bezierCurveTo(483.3, 121.0, 483.5, 120.6, 482.7, 119.3);
            c.bezierCurveTo(477.2, 120.5, 472.3, 121.5, 468.1, 122.9);
            c.bezierCurveTo(468.4, 124.1, 468.7, 124.4, 469.0, 125.0);
            c.bezierCurveTo(455.7, 127.5, 447.7, 123.7, 447.2, 123.1);
            c.bezierCurveTo(446.6, 122.5, 449.7, 118.1, 451.2, 117.0);
            c.bezierCurveTo(454.9, 119.8, 460.8, 115.4, 460.8, 115.4);
            c.bezierCurveTo(458.0, 115.5, 455.3, 115.5, 453.9, 114.4);
            c.moveTo(475.2, 106.9);
            c.bezierCurveTo(473.7, 107.0, 465.2, 108.4, 463.8, 109.2);
            c.bezierCurveTo(461.4, 97.0, 461.0, 94.1, 460.3, 85.4);
            c.bezierCurveTo(461.6, 84.9, 462.5, 85.0, 464.0, 85.1);
            c.moveTo(491.9, 152.6);
            c.bezierCurveTo(490.4, 153.4, 489.6, 153.3, 488.2, 153.2);
            c.bezierCurveTo(481.1, 142.8, 475.9, 135.3, 469.5, 123.4);
            c.bezierCurveTo(469.6, 123.0, 477.9, 121.1, 482.3, 120.3);
            c.bezierCurveTo(486.1, 132.8, 489.7, 141.3, 491.9, 152.6);
            c.closePath();
            c.fillStyle = 'rgb(229, 229, 43)';
            c.fill();
            c.beginPath();
            c.moveTo(473.5, 118.4);
            c.bezierCurveTo(473.6, 118.1, 473.3, 115.1, 473.1, 114.9);
            c.bezierCurveTo(472.8, 114.7, 471.3, 115.0, 471.2, 115.2);
            c.bezierCurveTo(471.1, 115.5, 471.2, 118.6, 471.3, 118.8);
            c.bezierCurveTo(471.5, 119.0, 473.4, 118.7, 473.5, 118.4);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(477.4, 117.5);
            c.bezierCurveTo(477.4, 117.3, 477.1, 114.5, 476.9, 114.3);
            c.bezierCurveTo(476.7, 114.1, 475.2, 114.4, 475.1, 114.6);
            c.bezierCurveTo(475.0, 114.8, 475.1, 117.8, 475.3, 118.0);
            c.bezierCurveTo(475.5, 118.2, 477.3, 117.7, 477.4, 117.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(480.9, 116.7);
            c.bezierCurveTo(481.0, 116.4, 480.8, 113.8, 480.5, 113.7);
            c.bezierCurveTo(480.3, 113.6, 479.1, 113.7, 479.0, 114.0);
            c.bezierCurveTo(478.8, 114.3, 478.9, 117.0, 479.1, 117.1);
            c.bezierCurveTo(479.3, 117.3, 480.8, 117.0, 480.9, 116.7);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(484.1, 115.9);
            c.bezierCurveTo(484.2, 115.6, 484.0, 113.4, 483.8, 113.2);
            c.bezierCurveTo(483.6, 113.0, 482.5, 113.2, 482.3, 113.4);
            c.bezierCurveTo(482.2, 113.6, 482.3, 116.2, 482.5, 116.4);
            c.bezierCurveTo(482.7, 116.7, 484.0, 116.2, 484.1, 115.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(486.9, 115.2);
            c.bezierCurveTo(487.0, 114.9, 487.1, 112.7, 486.8, 112.5);
            c.bezierCurveTo(486.5, 112.3, 485.5, 112.6, 485.4, 112.8);
            c.bezierCurveTo(485.3, 112.9, 485.2, 115.4, 485.4, 115.6);
            c.bezierCurveTo(485.6, 115.8, 486.8, 115.5, 486.9, 115.2);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(460.8, 98.7);
            c.bezierCurveTo(458.8, 100.4, 459.0, 106.3, 462.1, 105.3);
            c.bezierCurveTo(462.1, 105.3, 461.0, 101.3, 460.8, 98.7);
            c.moveTo(473.5, 132.7);
            c.bezierCurveTo(471.8, 134.9, 474.1, 141.7, 477.4, 139.1);
            c.bezierCurveTo(477.4, 139.1, 474.8, 134.9, 473.5, 132.7);
            c.closePath();
            c.fillStyle = 'rgb(227, 128, 27)';
            c.fill();
        }},
        'id_elephant': { id: 'id_elephant', bounds: { x: 285.1, y: 0.9, width: 82.2, height: 62.8 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(300.6, 57.2);
            c.bezierCurveTo(298.0, 55.8, 296.0, 53.3, 295.9, 47.4);
            c.bezierCurveTo(295.8, 41.6, 295.6, 33.3, 296.8, 26.4);
            c.bezierCurveTo(298.0, 19.4, 304.0, 16.8, 304.7, 14.4);
            c.bezierCurveTo(305.5, 9.9, 308.9, 8.1, 313.1, 7.1);
            c.bezierCurveTo(327.2, -1.4, 341.2, -0.1, 353.7, 14.5);
            c.bezierCurveTo(358.8, 20.0, 358.9, 32.5, 359.9, 36.3);
            c.bezierCurveTo(361.5, 38.4, 365.0, 38.2, 366.8, 37.4);
            c.bezierCurveTo(366.0, 39.0, 363.7, 40.0, 361.1, 39.4);
            c.bezierCurveTo(358.5, 38.9, 357.1, 39.7, 355.8, 42.6);
            c.bezierCurveTo(355.4, 44.7, 358.8, 53.0, 358.9, 58.7);
            c.bezierCurveTo(357.4, 62.6, 337.7, 62.6, 336.9, 61.5);
            c.bezierCurveTo(337.8, 57.4, 339.0, 54.4, 340.6, 50.7);
            c.bezierCurveTo(334.8, 54.1, 330.0, 53.5, 324.8, 52.2);
            c.bezierCurveTo(324.5, 52.4, 323.5, 54.9, 322.8, 57.1);
            c.bezierCurveTo(322.0, 59.2, 322.5, 60.2, 321.9, 61.0);
            c.bezierCurveTo(317.3, 64.2, 313.7, 63.8, 305.0, 62.1);
            c.bezierCurveTo(304.2, 61.6, 304.1, 60.7, 304.2, 60.3);
            c.bezierCurveTo(304.5, 59.5, 305.5, 57.3, 305.5, 57.3);
            c.bezierCurveTo(305.5, 57.3, 303.3, 58.5, 300.6, 57.2);
            c.moveTo(311.3, 42.9);
            c.bezierCurveTo(309.6, 41.5, 307.1, 35.8, 310.0, 34.3);
            c.bezierCurveTo(308.3, 33.5, 308.1, 32.6, 307.6, 31.3);
            c.bezierCurveTo(303.0, 31.1, 301.0, 44.3, 302.2, 49.9);
            c.bezierCurveTo(303.4, 55.4, 305.0, 53.3, 304.4, 50.3);
            c.bezierCurveTo(304.6, 50.6, 306.6, 51.5, 307.1, 52.5);
            c.bezierCurveTo(308.7, 49.3, 310.0, 45.6, 311.3, 42.9);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(309.8, 29.7);
            c.bezierCurveTo(306.9, 30.4, 302.7, 30.1, 301.6, 27.6);
            c.bezierCurveTo(304.4, 28.8, 306.6, 29.0, 309.1, 28.3);
            c.bezierCurveTo(308.5, 28.8, 308.6, 29.8, 309.8, 29.7);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(347.6, 9.8);
            c.bezierCurveTo(354.5, 15.2, 358.0, 23.6, 357.9, 31.1);
            c.bezierCurveTo(358.1, 32.7, 357.5, 36.0, 359.2, 37.2);
            c.bezierCurveTo(361.1, 38.3, 363.1, 38.9, 365.1, 38.5);
            c.bezierCurveTo(363.0, 39.9, 360.4, 37.9, 358.5, 38.4);
            c.bezierCurveTo(355.9, 39.1, 354.4, 41.0, 354.1, 43.3);
            c.bezierCurveTo(355.0, 48.1, 357.0, 53.7, 357.7, 58.4);
            c.bezierCurveTo(357.5, 59.4, 349.4, 61.0, 346.0, 60.9);
            c.bezierCurveTo(346.0, 59.1, 345.9, 59.0, 345.1, 58.2);
            c.bezierCurveTo(344.3, 57.5, 342.0, 57.9, 340.7, 57.9);
            c.bezierCurveTo(339.5, 57.9, 339.2, 58.2, 339.6, 56.6);
            c.bezierCurveTo(340.6, 52.6, 343.3, 49.5, 343.1, 45.7);
            c.bezierCurveTo(340.7, 50.0, 334.0, 54.3, 326.1, 50.7);
            c.bezierCurveTo(324.9, 48.9, 327.8, 44.2, 327.0, 44.8);
            c.bezierCurveTo(324.1, 49.2, 322.5, 56.6, 320.8, 60.5);
            c.bezierCurveTo(319.4, 62.1, 315.6, 63.1, 310.6, 62.1);
            c.bezierCurveTo(311.3, 60.2, 311.5, 59.5, 310.4, 58.1);
            c.bezierCurveTo(309.3, 56.7, 305.7, 59.1, 307.7, 54.1);
            c.bezierCurveTo(309.0, 50.7, 312.1, 45.8, 313.1, 42.5);
            c.bezierCurveTo(314.0, 39.3, 311.7, 41.1, 311.5, 41.2);
            c.bezierCurveTo(308.3, 38.1, 310.0, 33.7, 312.0, 34.4);
            c.bezierCurveTo(315.1, 33.5, 317.2, 31.0, 319.7, 28.3);
            c.bezierCurveTo(317.6, 29.9, 313.6, 33.8, 310.9, 33.2);
            c.bezierCurveTo(309.5, 32.9, 308.7, 31.5, 308.4, 30.7);
            c.bezierCurveTo(309.4, 30.6, 310.1, 30.4, 311.0, 29.9);
            c.bezierCurveTo(309.6, 29.1, 309.0, 28.8, 310.7, 27.4);
            c.bezierCurveTo(307.2, 28.5, 303.9, 28.1, 300.9, 26.8);
            c.bezierCurveTo(301.9, 29.8, 303.4, 30.4, 306.3, 30.7);
            c.bezierCurveTo(300.9, 31.1, 299.3, 52.3, 303.2, 54.1);
            c.bezierCurveTo(305.2, 54.8, 305.3, 53.3, 305.2, 51.8);
            c.bezierCurveTo(308.4, 53.5, 305.4, 58.3, 301.8, 56.9);
            c.bezierCurveTo(297.2, 54.7, 296.9, 50.2, 296.7, 46.8);
            c.bezierCurveTo(296.7, 39.4, 296.6, 31.9, 297.7, 26.4);
            c.bezierCurveTo(299.4, 19.4, 304.0, 18.5, 305.4, 15.5);
            c.bezierCurveTo(306.3, 10.7, 309.1, 9.4, 312.9, 8.1);
            c.bezierCurveTo(325.7, 1.4, 337.0, 0.6, 347.6, 9.8);
            c.moveTo(320.5, 14.1);
            c.bezierCurveTo(324.0, 11.9, 330.0, 7.2, 333.3, 10.2);
            c.bezierCurveTo(336.7, 13.2, 335.4, 17.1, 334.9, 20.5);
            c.bezierCurveTo(334.5, 24.0, 334.8, 30.2, 330.5, 30.8);
            c.bezierCurveTo(326.1, 31.4, 325.7, 28.8, 322.1, 25.3);
            c.bezierCurveTo(324.5, 28.5, 323.7, 28.3, 326.5, 30.7);
            c.bezierCurveTo(329.2, 33.0, 334.2, 31.6, 334.9, 27.8);
            c.bezierCurveTo(335.5, 24.5, 335.4, 21.0, 335.8, 18.7);
            c.bezierCurveTo(336.7, 14.0, 336.0, 11.5, 333.8, 9.8);
            c.bezierCurveTo(330.1, 7.0, 327.1, 9.1, 320.5, 14.1);
            c.moveTo(330.3, 13.1);
            c.bezierCurveTo(330.9, 13.5, 330.7, 16.2, 331.4, 15.8);
            c.bezierCurveTo(332.2, 15.4, 331.5, 13.5, 331.1, 12.8);
            c.bezierCurveTo(330.6, 11.9, 326.6, 13.3, 324.4, 15.9);
            c.bezierCurveTo(326.4, 14.4, 328.6, 13.0, 330.3, 13.1);
            c.closePath();
            c.fillStyle = 'rgb(192, 192, 192)';
            c.fill();
            c.beginPath();
            c.moveTo(313.2, 13.2);
            c.bezierCurveTo(315.6, 14.4, 315.0, 18.8, 311.5, 18.9);
            c.bezierCurveTo(308.1, 19.1, 307.9, 15.8, 308.5, 14.6);
            c.bezierCurveTo(309.1, 13.4, 310.8, 12.0, 313.2, 13.2);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(339.1, 58.6);
            c.bezierCurveTo(339.3, 58.4, 340.3, 58.3, 340.6, 58.9);
            c.bezierCurveTo(340.7, 59.2, 340.5, 60.7, 340.2, 61.3);
            c.bezierCurveTo(340.1, 61.5, 338.5, 61.3, 338.4, 61.2);
            c.bezierCurveTo(337.9, 60.8, 338.6, 59.2, 339.1, 58.6);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(341.7, 58.6);
            c.bezierCurveTo(341.9, 58.5, 342.3, 58.4, 342.8, 58.9);
            c.bezierCurveTo(343.0, 59.3, 343.1, 60.7, 342.8, 61.3);
            c.bezierCurveTo(342.7, 61.5, 341.3, 61.4, 341.2, 61.3);
            c.bezierCurveTo(341.1, 60.9, 341.1, 59.1, 341.7, 58.6);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(343.9, 58.8);
            c.bezierCurveTo(344.0, 58.6, 344.6, 58.4, 345.0, 58.8);
            c.bezierCurveTo(345.2, 59.0, 345.5, 60.6, 345.2, 61.1);
            c.bezierCurveTo(345.1, 61.3, 343.8, 61.3, 343.8, 61.2);
            c.bezierCurveTo(343.7, 60.7, 343.6, 59.3, 343.9, 58.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(306.1, 58.4);
            c.bezierCurveTo(306.4, 58.2, 307.3, 58.1, 307.7, 58.9);
            c.bezierCurveTo(307.8, 59.3, 307.6, 60.9, 307.3, 61.6);
            c.bezierCurveTo(307.2, 61.8, 305.6, 61.4, 305.4, 61.3);
            c.bezierCurveTo(304.9, 60.7, 305.6, 59.0, 306.1, 58.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(308.8, 58.7);
            c.bezierCurveTo(309.1, 58.5, 309.5, 58.5, 309.8, 59.1);
            c.bezierCurveTo(310.1, 59.5, 310.1, 61.2, 309.8, 61.9);
            c.bezierCurveTo(309.7, 62.1, 308.3, 62.0, 308.3, 61.7);
            c.bezierCurveTo(308.2, 61.3, 308.3, 59.2, 308.8, 58.7);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(309.1, 14.9);
            c.bezierCurveTo(308.4, 16.3, 310.1, 18.8, 311.9, 18.1);
            c.bezierCurveTo(313.8, 17.4, 314.2, 14.8, 312.9, 14.1);
            c.bezierCurveTo(311.7, 13.3, 309.8, 13.6, 309.1, 14.9);
            c.moveTo(312.5, 15.3);
            c.bezierCurveTo(313.1, 15.7, 313.0, 17.0, 312.1, 17.3);
            c.bezierCurveTo(311.2, 17.7, 310.2, 16.6, 310.7, 15.7);
            c.bezierCurveTo(311.2, 14.9, 311.8, 14.9, 312.5, 15.3);
            c.closePath();
            c.fill();
        }},
        'id_candle': { id: 'id_candle', bounds: { x: 274.9, y: 73.4, width: 63.1, height: 92.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(314.0, 132.2);
            c.bezierCurveTo(315.1, 132.4, 316.2, 132.2, 316.6, 131.9);
            c.bezierCurveTo(318.3, 130.4, 315.4, 126.5, 315.3, 124.4);
            c.bezierCurveTo(315.1, 122.3, 315.3, 118.5, 315.2, 116.6);
            c.bezierCurveTo(315.0, 114.8, 310.8, 113.9, 307.3, 114.1);
            c.lineTo(307.2, 111.7);
            c.bezierCurveTo(309.5, 111.2, 313.0, 106.4, 312.0, 102.8);
            c.bezierCurveTo(310.9, 99.3, 307.4, 92.4, 306.4, 85.9);
            c.bezierCurveTo(304.8, 95.7, 301.6, 100.1, 300.7, 103.6);
            c.bezierCurveTo(299.9, 107.2, 301.1, 111.9, 305.2, 112.3);
            c.lineTo(305.2, 114.0);
            c.bezierCurveTo(300.6, 114.4, 298.9, 114.9, 298.6, 116.5);
            c.bezierCurveTo(298.3, 118.0, 297.5, 151.0, 298.0, 161.3);
            c.bezierCurveTo(305.2, 165.4, 311.8, 162.6, 313.3, 161.7);
            c.bezierCurveTo(314.7, 160.8, 313.6, 140.1, 314.0, 132.2);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(313.7, 116.7);
            c.bezierCurveTo(312.4, 118.6, 301.3, 118.1, 300.3, 116.7);
            c.bezierCurveTo(299.2, 115.2, 304.4, 115.2, 305.1, 115.1);
            c.bezierCurveTo(305.5, 117.6, 307.9, 116.6, 307.4, 115.2);
            c.bezierCurveTo(307.4, 115.2, 314.9, 114.8, 313.7, 116.7);
            c.lineTo(313.7, 116.7);
            c.closePath();
            c.fillStyle = 'rgb(255, 128, 128)';
            c.fill();
            c.beginPath();
            c.moveTo(299.2, 128.1);
            c.bezierCurveTo(299.2, 137.9, 298.4, 152.2, 299.0, 160.5);
            c.bezierCurveTo(303.0, 162.9, 312.2, 161.8, 312.8, 160.4);
            c.bezierCurveTo(313.3, 152.5, 313.1, 140.0, 313.2, 131.8);
            c.bezierCurveTo(309.6, 129.7, 311.4, 124.3, 308.5, 123.2);
            c.bezierCurveTo(305.5, 122.2, 305.7, 126.7, 305.7, 129.0);
            c.bezierCurveTo(305.6, 131.3, 307.7, 139.8, 304.0, 139.6);
            c.bezierCurveTo(300.3, 139.3, 302.3, 130.1, 302.0, 125.5);
            c.bezierCurveTo(301.8, 121.8, 301.1, 121.9, 300.4, 120.6);
            c.bezierCurveTo(305.0, 124.8, 300.5, 138.9, 304.1, 138.6);
            c.bezierCurveTo(307.6, 138.4, 302.5, 122.8, 307.2, 122.1);
            c.bezierCurveTo(311.8, 121.4, 310.5, 131.7, 314.6, 131.6);
            c.bezierCurveTo(318.7, 131.5, 314.3, 126.7, 314.1, 124.2);
            c.bezierCurveTo(313.9, 121.8, 314.1, 117.6, 314.1, 117.6);
            c.bezierCurveTo(310.8, 120.9, 299.9, 118.2, 299.5, 117.6);
            c.bezierCurveTo(299.2, 119.5, 299.2, 124.6, 299.2, 128.1);
            c.lineTo(299.2, 128.1);
            c.closePath();
            c.fillStyle = 'rgb(192, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(306.4, 91.7);
            c.bezierCurveTo(305.5, 96.4, 302.5, 101.0, 302.0, 104.0);
            c.bezierCurveTo(301.6, 107.0, 302.8, 110.4, 305.3, 110.6);
            c.bezierCurveTo(305.5, 109.1, 305.5, 106.4, 306.7, 104.8);
            c.bezierCurveTo(307.3, 105.0, 307.7, 105.3, 308.1, 105.4);
            c.bezierCurveTo(307.6, 106.7, 306.9, 109.1, 307.1, 110.3);
            c.bezierCurveTo(309.8, 108.7, 311.1, 104.9, 310.4, 102.5);
            c.bezierCurveTo(309.7, 100.2, 307.3, 97.3, 306.4, 91.7);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 128)';
            c.fill();
        }},
        'id_robot': { id: 'id_robot', bounds: { x: 360.1, y: 85.2, width: 59.2, height: 74.8 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(383.7, 93.7);
            c.lineTo(376.3, 86.0);
            c.lineTo(376.6, 85.6);
            c.lineTo(384.1, 93.3);
            c.bezierCurveTo(387.4, 90.0, 391.1, 90.3, 394.2, 92.9);
            c.lineTo(401.6, 85.2);
            c.lineTo(402.0, 85.5);
            c.lineTo(394.9, 93.4);
            c.bezierCurveTo(398.0, 96.9, 399.3, 101.5, 400.4, 105.4);
            c.bezierCurveTo(402.6, 105.8, 406.1, 104.7, 406.7, 108.7);
            c.bezierCurveTo(419.3, 110.1, 418.0, 117.4, 418.0, 125.5);
            c.bezierCurveTo(419.9, 126.6, 420.1, 132.4, 415.9, 132.8);
            c.bezierCurveTo(415.8, 132.8, 414.5, 131.4, 414.5, 131.4);
            c.bezierCurveTo(414.5, 131.4, 412.6, 132.8, 412.4, 132.6);
            c.bezierCurveTo(408.6, 129.9, 409.9, 125.7, 412.0, 125.1);
            c.bezierCurveTo(413.3, 119.3, 412.0, 115.7, 406.6, 115.6);
            c.bezierCurveTo(406.6, 118.4, 406.6, 128.2, 406.2, 128.6);
            c.bezierCurveTo(405.8, 128.9, 403.4, 129.4, 403.4, 129.4);
            c.bezierCurveTo(403.8, 138.5, 403.4, 149.7, 403.3, 152.8);
            c.bezierCurveTo(405.2, 155.6, 407.6, 156.2, 406.7, 159.8);
            c.bezierCurveTo(401.6, 159.8, 397.0, 160.1, 391.1, 159.9);
            c.bezierCurveTo(390.8, 156.6, 391.4, 155.6, 393.7, 153.1);
            c.bezierCurveTo(393.1, 148.8, 393.0, 140.4, 393.5, 129.8);
            c.lineTo(388.0, 129.7);
            c.bezierCurveTo(388.0, 139.3, 387.5, 145.6, 387.8, 153.4);
            c.bezierCurveTo(390.7, 154.8, 390.5, 157.8, 390.3, 159.8);
            c.bezierCurveTo(383.9, 160.0, 378.9, 159.9, 373.5, 159.9);
            c.bezierCurveTo(372.9, 156.0, 374.7, 154.3, 377.5, 153.1);
            c.bezierCurveTo(377.6, 148.2, 377.1, 140.0, 377.4, 128.9);
            c.bezierCurveTo(376.1, 128.7, 375.2, 128.7, 374.4, 128.2);
            c.bezierCurveTo(373.5, 127.7, 373.3, 119.4, 373.3, 116.3);
            c.bezierCurveTo(366.7, 114.5, 367.5, 123.9, 367.7, 125.3);
            c.bezierCurveTo(371.4, 128.3, 369.6, 131.8, 367.0, 133.3);
            c.bezierCurveTo(365.8, 132.4, 365.1, 131.7, 365.1, 131.7);
            c.bezierCurveTo(365.1, 131.7, 364.3, 132.5, 363.1, 133.3);
            c.bezierCurveTo(358.2, 130.6, 360.6, 125.8, 362.0, 125.1);
            c.bezierCurveTo(360.4, 116.0, 362.6, 109.2, 373.7, 109.3);
            c.bezierCurveTo(374.0, 105.8, 375.4, 106.1, 378.6, 105.8);
            c.bezierCurveTo(380.4, 100.2, 379.8, 98.8, 383.7, 93.7);
            c.lineTo(383.7, 93.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(398.6, 105.3);
            c.bezierCurveTo(391.1, 105.6, 386.5, 105.4, 380.8, 105.9);
            c.bezierCurveTo(383.8, 86.0, 396.3, 89.9, 398.6, 105.3);
            c.closePath();
            c.fillStyle = 'rgb(227, 227, 27)';
            c.fill();
            c.beginPath();
            c.moveTo(366.6, 131.9);
            c.bezierCurveTo(366.4, 131.8, 366.2, 131.5, 365.7, 130.9);
            c.bezierCurveTo(369.2, 126.7, 360.7, 127.1, 364.6, 131.0);
            c.bezierCurveTo(364.4, 131.2, 363.7, 131.9, 363.2, 132.0);
            c.bezierCurveTo(359.3, 129.8, 361.7, 125.5, 364.8, 125.5);
            c.bezierCurveTo(368.4, 125.6, 371.3, 129.9, 366.6, 131.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(415.9, 131.8);
            c.bezierCurveTo(415.7, 131.7, 415.5, 131.4, 415.1, 130.8);
            c.bezierCurveTo(419.0, 127.1, 410.5, 126.6, 413.9, 130.7);
            c.bezierCurveTo(413.8, 130.8, 412.9, 131.5, 412.5, 131.5);
            c.bezierCurveTo(408.8, 129.0, 411.7, 125.2, 414.8, 125.6);
            c.bezierCurveTo(418.3, 126.1, 420.7, 130.4, 415.9, 131.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(369.0, 114.9);
            c.bezierCurveTo(367.7, 115.6, 366.7, 113.8, 366.3, 112.7);
            c.bezierCurveTo(366.0, 111.6, 373.5, 110.1, 373.5, 111.3);
            c.bezierCurveTo(373.6, 112.5, 373.7, 114.4, 373.2, 114.3);
            c.bezierCurveTo(372.6, 114.3, 370.2, 114.1, 369.0, 114.9);
            c.closePath();
            c.fillStyle = 'rgb(161, 161, 161)';
            c.fill();
            c.beginPath();
            c.moveTo(366.1, 119.1);
            c.bezierCurveTo(365.8, 119.3, 363.9, 119.4, 363.4, 118.9);
            c.bezierCurveTo(362.9, 118.5, 364.0, 114.1, 364.9, 113.9);
            c.bezierCurveTo(365.9, 113.8, 366.9, 116.0, 367.0, 116.3);
            c.bezierCurveTo(367.1, 116.5, 366.4, 118.9, 366.1, 119.1);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(366.0, 120.4);
            c.bezierCurveTo(366.2, 120.9, 366.3, 124.3, 366.0, 124.6);
            c.bezierCurveTo(365.7, 124.9, 364.0, 124.8, 363.7, 124.7);
            c.bezierCurveTo(363.3, 124.5, 362.8, 120.6, 363.3, 120.2);
            c.bezierCurveTo(363.7, 119.8, 365.7, 120.0, 366.0, 120.4);
            c.lineTo(366.0, 120.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(411.2, 114.9);
            c.bezierCurveTo(412.4, 115.7, 413.5, 113.9, 413.8, 112.8);
            c.bezierCurveTo(414.1, 111.7, 407.1, 110.0, 407.0, 111.2);
            c.bezierCurveTo(406.9, 112.4, 406.7, 114.2, 407.3, 114.2);
            c.bezierCurveTo(407.8, 114.2, 410.1, 114.1, 411.2, 114.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(413.8, 119.2);
            c.bezierCurveTo(414.1, 119.4, 415.9, 119.5, 416.4, 119.1);
            c.bezierCurveTo(416.9, 118.7, 416.0, 114.2, 415.1, 114.0);
            c.bezierCurveTo(414.2, 113.8, 413.1, 116.1, 413.0, 116.3);
            c.bezierCurveTo(412.9, 116.6, 413.5, 119.0, 413.8, 119.2);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(413.9, 120.5);
            c.bezierCurveTo(413.7, 120.9, 413.4, 124.3, 413.7, 124.6);
            c.bezierCurveTo(414.0, 125.0, 415.6, 124.9, 416.0, 124.8);
            c.bezierCurveTo(416.3, 124.7, 416.9, 120.8, 416.5, 120.3);
            c.bezierCurveTo(416.1, 119.9, 414.2, 120.1, 413.9, 120.5);
            c.lineTo(413.9, 120.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(386.0, 95.8);
            c.bezierCurveTo(387.4, 95.8, 388.6, 97.0, 388.6, 98.4);
            c.bezierCurveTo(388.6, 99.9, 387.4, 101.1, 386.0, 101.1);
            c.bezierCurveTo(384.6, 101.1, 383.4, 99.9, 383.4, 98.4);
            c.bezierCurveTo(383.4, 97.0, 384.6, 95.8, 386.0, 95.8);
            c.moveTo(383.8, 98.4);
            c.bezierCurveTo(383.8, 99.6, 384.8, 100.6, 385.9, 100.6);
            c.bezierCurveTo(387.0, 100.6, 387.9, 99.6, 387.9, 98.4);
            c.bezierCurveTo(387.9, 97.3, 387.0, 96.3, 385.9, 96.3);
            c.bezierCurveTo(384.8, 96.3, 383.8, 97.3, 383.8, 98.4);
            c.moveTo(387.4, 98.3);
            c.bezierCurveTo(387.4, 99.2, 386.8, 99.8, 386.1, 99.8);
            c.bezierCurveTo(385.3, 99.8, 384.7, 99.2, 384.7, 98.3);
            c.bezierCurveTo(384.7, 97.5, 385.3, 96.9, 386.1, 96.9);
            c.bezierCurveTo(386.8, 96.9, 387.4, 97.5, 387.4, 98.3);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(392.9, 101.1);
            c.bezierCurveTo(391.5, 101.4, 390.1, 100.5, 389.7, 99.0);
            c.bezierCurveTo(389.4, 97.6, 390.3, 96.1, 391.7, 95.8);
            c.bezierCurveTo(393.1, 95.5, 394.5, 96.4, 394.8, 97.9);
            c.bezierCurveTo(395.1, 99.3, 394.2, 100.8, 392.9, 101.1);
            c.moveTo(394.4, 98.0);
            c.bezierCurveTo(394.1, 96.8, 393.0, 96.1, 391.9, 96.4);
            c.bezierCurveTo(390.8, 96.6, 390.1, 97.7, 390.4, 98.9);
            c.bezierCurveTo(390.6, 100.0, 391.7, 100.7, 392.8, 100.5);
            c.bezierCurveTo(393.9, 100.3, 394.6, 99.1, 394.4, 98.0);
            c.moveTo(390.9, 98.9);
            c.bezierCurveTo(390.7, 98.1, 391.2, 97.3, 391.9, 97.1);
            c.bezierCurveTo(392.6, 97.0, 393.4, 97.5, 393.6, 98.3);
            c.bezierCurveTo(393.7, 99.1, 393.3, 99.9, 392.5, 100.0);
            c.bezierCurveTo(391.8, 100.2, 391.1, 99.7, 390.9, 98.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(404.7, 127.4);
            c.bezierCurveTo(404.3, 128.5, 375.9, 128.5, 375.2, 127.3);
            c.bezierCurveTo(374.6, 126.1, 374.6, 108.2, 375.6, 107.5);
            c.bezierCurveTo(376.6, 106.8, 403.2, 106.1, 404.5, 107.1);
            c.bezierCurveTo(405.8, 108.1, 405.1, 126.3, 404.7, 127.4);
            c.closePath();
            c.fillStyle = 'rgb(224, 224, 224)';
            c.fill();
            c.beginPath();
            c.moveTo(390.7, 115.4);
            c.bezierCurveTo(390.9, 114.9, 400.4, 114.9, 401.0, 115.3);
            c.bezierCurveTo(401.3, 115.5, 401.2, 123.1, 400.9, 123.5);
            c.bezierCurveTo(400.4, 124.0, 391.3, 123.9, 390.9, 123.5);
            c.bezierCurveTo(390.6, 123.2, 390.5, 116.0, 390.7, 115.4);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(383.3, 110.4);
            c.bezierCurveTo(383.4, 110.5, 383.4, 113.7, 383.2, 113.9);
            c.bezierCurveTo(383.0, 114.1, 379.1, 114.0, 378.8, 113.9);
            c.bezierCurveTo(378.7, 113.7, 378.7, 110.7, 378.8, 110.4);
            c.bezierCurveTo(378.9, 110.3, 383.0, 110.2, 383.3, 110.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(382.4, 111.1);
            c.bezierCurveTo(382.5, 111.2, 382.5, 113.0, 382.4, 113.2);
            c.bezierCurveTo(382.3, 113.3, 379.9, 113.3, 379.8, 113.2);
            c.bezierCurveTo(379.7, 113.1, 379.7, 111.3, 379.7, 111.1);
            c.bezierCurveTo(379.8, 111.0, 382.3, 111.0, 382.4, 111.1);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(389.2, 110.4);
            c.bezierCurveTo(389.3, 110.5, 389.3, 113.6, 389.1, 113.8);
            c.bezierCurveTo(388.9, 114.0, 384.9, 114.0, 384.7, 113.9);
            c.bezierCurveTo(384.6, 113.7, 384.5, 110.7, 384.6, 110.4);
            c.bezierCurveTo(384.7, 110.2, 388.9, 110.2, 389.2, 110.4);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(388.3, 111.1);
            c.bezierCurveTo(388.4, 111.1, 388.3, 113.0, 388.2, 113.1);
            c.bezierCurveTo(388.1, 113.2, 385.8, 113.2, 385.7, 113.1);
            c.bezierCurveTo(385.6, 113.0, 385.6, 111.2, 385.6, 111.1);
            c.bezierCurveTo(385.7, 111.0, 388.1, 111.0, 388.3, 111.1);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(395.4, 110.4);
            c.bezierCurveTo(395.5, 110.5, 395.5, 113.7, 395.3, 113.9);
            c.bezierCurveTo(395.1, 114.1, 391.1, 114.0, 390.9, 113.9);
            c.bezierCurveTo(390.8, 113.7, 390.7, 110.7, 390.8, 110.4);
            c.bezierCurveTo(390.9, 110.3, 395.1, 110.2, 395.4, 110.4);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(394.5, 111.1);
            c.bezierCurveTo(394.6, 111.2, 394.5, 113.0, 394.4, 113.2);
            c.bezierCurveTo(394.3, 113.3, 392.0, 113.3, 391.9, 113.2);
            c.bezierCurveTo(391.8, 113.1, 391.8, 111.3, 391.8, 111.1);
            c.bezierCurveTo(391.9, 111.0, 394.3, 111.0, 394.5, 111.1);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(400.9, 110.3);
            c.bezierCurveTo(401.0, 110.4, 401.0, 113.6, 400.8, 113.8);
            c.bezierCurveTo(400.7, 114.0, 396.7, 114.0, 396.5, 113.8);
            c.bezierCurveTo(396.3, 113.7, 396.3, 110.6, 396.4, 110.4);
            c.bezierCurveTo(396.5, 110.2, 400.7, 110.1, 400.9, 110.3);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(400.0, 111.0);
            c.bezierCurveTo(400.1, 111.0, 400.1, 112.9, 400.0, 113.1);
            c.bezierCurveTo(399.9, 113.2, 397.5, 113.2, 397.4, 113.1);
            c.bezierCurveTo(397.3, 113.0, 397.3, 111.2, 397.3, 111.0);
            c.bezierCurveTo(397.4, 110.9, 399.9, 110.9, 400.0, 111.0);
            c.closePath();
            c.fillStyle = 'rgb(255, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(383.3, 115.2);
            c.bezierCurveTo(383.4, 115.4, 383.4, 118.5, 383.2, 118.7);
            c.bezierCurveTo(383.0, 118.9, 379.0, 118.9, 378.8, 118.7);
            c.bezierCurveTo(378.7, 118.6, 378.6, 115.6, 378.7, 115.3);
            c.bezierCurveTo(378.8, 115.1, 383.0, 115.1, 383.3, 115.2);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(382.4, 115.9);
            c.bezierCurveTo(382.5, 116.0, 382.4, 117.9, 382.3, 118.0);
            c.bezierCurveTo(382.2, 118.1, 379.9, 118.1, 379.8, 118.0);
            c.bezierCurveTo(379.7, 117.9, 379.7, 116.1, 379.7, 116.0);
            c.bezierCurveTo(379.8, 115.8, 382.2, 115.8, 382.4, 115.9);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(389.3, 115.3);
            c.bezierCurveTo(389.4, 115.4, 389.4, 118.6, 389.2, 118.7);
            c.bezierCurveTo(389.0, 119.0, 385.0, 118.9, 384.8, 118.8);
            c.bezierCurveTo(384.7, 118.6, 384.6, 115.6, 384.8, 115.3);
            c.bezierCurveTo(384.9, 115.1, 389.0, 115.1, 389.3, 115.3);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(388.4, 116.0);
            c.bezierCurveTo(388.5, 116.1, 388.5, 117.9, 388.4, 118.0);
            c.bezierCurveTo(388.2, 118.1, 385.9, 118.1, 385.8, 118.0);
            c.bezierCurveTo(385.7, 118.0, 385.7, 116.2, 385.7, 116.0);
            c.bezierCurveTo(385.8, 115.9, 388.2, 115.9, 388.4, 116.0);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(383.3, 120.2);
            c.bezierCurveTo(383.4, 120.4, 383.4, 123.5, 383.3, 123.7);
            c.bezierCurveTo(383.1, 123.9, 379.1, 123.9, 378.9, 123.7);
            c.bezierCurveTo(378.7, 123.6, 378.7, 120.6, 378.8, 120.3);
            c.bezierCurveTo(378.9, 120.1, 383.1, 120.1, 383.3, 120.2);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(382.4, 120.9);
            c.bezierCurveTo(382.5, 121.0, 382.5, 122.9, 382.4, 123.0);
            c.bezierCurveTo(382.3, 123.1, 379.9, 123.1, 379.8, 123.0);
            c.bezierCurveTo(379.7, 122.9, 379.7, 121.1, 379.8, 121.0);
            c.bezierCurveTo(379.8, 120.8, 382.3, 120.8, 382.4, 120.9);
            c.closePath();
            c.fillStyle = 'rgb(255, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(389.3, 120.2);
            c.bezierCurveTo(389.4, 120.4, 389.4, 123.5, 389.3, 123.7);
            c.bezierCurveTo(389.1, 123.9, 385.1, 123.9, 384.9, 123.7);
            c.bezierCurveTo(384.7, 123.6, 384.7, 120.6, 384.8, 120.3);
            c.bezierCurveTo(384.9, 120.1, 389.1, 120.1, 389.3, 120.2);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(388.4, 120.9);
            c.bezierCurveTo(388.5, 121.0, 388.5, 122.9, 388.4, 123.0);
            c.bezierCurveTo(388.3, 123.1, 385.9, 123.1, 385.8, 123.0);
            c.bezierCurveTo(385.7, 122.9, 385.7, 121.1, 385.7, 121.0);
            c.bezierCurveTo(385.8, 120.8, 388.3, 120.8, 388.4, 120.9);
            c.closePath();
            c.fillStyle = 'rgb(255, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(400.0, 116.1);
            c.bezierCurveTo(400.3, 116.4, 400.2, 122.3, 399.9, 122.7);
            c.bezierCurveTo(399.6, 123.0, 392.2, 123.0, 391.9, 122.7);
            c.bezierCurveTo(391.6, 122.4, 391.6, 116.6, 391.8, 116.2);
            c.bezierCurveTo(392.0, 115.7, 399.7, 115.8, 400.0, 116.1);
            c.closePath();
            c.fillStyle = 'rgb(37, 37, 217)';
            c.fill();
            c.beginPath();
            c.moveTo(404.9, 158.9);
            c.bezierCurveTo(402.7, 159.1, 396.3, 159.1, 393.2, 158.8);
            c.bezierCurveTo(391.5, 150.9, 406.6, 152.6, 404.9, 158.9);
            c.closePath();
            c.fillStyle = 'rgb(64, 64, 64)';
            c.fill();
            c.beginPath();
            c.moveTo(388.0, 158.5);
            c.bezierCurveTo(385.9, 158.7, 378.5, 158.9, 375.3, 158.6);
            c.bezierCurveTo(374.2, 151.3, 390.1, 152.8, 388.0, 158.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(379.2, 129.6);
            c.bezierCurveTo(379.6, 129.4, 386.1, 129.7, 386.4, 130.0);
            c.bezierCurveTo(386.8, 130.3, 386.9, 135.7, 386.3, 136.1);
            c.bezierCurveTo(385.8, 136.5, 379.5, 136.6, 379.0, 136.1);
            c.bezierCurveTo(378.5, 135.7, 378.9, 129.9, 379.2, 129.6);
            c.lineTo(379.2, 129.6);
            c.closePath();
            c.fillStyle = 'rgb(161, 161, 161)';
            c.fill();
            c.beginPath();
            c.moveTo(379.2, 144.8);
            c.bezierCurveTo(379.5, 145.1, 386.0, 144.8, 386.4, 144.5);
            c.bezierCurveTo(386.8, 144.2, 386.9, 138.4, 386.4, 138.0);
            c.bezierCurveTo(385.8, 137.5, 379.6, 137.4, 379.0, 137.9);
            c.bezierCurveTo(378.5, 138.3, 378.9, 144.5, 379.2, 144.8);
            c.lineTo(379.2, 144.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(379.2, 146.2);
            c.bezierCurveTo(379.6, 145.9, 386.1, 146.2, 386.4, 146.5);
            c.bezierCurveTo(386.8, 146.8, 386.9, 151.8, 386.3, 152.2);
            c.bezierCurveTo(385.8, 152.6, 379.5, 152.7, 379.0, 152.3);
            c.bezierCurveTo(378.5, 151.8, 378.9, 146.4, 379.2, 146.2);
            c.lineTo(379.2, 146.2);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(402.0, 129.9);
            c.bezierCurveTo(401.6, 129.6, 395.1, 129.9, 394.8, 130.2);
            c.bezierCurveTo(394.4, 130.5, 394.3, 135.8, 394.9, 136.2);
            c.bezierCurveTo(395.4, 136.6, 401.7, 136.7, 402.2, 136.2);
            c.bezierCurveTo(402.7, 135.8, 402.3, 130.1, 402.0, 129.9);
            c.lineTo(402.0, 129.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(402.0, 144.8);
            c.bezierCurveTo(401.7, 145.1, 395.2, 144.8, 394.8, 144.5);
            c.bezierCurveTo(394.4, 144.2, 394.3, 138.5, 394.8, 138.0);
            c.bezierCurveTo(395.4, 137.6, 401.6, 137.5, 402.2, 137.9);
            c.bezierCurveTo(402.7, 138.4, 402.3, 144.5, 402.0, 144.8);
            c.lineTo(402.0, 144.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(402.0, 146.1);
            c.bezierCurveTo(401.6, 145.9, 395.1, 146.1, 394.8, 146.4);
            c.bezierCurveTo(394.4, 146.7, 394.3, 151.7, 394.9, 152.0);
            c.bezierCurveTo(395.4, 152.4, 401.7, 152.5, 402.2, 152.1);
            c.bezierCurveTo(402.7, 151.7, 402.3, 146.4, 402.0, 146.1);
            c.lineTo(402.0, 146.1);
            c.closePath();
            c.fill();
        }},
        'id_banana': { id: 'id_banana', bounds: { x: 169.4, y: -5.1, width: 92.0, height: 66.4 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(181.1, 26.3);
            c.bezierCurveTo(195.4, 26.9, 208.2, 30.2, 218.5, 28.3);
            c.bezierCurveTo(228.7, 26.4, 229.6, 24.4, 234.9, 22.6);
            c.bezierCurveTo(239.0, 21.2, 242.7, 20.5, 246.5, 19.7);
            c.bezierCurveTo(248.0, 18.8, 250.2, 17.0, 252.5, 14.4);
            c.lineTo(255.3, 13.6);
            c.lineTo(259.5, 15.9);
            c.lineTo(257.9, 17.7);
            c.bezierCurveTo(254.7, 20.0, 250.2, 22.3, 249.3, 24.0);
            c.bezierCurveTo(249.0, 29.2, 244.5, 36.5, 232.4, 40.7);
            c.bezierCurveTo(220.3, 44.9, 198.6, 44.5, 191.9, 41.5);
            c.bezierCurveTo(185.2, 38.5, 182.7, 36.6, 180.5, 33.1);
            c.bezierCurveTo(178.3, 30.3, 178.5, 31.3, 176.8, 30.4);
            c.lineTo(177.6, 25.5);
            c.bezierCurveTo(178.8, 25.7, 179.5, 26.1, 181.1, 26.3);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(180.9, 27.2);
            c.bezierCurveTo(194.9, 28.6, 204.0, 30.0, 213.9, 29.9);
            c.bezierCurveTo(223.7, 29.8, 232.6, 24.3, 237.2, 22.8);
            c.bezierCurveTo(241.7, 21.4, 243.7, 21.6, 247.0, 20.7);
            c.bezierCurveTo(248.6, 18.9, 250.4, 18.7, 253.0, 15.2);
            c.lineTo(254.9, 16.7);
            c.lineTo(253.4, 18.3);
            c.lineTo(255.4, 16.8);
            c.lineTo(257.0, 17.4);
            c.bezierCurveTo(253.8, 19.4, 251.0, 21.1, 248.7, 23.4);
            c.bezierCurveTo(247.2, 32.3, 236.8, 40.4, 221.5, 42.0);
            c.bezierCurveTo(206.1, 43.6, 190.0, 44.1, 180.3, 31.5);
            c.bezierCurveTo(190.2, 36.4, 201.8, 38.3, 214.3, 37.0);
            c.bezierCurveTo(226.9, 35.8, 233.5, 33.2, 244.4, 28.2);
            c.bezierCurveTo(242.1, 28.8, 229.1, 34.8, 214.3, 36.2);
            c.bezierCurveTo(199.6, 37.7, 190.8, 35.3, 180.4, 31.0);
            c.bezierCurveTo(181.0, 28.9, 181.7, 28.9, 180.9, 27.2);
            c.closePath();
            c.fillStyle = 'rgb(239, 220, 56)';
            c.fill();
            c.beginPath();
            c.moveTo(177.5, 30.2);
            c.bezierCurveTo(177.6, 30.3, 179.4, 31.0, 179.5, 30.9);
            c.bezierCurveTo(179.6, 30.8, 180.2, 28.7, 180.3, 28.3);
            c.bezierCurveTo(180.3, 27.9, 179.6, 26.8, 179.5, 26.6);
            c.bezierCurveTo(179.4, 26.4, 178.1, 26.2, 178.0, 26.5);
            c.bezierCurveTo(177.8, 26.8, 177.3, 30.1, 177.5, 30.2);
            c.lineTo(177.5, 30.2);
            c.closePath();
            c.fillStyle = 'rgb(128, 64, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(256.5, 16.7);
            c.bezierCurveTo(256.9, 16.7, 258.1, 16.3, 258.1, 16.0);
            c.bezierCurveTo(258.1, 15.7, 255.5, 14.2, 255.1, 14.3);
            c.bezierCurveTo(254.7, 14.4, 253.5, 14.6, 253.7, 15.2);
            c.bezierCurveTo(253.8, 15.4, 256.0, 16.7, 256.5, 16.7);
            c.closePath();
            c.fill();
        }},
        'id_scissors': { id: 'id_scissors', bounds: { x: 37.7, y: -0.2, width: 93.8, height: 55.6 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(73.1, 42.5);
            c.bezierCurveTo(69.9, 46.5, 58.1, 47.7, 55.3, 38.7);
            c.bezierCurveTo(52.5, 29.6, 64.5, 28.9, 79.9, 26.4);
            c.bezierCurveTo(87.7, 22.6, 108.6, 10.9, 126.6, 13.8);
            c.lineTo(84.4, 29.1);
            c.bezierCurveTo(81.1, 31.5, 77.0, 31.9, 73.5, 33.1);
            c.bezierCurveTo(74.1, 35.4, 76.2, 38.6, 73.1, 42.5);
            c.moveTo(62.7, 33.6);
            c.bezierCurveTo(58.8, 35.5, 59.2, 39.0, 61.6, 41.1);
            c.bezierCurveTo(64.1, 43.2, 70.8, 41.2, 71.6, 38.1);
            c.bezierCurveTo(72.4, 35.1, 66.7, 31.7, 62.7, 33.6);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(59.7, 42.8);
            c.bezierCurveTo(54.5, 38.7, 56.2, 32.7, 61.3, 31.1);
            c.bezierCurveTo(66.4, 29.5, 74.0, 28.7, 80.5, 27.3);
            c.bezierCurveTo(91.6, 20.6, 111.0, 13.6, 121.7, 14.2);
            c.lineTo(83.8, 28.1);
            c.bezierCurveTo(83.8, 28.7, 83.1, 29.0, 81.1, 29.9);
            c.bezierCurveTo(78.6, 31.0, 73.6, 32.2, 72.3, 32.6);
            c.bezierCurveTo(77.7, 43.3, 65.0, 46.9, 59.7, 42.8);
            c.moveTo(58.7, 35.7);
            c.bezierCurveTo(57.3, 39.4, 60.8, 44.0, 66.7, 42.9);
            c.bezierCurveTo(72.6, 41.8, 75.0, 36.6, 70.5, 33.6);
            c.bezierCurveTo(65.9, 30.5, 60.1, 32.0, 58.7, 35.7);
            c.closePath();
            c.fillStyle = 'rgb(161, 161, 161)';
            c.fill();
            c.beginPath();
            c.moveTo(57.1, 10.0);
            c.bezierCurveTo(52.4, 14.7, 53.5, 22.5, 68.9, 24.3);
            c.lineTo(79.3, 26.0);
            c.bezierCurveTo(89.9, 33.6, 110.4, 38.9, 117.1, 39.4);
            c.bezierCurveTo(123.8, 39.9, 125.0, 39.2, 126.1, 38.6);
            c.lineTo(83.9, 23.2);
            c.bezierCurveTo(81.5, 20.9, 76.1, 20.3, 72.6, 19.0);
            c.bezierCurveTo(73.8, 17.4, 76.2, 13.6, 73.7, 10.5);
            c.bezierCurveTo(71.1, 7.5, 61.8, 5.3, 57.1, 10.0);
            c.moveTo(60.0, 12.4);
            c.bezierCurveTo(62.2, 9.9, 68.1, 9.8, 70.7, 13.2);
            c.bezierCurveTo(73.3, 16.7, 66.9, 20.4, 62.6, 19.3);
            c.bezierCurveTo(58.3, 18.1, 57.8, 14.8, 60.0, 12.4);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(58.0, 10.5);
            c.bezierCurveTo(53.8, 15.2, 56.5, 19.0, 60.9, 21.1);
            c.bezierCurveTo(65.3, 23.3, 72.4, 23.5, 75.6, 24.2);
            c.lineTo(80.1, 25.3);
            c.bezierCurveTo(80.4, 24.8, 81.4, 24.1, 81.4, 24.1);
            c.bezierCurveTo(81.0, 24.7, 80.7, 25.1, 80.6, 25.5);
            c.bezierCurveTo(92.2, 32.8, 113.4, 39.4, 122.7, 38.5);
            c.lineTo(88.8, 26.5);
            c.bezierCurveTo(87.9, 27.0, 87.9, 27.6, 87.7, 28.1);
            c.bezierCurveTo(87.7, 27.6, 87.7, 26.9, 88.0, 26.2);
            c.lineTo(83.2, 24.3);
            c.bezierCurveTo(83.2, 23.7, 82.5, 23.4, 80.5, 22.5);
            c.bezierCurveTo(78.0, 21.4, 72.5, 19.8, 71.2, 19.4);
            c.bezierCurveTo(80.9, 8.0, 62.1, 5.8, 58.0, 10.5);
            c.moveTo(62.8, 20.4);
            c.bezierCurveTo(58.5, 19.3, 56.1, 16.0, 58.8, 12.3);
            c.bezierCurveTo(61.4, 8.6, 68.4, 8.4, 71.7, 13.0);
            c.bezierCurveTo(75.0, 17.6, 67.1, 21.4, 62.8, 20.4);
            c.closePath();
            c.fillStyle = 'rgb(161, 161, 161)';
            c.fill();
            c.beginPath();
            c.moveTo(85.9, 26.4);
            c.bezierCurveTo(85.9, 26.2, 85.9, 25.6, 85.3, 25.4);
            c.bezierCurveTo(84.6, 25.2, 84.2, 25.5, 83.9, 25.8);
            c.lineTo(85.9, 26.4);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(85.8, 26.8);
            c.bezierCurveTo(85.7, 27.0, 85.2, 27.6, 84.5, 27.4);
            c.bezierCurveTo(83.9, 27.2, 83.8, 26.7, 83.8, 26.2);
            c.lineTo(85.8, 26.8);
            c.closePath();
            c.fill();
        }},
        'id_flower': { id: 'id_flower', bounds: { x: 188.7, y: 68.5, width: 82.9, height: 94.3 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(219.7, 161.0);
            c.lineTo(224.5, 161.4);
            c.bezierCurveTo(224.2, 157.2, 223.8, 153.7, 224.1, 146.2);
            c.bezierCurveTo(224.4, 138.6, 225.1, 134.5, 225.8, 131.1);
            c.bezierCurveTo(234.1, 130.6, 235.8, 126.7, 234.0, 119.5);
            c.bezierCurveTo(229.7, 120.5, 227.4, 123.8, 226.3, 127.7);
            c.lineTo(230.2, 108.4);
            c.bezierCurveTo(230.3, 112.1, 228.8, 114.1, 230.6, 116.0);
            c.bezierCurveTo(232.5, 117.8, 236.6, 117.4, 237.8, 115.1);
            c.bezierCurveTo(239.0, 112.7, 236.6, 109.1, 235.8, 106.2);
            c.bezierCurveTo(237.3, 108.4, 238.3, 111.2, 240.8, 110.9);
            c.bezierCurveTo(243.3, 110.6, 245.8, 107.4, 245.1, 105.1);
            c.bezierCurveTo(244.5, 102.7, 240.8, 102.8, 237.7, 101.4);
            c.bezierCurveTo(241.5, 101.3, 243.8, 103.0, 245.9, 100.7);
            c.bezierCurveTo(248.0, 98.3, 247.2, 92.4, 244.6, 91.7);
            c.bezierCurveTo(241.9, 91.0, 240.2, 93.2, 237.9, 95.4);
            c.bezierCurveTo(239.8, 92.1, 242.2, 89.7, 241.3, 86.9);
            c.bezierCurveTo(240.3, 84.1, 236.1, 82.9, 234.0, 84.6);
            c.bezierCurveTo(231.8, 86.3, 232.6, 89.6, 232.7, 93.4);
            c.bezierCurveTo(231.9, 88.9, 231.2, 85.5, 228.6, 84.3);
            c.bezierCurveTo(226.0, 83.2, 223.0, 85.8, 222.3, 89.0);
            c.bezierCurveTo(221.7, 92.3, 224.7, 94.0, 227.4, 96.2);
            c.bezierCurveTo(224.4, 95.1, 221.4, 94.1, 219.5, 95.4);
            c.bezierCurveTo(217.5, 96.8, 217.4, 100.3, 219.0, 101.9);
            c.bezierCurveTo(220.7, 103.6, 224.0, 101.9, 226.5, 101.7);
            c.bezierCurveTo(224.8, 102.6, 220.4, 103.4, 219.7, 106.0);
            c.bezierCurveTo(219.1, 108.6, 221.5, 112.0, 223.5, 112.6);
            c.bezierCurveTo(225.4, 113.2, 227.3, 109.8, 228.2, 107.4);
            c.lineTo(222.9, 132.7);
            c.bezierCurveTo(221.9, 123.1, 218.6, 119.6, 210.6, 121.4);
            c.bezierCurveTo(210.1, 133.6, 218.1, 134.8, 222.0, 135.0);
            c.bezierCurveTo(221.7, 136.6, 220.5, 139.2, 220.2, 145.8);
            c.bezierCurveTo(219.8, 152.3, 219.8, 156.1, 219.7, 161.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(212.0, 122.5);
            c.bezierCurveTo(212.0, 131.1, 214.9, 133.1, 222.9, 134.5);
            c.bezierCurveTo(220.9, 141.1, 220.6, 146.3, 220.8, 159.7);
            c.lineTo(223.3, 160.1);
            c.bezierCurveTo(222.9, 150.5, 222.9, 142.2, 225.2, 130.5);
            c.bezierCurveTo(233.3, 129.7, 234.2, 127.6, 233.5, 120.8);
            c.bezierCurveTo(228.0, 122.3, 228.0, 127.4, 225.2, 129.9);
            c.bezierCurveTo(226.8, 121.5, 228.5, 113.1, 230.1, 106.4);
            c.lineTo(230.1, 105.4);
            c.lineTo(229.0, 106.8);
            c.bezierCurveTo(227.2, 116.9, 223.2, 134.2, 223.0, 134.3);
            c.bezierCurveTo(221.5, 132.2, 222.0, 119.8, 212.0, 122.5);
            c.closePath();
            c.fillStyle = 'rgb(38, 214, 38)';
            c.fill();
            c.beginPath();
            c.moveTo(236.3, 98.4);
            c.bezierCurveTo(237.7, 100.7, 235.9, 104.3, 232.6, 104.3);
            c.bezierCurveTo(229.2, 104.3, 227.4, 100.8, 229.0, 97.8);
            c.bezierCurveTo(230.6, 94.8, 235.0, 96.0, 236.3, 98.4);
            c.closePath();
            c.fillStyle = 'rgb(217, 217, 37)';
            c.fill();
            c.beginPath();
            c.moveTo(235.1, 85.4);
            c.bezierCurveTo(232.8, 86.5, 233.5, 92.8, 233.4, 95.0);
            c.bezierCurveTo(234.4, 95.2, 235.0, 95.7, 236.0, 96.3);
            c.bezierCurveTo(236.9, 95.4, 240.5, 90.2, 240.0, 87.8);
            c.bezierCurveTo(239.6, 85.4, 237.3, 84.4, 235.1, 85.4);
            c.moveTo(223.5, 89.7);
            c.bezierCurveTo(223.3, 92.4, 227.4, 95.4, 229.0, 96.2);
            c.bezierCurveTo(229.9, 95.4, 231.2, 94.8, 232.1, 94.8);
            c.bezierCurveTo(232.1, 93.2, 230.5, 86.9, 228.7, 85.9);
            c.bezierCurveTo(226.2, 84.4, 223.7, 87.0, 223.5, 89.7);
            c.moveTo(243.9, 92.6);
            c.bezierCurveTo(241.6, 92.8, 238.4, 96.0, 236.9, 97.3);
            c.bezierCurveTo(237.4, 98.2, 237.5, 98.6, 237.6, 100.0);
            c.bezierCurveTo(239.4, 100.3, 243.3, 101.3, 245.0, 100.1);
            c.bezierCurveTo(246.7, 99.0, 246.2, 92.4, 243.9, 92.6);
            c.moveTo(221.3, 95.8);
            c.bezierCurveTo(219.0, 96.3, 218.2, 100.8, 220.5, 101.5);
            c.bezierCurveTo(222.7, 102.2, 226.0, 100.7, 227.7, 100.4);
            c.bezierCurveTo(227.5, 99.3, 227.9, 98.3, 228.2, 97.3);
            c.bezierCurveTo(225.6, 96.5, 223.6, 95.3, 221.3, 95.8);
            c.moveTo(227.9, 102.3);
            c.bezierCurveTo(226.3, 102.6, 221.7, 104.0, 220.8, 105.9);
            c.bezierCurveTo(219.9, 107.8, 222.1, 112.1, 224.3, 111.4);
            c.bezierCurveTo(226.4, 110.7, 227.7, 106.2, 229.4, 104.5);
            c.bezierCurveTo(228.7, 103.7, 228.4, 103.4, 227.9, 102.3);
            c.moveTo(237.3, 102.3);
            c.bezierCurveTo(236.9, 103.2, 236.4, 103.9, 235.8, 104.5);
            c.bezierCurveTo(236.5, 106.1, 238.7, 109.4, 240.4, 109.7);
            c.bezierCurveTo(242.0, 110.1, 245.3, 107.4, 244.2, 105.4);
            c.bezierCurveTo(243.1, 103.4, 239.1, 102.9, 237.3, 102.3);
            c.moveTo(234.2, 105.4);
            c.bezierCurveTo(233.1, 105.7, 232.6, 105.8, 231.5, 105.6);
            c.bezierCurveTo(230.8, 107.6, 230.5, 112.7, 231.3, 114.7);
            c.bezierCurveTo(232.1, 116.6, 236.6, 116.3, 236.9, 114.0);
            c.bezierCurveTo(237.3, 111.8, 235.5, 106.8, 234.2, 105.4);
            c.closePath();
            c.fillStyle = 'rgb(218, 42, 42)';
            c.fill();
        }},
        'id_fish': { id: 'id_fish', bounds: { x: 47.4, y: 81.0, width: 93.2, height: 83.9 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(101.4, 98.5);
            c.bezierCurveTo(102.2, 100.1, 101.8, 104.2, 102.7, 105.3);
            c.bezierCurveTo(112.6, 108.1, 115.6, 113.2, 118.8, 119.6);
            c.bezierCurveTo(120.8, 113.7, 125.4, 108.3, 134.1, 106.2);
            c.bezierCurveTo(131.5, 112.7, 123.8, 126.6, 136.0, 139.4);
            c.bezierCurveTo(129.7, 141.5, 119.3, 134.0, 118.2, 128.7);
            c.bezierCurveTo(111.8, 156.0, 74.0, 149.1, 65.9, 130.5);
            c.bezierCurveTo(65.5, 130.5, 64.8, 130.4, 64.5, 130.3);
            c.bezierCurveTo(63.9, 126.1, 63.3, 123.6, 66.1, 118.3);
            c.bezierCurveTo(60.5, 112.4, 69.3, 105.1, 73.8, 109.3);
            c.bezierCurveTo(78.8, 105.8, 85.1, 103.7, 91.2, 103.7);
            c.bezierCurveTo(97.6, 100.7, 98.3, 100.1, 101.4, 98.5);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(65.6, 128.8);
            c.bezierCurveTo(70.5, 130.2, 77.9, 129.7, 81.5, 126.9);
            c.bezierCurveTo(77.4, 131.4, 71.8, 131.2, 67.2, 130.7);
            c.bezierCurveTo(76.7, 150.1, 114.0, 153.1, 118.1, 126.3);
            c.lineTo(118.6, 122.2);
            c.bezierCurveTo(111.5, 103.4, 89.2, 101.3, 76.8, 109.2);
            c.bezierCurveTo(86.1, 107.6, 86.6, 116.3, 82.9, 120.4);
            c.bezierCurveTo(78.7, 125.3, 67.1, 118.8, 74.3, 110.7);
            c.bezierCurveTo(68.7, 114.9, 64.5, 122.0, 65.6, 128.8);
            c.closePath();
            c.fillStyle = 'rgb(193, 236, 147)';
            c.fill();
            c.beginPath();
            c.moveTo(86.1, 138.3);
            c.bezierCurveTo(90.0, 130.5, 91.1, 124.3, 86.3, 114.5);
            c.bezierCurveTo(89.2, 122.6, 90.5, 128.2, 86.1, 138.3);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(99.6, 122.8);
            c.bezierCurveTo(101.8, 126.9, 100.2, 126.7, 98.9, 129.6);
            c.bezierCurveTo(97.7, 132.5, 100.7, 136.5, 100.7, 136.5);
            c.bezierCurveTo(100.7, 136.5, 93.4, 132.0, 92.3, 128.0);
            c.bezierCurveTo(90.7, 122.4, 95.4, 116.0, 100.9, 114.6);
            c.bezierCurveTo(100.0, 115.9, 97.3, 118.8, 99.6, 122.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(100.7, 100.1);
            c.bezierCurveTo(98.0, 101.4, 95.1, 102.6, 93.2, 103.8);
            c.bezierCurveTo(95.1, 103.9, 97.6, 104.0, 101.2, 104.9);
            c.bezierCurveTo(101.2, 102.9, 101.1, 102.1, 100.7, 100.1);
            c.moveTo(132.4, 107.9);
            c.bezierCurveTo(110.4, 118.8, 119.9, 137.3, 134.0, 138.8);
            c.bezierCurveTo(121.9, 126.2, 132.4, 107.9, 132.4, 107.9);
            c.moveTo(99.4, 115.9);
            c.bezierCurveTo(90.1, 121.3, 91.0, 129.4, 99.2, 134.4);
            c.bezierCurveTo(97.9, 131.7, 97.2, 131.7, 98.1, 129.0);
            c.bezierCurveTo(99.0, 126.2, 100.7, 126.1, 98.5, 122.9);
            c.bezierCurveTo(96.3, 119.7, 98.6, 117.0, 99.4, 115.9);
            c.closePath();
            c.fillStyle = 'rgb(32, 187, 32)';
            c.fill();
            c.beginPath();
            c.moveTo(70.3, 112.3);
            c.bezierCurveTo(68.6, 111.2, 67.2, 113.7, 68.4, 114.7);
            c.bezierCurveTo(67.6, 115.9, 67.2, 116.3, 66.6, 117.3);
            c.bezierCurveTo(63.3, 113.0, 68.7, 107.3, 72.5, 110.1);
            c.bezierCurveTo(72.0, 110.6, 71.1, 111.1, 70.3, 112.3);
            c.moveTo(78.4, 110.2);
            c.bezierCurveTo(74.3, 110.2, 71.7, 116.6, 75.1, 119.3);
            c.bezierCurveTo(79.3, 122.6, 83.3, 119.8, 83.6, 116.2);
            c.bezierCurveTo(83.9, 113.5, 82.8, 110.2, 78.4, 110.2);
            c.moveTo(79.2, 113.8);
            c.bezierCurveTo(80.8, 113.7, 81.6, 115.1, 81.3, 116.2);
            c.bezierCurveTo(81.1, 117.3, 79.3, 118.4, 78.0, 117.3);
            c.bezierCurveTo(76.7, 116.2, 77.6, 113.9, 79.2, 113.8);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(87.5, 138.1);
            c.bezierCurveTo(91.5, 130.3, 92.6, 124.1, 87.7, 114.3);
            c.bezierCurveTo(90.6, 122.4, 91.9, 128.0, 87.5, 138.1);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
        }},
        'id_key': { id: 'id_key', bounds: { x: 42.3, y: 186.8, width: 99.9, height: 76.6 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(58.8, 225.4);
            c.bezierCurveTo(59.0, 209.2, 81.7, 199.1, 90.8, 218.3);
            c.bezierCurveTo(91.7, 215.5, 95.2, 216.4, 94.8, 219.2);
            c.bezierCurveTo(108.2, 218.1, 121.6, 218.4, 133.9, 218.4);
            c.bezierCurveTo(137.1, 220.3, 140.5, 223.7, 140.8, 224.7);
            c.bezierCurveTo(139.8, 225.2, 137.1, 230.8, 135.7, 232.1);
            c.bezierCurveTo(132.0, 230.3, 130.3, 229.5, 128.1, 228.6);
            c.bezierCurveTo(126.6, 230.1, 125.5, 230.9, 123.4, 233.8);
            c.bezierCurveTo(122.4, 232.0, 120.3, 230.0, 119.5, 228.9);
            c.bezierCurveTo(118.7, 229.7, 116.5, 231.9, 114.8, 233.5);
            c.bezierCurveTo(114.0, 231.9, 113.3, 231.7, 112.7, 231.1);
            c.bezierCurveTo(112.2, 231.5, 111.0, 233.5, 110.0, 234.3);
            c.bezierCurveTo(107.9, 232.1, 106.2, 230.9, 102.0, 230.6);
            c.bezierCurveTo(101.1, 232.4, 99.9, 233.6, 99.0, 235.2);
            c.bezierCurveTo(97.3, 233.0, 95.5, 233.5, 94.4, 234.4);
            c.bezierCurveTo(92.9, 236.9, 91.0, 235.2, 89.8, 234.7);
            c.bezierCurveTo(78.0, 249.7, 58.6, 241.6, 58.8, 225.4);
            c.moveTo(72.7, 222.0);
            c.bezierCurveTo(69.9, 220.6, 66.7, 223.3, 67.1, 225.7);
            c.bezierCurveTo(67.5, 228.1, 69.1, 228.9, 71.5, 228.3);
            c.bezierCurveTo(73.9, 227.7, 75.5, 223.5, 72.7, 222.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(60.0, 225.3);
            c.bezierCurveTo(59.8, 216.4, 68.6, 208.8, 76.9, 209.2);
            c.bezierCurveTo(85.1, 209.7, 88.3, 215.5, 90.4, 220.6);
            c.bezierCurveTo(91.1, 219.6, 91.9, 217.8, 92.9, 217.9);
            c.bezierCurveTo(94.0, 218.0, 93.8, 218.5, 94.0, 220.0);
            c.bezierCurveTo(105.6, 219.3, 122.2, 219.4, 133.0, 219.4);
            c.bezierCurveTo(136.0, 221.5, 137.0, 221.6, 139.2, 224.5);
            c.bezierCurveTo(137.4, 226.9, 137.0, 227.6, 135.6, 230.1);
            c.bezierCurveTo(133.0, 229.2, 134.1, 229.1, 127.7, 227.2);
            c.bezierCurveTo(127.7, 227.2, 125.9, 228.8, 123.5, 231.2);
            c.bezierCurveTo(121.6, 229.7, 119.5, 227.3, 119.5, 227.3);
            c.bezierCurveTo(119.5, 227.3, 116.3, 229.6, 115.1, 230.8);
            c.bezierCurveTo(113.0, 229.5, 113.1, 229.6, 112.3, 229.2);
            c.bezierCurveTo(111.7, 230.0, 110.9, 231.5, 109.9, 232.1);
            c.bezierCurveTo(108.3, 230.0, 104.3, 229.1, 101.7, 229.2);
            c.bezierCurveTo(100.5, 230.5, 99.6, 231.4, 98.7, 232.8);
            c.bezierCurveTo(96.7, 231.2, 93.8, 232.1, 93.8, 232.1);
            c.bezierCurveTo(93.6, 234.9, 90.4, 234.9, 89.9, 232.2);
            c.bezierCurveTo(86.8, 238.1, 80.9, 241.7, 73.9, 241.5);
            c.bezierCurveTo(66.9, 241.4, 60.3, 234.2, 60.0, 225.3);
            c.lineTo(60.0, 225.3);
            c.moveTo(66.1, 224.0);
            c.bezierCurveTo(65.0, 228.1, 68.7, 230.3, 71.8, 229.2);
            c.bezierCurveTo(74.9, 228.2, 76.0, 225.2, 74.7, 222.3);
            c.bezierCurveTo(73.3, 219.5, 67.1, 220.0, 66.1, 224.0);
            c.closePath();
            c.fillStyle = 'rgb(153, 153, 153)';
            c.fill();
            c.beginPath();
            c.moveTo(87.6, 226.0);
            c.bezierCurveTo(87.6, 221.6, 87.1, 217.3, 85.3, 215.7);
            c.bezierCurveTo(85.5, 218.7, 86.2, 219.3, 86.1, 225.9);
            c.bezierCurveTo(85.9, 232.5, 84.9, 233.6, 83.9, 236.4);
            c.bezierCurveTo(85.8, 234.7, 87.6, 230.4, 87.6, 226.0);
            c.moveTo(91.2, 230.5);
            c.bezierCurveTo(90.3, 227.7, 90.3, 224.4, 91.3, 222.0);
            c.bezierCurveTo(92.2, 224.9, 92.5, 227.2, 91.2, 230.5);
            c.moveTo(135.5, 225.5);
            c.bezierCurveTo(133.2, 226.3, 132.4, 226.0, 116.7, 226.3);
            c.bezierCurveTo(100.9, 226.5, 100.1, 227.7, 96.8, 226.7);
            c.bezierCurveTo(99.0, 225.7, 103.0, 225.7, 117.3, 225.4);
            c.bezierCurveTo(131.5, 225.1, 133.2, 224.8, 135.5, 225.5);
            c.moveTo(96.7, 223.3);
            c.bezierCurveTo(100.0, 221.2, 101.0, 222.2, 114.6, 221.7);
            c.bezierCurveTo(128.1, 221.3, 132.0, 220.8, 134.2, 222.3);
            c.bezierCurveTo(131.6, 223.8, 130.9, 223.4, 117.4, 223.8);
            c.bezierCurveTo(103.9, 224.1, 100.0, 225.0, 96.7, 223.3);
            c.lineTo(96.7, 223.3);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
        }},
        'id_horse': { id: 'id_horse', bounds: { x: 186.1, y: 186.5, width: 82.2, height: 73.5 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(194.6, 201.0);
            c.bezierCurveTo(195.9, 198.9, 196.3, 198.2, 197.9, 196.6);
            c.bezierCurveTo(196.3, 195.5, 196.4, 191.1, 200.7, 192.0);
            c.bezierCurveTo(201.6, 190.4, 201.8, 189.5, 202.9, 186.8);
            c.lineTo(204.5, 190.1);
            c.bezierCurveTo(205.6, 189.4, 206.8, 189.3, 207.5, 189.5);
            c.bezierCurveTo(208.1, 188.3, 208.9, 187.6, 209.6, 186.7);
            c.bezierCurveTo(209.8, 187.8, 209.8, 188.9, 210.2, 189.9);
            c.bezierCurveTo(213.8, 191.8, 214.1, 190.8, 216.2, 195.1);
            c.bezierCurveTo(217.0, 196.8, 221.0, 199.2, 222.2, 203.2);
            c.bezierCurveTo(223.2, 206.9, 226.5, 207.8, 226.9, 211.3);
            c.bezierCurveTo(238.2, 215.5, 250.1, 201.6, 259.2, 214.6);
            c.bezierCurveTo(263.3, 217.7, 260.7, 229.4, 268.2, 234.7);
            c.bezierCurveTo(265.5, 236.6, 258.7, 233.1, 259.7, 220.4);
            c.bezierCurveTo(258.7, 228.6, 255.1, 231.5, 255.9, 235.9);
            c.bezierCurveTo(254.2, 239.6, 253.7, 248.6, 255.2, 255.6);
            c.bezierCurveTo(254.1, 256.4, 253.3, 256.2, 252.2, 256.3);
            c.lineTo(252.8, 259.2);
            c.bezierCurveTo(250.1, 259.5, 247.7, 260.0, 246.0, 259.3);
            c.bezierCurveTo(248.2, 251.6, 247.4, 243.4, 249.2, 237.6);
            c.bezierCurveTo(246.5, 236.3, 244.9, 233.5, 244.0, 230.6);
            c.bezierCurveTo(235.0, 233.6, 230.2, 232.3, 223.6, 231.4);
            c.bezierCurveTo(223.1, 235.2, 223.6, 248.6, 223.6, 251.8);
            c.bezierCurveTo(223.6, 252.6, 224.2, 253.9, 223.6, 255.2);
            c.bezierCurveTo(222.8, 255.5, 222.0, 255.4, 221.3, 255.4);
            c.bezierCurveTo(221.8, 256.7, 221.7, 257.9, 221.5, 259.2);
            c.bezierCurveTo(219.1, 259.3, 216.9, 259.6, 213.8, 258.9);
            c.bezierCurveTo(214.1, 257.6, 215.2, 256.2, 216.4, 254.8);
            c.bezierCurveTo(216.7, 236.7, 211.3, 231.8, 210.5, 219.6);
            c.bezierCurveTo(209.0, 215.1, 207.4, 211.6, 206.1, 206.2);
            c.bezierCurveTo(203.4, 207.9, 202.0, 207.8, 199.2, 208.8);
            c.bezierCurveTo(195.2, 212.8, 190.9, 208.0, 191.7, 203.9);
            c.bezierCurveTo(191.1, 202.2, 191.8, 201.1, 194.6, 201.0);
            c.lineTo(194.6, 201.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(209.1, 188.4);
            c.bezierCurveTo(208.2, 189.1, 207.6, 190.4, 207.0, 191.6);
            c.bezierCurveTo(206.3, 191.5, 205.5, 191.5, 204.5, 191.5);
            c.bezierCurveTo(204.0, 190.8, 203.5, 190.0, 203.0, 188.9);
            c.bezierCurveTo(202.6, 190.1, 202.2, 191.4, 201.6, 192.6);
            c.bezierCurveTo(205.5, 191.6, 205.8, 195.3, 205.0, 196.8);
            c.bezierCurveTo(204.1, 198.4, 200.8, 199.7, 199.7, 196.2);
            c.bezierCurveTo(196.8, 198.4, 196.8, 199.9, 195.1, 201.7);
            c.bezierCurveTo(192.4, 201.7, 192.2, 202.9, 192.5, 204.1);
            c.bezierCurveTo(192.4, 210.8, 198.8, 211.3, 201.9, 202.9);
            c.bezierCurveTo(202.0, 204.4, 201.9, 205.9, 200.6, 207.5);
            c.bezierCurveTo(205.8, 206.1, 208.8, 204.0, 209.8, 201.2);
            c.bezierCurveTo(209.4, 203.7, 208.3, 204.5, 207.1, 205.7);
            c.bezierCurveTo(209.6, 213.8, 210.1, 212.2, 212.2, 219.6);
            c.bezierCurveTo(211.9, 223.0, 217.8, 238.9, 217.7, 254.5);
            c.lineTo(219.9, 254.5);
            c.bezierCurveTo(220.3, 245.1, 219.2, 229.7, 222.8, 224.2);
            c.bezierCurveTo(222.4, 225.9, 222.0, 227.3, 221.9, 228.9);
            c.bezierCurveTo(229.2, 231.2, 237.2, 231.6, 243.9, 229.4);
            c.bezierCurveTo(243.9, 226.3, 244.0, 226.1, 244.3, 224.9);
            c.bezierCurveTo(244.7, 229.8, 245.6, 234.4, 250.3, 237.1);
            c.bezierCurveTo(248.8, 242.6, 248.4, 251.1, 248.2, 254.9);
            c.bezierCurveTo(249.2, 255.0, 250.0, 255.3, 251.3, 255.1);
            c.bezierCurveTo(250.9, 246.9, 252.9, 236.4, 253.8, 234.5);
            c.bezierCurveTo(255.3, 228.7, 262.3, 219.3, 256.1, 212.7);
            c.bezierCurveTo(249.3, 205.6, 238.0, 214.9, 227.3, 212.9);
            c.bezierCurveTo(218.8, 210.3, 214.8, 197.4, 209.6, 192.5);
            c.bezierCurveTo(209.1, 191.5, 209.1, 189.8, 209.1, 188.4);
            c.moveTo(195.9, 203.4);
            c.bezierCurveTo(196.3, 203.3, 196.9, 203.6, 197.4, 204.0);
            c.bezierCurveTo(197.3, 204.6, 197.3, 205.2, 196.3, 204.6);
            c.bezierCurveTo(195.6, 205.4, 195.0, 205.3, 194.5, 204.5);
            c.bezierCurveTo(194.9, 203.7, 195.4, 203.4, 195.9, 203.4);
            c.closePath();
            c.fillStyle = 'rgb(175, 99, 48)';
            c.fill();
            c.beginPath();
            c.moveTo(199.3, 195.0);
            c.lineTo(198.3, 196.1);
            c.bezierCurveTo(196.2, 194.4, 198.8, 191.2, 200.6, 192.7);
            c.lineTo(199.7, 194.3);
            c.bezierCurveTo(199.5, 193.4, 198.7, 193.6, 198.5, 194.0);
            c.bezierCurveTo(198.3, 194.4, 198.4, 195.2, 199.3, 195.0);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(200.3, 194.4);
            c.bezierCurveTo(199.6, 195.7, 201.2, 198.3, 203.1, 197.6);
            c.bezierCurveTo(204.9, 196.9, 205.0, 194.2, 203.8, 193.4);
            c.bezierCurveTo(202.5, 192.6, 201.0, 193.1, 200.3, 194.4);
            c.moveTo(203.4, 195.0);
            c.bezierCurveTo(203.8, 195.2, 203.7, 195.9, 203.2, 196.1);
            c.bezierCurveTo(202.7, 196.3, 202.1, 195.7, 202.4, 195.2);
            c.bezierCurveTo(202.7, 194.7, 203.0, 194.7, 203.4, 195.0);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(221.7, 231.0);
            c.lineTo(222.8, 231.2);
            c.bezierCurveTo(222.4, 236.8, 222.5, 245.8, 222.7, 251.4);
            c.lineTo(221.1, 251.3);
            c.bezierCurveTo(221.1, 245.4, 221.2, 236.0, 221.7, 231.0);
            c.closePath();
            c.fillStyle = 'rgb(120, 68, 33)';
            c.fill();
            c.beginPath();
            c.moveTo(254.8, 235.7);
            c.bezierCurveTo(253.0, 243.1, 253.6, 248.8, 253.6, 252.3);
            c.lineTo(252.4, 252.5);
            c.bezierCurveTo(252.4, 245.9, 254.0, 237.2, 254.8, 235.7);
            c.closePath();
            c.fill();
        }},
        'id_dog': { id: 'id_dog', bounds: { x: 265.9, y: 173.9, width: 102.6, height: 86.2 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(286.7, 209.7);
            c.bezierCurveTo(287.1, 209.1, 296.4, 209.0, 296.4, 209.0);
            c.bezierCurveTo(294.0, 207.8, 296.0, 202.2, 299.0, 203.1);
            c.bezierCurveTo(299.6, 202.1, 299.5, 201.1, 298.2, 200.0);
            c.bezierCurveTo(297.1, 201.0, 293.9, 202.1, 293.7, 201.8);
            c.bezierCurveTo(293.5, 201.4, 298.6, 195.2, 298.6, 195.2);
            c.bezierCurveTo(300.5, 196.6, 302.7, 197.9, 303.2, 199.8);
            c.bezierCurveTo(305.3, 199.3, 307.8, 199.9, 308.4, 200.7);
            c.bezierCurveTo(310.6, 199.4, 312.8, 198.2, 316.2, 197.1);
            c.bezierCurveTo(318.0, 198.7, 321.4, 206.7, 320.9, 207.4);
            c.bezierCurveTo(320.4, 208.2, 315.1, 203.0, 315.1, 203.0);
            c.lineTo(313.4, 205.2);
            c.bezierCurveTo(313.5, 205.9, 315.8, 212.9, 316.5, 214.6);
            c.bezierCurveTo(316.7, 214.4, 316.7, 214.3, 316.9, 214.2);
            c.bezierCurveTo(317.6, 214.7, 319.5, 216.7, 320.0, 217.8);
            c.bezierCurveTo(320.0, 218.0, 319.9, 218.0, 319.7, 218.4);
            c.bezierCurveTo(338.2, 228.9, 341.5, 240.7, 343.0, 252.5);
            c.bezierCurveTo(357.6, 250.2, 356.9, 238.4, 354.6, 228.5);
            c.bezierCurveTo(357.8, 230.2, 362.9, 232.9, 361.2, 235.4);
            c.bezierCurveTo(359.5, 237.9, 365.2, 238.4, 362.6, 241.7);
            c.bezierCurveTo(360.0, 244.9, 362.4, 249.4, 361.0, 251.6);
            c.bezierCurveTo(359.6, 253.9, 352.3, 256.6, 343.0, 256.7);
            c.bezierCurveTo(342.3, 258.1, 341.1, 258.8, 340.1, 259.3);
            c.bezierCurveTo(332.3, 259.5, 324.1, 259.4, 314.9, 259.3);
            c.bezierCurveTo(314.4, 257.8, 311.8, 252.1, 324.0, 252.9);
            c.bezierCurveTo(318.0, 249.6, 316.9, 247.1, 315.5, 244.9);
            c.bezierCurveTo(313.6, 248.5, 313.8, 256.7, 313.6, 256.8);
            c.bezierCurveTo(313.4, 257.0, 311.8, 257.1, 311.5, 257.0);
            c.bezierCurveTo(311.5, 257.8, 311.6, 259.0, 311.0, 259.3);
            c.bezierCurveTo(307.6, 259.3, 302.7, 259.6, 301.2, 259.3);
            c.bezierCurveTo(299.7, 259.0, 300.1, 253.1, 306.4, 252.3);
            c.bezierCurveTo(307.6, 243.8, 309.4, 235.2, 307.9, 226.1);
            c.bezierCurveTo(307.9, 226.1, 306.7, 226.2, 306.5, 226.1);
            c.bezierCurveTo(306.3, 225.9, 305.8, 223.7, 305.7, 222.4);
            c.lineTo(306.8, 221.9);
            c.bezierCurveTo(304.7, 221.0, 302.4, 223.1, 301.3, 222.9);
            c.bezierCurveTo(300.1, 222.7, 300.4, 222.3, 300.4, 221.6);
            c.bezierCurveTo(298.6, 222.6, 296.0, 222.3, 294.8, 221.8);
            c.bezierCurveTo(291.2, 222.3, 289.1, 220.5, 288.3, 216.1);
            c.bezierCurveTo(285.9, 215.8, 286.4, 210.2, 286.7, 209.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(291.5, 210.1);
            c.lineTo(298.6, 209.9);
            c.bezierCurveTo(301.7, 213.2, 304.6, 210.5, 305.6, 209.1);
            c.bezierCurveTo(307.2, 209.0, 316.3, 206.7, 308.5, 221.5);
            c.bezierCurveTo(305.3, 219.5, 300.4, 223.8, 300.8, 221.4);
            c.bezierCurveTo(305.1, 219.4, 307.1, 215.7, 308.6, 212.3);
            c.bezierCurveTo(308.8, 212.2, 309.6, 212.6, 310.1, 212.8);
            c.bezierCurveTo(309.4, 211.5, 307.7, 211.3, 306.2, 211.8);
            c.bezierCurveTo(306.8, 211.9, 307.4, 211.9, 308.0, 212.1);
            c.bezierCurveTo(306.6, 218.0, 295.4, 227.1, 291.6, 217.0);
            c.bezierCurveTo(291.8, 219.5, 292.5, 220.1, 293.2, 221.1);
            c.bezierCurveTo(291.0, 221.3, 289.5, 219.6, 288.8, 216.1);
            c.bezierCurveTo(290.8, 215.6, 291.2, 212.4, 291.5, 210.1);
            c.closePath();
            c.fillStyle = 'rgb(212, 170, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(316.2, 238.4);
            c.bezierCurveTo(319.7, 240.8, 320.2, 242.2, 320.8, 244.7);
            c.bezierCurveTo(320.9, 248.7, 322.9, 250.6, 324.5, 252.7);
            c.bezierCurveTo(321.5, 250.7, 317.2, 248.3, 315.0, 241.8);
            c.lineTo(316.2, 238.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(343.1, 253.4);
            c.bezierCurveTo(351.4, 251.7, 360.8, 247.7, 355.8, 230.0);
            c.bezierCurveTo(355.8, 230.0, 362.1, 232.6, 360.6, 235.2);
            c.bezierCurveTo(359.1, 237.8, 364.1, 238.5, 361.6, 241.8);
            c.bezierCurveTo(359.0, 245.0, 362.0, 249.1, 359.1, 252.1);
            c.bezierCurveTo(356.2, 255.1, 343.1, 256.1, 343.1, 256.1);
            c.lineTo(343.1, 253.4);
            c.moveTo(319.4, 218.8);
            c.bezierCurveTo(342.4, 233.9, 341.8, 252.0, 342.3, 256.3);
            c.bezierCurveTo(341.8, 257.8, 340.0, 258.7, 338.4, 258.5);
            c.bezierCurveTo(338.6, 258.0, 339.3, 255.4, 334.1, 248.7);
            c.bezierCurveTo(335.5, 252.3, 338.8, 256.0, 337.1, 258.5);
            c.lineTo(319.6, 258.5);
            c.bezierCurveTo(319.2, 257.9, 319.0, 257.2, 319.1, 256.4);
            c.bezierCurveTo(318.7, 257.1, 318.6, 257.7, 318.9, 258.4);
            c.lineTo(317.6, 258.4);
            c.bezierCurveTo(317.4, 257.8, 317.1, 257.1, 317.2, 256.0);
            c.bezierCurveTo(316.6, 257.2, 316.7, 257.7, 316.7, 258.3);
            c.lineTo(315.3, 258.3);
            c.bezierCurveTo(313.6, 253.1, 319.4, 252.7, 329.5, 254.7);
            c.bezierCurveTo(317.4, 249.0, 320.3, 235.5, 332.2, 237.2);
            c.bezierCurveTo(325.2, 235.7, 321.5, 239.0, 320.9, 243.0);
            c.bezierCurveTo(320.3, 241.2, 318.2, 238.7, 316.4, 237.7);
            c.bezierCurveTo(316.5, 237.2, 316.8, 236.2, 316.9, 235.1);
            c.bezierCurveTo(310.7, 247.6, 310.3, 257.4, 310.0, 258.4);
            c.lineTo(305.5, 258.5);
            c.bezierCurveTo(305.1, 257.8, 305.3, 257.2, 305.4, 256.6);
            c.bezierCurveTo(304.9, 257.4, 304.9, 257.9, 304.8, 258.5);
            c.lineTo(303.4, 258.5);
            c.bezierCurveTo(303.0, 258.0, 303.2, 257.0, 303.3, 256.1);
            c.bezierCurveTo(302.5, 257.1, 302.5, 257.8, 302.5, 258.5);
            c.bezierCurveTo(299.9, 258.0, 302.4, 253.6, 306.6, 253.3);
            c.bezierCurveTo(309.3, 245.2, 310.3, 230.1, 308.8, 225.9);
            c.bezierCurveTo(308.8, 225.9, 315.9, 223.1, 319.4, 218.8);
            c.moveTo(295.3, 200.7);
            c.bezierCurveTo(296.4, 199.3, 297.6, 197.8, 298.8, 196.3);
            c.bezierCurveTo(300.3, 197.4, 301.8, 198.5, 302.6, 200.8);
            c.bezierCurveTo(304.2, 200.0, 306.9, 200.7, 308.7, 201.8);
            c.bezierCurveTo(310.6, 200.6, 311.6, 199.6, 315.9, 197.9);
            c.bezierCurveTo(315.9, 197.9, 320.0, 206.5, 319.9, 206.2);
            c.bezierCurveTo(319.9, 206.0, 313.8, 200.3, 313.8, 200.3);
            c.lineTo(309.7, 202.9);
            c.bezierCurveTo(311.2, 202.8, 312.9, 203.4, 314.4, 202.3);
            c.lineTo(312.3, 205.4);
            c.bezierCurveTo(313.4, 208.6, 314.5, 212.4, 316.1, 215.4);
            c.bezierCurveTo(314.2, 218.6, 311.6, 219.8, 310.0, 220.6);
            c.bezierCurveTo(312.5, 215.0, 316.4, 207.0, 305.9, 208.2);
            c.bezierCurveTo(307.1, 205.3, 303.8, 201.5, 300.3, 203.9);
            c.bezierCurveTo(299.9, 203.5, 299.7, 203.5, 299.4, 203.3);
            c.bezierCurveTo(300.7, 201.6, 298.6, 199.9, 298.4, 198.0);
            c.lineTo(298.0, 199.6);
            c.bezierCurveTo(296.8, 200.4, 295.8, 200.8, 295.3, 200.7);
            c.closePath();
            c.fillStyle = 'rgb(98, 84, 23)';
            c.fill();
            c.beginPath();
            c.moveTo(302.1, 203.9);
            c.bezierCurveTo(299.6, 204.2, 297.6, 208.1, 299.8, 210.0);
            c.bezierCurveTo(302.0, 211.8, 305.0, 209.4, 305.3, 207.6);
            c.bezierCurveTo(305.5, 205.7, 304.6, 203.7, 302.1, 203.9);
            c.moveTo(302.6, 206.4);
            c.bezierCurveTo(303.7, 206.4, 304.2, 207.3, 304.0, 208.1);
            c.bezierCurveTo(303.8, 208.8, 302.6, 209.6, 301.8, 208.8);
            c.bezierCurveTo(300.9, 208.1, 301.5, 206.5, 302.6, 206.4);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(299.7, 204.4);
            c.bezierCurveTo(299.2, 204.9, 299.0, 205.3, 298.7, 205.8);
            c.bezierCurveTo(298.6, 205.0, 297.5, 205.1, 297.1, 205.9);
            c.bezierCurveTo(296.8, 206.6, 297.1, 207.7, 298.1, 207.5);
            c.bezierCurveTo(298.1, 208.2, 298.2, 209.0, 298.2, 209.0);
            c.bezierCurveTo(294.0, 209.0, 296.7, 201.3, 299.7, 204.4);
            c.lineTo(299.7, 204.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(315.3, 244.3);
            c.bezierCurveTo(314.3, 246.7, 313.2, 248.8, 313.0, 256.2);
            c.lineTo(311.5, 256.1);
            c.bezierCurveTo(311.7, 252.4, 314.1, 243.9, 314.6, 242.6);
            c.lineTo(315.3, 244.3);
            c.closePath();
            c.fillStyle = 'rgb(43, 34, 0)';
            c.fill();
        }},
        'id_cat': { id: 'id_cat', bounds: { x: 366.1, y: 171.3, width: 107.7, height: 91.3 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(391.4, 212.8);
            c.bezierCurveTo(395.2, 210.2, 396.3, 208.8, 397.4, 207.1);
            c.bezierCurveTo(396.6, 205.6, 397.5, 202.8, 399.9, 202.0);
            c.bezierCurveTo(399.8, 199.8, 400.0, 197.3, 400.6, 194.8);
            c.bezierCurveTo(403.2, 195.5, 405.0, 197.2, 406.4, 200.6);
            c.bezierCurveTo(406.8, 200.1, 406.9, 199.7, 407.7, 199.1);
            c.bezierCurveTo(407.7, 199.9, 407.8, 200.2, 408.0, 200.6);
            c.bezierCurveTo(408.0, 200.2, 408.1, 199.8, 408.9, 199.2);
            c.bezierCurveTo(409.0, 199.8, 408.6, 200.2, 409.5, 200.8);
            c.bezierCurveTo(409.7, 200.4, 410.0, 199.9, 410.7, 199.4);
            c.bezierCurveTo(410.7, 200.1, 410.9, 200.7, 411.1, 201.0);
            c.bezierCurveTo(414.2, 198.2, 417.1, 196.3, 419.8, 195.3);
            c.bezierCurveTo(418.2, 200.4, 419.3, 204.6, 417.9, 207.4);
            c.bezierCurveTo(419.7, 209.0, 421.3, 210.7, 422.5, 212.6);
            c.bezierCurveTo(421.6, 213.2, 421.4, 213.5, 421.0, 214.0);
            c.bezierCurveTo(421.9, 214.0, 422.9, 215.1, 423.4, 215.8);
            c.bezierCurveTo(422.5, 217.2, 421.7, 218.0, 420.9, 218.6);
            c.bezierCurveTo(423.6, 223.2, 430.4, 218.7, 439.0, 226.8);
            c.bezierCurveTo(447.6, 234.9, 441.0, 254.2, 453.8, 251.9);
            c.bezierCurveTo(466.6, 249.6, 457.6, 232.9, 463.8, 230.7);
            c.bezierCurveTo(470.0, 228.6, 468.3, 251.2, 459.9, 256.6);
            c.bezierCurveTo(451.5, 262.0, 444.2, 259.2, 442.6, 258.1);
            c.bezierCurveTo(442.4, 258.6, 443.0, 259.5, 440.8, 260.3);
            c.bezierCurveTo(438.5, 261.1, 417.4, 261.5, 415.8, 260.8);
            c.bezierCurveTo(414.2, 260.1, 413.8, 259.2, 414.0, 257.9);
            c.bezierCurveTo(413.3, 257.1, 412.6, 256.2, 413.5, 255.3);
            c.bezierCurveTo(414.4, 254.5, 415.3, 254.2, 417.8, 253.9);
            c.bezierCurveTo(416.2, 253.2, 414.9, 252.2, 414.5, 251.1);
            c.bezierCurveTo(412.4, 250.2, 411.8, 249.7, 410.4, 249.0);
            c.bezierCurveTo(410.0, 252.4, 410.0, 255.2, 409.9, 258.2);
            c.bezierCurveTo(410.2, 259.2, 410.4, 261.2, 405.7, 261.2);
            c.bezierCurveTo(400.9, 261.2, 401.6, 260.0, 400.9, 258.9);
            c.bezierCurveTo(400.1, 259.3, 398.0, 259.3, 397.3, 258.4);
            c.bezierCurveTo(397.2, 255.9, 397.8, 253.9, 400.2, 253.7);
            c.lineTo(399.9, 242.5);
            c.bezierCurveTo(396.2, 239.0, 392.8, 230.8, 398.7, 221.4);
            c.bezierCurveTo(396.0, 220.1, 395.7, 218.1, 391.3, 216.7);
            c.lineTo(393.3, 214.4);
            c.bezierCurveTo(393.3, 214.4, 392.7, 213.3, 391.4, 212.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(417.8, 196.8);
            c.bezierCurveTo(415.5, 198.5, 413.0, 199.8, 411.0, 202.2);
            c.bezierCurveTo(408.5, 201.0, 404.8, 201.1, 402.5, 202.6);
            c.bezierCurveTo(402.6, 202.7, 403.3, 203.1, 403.7, 203.7);
            c.bezierCurveTo(407.2, 200.1, 411.7, 204.1, 410.4, 207.7);
            c.bezierCurveTo(409.2, 211.2, 404.6, 211.8, 402.7, 208.6);
            c.bezierCurveTo(400.3, 209.4, 399.0, 209.0, 398.1, 208.0);
            c.bezierCurveTo(396.6, 209.9, 394.8, 211.4, 392.9, 212.8);
            c.lineTo(394.5, 214.8);
            c.lineTo(393.2, 216.4);
            c.bezierCurveTo(398.1, 219.4, 397.6, 221.7, 407.1, 222.6);
            c.bezierCurveTo(403.6, 223.0, 401.7, 222.7, 399.4, 221.8);
            c.bezierCurveTo(394.2, 234.3, 398.4, 239.5, 403.5, 243.7);
            c.lineTo(403.1, 235.2);
            c.bezierCurveTo(405.0, 243.7, 404.5, 249.3, 404.4, 254.9);
            c.bezierCurveTo(403.1, 254.8, 401.0, 259.2, 403.2, 259.8);
            c.bezierCurveTo(402.7, 259.1, 403.2, 257.6, 403.3, 257.6);
            c.bezierCurveTo(403.2, 259.2, 403.6, 260.0, 404.3, 260.0);
            c.bezierCurveTo(404.3, 259.0, 404.4, 258.6, 404.8, 258.0);
            c.bezierCurveTo(404.2, 259.7, 405.1, 260.3, 405.7, 260.1);
            c.bezierCurveTo(406.8, 260.3, 407.6, 260.0, 409.0, 259.2);
            c.bezierCurveTo(408.8, 249.0, 410.8, 240.8, 412.2, 237.9);
            c.lineTo(410.5, 247.7);
            c.bezierCurveTo(412.8, 249.5, 416.3, 250.9, 419.2, 252.4);
            c.bezierCurveTo(416.1, 249.2, 416.7, 243.2, 424.8, 241.3);
            c.bezierCurveTo(412.9, 246.5, 419.0, 255.2, 429.0, 255.7);
            c.bezierCurveTo(421.4, 255.4, 412.5, 255.8, 415.6, 259.7);
            c.bezierCurveTo(415.5, 259.6, 415.5, 258.5, 416.5, 257.8);
            c.bezierCurveTo(416.1, 258.3, 415.3, 260.0, 416.9, 260.4);
            c.bezierCurveTo(416.6, 259.9, 416.8, 258.5, 418.0, 257.9);
            c.bezierCurveTo(417.6, 258.4, 416.8, 259.6, 417.5, 260.5);
            c.bezierCurveTo(425.0, 260.1, 439.1, 260.2, 440.3, 259.7);
            c.bezierCurveTo(441.4, 259.2, 442.8, 257.4, 438.9, 254.8);
            c.bezierCurveTo(444.0, 258.0, 447.8, 260.1, 456.2, 257.5);
            c.bezierCurveTo(467.3, 254.1, 469.1, 230.5, 464.2, 231.1);
            c.bezierCurveTo(459.2, 231.8, 467.6, 250.6, 453.8, 252.7);
            c.bezierCurveTo(440.1, 254.9, 445.6, 237.2, 438.7, 228.4);
            c.bezierCurveTo(431.9, 219.7, 423.8, 224.1, 420.3, 219.4);
            c.bezierCurveTo(418.8, 220.2, 417.7, 220.9, 416.3, 221.7);
            c.bezierCurveTo(418.5, 219.9, 420.0, 219.3, 421.9, 216.3);
            c.bezierCurveTo(421.5, 215.6, 421.0, 214.6, 419.5, 214.3);
            c.lineTo(421.0, 212.3);
            c.bezierCurveTo(418.8, 209.0, 416.6, 208.5, 414.1, 205.0);
            c.bezierCurveTo(415.3, 202.3, 416.1, 199.1, 417.8, 196.7);
            c.lineTo(417.8, 196.8);
            c.moveTo(401.2, 195.4);
            c.bezierCurveTo(402.1, 197.1, 403.4, 199.7, 403.3, 201.3);
            c.bezierCurveTo(404.0, 201.1, 404.6, 200.8, 405.8, 200.8);
            c.bezierCurveTo(404.6, 198.5, 403.7, 196.9, 401.2, 195.4);
            c.closePath();
            c.fillStyle = 'rgb(222, 170, 135)';
            c.fill();
            c.beginPath();
            c.moveTo(414.9, 204.7);
            c.bezierCurveTo(415.3, 205.4, 416.4, 206.3, 417.3, 207.0);
            c.bezierCurveTo(418.5, 204.4, 417.5, 201.5, 418.8, 196.5);
            c.bezierCurveTo(417.9, 197.6, 416.9, 199.5, 414.9, 204.7);
            c.moveTo(400.9, 196.4);
            c.bezierCurveTo(401.8, 197.3, 402.4, 199.5, 402.9, 201.6);
            c.bezierCurveTo(402.4, 201.8, 402.2, 202.0, 401.9, 202.2);
            c.bezierCurveTo(401.3, 202.0, 401.0, 202.0, 400.7, 201.9);
            c.bezierCurveTo(400.6, 200.5, 400.3, 199.3, 400.9, 196.4);
            c.moveTo(415.9, 251.6);
            c.bezierCurveTo(419.5, 253.4, 420.6, 253.8, 422.8, 254.8);
            c.bezierCurveTo(416.3, 255.0, 415.8, 256.2, 414.5, 256.7);
            c.bezierCurveTo(414.3, 255.5, 416.0, 254.7, 420.3, 254.4);
            c.bezierCurveTo(417.7, 253.1, 416.2, 252.3, 415.9, 251.6);
            c.moveTo(401.1, 243.5);
            c.bezierCurveTo(402.1, 244.4, 401.4, 244.0, 403.2, 245.2);
            c.lineTo(403.1, 253.9);
            c.bezierCurveTo(401.6, 254.6, 401.2, 255.9, 400.8, 257.1);
            c.bezierCurveTo(399.8, 257.8, 399.9, 257.3, 399.0, 257.4);
            c.bezierCurveTo(398.6, 255.5, 400.0, 255.0, 400.9, 254.9);
            c.lineTo(401.1, 243.5);
            c.closePath();
            c.fillStyle = 'rgb(200, 113, 55)';
            c.fill();
            c.beginPath();
            c.moveTo(398.5, 210.3);
            c.bezierCurveTo(399.7, 210.3, 401.1, 210.4, 402.7, 210.9);
            c.bezierCurveTo(402.0, 212.9, 401.1, 213.9, 400.5, 214.7);
            c.lineTo(400.3, 216.2);
            c.bezierCurveTo(407.3, 220.2, 409.6, 213.8, 408.8, 212.5);
            c.bezierCurveTo(411.5, 214.2, 405.9, 221.6, 400.0, 216.5);
            c.bezierCurveTo(396.7, 220.2, 390.1, 213.8, 396.9, 210.1);
            c.bezierCurveTo(392.7, 212.5, 395.0, 219.6, 399.6, 216.1);
            c.bezierCurveTo(399.8, 215.4, 399.5, 214.8, 399.5, 214.6);
            c.bezierCurveTo(398.9, 213.4, 398.6, 212.0, 398.5, 210.3);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(403.3, 204.2);
            c.bezierCurveTo(402.9, 204.7, 402.6, 205.2, 402.5, 205.9);
            c.bezierCurveTo(402.5, 204.3, 400.4, 204.3, 400.3, 205.7);
            c.bezierCurveTo(400.1, 207.2, 401.9, 207.5, 402.4, 206.4);
            c.bezierCurveTo(402.3, 207.1, 402.5, 207.7, 402.5, 207.7);
            c.bezierCurveTo(399.3, 209.8, 397.3, 206.7, 398.2, 204.6);
            c.bezierCurveTo(399.0, 202.4, 401.8, 201.9, 403.3, 204.2);
            c.moveTo(406.2, 203.1);
            c.bezierCurveTo(403.7, 203.4, 401.8, 207.4, 404.1, 209.2);
            c.bezierCurveTo(406.9, 211.4, 409.7, 209.2, 410.0, 206.7);
            c.bezierCurveTo(410.2, 204.9, 408.7, 202.8, 406.2, 203.1);
            c.moveTo(407.0, 205.4);
            c.bezierCurveTo(408.1, 205.3, 408.6, 206.3, 408.5, 207.1);
            c.bezierCurveTo(408.3, 207.8, 407.1, 208.6, 406.2, 207.8);
            c.bezierCurveTo(405.3, 207.1, 406.0, 205.5, 407.0, 205.4);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(396.4, 215.3);
            c.bezierCurveTo(392.8, 216.0, 391.4, 217.8, 390.0, 219.7);
            c.bezierCurveTo(393.0, 216.3, 395.1, 216.4, 396.5, 216.0);
            c.bezierCurveTo(397.0, 215.5, 396.8, 215.4, 396.4, 215.3);
            c.lineTo(396.4, 215.3);
            c.moveTo(395.8, 213.3);
            c.bezierCurveTo(389.9, 213.4, 388.6, 214.1, 386.7, 215.8);
            c.bezierCurveTo(390.1, 213.4, 393.4, 214.0, 395.6, 214.2);
            c.bezierCurveTo(396.3, 213.8, 396.2, 213.6, 395.8, 213.3);
            c.lineTo(395.8, 213.3);
            c.moveTo(396.2, 211.7);
            c.bezierCurveTo(390.2, 209.6, 388.4, 211.3, 386.8, 212.5);
            c.bezierCurveTo(388.1, 212.0, 390.9, 210.0, 395.8, 212.5);
            c.bezierCurveTo(396.6, 212.3, 396.6, 212.1, 396.2, 211.7);
            c.lineTo(396.2, 211.7);
            c.moveTo(406.8, 215.9);
            c.bezierCurveTo(411.2, 217.1, 412.5, 218.8, 414.0, 221.0);
            c.bezierCurveTo(411.0, 217.7, 409.3, 217.4, 406.6, 216.7);
            c.bezierCurveTo(406.2, 216.2, 406.3, 216.0, 406.8, 215.9);
            c.lineTo(406.8, 215.9);
            c.moveTo(407.3, 214.2);
            c.bezierCurveTo(413.2, 214.2, 415.0, 214.9, 417.6, 217.0);
            c.bezierCurveTo(413.4, 214.4, 410.5, 214.9, 407.5, 215.0);
            c.bezierCurveTo(406.8, 214.7, 406.9, 214.5, 407.3, 214.2);
            c.lineTo(407.3, 214.2);
            c.moveTo(407.3, 212.7);
            c.bezierCurveTo(413.3, 210.6, 415.6, 211.7, 419.3, 213.5);
            c.bezierCurveTo(416.0, 212.4, 412.6, 210.9, 407.7, 213.4);
            c.bezierCurveTo(406.9, 213.3, 406.9, 213.0, 407.3, 212.7);
            c.lineTo(407.3, 212.7);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
        }},
        'id_camel': { id: 'id_camel', bounds: { x: 480.8, y: 187.2, width: 87.2, height: 74.2 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(498.2, 187.7);
            c.bezierCurveTo(499.0, 189.5, 500.1, 190.9, 501.1, 191.7);
            c.bezierCurveTo(498.7, 190.1, 496.7, 192.6, 497.8, 194.5);
            c.bezierCurveTo(496.3, 195.7, 490.8, 196.0, 491.0, 198.8);
            c.bezierCurveTo(485.9, 201.6, 487.7, 206.3, 489.7, 205.1);
            c.bezierCurveTo(490.7, 206.2, 491.6, 207.3, 494.0, 205.6);
            c.bezierCurveTo(494.2, 208.6, 497.0, 207.3, 497.9, 205.3);
            c.bezierCurveTo(499.1, 204.9, 500.3, 204.5, 501.1, 203.7);
            c.bezierCurveTo(503.9, 213.8, 498.5, 227.6, 515.2, 227.8);
            c.bezierCurveTo(515.7, 232.8, 517.0, 233.3, 518.0, 237.4);
            c.bezierCurveTo(516.6, 239.4, 516.9, 242.2, 518.5, 243.8);
            c.bezierCurveTo(518.4, 244.7, 519.8, 250.7, 518.8, 253.8);
            c.bezierCurveTo(518.2, 255.6, 516.0, 255.4, 514.5, 257.7);
            c.bezierCurveTo(514.9, 258.2, 515.0, 258.3, 516.1, 258.3);
            c.bezierCurveTo(514.7, 258.5, 513.6, 259.6, 513.6, 260.1);
            c.bezierCurveTo(514.5, 261.0, 517.0, 262.4, 525.7, 260.5);
            c.bezierCurveTo(525.7, 260.5, 524.8, 255.1, 524.8, 252.2);
            c.bezierCurveTo(524.8, 249.3, 525.1, 246.2, 525.3, 244.5);
            c.bezierCurveTo(526.3, 242.9, 526.6, 239.6, 525.6, 237.8);
            c.bezierCurveTo(525.6, 233.6, 526.3, 232.1, 527.8, 228.2);
            c.bezierCurveTo(531.2, 228.6, 534.7, 229.1, 539.0, 228.0);
            c.bezierCurveTo(539.5, 232.8, 543.7, 240.4, 544.7, 242.5);
            c.bezierCurveTo(545.3, 243.9, 542.3, 250.0, 539.7, 255.1);
            c.bezierCurveTo(535.9, 256.7, 535.9, 258.0, 535.7, 258.8);
            c.bezierCurveTo(537.8, 259.7, 538.3, 259.4, 540.4, 259.5);
            c.bezierCurveTo(539.3, 261.7, 545.0, 261.0, 550.9, 260.3);
            c.bezierCurveTo(551.1, 258.2, 550.6, 253.4, 551.4, 249.8);
            c.bezierCurveTo(552.2, 246.2, 554.4, 243.7, 554.6, 241.6);
            c.bezierCurveTo(554.8, 239.5, 552.0, 234.3, 552.1, 232.3);
            c.bezierCurveTo(552.3, 229.3, 554.9, 224.3, 556.2, 220.0);
            c.bezierCurveTo(556.7, 221.0, 557.8, 222.2, 560.2, 223.2);
            c.bezierCurveTo(563.3, 225.4, 564.5, 223.3, 567.8, 222.6);
            c.bezierCurveTo(565.0, 222.7, 562.0, 219.6, 560.5, 221.6);
            c.bezierCurveTo(557.6, 220.6, 557.0, 218.2, 556.9, 216.5);
            c.bezierCurveTo(556.8, 210.5, 552.8, 208.5, 549.2, 205.0);
            c.bezierCurveTo(548.4, 204.2, 547.5, 202.3, 546.5, 200.6);
            c.bezierCurveTo(545.5, 199.0, 544.2, 197.5, 542.7, 197.4);
            c.bezierCurveTo(541.2, 197.3, 540.4, 199.1, 539.6, 200.8);
            c.bezierCurveTo(538.9, 202.6, 538.1, 204.4, 536.6, 204.4);
            c.bezierCurveTo(535.0, 204.4, 534.6, 202.7, 533.9, 201.1);
            c.bezierCurveTo(533.3, 199.5, 532.5, 197.9, 530.1, 197.8);
            c.bezierCurveTo(527.8, 197.7, 525.9, 200.7, 523.8, 203.8);
            c.bezierCurveTo(521.7, 206.9, 519.3, 210.1, 516.0, 210.3);
            c.bezierCurveTo(509.2, 210.8, 510.5, 195.0, 510.5, 195.0);
            c.bezierCurveTo(515.3, 195.8, 513.7, 192.7, 517.9, 190.1);
            c.bezierCurveTo(509.6, 190.6, 511.1, 190.8, 508.7, 191.1);
            c.lineTo(508.3, 188.9);
            c.bezierCurveTo(508.3, 188.9, 507.9, 189.9, 507.4, 190.1);
            c.bezierCurveTo(507.0, 188.7, 506.7, 188.0, 506.7, 188.0);
            c.bezierCurveTo(506.7, 188.0, 506.3, 189.5, 505.7, 189.7);
            c.bezierCurveTo(505.1, 188.3, 503.7, 187.7, 503.7, 187.7);
            c.bezierCurveTo(504.0, 188.5, 504.2, 189.0, 503.8, 189.8);
            c.bezierCurveTo(502.5, 188.6, 500.2, 188.1, 498.2, 187.7);
            c.moveTo(548.1, 244.9);
            c.bezierCurveTo(548.0, 247.6, 547.3, 250.5, 546.4, 254.3);
            c.bezierCurveTo(545.8, 254.8, 544.9, 255.9, 544.5, 255.9);
            c.bezierCurveTo(546.1, 250.0, 546.6, 249.6, 548.1, 244.9);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(508.6, 192.3);
            c.bezierCurveTo(510.4, 191.5, 513.1, 191.1, 516.0, 190.7);
            c.bezierCurveTo(513.8, 193.4, 512.5, 195.1, 509.4, 194.1);
            c.bezierCurveTo(509.4, 194.1, 507.2, 208.5, 513.5, 211.7);
            c.bezierCurveTo(518.6, 212.6, 521.5, 209.4, 523.7, 206.1);
            c.bezierCurveTo(526.0, 202.8, 527.7, 199.3, 530.4, 199.5);
            c.bezierCurveTo(531.9, 199.6, 532.7, 201.1, 533.5, 202.6);
            c.bezierCurveTo(534.2, 204.1, 535.0, 205.6, 536.6, 205.6);
            c.bezierCurveTo(538.5, 205.8, 539.4, 203.9, 540.2, 202.0);
            c.bezierCurveTo(541.0, 200.1, 541.7, 198.2, 543.3, 198.5);
            c.bezierCurveTo(544.3, 198.7, 545.2, 200.1, 546.2, 201.7);
            c.bezierCurveTo(547.2, 203.3, 548.1, 205.2, 549.1, 206.6);
            c.bezierCurveTo(551.2, 209.3, 554.9, 210.3, 555.7, 214.7);
            c.bezierCurveTo(556.7, 220.1, 551.0, 226.7, 550.9, 232.3);
            c.bezierCurveTo(550.8, 236.2, 555.0, 240.7, 552.9, 243.2);
            c.bezierCurveTo(550.0, 246.8, 549.7, 253.7, 549.9, 258.9);
            c.bezierCurveTo(548.2, 259.3, 544.7, 260.2, 542.6, 259.9);
            c.bezierCurveTo(543.8, 258.7, 543.4, 258.9, 544.6, 258.2);
            c.bezierCurveTo(543.3, 258.5, 543.5, 258.7, 542.0, 259.2);
            c.bezierCurveTo(543.1, 257.6, 546.4, 256.8, 547.3, 254.7);
            c.bezierCurveTo(548.2, 252.6, 549.5, 242.7, 549.3, 242.2);
            c.bezierCurveTo(547.7, 238.1, 544.3, 233.4, 543.7, 231.5);
            c.bezierCurveTo(541.6, 224.6, 541.4, 217.0, 541.4, 217.0);
            c.bezierCurveTo(540.9, 220.1, 540.6, 222.9, 541.2, 226.0);
            c.bezierCurveTo(536.4, 227.9, 532.0, 227.8, 528.0, 227.0);
            c.bezierCurveTo(528.5, 225.2, 528.3, 223.4, 528.5, 221.5);
            c.bezierCurveTo(525.7, 232.0, 524.7, 231.9, 524.7, 238.0);
            c.bezierCurveTo(525.6, 240.1, 524.9, 242.9, 524.3, 244.0);
            c.bezierCurveTo(523.7, 249.4, 523.7, 253.6, 524.7, 259.1);
            c.bezierCurveTo(521.3, 260.4, 519.6, 260.2, 516.4, 260.1);
            c.bezierCurveTo(517.6, 259.3, 517.9, 259.1, 518.8, 258.9);
            c.bezierCurveTo(517.7, 258.8, 517.3, 259.1, 515.9, 259.4);
            c.bezierCurveTo(517.7, 258.5, 519.8, 257.9, 520.7, 255.6);
            c.bezierCurveTo(521.3, 254.2, 521.6, 244.7, 521.6, 244.7);
            c.bezierCurveTo(520.4, 242.3, 520.4, 240.6, 521.5, 238.1);
            c.bezierCurveTo(518.8, 232.2, 518.0, 227.3, 517.2, 220.9);
            c.bezierCurveTo(517.1, 222.9, 516.7, 224.0, 516.7, 225.9);
            c.bezierCurveTo(500.8, 225.5, 506.0, 217.6, 502.4, 202.8);
            c.bezierCurveTo(503.2, 201.9, 503.4, 201.5, 504.1, 200.8);
            c.bezierCurveTo(500.6, 203.1, 498.0, 203.7, 496.1, 206.2);
            c.bezierCurveTo(495.5, 206.3, 494.9, 206.3, 494.9, 205.3);
            c.bezierCurveTo(499.1, 202.8, 499.7, 201.4, 499.7, 200.1);
            c.bezierCurveTo(497.6, 203.4, 494.2, 204.0, 492.2, 205.4);
            c.bezierCurveTo(489.2, 205.2, 490.2, 202.2, 491.7, 200.8);
            c.bezierCurveTo(489.1, 202.2, 489.7, 203.1, 489.1, 204.2);
            c.bezierCurveTo(488.3, 202.9, 488.5, 200.4, 491.6, 199.4);
            c.bezierCurveTo(490.7, 197.8, 494.3, 196.3, 498.4, 195.0);
            c.bezierCurveTo(498.9, 195.4, 499.4, 195.4, 500.1, 195.2);
            c.bezierCurveTo(501.4, 197.6, 504.2, 196.8, 504.8, 195.2);
            c.bezierCurveTo(505.6, 193.2, 503.7, 191.5, 501.9, 192.0);
            c.bezierCurveTo(502.6, 191.3, 503.0, 190.9, 504.4, 190.5);
            c.bezierCurveTo(506.3, 190.0, 507.8, 191.0, 508.6, 192.3);
            c.closePath();
            c.fillStyle = 'rgb(160, 115, 33)';
            c.fill();
            c.beginPath();
            c.moveTo(560.9, 222.4);
            c.bezierCurveTo(561.7, 221.2, 563.5, 222.2, 565.2, 222.7);
            c.bezierCurveTo(563.0, 223.6, 562.0, 223.7, 560.9, 222.4);
            c.closePath();
            c.fillStyle = 'rgb(125, 90, 26)';
            c.fill();
            c.beginPath();
            c.moveTo(499.5, 188.6);
            c.bezierCurveTo(500.6, 189.0, 501.3, 189.0, 503.0, 190.1);
            c.bezierCurveTo(502.5, 190.4, 502.0, 190.7, 501.8, 191.1);
            c.bezierCurveTo(500.6, 190.4, 500.2, 189.5, 499.5, 188.6);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(492.9, 199.5);
            c.bezierCurveTo(494.0, 199.4, 495.6, 198.3, 495.6, 198.3);
            c.bezierCurveTo(494.9, 199.9, 494.0, 200.0, 492.9, 199.5);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(500.8, 192.5);
            c.bezierCurveTo(500.6, 192.8, 500.4, 193.0, 500.2, 193.4);
            c.bezierCurveTo(500.4, 192.6, 499.3, 192.6, 499.2, 193.2);
            c.bezierCurveTo(499.0, 193.9, 499.8, 194.2, 500.1, 193.7);
            c.bezierCurveTo(500.0, 194.1, 500.0, 194.5, 500.0, 194.5);
            c.bezierCurveTo(498.6, 195.3, 497.7, 193.7, 498.3, 192.6);
            c.bezierCurveTo(498.8, 191.6, 500.2, 191.5, 500.8, 192.5);
            c.moveTo(502.5, 192.5);
            c.bezierCurveTo(501.2, 192.5, 500.1, 194.4, 501.1, 195.5);
            c.bezierCurveTo(502.4, 196.8, 504.0, 195.9, 504.3, 194.6);
            c.bezierCurveTo(504.5, 193.7, 503.8, 192.5, 502.5, 192.5);
            c.moveTo(502.8, 193.6);
            c.bezierCurveTo(503.3, 193.7, 503.5, 194.2, 503.4, 194.6);
            c.bezierCurveTo(503.3, 194.9, 502.6, 195.2, 502.2, 194.8);
            c.bezierCurveTo(501.8, 194.4, 502.2, 193.6, 502.8, 193.6);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(516.9, 227.8);
            c.bezierCurveTo(517.7, 232.5, 519.0, 234.8, 520.4, 238.1);
            c.bezierCurveTo(519.4, 239.6, 519.6, 242.3, 520.6, 245.5);
            c.bezierCurveTo(520.2, 248.9, 522.2, 255.5, 517.5, 257.7);
            c.lineTo(516.2, 257.7);
            c.lineTo(516.8, 257.1);
            c.lineTo(515.8, 257.4);
            c.bezierCurveTo(516.7, 256.2, 518.7, 255.9, 519.6, 254.3);
            c.bezierCurveTo(520.1, 250.6, 519.9, 245.0, 519.1, 243.0);
            c.bezierCurveTo(517.5, 241.2, 518.0, 239.2, 519.2, 237.6);
            c.bezierCurveTo(517.3, 233.3, 515.8, 229.1, 516.0, 227.9);
            c.lineTo(516.9, 227.8);
            c.moveTo(540.0, 227.7);
            c.bezierCurveTo(540.6, 227.5, 541.4, 227.1, 541.4, 227.1);
            c.bezierCurveTo(543.5, 235.7, 543.7, 233.4, 547.9, 241.9);
            c.bezierCurveTo(546.2, 247.4, 544.5, 252.8, 543.0, 256.4);
            c.bezierCurveTo(541.3, 258.3, 540.0, 258.2, 538.0, 258.4);
            c.bezierCurveTo(538.1, 257.9, 538.6, 257.6, 539.0, 257.3);
            c.bezierCurveTo(538.3, 257.4, 537.7, 257.8, 537.0, 258.2);
            c.bezierCurveTo(537.8, 257.5, 537.6, 256.9, 540.5, 255.6);
            c.bezierCurveTo(540.5, 255.6, 546.7, 244.0, 545.9, 242.4);
            c.bezierCurveTo(545.0, 240.8, 540.1, 231.1, 540.0, 227.7);
            c.closePath();
            c.fillStyle = 'rgb(98, 72, 49)';
            c.fill();
        }},
        'id_crocodile': { id: 'id_crocodile', bounds: { x: 44.3, y: 278.4, width: 125.3, height: 72.8 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(49.7, 336.7);
            c.bezierCurveTo(40.8, 331.8, 50.0, 323.7, 58.6, 327.3);
            c.bezierCurveTo(62.0, 327.1, 67.3, 326.5, 71.2, 326.0);
            c.bezierCurveTo(69.3, 322.0, 74.4, 317.6, 78.2, 321.0);
            c.bezierCurveTo(80.2, 320.0, 82.3, 320.1, 84.0, 321.7);
            c.bezierCurveTo(86.2, 320.9, 89.0, 322.1, 93.5, 322.5);
            c.bezierCurveTo(99.8, 322.5, 103.6, 319.4, 110.2, 320.9);
            c.bezierCurveTo(113.1, 321.6, 114.5, 318.8, 119.8, 320.6);
            c.bezierCurveTo(125.1, 322.3, 127.9, 320.0, 131.9, 322.3);
            c.bezierCurveTo(135.9, 324.6, 139.3, 326.6, 149.4, 326.9);
            c.bezierCurveTo(145.5, 324.5, 142.0, 320.9, 141.4, 317.3);
            c.bezierCurveTo(144.2, 323.5, 159.1, 319.8, 168.8, 326.7);
            c.bezierCurveTo(169.5, 329.2, 168.8, 332.5, 168.6, 334.6);
            c.bezierCurveTo(165.8, 338.9, 159.3, 344.8, 141.8, 343.8);
            c.bezierCurveTo(144.1, 345.7, 139.1, 349.5, 128.3, 350.5);
            c.bezierCurveTo(130.1, 347.9, 127.3, 348.4, 124.3, 349.5);
            c.bezierCurveTo(125.6, 345.9, 122.8, 346.8, 119.1, 348.6);
            c.bezierCurveTo(119.3, 347.7, 120.0, 346.7, 121.1, 345.6);
            c.bezierCurveTo(116.8, 346.2, 112.6, 345.9, 109.4, 345.2);
            c.bezierCurveTo(101.9, 351.7, 101.9, 348.2, 98.1, 351.1);
            c.bezierCurveTo(97.7, 350.2, 100.3, 347.1, 94.0, 350.5);
            c.bezierCurveTo(96.4, 346.0, 90.7, 348.8, 90.1, 349.6);
            c.bezierCurveTo(90.4, 348.3, 90.8, 346.9, 92.4, 344.5);
            c.bezierCurveTo(85.5, 344.8, 45.7, 347.0, 49.7, 336.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(144.6, 321.1);
            c.bezierCurveTo(145.4, 322.8, 148.6, 325.0, 151.7, 326.9);
            c.bezierCurveTo(153.1, 327.0, 154.7, 326.9, 156.2, 326.6);
            c.bezierCurveTo(155.7, 325.7, 154.1, 325.2, 152.3, 324.2);
            c.bezierCurveTo(153.6, 324.5, 155.9, 324.7, 159.1, 326.9);
            c.bezierCurveTo(154.7, 329.7, 145.5, 327.6, 139.9, 327.8);
            c.bezierCurveTo(124.4, 319.8, 101.9, 321.5, 93.9, 325.7);
            c.bezierCurveTo(91.6, 323.8, 86.3, 322.2, 84.7, 323.0);
            c.bezierCurveTo(86.7, 328.4, 78.6, 332.6, 75.8, 326.6);
            c.bezierCurveTo(72.0, 327.0, 63.9, 328.5, 59.2, 329.0);
            c.bezierCurveTo(58.9, 330.9, 58.1, 331.6, 57.5, 331.7);
            c.bezierCurveTo(57.7, 325.9, 49.8, 328.3, 49.1, 330.7);
            c.bezierCurveTo(48.7, 332.1, 47.9, 335.3, 56.0, 335.3);
            c.bezierCurveTo(61.0, 335.3, 61.5, 336.8, 69.3, 334.7);
            c.bezierCurveTo(69.2, 333.8, 69.5, 332.5, 69.7, 331.3);
            c.bezierCurveTo(71.3, 332.2, 72.6, 333.6, 73.1, 334.4);
            c.bezierCurveTo(79.9, 335.8, 87.2, 333.3, 90.1, 329.4);
            c.bezierCurveTo(88.4, 333.3, 86.2, 333.9, 82.8, 335.5);
            c.bezierCurveTo(82.0, 338.1, 80.6, 338.9, 79.8, 339.4);
            c.lineTo(79.5, 336.7);
            c.bezierCurveTo(77.9, 337.0, 73.9, 336.1, 70.8, 336.2);
            c.bezierCurveTo(67.8, 336.3, 65.6, 337.6, 62.3, 337.5);
            c.bezierCurveTo(61.4, 338.4, 60.9, 339.2, 60.0, 340.1);
            c.lineTo(59.0, 337.1);
            c.bezierCurveTo(54.2, 336.4, 54.0, 337.1, 52.0, 337.3);
            c.bezierCurveTo(52.2, 343.3, 77.7, 343.3, 83.6, 342.8);
            c.bezierCurveTo(89.4, 342.4, 91.2, 337.2, 91.2, 337.2);
            c.bezierCurveTo(91.2, 337.2, 89.9, 341.3, 90.1, 341.5);
            c.bezierCurveTo(90.9, 342.2, 96.2, 341.6, 96.0, 341.3);
            c.bezierCurveTo(92.9, 339.2, 92.9, 336.1, 93.1, 333.1);
            c.bezierCurveTo(94.3, 339.5, 97.5, 340.7, 101.7, 341.6);
            c.bezierCurveTo(94.5, 342.3, 94.7, 345.1, 93.2, 346.4);
            c.bezierCurveTo(94.4, 345.8, 97.6, 344.0, 97.0, 347.2);
            c.bezierCurveTo(102.3, 345.5, 101.2, 347.5, 101.0, 348.4);
            c.bezierCurveTo(104.3, 347.6, 106.0, 345.2, 108.1, 344.0);
            c.bezierCurveTo(107.6, 338.9, 105.1, 336.0, 102.8, 333.1);
            c.bezierCurveTo(106.8, 335.9, 108.2, 338.9, 110.1, 343.3);
            c.bezierCurveTo(116.2, 345.0, 123.7, 344.0, 126.2, 343.1);
            c.bezierCurveTo(123.6, 340.7, 123.0, 333.8, 129.0, 331.0);
            c.bezierCurveTo(123.4, 337.1, 125.6, 342.3, 131.6, 344.0);
            c.bezierCurveTo(127.3, 343.2, 125.0, 344.6, 122.3, 346.2);
            c.bezierCurveTo(128.2, 343.9, 126.6, 347.5, 126.6, 347.5);
            c.bezierCurveTo(131.5, 345.7, 131.8, 347.5, 131.1, 348.7);
            c.bezierCurveTo(133.0, 348.7, 137.0, 347.9, 139.9, 344.9);
            c.bezierCurveTo(138.5, 343.1, 135.3, 341.5, 131.8, 339.5);
            c.bezierCurveTo(138.7, 342.7, 138.9, 338.7, 139.3, 335.1);
            c.bezierCurveTo(139.5, 337.5, 139.7, 339.8, 138.1, 341.5);
            c.bezierCurveTo(143.9, 342.9, 168.5, 343.0, 168.0, 328.4);
            c.bezierCurveTo(158.3, 336.1, 147.6, 332.1, 139.7, 331.5);
            c.bezierCurveTo(149.4, 331.1, 160.6, 334.4, 167.6, 327.0);
            c.bezierCurveTo(162.1, 323.3, 153.3, 323.7, 144.6, 321.1);
            c.moveTo(114.8, 328.2);
            c.bezierCurveTo(118.1, 328.3, 121.5, 328.7, 124.0, 329.3);
            c.bezierCurveTo(116.9, 329.0, 111.4, 329.0, 106.1, 329.2);
            c.bezierCurveTo(108.2, 328.5, 111.5, 328.2, 114.8, 328.2);
            c.lineTo(114.8, 328.2);
            c.moveTo(55.7, 330.5);
            c.bezierCurveTo(56.0, 331.3, 53.9, 332.7, 52.8, 332.6);
            c.bezierCurveTo(51.7, 332.5, 52.4, 330.8, 53.2, 330.3);
            c.bezierCurveTo(54.4, 329.7, 55.4, 329.7, 55.7, 330.5);
            c.closePath();
            c.fillStyle = 'rgb(115, 148, 58)';
            c.fill();
            c.beginPath();
            c.moveTo(77.0, 321.9);
            c.bezierCurveTo(76.7, 322.2, 76.5, 322.6, 76.3, 323.1);
            c.bezierCurveTo(75.7, 322.1, 74.2, 322.7, 74.0, 323.6);
            c.bezierCurveTo(73.7, 324.7, 74.3, 325.2, 75.2, 325.3);
            c.bezierCurveTo(74.0, 325.6, 73.0, 325.7, 72.2, 325.8);
            c.bezierCurveTo(71.6, 324.8, 71.6, 323.8, 72.0, 322.7);
            c.bezierCurveTo(72.9, 320.6, 76.2, 319.9, 77.0, 321.9);
            c.moveTo(80.2, 321.5);
            c.bezierCurveTo(77.5, 321.6, 75.7, 325.8, 78.0, 327.6);
            c.bezierCurveTo(80.8, 329.8, 83.6, 327.5, 83.8, 325.1);
            c.bezierCurveTo(84.0, 323.2, 82.7, 321.4, 80.2, 321.5);
            c.moveTo(80.9, 323.8);
            c.bezierCurveTo(82.0, 323.7, 82.5, 324.7, 82.3, 325.4);
            c.bezierCurveTo(82.2, 326.2, 81.0, 326.9, 80.1, 326.2);
            c.bezierCurveTo(79.2, 325.4, 79.8, 323.8, 80.9, 323.8);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(59.6, 336.5);
            c.bezierCurveTo(60.3, 336.8, 61.8, 336.8, 61.8, 336.8);
            c.lineTo(60.2, 338.9);
            c.lineTo(59.6, 336.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(70.0, 335.4);
            c.bezierCurveTo(70.8, 335.3, 72.8, 335.5, 72.8, 335.5);
            c.bezierCurveTo(72.2, 334.5, 71.4, 333.4, 70.1, 332.2);
            c.bezierCurveTo(70.0, 333.3, 70.0, 334.4, 70.0, 335.4);
            c.lineTo(70.0, 335.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(80.0, 335.3);
            c.bezierCurveTo(80.8, 335.2, 82.1, 334.8, 82.1, 334.8);
            c.bezierCurveTo(81.8, 336.1, 81.2, 337.4, 80.3, 338.3);
            c.bezierCurveTo(80.3, 337.4, 80.2, 336.3, 80.0, 335.3);
            c.closePath();
            c.fill();
        }},
        'id_pig': { id: 'id_pig', bounds: { x: 174.8, y: 269.3, width: 114.8, height: 93.1 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(278.7, 318.7);
            c.bezierCurveTo(278.7, 318.7, 281.2, 317.7, 281.0, 315.8);
            c.bezierCurveTo(280.9, 313.3, 276.6, 314.2, 276.7, 316.4);
            c.bezierCurveTo(276.8, 317.9, 278.7, 318.7, 278.7, 318.7);
            c.moveTo(196.0, 309.2);
            c.bezierCurveTo(195.1, 307.3, 195.4, 303.8, 198.3, 302.4);
            c.bezierCurveTo(199.1, 298.3, 199.7, 296.3, 201.1, 292.8);
            c.bezierCurveTo(203.1, 296.1, 204.3, 297.8, 205.2, 302.2);
            c.bezierCurveTo(207.9, 301.8, 208.9, 302.9, 209.4, 303.4);
            c.bezierCurveTo(212.0, 300.6, 215.5, 297.0, 217.0, 292.6);
            c.bezierCurveTo(219.6, 296.6, 221.2, 299.0, 222.3, 305.6);
            c.bezierCurveTo(240.4, 301.7, 263.2, 301.7, 272.5, 318.9);
            c.bezierCurveTo(273.6, 319.0, 274.8, 319.4, 276.5, 319.2);
            c.bezierCurveTo(269.4, 312.1, 287.9, 309.6, 280.8, 319.5);
            c.bezierCurveTo(284.0, 319.5, 287.8, 318.1, 289.2, 312.4);
            c.bezierCurveTo(289.8, 318.0, 285.1, 321.4, 279.0, 320.8);
            c.bezierCurveTo(276.7, 321.6, 275.5, 321.9, 273.2, 321.9);
            c.bezierCurveTo(273.1, 339.2, 267.1, 338.7, 267.3, 361.6);
            c.bezierCurveTo(265.5, 361.8, 264.5, 362.0, 262.7, 361.9);
            c.lineTo(262.5, 358.4);
            c.bezierCurveTo(261.7, 359.4, 261.7, 361.2, 261.6, 361.8);
            c.bezierCurveTo(260.9, 361.8, 259.8, 361.7, 259.2, 361.4);
            c.bezierCurveTo(259.2, 360.0, 259.1, 358.7, 259.2, 357.3);
            c.lineTo(257.8, 357.2);
            c.bezierCurveTo(257.6, 356.7, 257.5, 355.7, 257.4, 355.1);
            c.bezierCurveTo(257.0, 355.9, 257.0, 356.6, 257.0, 357.2);
            c.bezierCurveTo(256.4, 357.2, 255.6, 357.1, 255.1, 356.6);
            c.bezierCurveTo(254.3, 350.9, 254.6, 344.5, 252.2, 340.9);
            c.bezierCurveTo(243.9, 343.1, 235.7, 342.8, 229.3, 340.7);
            c.lineTo(225.8, 361.5);
            c.bezierCurveTo(224.4, 361.9, 223.3, 361.8, 222.5, 361.7);
            c.lineTo(222.3, 358.5);
            c.bezierCurveTo(221.6, 359.6, 221.6, 360.7, 221.5, 361.7);
            c.bezierCurveTo(220.7, 361.7, 220.1, 361.7, 219.3, 361.3);
            c.bezierCurveTo(219.0, 359.8, 219.1, 358.0, 219.0, 356.3);
            c.lineTo(217.4, 356.4);
            c.lineTo(217.1, 353.9);
            c.bezierCurveTo(216.7, 355.2, 216.7, 355.7, 216.7, 356.5);
            c.bezierCurveTo(216.0, 356.4, 215.3, 356.6, 214.6, 356.1);
            c.bezierCurveTo(214.3, 348.2, 215.1, 339.3, 211.1, 333.1);
            c.bezierCurveTo(208.1, 330.6, 199.4, 324.2, 192.8, 322.3);
            c.bezierCurveTo(181.1, 322.5, 184.6, 312.6, 188.0, 311.9);
            c.bezierCurveTo(191.4, 311.3, 192.5, 310.9, 196.0, 309.2);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(200.7, 296.0);
            c.bezierCurveTo(199.8, 298.2, 199.3, 299.7, 199.1, 302.2);
            c.bezierCurveTo(199.4, 302.1, 199.8, 302.1, 200.3, 302.1);
            c.bezierCurveTo(200.2, 299.7, 200.6, 298.8, 200.7, 296.0);
            c.lineTo(200.7, 296.0);
            c.moveTo(201.3, 294.3);
            c.bezierCurveTo(201.7, 294.6, 203.6, 299.9, 204.1, 302.6);
            c.bezierCurveTo(203.6, 302.8, 203.2, 303.1, 202.8, 303.5);
            c.bezierCurveTo(202.5, 302.9, 201.8, 302.3, 201.0, 302.2);
            c.bezierCurveTo(201.1, 300.0, 201.4, 296.8, 201.3, 294.3);
            c.moveTo(217.4, 295.2);
            c.lineTo(214.9, 306.9);
            c.lineTo(216.2, 310.2);
            c.bezierCurveTo(215.1, 308.6, 214.0, 307.1, 212.7, 306.4);
            c.bezierCurveTo(213.1, 306.0, 213.6, 306.0, 214.2, 305.9);
            c.bezierCurveTo(215.0, 303.0, 215.3, 300.7, 215.9, 297.5);
            c.bezierCurveTo(214.6, 300.1, 211.3, 303.2, 210.1, 304.3);
            c.bezierCurveTo(211.3, 306.1, 210.9, 309.5, 209.2, 311.0);
            c.bezierCurveTo(206.7, 313.1, 201.8, 312.6, 201.1, 308.6);
            c.bezierCurveTo(200.4, 309.1, 198.9, 309.1, 196.9, 310.2);
            c.bezierCurveTo(197.9, 310.9, 198.2, 312.1, 198.2, 313.5);
            c.bezierCurveTo(197.5, 312.4, 197.2, 311.7, 195.3, 310.9);
            c.lineTo(191.4, 312.2);
            c.bezierCurveTo(195.7, 312.7, 196.3, 319.1, 194.5, 320.9);
            c.bezierCurveTo(200.0, 323.4, 210.1, 319.4, 210.1, 318.6);
            c.bezierCurveTo(211.4, 316.2, 210.3, 315.9, 209.9, 314.6);
            c.bezierCurveTo(211.3, 315.5, 212.3, 316.7, 212.7, 319.2);
            c.bezierCurveTo(212.3, 319.4, 212.0, 318.9, 211.6, 319.1);
            c.bezierCurveTo(207.1, 321.8, 202.9, 323.1, 198.6, 323.1);
            c.bezierCurveTo(203.0, 325.6, 206.5, 327.1, 213.4, 331.8);
            c.bezierCurveTo(214.9, 332.3, 216.5, 330.0, 217.9, 328.9);
            c.bezierCurveTo(216.9, 330.3, 216.8, 331.4, 215.7, 332.4);
            c.bezierCurveTo(218.1, 339.5, 220.1, 349.5, 221.1, 354.9);
            c.lineTo(225.1, 355.1);
            c.bezierCurveTo(226.7, 347.0, 227.8, 335.5, 232.8, 326.3);
            c.bezierCurveTo(231.6, 332.7, 230.6, 334.6, 229.7, 338.6);
            c.bezierCurveTo(236.3, 340.8, 246.0, 341.6, 254.8, 337.6);
            c.bezierCurveTo(253.7, 334.0, 253.7, 329.5, 255.1, 325.5);
            c.bezierCurveTo(254.7, 332.7, 254.6, 337.2, 260.7, 341.8);
            c.lineTo(260.9, 355.0);
            c.lineTo(265.7, 355.0);
            c.bezierCurveTo(266.3, 340.1, 273.8, 331.9, 271.5, 320.8);
            c.bezierCurveTo(269.8, 316.3, 261.3, 299.4, 222.2, 307.3);
            c.bezierCurveTo(220.2, 309.6, 220.2, 310.7, 218.6, 311.2);
            c.bezierCurveTo(223.5, 305.1, 218.6, 300.7, 217.4, 295.2);
            c.moveTo(189.7, 313.2);
            c.bezierCurveTo(187.0, 313.3, 185.6, 315.1, 186.1, 317.7);
            c.bezierCurveTo(186.8, 321.5, 193.2, 322.3, 194.0, 318.6);
            c.bezierCurveTo(194.8, 314.9, 192.4, 313.0, 189.7, 313.2);
            c.moveTo(187.8, 314.8);
            c.bezierCurveTo(188.9, 314.6, 189.5, 318.4, 188.1, 318.4);
            c.bezierCurveTo(186.8, 318.4, 186.8, 314.9, 187.8, 314.8);
            c.moveTo(191.5, 314.9);
            c.bezierCurveTo(192.7, 314.9, 192.7, 319.1, 191.2, 318.9);
            c.bezierCurveTo(189.6, 318.7, 190.3, 314.9, 191.5, 314.9);
            c.closePath();
            c.fillStyle = 'rgb(226, 144, 193)';
            c.fill();
            c.beginPath();
            c.moveTo(202.2, 304.2);
            c.bezierCurveTo(201.7, 304.7, 201.6, 305.2, 201.3, 305.7);
            c.bezierCurveTo(200.9, 304.2, 199.2, 304.5, 198.8, 305.8);
            c.bezierCurveTo(198.6, 306.4, 199.1, 307.4, 200.1, 307.4);
            c.bezierCurveTo(198.9, 307.6, 197.9, 308.4, 197.1, 308.5);
            c.bezierCurveTo(196.4, 307.4, 196.4, 306.2, 196.9, 305.1);
            c.bezierCurveTo(197.9, 302.9, 201.4, 302.3, 202.2, 304.2);
            c.lineTo(202.2, 304.2);
            c.moveTo(205.8, 303.3);
            c.bezierCurveTo(202.9, 303.3, 200.9, 308.2, 203.3, 310.1);
            c.bezierCurveTo(206.3, 312.4, 209.2, 310.4, 209.5, 307.8);
            c.bezierCurveTo(209.7, 305.9, 208.9, 303.3, 205.8, 303.3);
            c.moveTo(206.4, 306.1);
            c.bezierCurveTo(207.5, 306.1, 208.1, 307.1, 207.9, 307.9);
            c.bezierCurveTo(207.7, 308.6, 206.5, 309.4, 205.5, 308.7);
            c.bezierCurveTo(204.6, 307.9, 205.2, 306.2, 206.4, 306.1);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(253.6, 340.4);
            c.bezierCurveTo(254.3, 340.1, 255.1, 339.7, 255.6, 339.4);
            c.bezierCurveTo(256.1, 340.5, 257.7, 342.1, 258.5, 342.7);
            c.bezierCurveTo(258.9, 345.0, 258.8, 350.0, 259.0, 352.8);
            c.lineTo(256.0, 352.8);
            c.bezierCurveTo(255.7, 348.2, 255.2, 343.9, 253.6, 340.4);
            c.moveTo(214.7, 333.1);
            c.bezierCurveTo(217.1, 340.1, 218.0, 346.3, 218.6, 351.9);
            c.lineTo(215.9, 351.8);
            c.bezierCurveTo(216.3, 342.0, 214.2, 336.3, 213.1, 333.7);
            c.bezierCurveTo(213.8, 333.4, 214.4, 333.3, 214.7, 333.1);
            c.closePath();
            c.fillStyle = 'rgb(121, 69, 100)';
            c.fill();
        }},
        'id_snake': { id: 'id_snake', bounds: { x: 296.4, y: 272.8, width: 102.9, height: 87.2 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(337.2, 292.7);
            c.bezierCurveTo(340.8, 288.6, 346.6, 291.0, 347.5, 295.1);
            c.bezierCurveTo(347.5, 295.1, 353.8, 295.7, 355.8, 302.9);
            c.bezierCurveTo(357.7, 310.2, 349.8, 318.7, 340.4, 330.0);
            c.bezierCurveTo(352.3, 327.8, 370.4, 329.4, 376.9, 335.9);
            c.bezierCurveTo(383.3, 342.3, 377.0, 346.7, 377.0, 346.7);
            c.bezierCurveTo(386.8, 345.9, 386.7, 337.2, 399.1, 331.2);
            c.bezierCurveTo(390.2, 340.1, 387.5, 354.7, 374.4, 357.3);
            c.bezierCurveTo(361.3, 360.0, 346.7, 360.0, 335.6, 359.3);
            c.bezierCurveTo(324.6, 358.5, 313.9, 352.8, 313.2, 344.1);
            c.bezierCurveTo(312.5, 335.5, 325.1, 332.2, 325.1, 332.2);
            c.bezierCurveTo(328.0, 321.9, 334.2, 320.5, 337.6, 312.2);
            c.bezierCurveTo(330.2, 315.3, 325.5, 315.4, 321.8, 321.2);
            c.bezierCurveTo(321.5, 319.8, 320.9, 318.8, 322.0, 315.6);
            c.bezierCurveTo(320.5, 315.9, 319.1, 316.2, 317.2, 317.3);
            c.bezierCurveTo(319.5, 312.9, 322.0, 312.0, 327.8, 311.3);
            c.bezierCurveTo(324.5, 309.6, 324.8, 303.8, 330.7, 299.9);
            c.bezierCurveTo(323.7, 296.2, 331.5, 286.6, 337.2, 292.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(347.4, 296.5);
            c.bezierCurveTo(351.6, 296.9, 357.1, 303.3, 353.3, 310.5);
            c.bezierCurveTo(349.5, 317.7, 340.8, 326.6, 340.8, 326.6);
            c.lineTo(336.8, 326.5);
            c.lineTo(338.4, 330.3);
            c.bezierCurveTo(337.8, 332.0, 337.0, 333.7, 337.6, 335.4);
            c.lineTo(334.7, 338.2);
            c.lineTo(338.2, 338.1);
            c.bezierCurveTo(340.2, 339.4, 342.2, 340.7, 344.7, 341.4);
            c.lineTo(344.4, 344.7);
            c.lineTo(347.0, 342.1);
            c.bezierCurveTo(350.0, 342.8, 353.1, 342.6, 356.3, 342.5);
            c.lineTo(359.2, 345.7);
            c.lineTo(360.0, 341.8);
            c.lineTo(366.3, 340.4);
            c.bezierCurveTo(368.7, 341.3, 369.2, 343.0, 370.5, 344.3);
            c.bezierCurveTo(369.9, 342.5, 369.6, 340.8, 368.0, 339.4);
            c.bezierCurveTo(367.8, 338.2, 368.6, 337.0, 369.4, 335.9);
            c.bezierCurveTo(367.9, 336.5, 366.8, 337.4, 366.1, 338.4);
            c.bezierCurveTo(363.7, 338.3, 362.2, 338.4, 360.8, 338.5);
            c.bezierCurveTo(360.0, 336.9, 359.7, 335.1, 359.7, 333.2);
            c.bezierCurveTo(358.5, 335.1, 357.8, 336.9, 357.8, 338.6);
            c.lineTo(351.6, 339.0);
            c.bezierCurveTo(350.5, 337.1, 350.0, 335.0, 350.0, 332.6);
            c.bezierCurveTo(349.0, 334.5, 348.1, 336.5, 348.0, 339.0);
            c.bezierCurveTo(347.9, 339.2, 337.1, 337.6, 339.7, 331.5);
            c.bezierCurveTo(347.7, 329.1, 371.5, 331.0, 375.7, 336.4);
            c.bezierCurveTo(379.8, 341.8, 377.6, 345.2, 368.3, 349.3);
            c.bezierCurveTo(359.0, 353.3, 333.6, 354.4, 330.7, 342.6);
            c.bezierCurveTo(327.8, 330.8, 339.8, 325.3, 342.9, 309.7);
            c.bezierCurveTo(346.9, 306.9, 348.7, 303.8, 349.6, 300.9);
            c.bezierCurveTo(344.6, 309.4, 330.6, 312.0, 328.6, 310.2);
            c.bezierCurveTo(326.7, 308.3, 326.3, 302.7, 336.1, 299.0);
            c.bezierCurveTo(340.2, 303.8, 346.9, 300.9, 347.4, 296.5);
            c.closePath();
            c.fillStyle = 'rgb(49, 139, 44)';
            c.fill();
            c.beginPath();
            c.moveTo(324.7, 334.0);
            c.bezierCurveTo(324.7, 334.0, 308.8, 338.8, 317.3, 350.2);
            c.bezierCurveTo(325.7, 361.7, 370.7, 358.8, 378.5, 354.5);
            c.bezierCurveTo(386.2, 350.3, 393.5, 336.2, 393.5, 336.2);
            c.bezierCurveTo(387.6, 340.2, 385.3, 348.5, 374.9, 348.5);
            c.bezierCurveTo(358.5, 356.2, 341.9, 353.9, 331.8, 349.3);
            c.lineTo(327.1, 351.1);
            c.lineTo(329.4, 347.8);
            c.bezierCurveTo(327.7, 346.5, 326.4, 344.6, 325.2, 342.7);
            c.lineTo(320.3, 341.9);
            c.lineTo(324.6, 339.8);
            c.bezierCurveTo(324.4, 338.4, 324.3, 336.6, 324.7, 334.0);
            c.lineTo(324.7, 334.0);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(332.5, 295.7);
            c.bezierCurveTo(332.5, 297.6, 335.0, 297.7, 335.4, 296.3);
            c.bezierCurveTo(335.5, 297.2, 335.8, 297.9, 335.8, 297.9);
            c.bezierCurveTo(331.7, 301.0, 328.6, 297.4, 329.4, 294.6);
            c.bezierCurveTo(330.3, 291.8, 334.0, 290.6, 336.5, 293.3);
            c.bezierCurveTo(335.9, 293.9, 335.6, 295.2, 335.6, 295.2);
            c.bezierCurveTo(335.3, 293.5, 332.4, 293.9, 332.5, 295.7);
            c.moveTo(340.4, 291.6);
            c.bezierCurveTo(337.0, 292.3, 335.1, 297.6, 338.5, 299.5);
            c.bezierCurveTo(342.7, 301.9, 346.1, 298.7, 346.1, 295.6);
            c.bezierCurveTo(346.1, 293.3, 343.8, 290.9, 340.4, 291.6);
            c.moveTo(341.9, 294.4);
            c.bezierCurveTo(343.4, 294.1, 344.2, 295.3, 344.1, 296.2);
            c.bezierCurveTo(344.0, 297.2, 342.5, 298.3, 341.2, 297.5);
            c.bezierCurveTo(339.8, 296.7, 340.4, 294.6, 341.9, 294.4);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(319.0, 315.7);
            c.bezierCurveTo(321.1, 314.0, 323.9, 311.9, 331.8, 311.8);
            c.bezierCurveTo(334.5, 311.8, 335.0, 311.2, 337.8, 310.8);
            c.bezierCurveTo(333.8, 313.8, 326.8, 312.7, 322.4, 319.1);
            c.bezierCurveTo(322.3, 318.6, 323.0, 315.9, 325.3, 313.9);
            c.bezierCurveTo(322.9, 314.2, 320.8, 314.8, 319.0, 315.7);
            c.closePath();
            c.fillStyle = 'rgb(171, 29, 29)';
            c.fill();
            c.beginPath();
            c.moveTo(339.1, 311.6);
            c.bezierCurveTo(340.0, 311.2, 340.9, 310.7, 341.7, 310.3);
            c.bezierCurveTo(339.4, 318.7, 335.6, 323.4, 332.3, 328.6);
            c.bezierCurveTo(328.6, 334.5, 327.3, 339.9, 331.3, 347.2);
            c.bezierCurveTo(329.7, 346.4, 319.9, 338.7, 330.7, 324.1);
            c.bezierCurveTo(333.3, 320.6, 335.3, 319.7, 339.1, 311.6);
            c.closePath();
            c.fillStyle = 'rgb(132, 132, 17)';
            c.fill();
        }},
        'id_giraffe': { id: 'id_giraffe', bounds: { x: 411.7, y: 268.1, width: 63.4, height: 94.9 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(427.0, 272.2);
            c.bezierCurveTo(424.7, 266.8, 432.9, 269.0, 428.5, 272.2);
            c.lineTo(428.2, 274.4);
            c.bezierCurveTo(429.1, 275.1, 430.1, 275.2, 431.2, 275.3);
            c.lineTo(433.0, 273.0);
            c.bezierCurveTo(432.4, 267.7, 439.1, 271.9, 434.6, 273.7);
            c.lineTo(432.3, 276.9);
            c.bezierCurveTo(434.3, 275.6, 436.6, 275.5, 439.4, 276.6);
            c.bezierCurveTo(438.6, 277.9, 437.4, 281.4, 433.8, 281.7);
            c.bezierCurveTo(434.5, 282.8, 435.1, 283.1, 435.3, 285.1);
            c.bezierCurveTo(435.5, 287.9, 436.7, 287.6, 437.1, 290.9);
            c.bezierCurveTo(437.4, 292.8, 439.3, 294.4, 439.5, 296.9);
            c.bezierCurveTo(439.8, 299.5, 441.3, 299.6, 442.3, 303.3);
            c.bezierCurveTo(443.3, 307.0, 447.0, 309.6, 449.3, 311.2);
            c.bezierCurveTo(453.5, 314.2, 462.4, 315.4, 464.5, 319.1);
            c.bezierCurveTo(466.6, 322.8, 471.0, 335.5, 471.2, 334.8);
            c.bezierCurveTo(473.2, 335.9, 473.8, 338.0, 474.9, 341.7);
            c.bezierCurveTo(472.3, 336.6, 472.8, 339.0, 474.2, 343.0);
            c.bezierCurveTo(470.7, 336.1, 472.9, 341.6, 473.1, 342.8);
            c.bezierCurveTo(471.7, 339.2, 470.8, 339.9, 470.4, 335.4);
            c.bezierCurveTo(468.7, 330.8, 467.3, 328.1, 466.1, 326.1);
            c.bezierCurveTo(465.7, 326.4, 463.9, 334.3, 464.9, 339.1);
            c.bezierCurveTo(465.5, 342.1, 464.7, 342.9, 464.7, 344.9);
            c.bezierCurveTo(464.8, 351.8, 464.6, 358.5, 464.9, 359.0);
            c.bezierCurveTo(465.2, 359.6, 465.4, 362.4, 465.3, 362.5);
            c.bezierCurveTo(465.3, 362.6, 463.7, 362.7, 463.0, 362.7);
            c.bezierCurveTo(462.6, 361.8, 462.7, 361.6, 462.6, 360.1);
            c.bezierCurveTo(462.3, 361.4, 462.4, 361.9, 462.4, 362.7);
            c.bezierCurveTo(462.2, 362.6, 462.0, 362.7, 461.4, 362.6);
            c.bezierCurveTo(460.8, 362.4, 461.0, 360.5, 461.2, 359.9);
            c.bezierCurveTo(461.2, 359.9, 460.8, 359.9, 460.4, 360.0);
            c.bezierCurveTo(460.3, 359.3, 460.2, 358.6, 460.2, 358.2);
            c.bezierCurveTo(460.1, 358.7, 460.0, 359.5, 460.0, 360.0);
            c.bezierCurveTo(459.6, 359.9, 458.9, 359.9, 458.8, 359.8);
            c.bezierCurveTo(458.8, 359.6, 458.8, 350.3, 458.5, 345.2);
            c.bezierCurveTo(457.6, 344.0, 457.2, 341.3, 457.8, 339.9);
            c.bezierCurveTo(457.2, 337.8, 456.8, 334.7, 456.5, 333.7);
            c.bezierCurveTo(451.7, 334.0, 449.4, 332.6, 446.6, 331.6);
            c.bezierCurveTo(446.6, 331.6, 444.9, 340.6, 445.4, 341.9);
            c.bezierCurveTo(446.0, 343.1, 445.7, 343.4, 445.4, 345.3);
            c.bezierCurveTo(445.1, 347.2, 445.9, 359.6, 445.1, 359.9);
            c.bezierCurveTo(444.3, 360.2, 443.1, 360.0, 443.1, 360.0);
            c.lineTo(442.7, 362.6);
            c.bezierCurveTo(442.7, 362.6, 440.7, 362.8, 439.7, 362.6);
            c.bezierCurveTo(439.7, 361.7, 439.8, 361.3, 440.2, 359.6);
            c.bezierCurveTo(439.2, 361.3, 439.2, 361.9, 439.1, 362.5);
            c.bezierCurveTo(438.6, 362.5, 437.9, 362.2, 437.7, 362.2);
            c.bezierCurveTo(437.5, 362.1, 437.8, 360.6, 438.4, 358.3);
            c.bezierCurveTo(439.0, 356.1, 439.3, 347.0, 439.0, 345.9);
            c.bezierCurveTo(438.6, 344.7, 438.2, 343.3, 438.6, 341.2);
            c.bezierCurveTo(438.1, 337.6, 438.1, 333.0, 436.6, 329.3);
            c.bezierCurveTo(434.6, 324.2, 434.6, 322.0, 435.7, 318.2);
            c.bezierCurveTo(435.4, 307.4, 429.8, 292.6, 429.5, 287.3);
            c.bezierCurveTo(426.3, 288.9, 425.3, 288.5, 423.8, 288.4);
            c.bezierCurveTo(422.8, 288.4, 421.3, 289.5, 419.7, 289.7);
            c.bezierCurveTo(418.1, 289.9, 416.2, 287.2, 417.9, 285.1);
            c.bezierCurveTo(419.6, 283.0, 419.9, 284.0, 422.4, 281.1);
            c.bezierCurveTo(420.3, 281.3, 419.3, 278.5, 418.6, 275.0);
            c.bezierCurveTo(421.9, 274.6, 423.5, 275.8, 424.8, 276.6);
            c.bezierCurveTo(425.2, 276.1, 425.6, 275.4, 426.6, 275.0);
            c.bezierCurveTo(426.7, 273.6, 426.9, 272.6, 427.0, 272.2);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(426.0, 279.1);
            c.bezierCurveTo(426.1, 278.2, 424.8, 278.1, 424.7, 278.9);
            c.bezierCurveTo(424.5, 279.8, 425.3, 280.0, 425.7, 279.6);
            c.bezierCurveTo(425.6, 280.1, 425.6, 280.4, 425.6, 280.7);
            c.bezierCurveTo(424.0, 281.3, 423.1, 279.5, 423.8, 278.3);
            c.bezierCurveTo(424.4, 277.2, 426.2, 277.1, 426.8, 278.1);
            c.bezierCurveTo(426.5, 278.3, 426.1, 278.8, 426.0, 279.1);
            c.moveTo(428.4, 278.2);
            c.bezierCurveTo(426.8, 278.2, 425.6, 280.5, 426.9, 281.7);
            c.bezierCurveTo(428.2, 282.9, 430.0, 281.9, 430.3, 280.6);
            c.bezierCurveTo(430.6, 279.5, 429.9, 278.2, 428.4, 278.2);
            c.moveTo(428.7, 279.4);
            c.bezierCurveTo(429.3, 279.5, 429.5, 280.1, 429.4, 280.5);
            c.bezierCurveTo(429.2, 280.9, 428.5, 281.2, 428.0, 280.8);
            c.bezierCurveTo(427.6, 280.3, 428.0, 279.4, 428.7, 279.4);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(419.8, 275.9);
            c.bezierCurveTo(421.4, 275.7, 422.9, 276.6, 424.1, 277.2);
            c.bezierCurveTo(423.9, 277.4, 423.7, 277.6, 423.6, 277.7);
            c.bezierCurveTo(423.5, 277.8, 422.6, 276.6, 420.8, 276.3);
            c.bezierCurveTo(422.9, 278.0, 423.3, 278.2, 423.2, 278.3);
            c.bezierCurveTo(423.0, 278.8, 423.0, 279.6, 423.2, 280.2);
            c.bezierCurveTo(420.1, 280.1, 420.3, 277.5, 419.8, 275.9);
            c.moveTo(431.8, 278.2);
            c.bezierCurveTo(433.2, 276.9, 436.9, 276.5, 438.2, 277.1);
            c.bezierCurveTo(437.4, 278.4, 435.6, 281.2, 432.6, 280.9);
            c.bezierCurveTo(433.3, 282.6, 433.4, 283.0, 433.9, 285.1);
            c.bezierCurveTo(431.5, 286.7, 431.7, 288.1, 432.1, 289.4);
            c.bezierCurveTo(432.4, 290.6, 433.7, 290.7, 435.6, 290.2);
            c.bezierCurveTo(436.8, 294.6, 438.7, 299.0, 439.9, 301.7);
            c.bezierCurveTo(438.8, 302.7, 436.2, 305.4, 437.4, 307.5);
            c.bezierCurveTo(438.7, 309.5, 441.1, 311.5, 442.8, 307.3);
            c.bezierCurveTo(444.2, 309.6, 446.5, 310.6, 448.6, 312.1);
            c.bezierCurveTo(448.3, 312.8, 446.8, 313.4, 447.8, 315.9);
            c.bezierCurveTo(448.5, 317.4, 446.7, 318.5, 449.4, 319.7);
            c.bezierCurveTo(452.0, 321.0, 454.3, 318.6, 455.5, 315.5);
            c.bezierCurveTo(458.2, 316.3, 458.3, 316.3, 459.9, 317.0);
            c.bezierCurveTo(459.9, 317.0, 458.2, 321.5, 459.6, 323.1);
            c.bezierCurveTo(460.9, 324.6, 465.1, 323.6, 465.1, 323.6);
            c.bezierCurveTo(465.1, 325.8, 462.6, 334.9, 463.5, 338.3);
            c.bezierCurveTo(464.3, 341.7, 463.5, 342.3, 463.4, 344.7);
            c.bezierCurveTo(463.3, 347.0, 463.0, 356.5, 463.5, 358.7);
            c.lineTo(461.8, 359.0);
            c.bezierCurveTo(461.0, 355.3, 461.2, 348.7, 461.2, 344.3);
            c.bezierCurveTo(459.5, 342.7, 460.2, 341.3, 460.1, 339.8);
            c.bezierCurveTo(458.3, 336.0, 456.7, 328.8, 456.7, 324.6);
            c.bezierCurveTo(456.7, 327.4, 456.0, 328.1, 456.9, 332.6);
            c.bezierCurveTo(456.1, 332.9, 455.6, 332.8, 454.1, 332.6);
            c.bezierCurveTo(454.8, 330.8, 453.9, 323.7, 451.5, 322.6);
            c.bezierCurveTo(449.1, 321.4, 447.4, 329.5, 449.1, 331.3);
            c.bezierCurveTo(449.1, 331.3, 445.6, 330.2, 445.6, 329.8);
            c.bezierCurveTo(445.8, 327.4, 445.0, 321.3, 445.0, 321.4);
            c.bezierCurveTo(445.1, 327.3, 444.3, 336.1, 442.8, 341.4);
            c.bezierCurveTo(442.9, 342.7, 443.7, 344.0, 442.5, 345.3);
            c.lineTo(441.6, 359.0);
            c.lineTo(439.5, 358.6);
            c.bezierCurveTo(440.3, 357.1, 440.6, 347.0, 440.4, 345.7);
            c.bezierCurveTo(439.5, 343.6, 439.8, 342.4, 439.9, 341.6);
            c.bezierCurveTo(440.0, 340.8, 439.1, 334.1, 438.6, 330.5);
            c.bezierCurveTo(438.1, 326.8, 435.3, 324.5, 436.8, 320.2);
            c.bezierCurveTo(439.5, 321.1, 445.5, 321.6, 445.1, 318.9);
            c.bezierCurveTo(444.7, 316.2, 443.2, 313.7, 441.1, 312.4);
            c.bezierCurveTo(439.0, 311.1, 436.8, 313.9, 436.8, 313.9);
            c.lineTo(434.9, 303.2);
            c.bezierCurveTo(436.6, 302.3, 436.7, 301.0, 436.4, 298.0);
            c.bezierCurveTo(436.2, 295.1, 434.9, 294.9, 432.4, 295.2);
            c.bezierCurveTo(431.7, 293.3, 430.7, 287.0, 430.1, 285.3);
            c.bezierCurveTo(429.7, 286.7, 427.0, 287.0, 424.5, 287.5);
            c.bezierCurveTo(426.5, 286.6, 428.2, 286.3, 428.7, 284.4);
            c.bezierCurveTo(428.0, 285.8, 426.0, 286.2, 425.2, 286.5);
            c.bezierCurveTo(424.5, 286.9, 423.3, 287.0, 422.2, 287.6);
            c.bezierCurveTo(421.0, 288.2, 420.4, 288.9, 419.4, 288.7);
            c.bezierCurveTo(418.4, 288.5, 417.9, 286.5, 418.8, 285.4);
            c.bezierCurveTo(420.2, 283.6, 421.4, 284.4, 423.8, 280.9);
            c.bezierCurveTo(424.2, 281.3, 425.0, 281.5, 425.7, 281.2);
            c.bezierCurveTo(426.6, 283.7, 429.4, 283.2, 430.6, 281.6);
            c.bezierCurveTo(431.7, 280.1, 430.5, 276.6, 427.3, 277.8);
            c.bezierCurveTo(427.1, 277.4, 426.4, 277.0, 425.9, 276.9);
            c.bezierCurveTo(426.9, 275.3, 429.5, 275.4, 430.3, 276.9);
            c.bezierCurveTo(431.0, 278.5, 431.8, 278.2, 431.8, 278.2);
            c.closePath();
            c.fillStyle = 'rgb(198, 175, 36)';
            c.fill();
            c.beginPath();
            c.moveTo(421.2, 285.1);
            c.bezierCurveTo(422.2, 285.4, 420.3, 287.9, 419.6, 286.8);
            c.bezierCurveTo(419.4, 286.5, 420.8, 285.0, 421.2, 285.1);
            c.moveTo(419.0, 286.5);
            c.bezierCurveTo(418.1, 286.6, 419.8, 283.9, 420.3, 284.8);
            c.bezierCurveTo(420.4, 285.1, 419.3, 286.4, 419.0, 286.5);
            c.moveTo(432.0, 278.9);
            c.bezierCurveTo(433.4, 278.4, 435.4, 277.5, 437.0, 277.4);
            c.bezierCurveTo(434.9, 278.2, 433.4, 279.1, 432.3, 279.8);
            c.lineTo(432.0, 278.9);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(433.7, 271.9);
            c.bezierCurveTo(433.7, 270.8, 435.4, 270.8, 435.4, 272.0);
            c.bezierCurveTo(435.3, 273.1, 433.7, 273.1, 433.7, 271.9);
            c.moveTo(427.4, 270.4);
            c.bezierCurveTo(427.4, 269.3, 429.0, 269.2, 429.0, 270.3);
            c.bezierCurveTo(429.0, 271.5, 427.3, 271.5, 427.4, 270.4);
            c.moveTo(453.0, 332.4);
            c.bezierCurveTo(454.0, 332.0, 453.4, 323.9, 451.4, 323.5);
            c.bezierCurveTo(449.4, 323.0, 448.7, 328.4, 449.8, 331.6);
            c.bezierCurveTo(450.7, 332.0, 452.0, 332.4, 453.0, 332.4);
            c.moveTo(460.3, 317.3);
            c.bezierCurveTo(460.1, 318.6, 459.1, 322.0, 460.3, 322.8);
            c.bezierCurveTo(461.6, 323.7, 465.0, 322.9, 465.0, 322.9);
            c.bezierCurveTo(464.9, 320.7, 461.9, 317.6, 460.3, 317.3);
            c.moveTo(454.7, 315.1);
            c.bezierCurveTo(452.4, 314.5, 450.9, 313.6, 449.3, 312.6);
            c.bezierCurveTo(449.1, 312.9, 447.8, 313.4, 448.6, 315.2);
            c.bezierCurveTo(449.3, 316.6, 447.7, 318.5, 450.4, 319.2);
            c.bezierCurveTo(453.0, 319.9, 454.5, 316.3, 454.7, 315.1);
            c.moveTo(436.9, 319.3);
            c.bezierCurveTo(437.3, 318.4, 437.0, 316.6, 436.9, 314.9);
            c.bezierCurveTo(437.2, 314.8, 438.8, 313.1, 440.1, 313.0);
            c.bezierCurveTo(441.4, 312.8, 444.2, 316.7, 444.1, 318.9);
            c.bezierCurveTo(444.0, 321.1, 436.9, 319.3, 436.9, 319.3);
            c.lineTo(436.9, 319.3);
            c.moveTo(432.6, 295.9);
            c.lineTo(434.6, 302.3);
            c.bezierCurveTo(435.1, 302.2, 435.6, 301.9, 435.7, 300.8);
            c.bezierCurveTo(435.8, 299.2, 436.0, 297.3, 435.1, 296.3);
            c.bezierCurveTo(434.2, 295.4, 432.6, 295.9, 432.6, 295.9);
            c.moveTo(440.3, 302.3);
            c.lineTo(442.6, 306.7);
            c.bezierCurveTo(442.3, 306.9, 441.7, 308.5, 441.0, 308.8);
            c.bezierCurveTo(440.1, 309.3, 439.4, 308.9, 438.1, 307.3);
            c.bezierCurveTo(436.9, 305.7, 440.3, 302.3, 440.3, 302.3);
            c.moveTo(435.3, 289.3);
            c.bezierCurveTo(435.3, 289.3, 433.0, 290.6, 432.5, 288.9);
            c.bezierCurveTo(432.0, 287.2, 434.2, 285.9, 434.2, 285.9);
            c.lineTo(435.3, 289.3);
            c.closePath();
            c.fillStyle = 'rgb(144, 103, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(459.4, 340.0);
            c.bezierCurveTo(459.0, 341.6, 459.5, 343.7, 460.3, 344.6);
            c.lineTo(460.8, 357.0);
            c.lineTo(459.9, 357.2);
            c.lineTo(459.7, 344.6);
            c.bezierCurveTo(458.6, 343.5, 458.6, 341.0, 459.0, 339.9);
            c.bezierCurveTo(457.6, 335.5, 458.0, 335.0, 457.6, 333.2);
            c.bezierCurveTo(458.2, 334.7, 458.6, 337.7, 459.4, 340.0);
            c.moveTo(445.7, 331.2);
            c.lineTo(445.2, 331.0);
            c.lineTo(443.7, 341.6);
            c.bezierCurveTo(444.2, 343.2, 444.0, 344.6, 443.2, 345.5);
            c.lineTo(443.0, 356.7);
            c.lineTo(444.3, 356.7);
            c.lineTo(443.9, 345.1);
            c.bezierCurveTo(444.6, 343.9, 444.3, 343.0, 444.0, 342.0);
            c.lineTo(445.7, 331.2);
            c.closePath();
            c.fillStyle = 'rgb(60, 64, 6)';
            c.fill();
        }},
        'id_snail': { id: 'id_snail', bounds: { x: 478.8, y: 276.6, width: 127.3, height: 80.8 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(515.3, 321.1);
            c.bezierCurveTo(515.7, 321.1, 516.1, 321.3, 516.4, 321.5);
            c.bezierCurveTo(518.2, 321.3, 519.4, 321.7, 520.2, 322.2);
            c.lineTo(525.7, 306.6);
            c.bezierCurveTo(523.5, 298.4, 534.8, 303.3, 528.6, 307.3);
            c.lineTo(523.3, 324.4);
            c.bezierCurveTo(525.2, 327.9, 526.4, 330.9, 527.6, 334.4);
            c.bezierCurveTo(536.0, 329.2, 532.8, 306.6, 557.4, 309.5);
            c.bezierCurveTo(581.9, 312.4, 583.7, 340.6, 573.5, 347.3);
            c.bezierCurveTo(584.6, 351.3, 591.5, 351.9, 598.8, 353.1);
            c.bezierCurveTo(592.5, 356.9, 555.2, 356.8, 541.0, 356.4);
            c.bezierCurveTo(526.9, 355.9, 523.1, 358.4, 520.4, 350.9);
            c.bezierCurveTo(517.6, 343.5, 513.5, 339.3, 508.2, 336.1);
            c.bezierCurveTo(502.8, 332.8, 500.9, 327.9, 506.3, 325.3);
            c.bezierCurveTo(503.8, 320.9, 509.0, 318.1, 512.2, 320.4);
            c.lineTo(512.0, 304.5);
            c.bezierCurveTo(507.3, 297.7, 519.4, 298.2, 514.8, 304.6);
            c.lineTo(515.3, 321.1);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(512.8, 303.9);
            c.lineTo(513.3, 320.8);
            c.bezierCurveTo(513.6, 320.8, 514.1, 320.8, 514.3, 320.8);
            c.lineTo(513.9, 303.9);
            c.bezierCurveTo(516.6, 299.6, 510.0, 300.2, 512.8, 303.9);
            c.moveTo(526.9, 306.3);
            c.lineTo(521.0, 322.9);
            c.bezierCurveTo(521.2, 323.3, 521.1, 323.2, 521.2, 323.5);
            c.bezierCurveTo(520.6, 322.8, 518.7, 321.8, 517.0, 322.1);
            c.bezierCurveTo(521.4, 328.6, 509.9, 332.5, 509.6, 325.1);
            c.bezierCurveTo(507.7, 325.8, 502.8, 327.8, 506.5, 332.3);
            c.bezierCurveTo(513.6, 333.0, 516.8, 331.4, 518.7, 328.6);
            c.bezierCurveTo(517.5, 330.7, 516.0, 334.2, 507.9, 333.9);
            c.bezierCurveTo(507.9, 333.9, 517.6, 338.2, 521.2, 347.1);
            c.bezierCurveTo(524.9, 355.9, 526.7, 354.4, 532.9, 354.7);
            c.bezierCurveTo(553.7, 354.2, 573.5, 357.0, 594.2, 353.3);
            c.bezierCurveTo(588.9, 352.9, 581.1, 351.0, 572.3, 348.3);
            c.bezierCurveTo(568.4, 351.2, 556.7, 353.8, 548.4, 344.3);
            c.bezierCurveTo(538.5, 348.5, 533.2, 338.9, 526.6, 336.3);
            c.bezierCurveTo(525.8, 333.0, 524.5, 329.2, 522.1, 324.3);
            c.lineTo(527.9, 306.6);
            c.bezierCurveTo(531.9, 303.5, 524.7, 301.8, 526.9, 306.3);
            c.closePath();
            c.fillStyle = 'rgb(222, 170, 135)';
            c.fill();
            c.beginPath();
            c.moveTo(508.4, 322.6);
            c.bezierCurveTo(507.8, 323.4, 508.4, 324.0, 508.8, 324.1);
            c.bezierCurveTo(507.9, 324.4, 507.7, 324.6, 507.3, 324.8);
            c.bezierCurveTo(506.6, 323.8, 506.2, 322.8, 507.2, 321.5);
            c.bezierCurveTo(508.1, 320.1, 510.1, 320.0, 511.6, 321.3);
            c.bezierCurveTo(510.8, 321.8, 510.2, 322.4, 510.0, 322.8);
            c.bezierCurveTo(509.9, 322.3, 508.9, 321.8, 508.4, 322.6);
            c.moveTo(513.5, 321.6);
            c.bezierCurveTo(511.0, 321.6, 509.4, 325.6, 511.4, 327.4);
            c.bezierCurveTo(513.5, 329.2, 516.6, 327.4, 516.8, 325.4);
            c.bezierCurveTo(517.0, 323.7, 516.4, 321.6, 513.5, 321.6);
            c.moveTo(514.2, 323.8);
            c.bezierCurveTo(515.2, 323.8, 515.7, 324.7, 515.6, 325.4);
            c.bezierCurveTo(515.4, 326.1, 514.3, 326.8, 513.4, 326.1);
            c.bezierCurveTo(512.6, 325.4, 513.2, 323.9, 514.2, 323.8);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(529.1, 335.6);
            c.bezierCurveTo(535.6, 332.2, 536.2, 309.6, 554.7, 310.9);
            c.bezierCurveTo(573.1, 312.1, 582.1, 331.4, 575.3, 342.5);
            c.bezierCurveTo(568.4, 353.6, 552.2, 350.4, 548.0, 340.5);
            c.bezierCurveTo(543.8, 330.5, 549.6, 321.2, 557.7, 321.8);
            c.bezierCurveTo(565.8, 322.4, 566.1, 331.4, 563.6, 334.5);
            c.bezierCurveTo(561.1, 337.6, 556.8, 337.1, 556.5, 334.2);
            c.bezierCurveTo(556.1, 331.3, 559.3, 330.8, 559.8, 332.6);
            c.bezierCurveTo(560.0, 331.8, 558.4, 330.7, 557.1, 331.5);
            c.bezierCurveTo(555.8, 332.3, 554.9, 334.6, 556.6, 336.3);
            c.bezierCurveTo(558.4, 338.1, 563.3, 338.0, 565.3, 333.2);
            c.bezierCurveTo(567.4, 328.5, 565.2, 321.8, 558.5, 320.6);
            c.bezierCurveTo(551.8, 319.5, 540.1, 326.9, 547.6, 342.9);
            c.bezierCurveTo(540.6, 345.6, 535.5, 339.4, 529.1, 335.6);
            c.closePath();
            c.fillStyle = 'rgb(99, 121, 98)';
            c.fill();
        }},
        'id_hedgehog': { id: 'id_hedgehog', bounds: { x: 32.2, y: 377.7, width: 117.4, height: 81.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(55.4, 434.7);
            c.bezierCurveTo(59.0, 434.5, 61.6, 433.7, 64.4, 432.3);
            c.bezierCurveTo(58.8, 427.6, 67.0, 422.3, 70.0, 425.9);
            c.bezierCurveTo(72.2, 420.8, 70.2, 415.1, 68.5, 410.6);
            c.bezierCurveTo(68.5, 410.6, 98.3, 399.8, 117.4, 406.2);
            c.bezierCurveTo(136.4, 412.6, 140.8, 426.6, 138.9, 436.0);
            c.bezierCurveTo(137.0, 445.3, 131.3, 446.9, 131.3, 446.9);
            c.bezierCurveTo(130.6, 446.1, 129.7, 445.5, 128.7, 444.8);
            c.bezierCurveTo(127.5, 445.6, 125.8, 446.8, 125.5, 447.7);
            c.bezierCurveTo(125.3, 448.6, 126.6, 452.4, 126.5, 455.5);
            c.bezierCurveTo(126.4, 458.6, 112.8, 457.5, 111.7, 456.7);
            c.bezierCurveTo(110.7, 455.8, 111.7, 454.2, 111.7, 454.2);
            c.bezierCurveTo(111.7, 454.2, 108.5, 454.1, 108.2, 453.1);
            c.bezierCurveTo(107.9, 452.2, 109.0, 451.2, 109.0, 451.2);
            c.bezierCurveTo(104.6, 451.5, 100.7, 451.4, 96.5, 450.9);
            c.bezierCurveTo(96.5, 450.9, 95.4, 456.5, 92.7, 456.9);
            c.bezierCurveTo(90.1, 457.3, 84.2, 458.1, 80.0, 456.7);
            c.bezierCurveTo(75.8, 455.3, 81.4, 451.1, 81.4, 451.1);
            c.bezierCurveTo(80.7, 451.0, 79.7, 451.2, 78.8, 450.4);
            c.bezierCurveTo(77.8, 449.6, 78.3, 448.4, 78.7, 447.8);
            c.bezierCurveTo(74.5, 447.4, 69.4, 447.9, 66.0, 445.7);
            c.bezierCurveTo(62.0, 445.3, 57.7, 445.2, 52.0, 440.8);
            c.bezierCurveTo(46.9, 440.4, 48.9, 431.3, 55.4, 434.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
            c.beginPath();
            c.moveTo(72.3, 421.3);
            c.bezierCurveTo(72.4, 423.2, 71.6, 425.1, 70.9, 426.7);
            c.bezierCurveTo(77.4, 425.9, 78.2, 431.8, 76.3, 434.6);
            c.bezierCurveTo(74.4, 437.4, 68.0, 438.2, 67.1, 433.1);
            c.bezierCurveTo(63.2, 434.7, 58.4, 436.0, 55.6, 436.2);
            c.bezierCurveTo(55.3, 438.2, 55.7, 439.3, 54.3, 440.4);
            c.bezierCurveTo(63.9, 446.7, 76.2, 443.9, 79.6, 438.6);
            c.bezierCurveTo(77.9, 441.8, 74.8, 444.3, 68.2, 445.5);
            c.bezierCurveTo(70.2, 447.2, 80.7, 445.8, 87.0, 447.8);
            c.bezierCurveTo(88.2, 447.2, 89.0, 445.8, 90.1, 443.8);
            c.bezierCurveTo(87.9, 452.1, 82.4, 449.0, 79.3, 455.1);
            c.bezierCurveTo(79.7, 455.6, 80.3, 455.9, 81.0, 455.9);
            c.bezierCurveTo(81.3, 455.1, 81.9, 453.9, 83.7, 453.0);
            c.bezierCurveTo(82.3, 454.3, 81.9, 455.3, 81.7, 456.1);
            c.lineTo(83.4, 456.2);
            c.bezierCurveTo(84.0, 454.6, 84.5, 454.0, 85.3, 453.3);
            c.bezierCurveTo(84.9, 454.2, 84.4, 455.1, 84.4, 456.2);
            c.bezierCurveTo(87.2, 456.0, 91.1, 456.4, 92.8, 455.5);
            c.bezierCurveTo(94.6, 454.7, 96.0, 449.3, 97.3, 446.2);
            c.bezierCurveTo(97.2, 447.3, 97.1, 448.2, 96.8, 449.6);
            c.bezierCurveTo(102.7, 450.1, 109.6, 450.0, 115.1, 449.8);
            c.bezierCurveTo(115.7, 449.2, 116.3, 448.0, 116.7, 445.8);
            c.bezierCurveTo(116.6, 453.0, 111.6, 453.9, 112.7, 455.9);
            c.bezierCurveTo(112.9, 456.2, 113.3, 456.2, 113.7, 456.2);
            c.bezierCurveTo(114.0, 455.3, 114.7, 454.5, 115.7, 453.7);
            c.bezierCurveTo(115.2, 454.6, 114.4, 455.5, 114.4, 456.3);
            c.bezierCurveTo(114.9, 456.4, 115.4, 456.4, 116.0, 456.4);
            c.bezierCurveTo(116.2, 455.0, 116.8, 454.6, 117.5, 453.9);
            c.bezierCurveTo(117.2, 454.8, 116.8, 455.8, 117.1, 456.5);
            c.bezierCurveTo(120.8, 456.4, 123.8, 457.4, 125.2, 454.7);
            c.bezierCurveTo(125.2, 454.7, 123.9, 448.0, 124.3, 446.8);
            c.bezierCurveTo(124.6, 445.7, 127.4, 444.0, 127.4, 444.0);
            c.bezierCurveTo(122.4, 441.0, 109.0, 440.7, 97.1, 440.2);
            c.bezierCurveTo(97.1, 438.3, 96.4, 436.3, 94.8, 434.2);
            c.bezierCurveTo(91.7, 435.6, 89.1, 435.2, 87.6, 434.1);
            c.bezierCurveTo(103.0, 435.5, 92.8, 413.4, 84.1, 426.0);
            c.bezierCurveTo(83.8, 421.7, 74.3, 421.3, 72.3, 421.3);
            c.lineTo(72.3, 421.3);
            c.moveTo(90.8, 424.7);
            c.bezierCurveTo(92.8, 424.9, 93.5, 427.4, 92.6, 428.0);
            c.bezierCurveTo(92.6, 427.0, 90.7, 423.9, 87.5, 427.5);
            c.bezierCurveTo(89.5, 428.3, 88.6, 429.7, 88.2, 430.4);
            c.bezierCurveTo(87.7, 428.9, 87.3, 428.4, 86.0, 427.8);
            c.bezierCurveTo(88.0, 425.3, 89.7, 424.5, 90.8, 424.7);
            c.closePath();
            c.fillStyle = 'rgb(212, 170, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(69.4, 427.3);
            c.bezierCurveTo(69.0, 427.7, 68.6, 428.0, 68.2, 428.6);
            c.bezierCurveTo(67.5, 427.6, 65.9, 428.1, 65.7, 429.2);
            c.bezierCurveTo(65.4, 430.4, 65.9, 430.9, 66.8, 431.1);
            c.bezierCurveTo(66.4, 431.3, 65.9, 431.7, 65.4, 431.9);
            c.bezierCurveTo(64.0, 431.1, 63.4, 429.4, 63.9, 428.1);
            c.bezierCurveTo(64.9, 425.6, 68.5, 425.0, 69.4, 427.3);
            c.moveTo(71.8, 427.5);
            c.bezierCurveTo(68.5, 427.6, 66.5, 432.7, 69.2, 434.9);
            c.bezierCurveTo(72.1, 437.4, 76.0, 434.8, 76.1, 431.7);
            c.bezierCurveTo(76.1, 429.5, 74.8, 427.4, 71.8, 427.5);
            c.moveTo(72.1, 430.2);
            c.bezierCurveTo(73.4, 430.2, 74.0, 431.3, 73.8, 432.2);
            c.bezierCurveTo(73.6, 433.1, 72.2, 434.0, 71.1, 433.1);
            c.bezierCurveTo(70.1, 432.2, 70.8, 430.3, 72.1, 430.2);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(72.4, 419.7);
            c.bezierCurveTo(72.3, 417.0, 71.8, 414.3, 71.1, 411.6);
            c.bezierCurveTo(82.1, 406.7, 113.0, 401.5, 126.7, 412.6);
            c.bezierCurveTo(140.3, 423.8, 139.4, 436.2, 132.8, 443.6);
            c.bezierCurveTo(121.1, 437.8, 107.9, 439.0, 98.5, 438.5);
            c.lineTo(96.6, 432.7);
            c.bezierCurveTo(100.5, 429.9, 96.5, 415.3, 85.0, 422.1);
            c.bezierCurveTo(80.2, 420.3, 76.2, 419.9, 72.4, 419.7);
            c.closePath();
            c.fillStyle = 'rgb(126, 126, 126)';
            c.fill();
            c.beginPath();
            c.moveTo(80.0, 447.9);
            c.bezierCurveTo(78.7, 450.0, 81.1, 450.1, 82.5, 450.2);
            c.bezierCurveTo(83.7, 449.6, 84.8, 449.2, 85.6, 448.7);
            c.bezierCurveTo(83.8, 448.3, 81.7, 448.0, 80.0, 447.9);
            c.moveTo(110.0, 451.1);
            c.bezierCurveTo(108.2, 453.3, 110.9, 453.2, 112.4, 453.2);
            c.bezierCurveTo(113.1, 452.5, 113.9, 451.7, 114.4, 450.9);
            c.bezierCurveTo(112.8, 451.0, 111.5, 451.0, 110.0, 451.1);
            c.closePath();
            c.fillStyle = 'rgb(123, 98, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(105.6, 406.3);
            c.lineTo(92.0, 407.4);
            c.lineTo(92.6, 407.9);
            c.lineTo(105.6, 406.3);
            c.moveTo(88.5, 409.2);
            c.lineTo(76.6, 412.1);
            c.lineTo(77.7, 412.7);
            c.lineTo(88.5, 409.2);
            c.moveTo(105.6, 409.5);
            c.lineTo(106.0, 410.2);
            c.lineTo(120.0, 409.3);
            c.lineTo(105.6, 409.5);
            c.moveTo(102.6, 411.2);
            c.lineTo(85.8, 414.9);
            c.lineTo(86.9, 415.5);
            c.lineTo(102.6, 411.2);
            c.moveTo(73.6, 412.2);
            c.lineTo(74.0, 420.2);
            c.lineTo(75.0, 420.1);
            c.lineTo(73.6, 412.2);
            c.lineTo(73.6, 412.2);
            c.moveTo(78.4, 413.7);
            c.lineTo(77.7, 420.5);
            c.lineTo(78.6, 420.6);
            c.lineTo(78.4, 413.7);
            c.lineTo(78.4, 413.7);
            c.moveTo(110.2, 413.8);
            c.lineTo(110.2, 414.8);
            c.lineTo(126.9, 415.3);
            c.lineTo(110.2, 413.8);
            c.lineTo(110.2, 413.8);
            c.moveTo(83.4, 414.8);
            c.lineTo(81.3, 421.4);
            c.lineTo(82.3, 421.7);
            c.lineTo(83.4, 414.8);
            c.moveTo(112.0, 417.4);
            c.lineTo(95.2, 417.7);
            c.lineTo(96.1, 418.6);
            c.lineTo(112.0, 417.4);
            c.moveTo(116.0, 420.4);
            c.lineTo(116.0, 421.2);
            c.lineTo(132.6, 423.3);
            c.lineTo(116.0, 420.4);
            c.moveTo(99.7, 424.2);
            c.lineTo(99.7, 424.9);
            c.lineTo(118.6, 426.0);
            c.lineTo(99.7, 424.2);
            c.moveTo(117.8, 429.4);
            c.lineTo(117.7, 430.3);
            c.lineTo(134.0, 433.8);
            c.lineTo(117.8, 429.4);
            c.moveTo(101.0, 431.9);
            c.lineTo(101.0, 432.8);
            c.lineTo(117.6, 434.1);
            c.lineTo(101.0, 431.9);
            c.closePath();
            c.fillStyle = 'rgb(34, 34, 34)';
            c.fill();
        }}
    },

    draw: function(context, id, x, y, width, height)
    {
        if (!(id in objects.elements))
            throw new Error("'objects' cannot draw '" + id + "'");
        var element = objects.elements[id];
        context.save();
        context.translate(x, y);
        if (width !== undefined && height !== undefined)
            context.scale(width / element.bounds.width, height / element.bounds.height);
        context.translate(-element.bounds.x, -element.bounds.y);
        element.drawfunction(context);
        context.restore();
    }
};
// This file has been generated by svg2code

var design = {
    elements: {
        'id_frame_1': { id: 'id_frame_1', bounds: { x: 999.0, y: -131.0, width: 362.0, height: 278.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(999.0, -131.0);
            c.lineTo(999.0, 147.0);
            c.lineTo(1361.0, 147.0);
            c.lineTo(1361.0, -131.0);
            c.lineTo(999.0, -131.0);
            c.moveTo(1359.6, -97.0);
            c.bezierCurveTo(1359.2, -81.6, 1358.4, -86.1, 1358.5, -33.4);
            c.bezierCurveTo(1358.6, 19.3, 1360.8, 99.5, 1358.1, 115.2);
            c.bezierCurveTo(1355.5, 130.9, 1344.6, 141.0, 1331.1, 143.0);
            c.bezierCurveTo(1317.6, 145.0, 1261.2, 146.1, 1181.5, 144.4);
            c.bezierCurveTo(1103.7, 142.7, 1037.8, 144.8, 1028.0, 143.3);
            c.bezierCurveTo(1018.1, 141.7, 1001.3, 133.2, 1000.3, 112.9);
            c.bezierCurveTo(999.3, 92.7, 1003.9, 41.1, 1003.8, 6.7);
            c.bezierCurveTo(1003.7, -46.9, 1000.2, -87.1, 1001.4, -100.2);
            c.bezierCurveTo(1002.9, -117.1, 1014.3, -127.4, 1030.0, -128.9);
            c.bezierCurveTo(1045.6, -130.3, 1154.6, -128.7, 1196.2, -129.6);
            c.bezierCurveTo(1242.4, -130.6, 1310.6, -127.9, 1330.1, -127.8);
            c.bezierCurveTo(1349.5, -127.7, 1360.1, -112.3, 1359.6, -97.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_frame_2': { id: 'id_frame_2', bounds: { x: 1380.0, y: -131.0, width: 362.0, height: 322.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1380.0, -131.0);
            c.lineTo(1380.0, 191.0);
            c.lineTo(1742.0, 191.0);
            c.lineTo(1742.0, -131.0);
            c.lineTo(1380.0, -131.0);
            c.moveTo(1740.6, -97.0);
            c.bezierCurveTo(1740.2, -80.5, 1739.4, -79.0, 1739.5, -18.0);
            c.bezierCurveTo(1739.6, 43.1, 1742.8, 142.2, 1739.1, 160.6);
            c.bezierCurveTo(1735.4, 179.0, 1723.5, 185.4, 1712.1, 187.3);
            c.bezierCurveTo(1700.7, 189.2, 1642.2, 191.0, 1562.5, 188.9);
            c.bezierCurveTo(1484.7, 187.0, 1419.2, 189.4, 1409.0, 187.7);
            c.bezierCurveTo(1398.8, 185.9, 1382.6, 180.4, 1381.3, 158.0);
            c.bezierCurveTo(1380.0, 135.6, 1384.1, 68.4, 1384.0, 28.5);
            c.bezierCurveTo(1383.9, -33.6, 1379.9, -85.8, 1382.4, -100.7);
            c.bezierCurveTo(1385.3, -118.6, 1395.7, -126.1, 1411.0, -129.0);
            c.bezierCurveTo(1426.3, -132.0, 1535.6, -127.8, 1577.2, -128.9);
            c.bezierCurveTo(1623.4, -130.1, 1692.7, -128.4, 1711.1, -127.8);
            c.bezierCurveTo(1729.5, -127.3, 1741.1, -113.6, 1740.6, -97.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_frame_3': { id: 'id_frame_3', bounds: { x: 1380.0, y: 215.0, width: 362.0, height: 365.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1380.0, 215.0);
            c.lineTo(1380.0, 580.0);
            c.lineTo(1742.0, 580.0);
            c.lineTo(1742.0, 215.0);
            c.lineTo(1380.0, 215.0);
            c.moveTo(1739.5, 343.1);
            c.bezierCurveTo(1739.6, 412.3, 1741.3, 528.9, 1739.5, 547.1);
            c.bezierCurveTo(1737.7, 565.3, 1723.2, 574.3, 1712.1, 576.2);
            c.bezierCurveTo(1700.9, 578.1, 1642.2, 580.3, 1562.5, 578.0);
            c.bezierCurveTo(1484.7, 575.8, 1418.6, 578.2, 1409.0, 576.6);
            c.bezierCurveTo(1399.4, 575.0, 1382.5, 563.3, 1381.3, 544.5);
            c.bezierCurveTo(1380.1, 525.6, 1384.1, 441.0, 1384.0, 395.8);
            c.bezierCurveTo(1383.9, 325.5, 1379.0, 263.1, 1382.4, 246.3);
            c.bezierCurveTo(1386.2, 227.3, 1396.8, 219.3, 1411.0, 216.9);
            c.bezierCurveTo(1425.2, 214.4, 1535.6, 218.2, 1577.2, 217.0);
            c.bezierCurveTo(1623.4, 215.7, 1690.0, 216.2, 1711.1, 218.2);
            c.bezierCurveTo(1732.1, 220.3, 1740.1, 233.1, 1740.1, 249.8);
            c.bezierCurveTo(1740.2, 266.5, 1739.4, 297.2, 1739.5, 343.1);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_frame_4': { id: 'id_frame_4', bounds: { x: 1380.0, y: 600.0, width: 362.0, height: 253.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1380.0, 600.0);
            c.lineTo(1380.0, 853.0);
            c.lineTo(1742.0, 853.0);
            c.lineTo(1742.0, 600.0);
            c.lineTo(1380.0, 600.0);
            c.moveTo(1739.5, 728.1);
            c.bezierCurveTo(1739.6, 797.3, 1741.3, 801.9, 1739.5, 820.1);
            c.bezierCurveTo(1737.7, 838.3, 1723.2, 846.9, 1712.1, 848.8);
            c.bezierCurveTo(1700.9, 850.7, 1642.2, 853.3, 1562.5, 851.0);
            c.bezierCurveTo(1484.7, 848.8, 1418.6, 851.2, 1409.0, 849.6);
            c.bezierCurveTo(1399.4, 848.0, 1382.5, 836.3, 1381.3, 817.5);
            c.bezierCurveTo(1380.1, 798.6, 1382.7, 770.0, 1382.6, 724.8);
            c.bezierCurveTo(1382.5, 654.5, 1379.0, 648.1, 1382.4, 631.3);
            c.bezierCurveTo(1386.2, 612.3, 1396.8, 604.3, 1411.0, 601.9);
            c.bezierCurveTo(1425.2, 599.4, 1535.6, 603.6, 1577.2, 602.4);
            c.bezierCurveTo(1623.4, 601.1, 1690.0, 601.2, 1711.1, 603.2);
            c.bezierCurveTo(1732.1, 605.3, 1740.1, 618.1, 1740.1, 634.8);
            c.bezierCurveTo(1740.2, 651.5, 1739.4, 682.2, 1739.5, 728.1);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_frame_5': { id: 'id_frame_5', bounds: { x: 1380.0, y: 877.0, width: 362.0, height: 217.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1380.0, 877.0);
            c.lineTo(1380.0, 1094.0);
            c.lineTo(1742.0, 1094.0);
            c.lineTo(1742.0, 877.0);
            c.lineTo(1380.0, 877.0);
            c.moveTo(1739.5, 1005.1);
            c.bezierCurveTo(1739.7, 1042.0, 1741.3, 1042.9, 1739.5, 1061.1);
            c.bezierCurveTo(1737.7, 1079.3, 1723.2, 1088.3, 1712.1, 1090.2);
            c.bezierCurveTo(1700.9, 1092.1, 1642.2, 1094.3, 1562.5, 1092.0);
            c.bezierCurveTo(1484.7, 1089.8, 1418.6, 1092.2, 1409.0, 1090.6);
            c.bezierCurveTo(1399.4, 1089.0, 1382.1, 1077.2, 1381.3, 1058.5);
            c.bezierCurveTo(1380.5, 1039.8, 1382.4, 1047.0, 1382.4, 1001.8);
            c.bezierCurveTo(1382.3, 931.5, 1379.4, 925.1, 1382.7, 908.3);
            c.bezierCurveTo(1386.6, 889.3, 1396.8, 881.6, 1411.0, 879.1);
            c.bezierCurveTo(1425.2, 876.7, 1535.6, 880.2, 1577.2, 879.0);
            c.bezierCurveTo(1623.4, 877.7, 1690.0, 878.2, 1711.1, 880.2);
            c.bezierCurveTo(1732.1, 882.3, 1740.1, 895.1, 1740.1, 911.8);
            c.bezierCurveTo(1740.2, 928.5, 1739.3, 968.3, 1739.5, 1005.1);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_background_01': { id: 'id_background_01', bounds: { x: -326.0, y: 1320.0, width: 1025.0, height: 190.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(-326.0, 1320.0);
            c.lineTo(699.0, 1320.0);
            c.lineTo(699.0, 1510.0);
            c.lineTo(-326.0, 1510.0);
            c.lineTo(-326.0, 1320.0);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(642.7, 1332.5);
            c.lineTo(654.7, 1332.4);
            c.lineTo(654.6, 1320.9);
            c.lineTo(642.6, 1321.0);
            c.lineTo(642.7, 1332.5);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(580.4, 1321.3);
            c.lineTo(580.5, 1332.4);
            c.lineTo(592.3, 1332.0);
            c.lineTo(591.9, 1320.8);
            c.lineTo(580.4, 1321.3);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(612.2, 1321.3);
            c.lineTo(612.7, 1332.1);
            c.lineTo(623.6, 1331.6);
            c.lineTo(624.0, 1321.0);
            c.lineTo(612.2, 1321.3);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(-8.0, 1326.9);
            c.bezierCurveTo(-12.1, 1322.7, -19.1, 1323.6, -21.2, 1329.0);
            c.bezierCurveTo(-23.2, 1334.3, -19.8, 1342.8, -12.0, 1340.8);
            c.bezierCurveTo(-4.2, 1338.8, -3.9, 1331.1, -8.0, 1326.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(139.5, 1330.3);
            c.bezierCurveTo(136.2, 1325.9, 128.7, 1325.9, 125.4, 1332.6);
            c.bezierCurveTo(122.2, 1339.4, 128.3, 1345.5, 135.0, 1344.2);
            c.bezierCurveTo(141.7, 1343.0, 142.8, 1334.6, 139.5, 1330.3);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(423.9, 1405.6);
            c.bezierCurveTo(423.9, 1405.6, 368.7, 1457.2, 293.1, 1459.1);
            c.bezierCurveTo(217.6, 1461.0, 224.8, 1402.6, 179.1, 1400.4);
            c.bezierCurveTo(133.4, 1398.1, 119.6, 1453.3, 57.0, 1453.3);
            c.bezierCurveTo(-5.6, 1453.2, -19.4, 1381.5, -93.9, 1383.6);
            c.bezierCurveTo(-168.4, 1385.7, -182.1, 1450.6, -244.5, 1450.2);
            c.bezierCurveTo(-306.9, 1449.8, -326.0, 1395.2, -326.0, 1395.2);
            c.lineTo(-326.0, 1510.0);
            c.lineTo(699.0, 1510.0);
            c.lineTo(699.0, 1395.2);
            c.lineTo(670.5, 1395.4);
            c.bezierCurveTo(670.6, 1407.9, 669.5, 1423.7, 670.0, 1435.5);
            c.bezierCurveTo(639.6, 1436.2, 604.1, 1434.5, 566.2, 1437.4);
            c.bezierCurveTo(564.2, 1406.3, 564.5, 1375.0, 564.7, 1340.1);
            c.bezierCurveTo(512.7, 1342.0, 470.5, 1338.5, 423.6, 1340.7);
            c.bezierCurveTo(423.6, 1364.1, 423.8, 1390.4, 423.9, 1405.6);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(21.2, 1372.6);
            c.bezierCurveTo(14.0, 1397.9, 30.1, 1436.3, 64.7, 1428.3);
            c.bezierCurveTo(99.3, 1420.3, 113.0, 1370.4, 88.0, 1349.8);
            c.bezierCurveTo(63.0, 1329.2, 28.4, 1347.4, 21.2, 1372.6);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(313.4, 1344.2);
            c.bezierCurveTo(309.1, 1342.1, 304.2, 1345.4, 304.4, 1349.6);
            c.bezierCurveTo(304.7, 1353.9, 309.6, 1356.2, 313.1, 1354.5);
            c.bezierCurveTo(316.6, 1352.9, 317.6, 1346.3, 313.4, 1344.2);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(75.8, 1360.3);
            c.bezierCurveTo(91.2, 1373.7, 88.0, 1409.9, 62.4, 1415.0);
            c.bezierCurveTo(36.8, 1420.1, 24.9, 1397.0, 31.2, 1377.0);
            c.bezierCurveTo(37.4, 1357.0, 60.4, 1346.9, 75.8, 1360.3);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(599.8, 1401.8);
            c.bezierCurveTo(612.6, 1400.7, 626.1, 1399.2, 636.4, 1399.9);
            c.bezierCurveTo(636.0, 1390.0, 636.8, 1364.3, 636.8, 1364.3);
            c.lineTo(599.4, 1365.9);
            c.bezierCurveTo(599.4, 1365.9, 599.6, 1390.2, 599.8, 1401.8);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(456.7, 1435.8);
            c.bezierCurveTo(455.5, 1410.3, 455.6, 1387.2, 457.8, 1367.6);
            c.bezierCurveTo(480.3, 1366.6, 526.2, 1367.3, 526.2, 1367.3);
            c.lineTo(526.7, 1434.4);
            c.bezierCurveTo(526.7, 1434.4, 480.7, 1435.1, 456.7, 1435.8);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(61.0, 1399.9);
            c.bezierCurveTo(74.8, 1396.1, 77.4, 1380.2, 67.0, 1371.9);
            c.bezierCurveTo(56.6, 1363.6, 45.9, 1368.8, 42.3, 1378.9);
            c.bezierCurveTo(38.7, 1389.0, 47.1, 1403.8, 61.0, 1399.9);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(323.3, 1380.5);
            c.bezierCurveTo(307.8, 1367.6, 283.6, 1382.2, 283.9, 1403.4);
            c.bezierCurveTo(284.1, 1424.6, 308.2, 1430.0, 321.7, 1420.9);
            c.bezierCurveTo(335.3, 1411.8, 338.8, 1393.4, 323.3, 1380.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(512.3, 1421.4);
            c.bezierCurveTo(512.0, 1407.0, 513.2, 1379.8, 513.2, 1379.8);
            c.bezierCurveTo(504.4, 1378.8, 489.3, 1379.0, 470.8, 1379.9);
            c.lineTo(469.4, 1421.8);
            c.bezierCurveTo(469.4, 1421.8, 493.2, 1422.9, 512.3, 1421.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(265.2, 1386.5);
            c.bezierCurveTo(260.3, 1383.6, 254.2, 1388.0, 254.3, 1392.5);
            c.bezierCurveTo(254.3, 1397.1, 260.6, 1398.7, 263.0, 1397.7);
            c.bezierCurveTo(265.3, 1396.7, 270.0, 1389.4, 265.2, 1386.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(300.0, 1400.3);
            c.bezierCurveTo(300.7, 1392.9, 307.1, 1388.1, 314.2, 1391.5);
            c.bezierCurveTo(321.3, 1394.9, 321.1, 1405.3, 314.0, 1408.8);
            c.bezierCurveTo(307.0, 1412.2, 299.3, 1407.7, 300.0, 1400.3);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(351.8, 1397.1);
            c.bezierCurveTo(352.7, 1401.9, 357.7, 1402.7, 360.3, 1400.6);
            c.bezierCurveTo(363.0, 1398.6, 364.4, 1394.0, 360.0, 1391.7);
            c.bezierCurveTo(355.7, 1389.4, 350.9, 1392.3, 351.8, 1397.1);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(-241.9, 1407.2);
            c.bezierCurveTo(-241.0, 1399.7, -249.0, 1394.4, -255.1, 1396.5);
            c.bezierCurveTo(-261.3, 1398.5, -261.7, 1407.0, -257.6, 1411.9);
            c.bezierCurveTo(-253.5, 1416.9, -242.9, 1414.7, -241.9, 1407.2);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(-100.3, 1400.8);
            c.bezierCurveTo(-96.8, 1402.9, -97.4, 1409.3, -102.0, 1410.3);
            c.bezierCurveTo(-106.7, 1411.3, -109.8, 1407.7, -108.7, 1403.9);
            c.bezierCurveTo(-107.7, 1400.2, -103.8, 1398.7, -100.3, 1400.8);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(184.1, 1443.8);
            c.bezierCurveTo(175.5, 1450.4, 156.4, 1443.8, 158.3, 1431.4);
            c.bezierCurveTo(160.2, 1419.0, 170.6, 1413.5, 181.8, 1417.9);
            c.bezierCurveTo(193.1, 1422.3, 192.7, 1437.2, 184.1, 1443.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(-132.5, 1466.7);
            c.bezierCurveTo(-143.1, 1444.8, -126.1, 1421.0, -103.6, 1421.8);
            c.bezierCurveTo(-81.1, 1422.5, -70.5, 1444.1, -76.1, 1462.9);
            c.bezierCurveTo(-81.7, 1481.7, -122.0, 1488.5, -132.5, 1466.7);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(176.6, 1426.7);
            c.bezierCurveTo(172.8, 1425.2, 169.3, 1427.9, 169.1, 1431.3);
            c.bezierCurveTo(168.9, 1434.8, 173.7, 1437.9, 177.3, 1435.5);
            c.bezierCurveTo(180.9, 1433.2, 180.3, 1428.3, 176.6, 1426.7);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(207.8, 1448.1);
            c.bezierCurveTo(210.9, 1450.2, 210.8, 1455.1, 207.4, 1456.6);
            c.bezierCurveTo(204.0, 1458.2, 200.1, 1456.2, 200.3, 1452.3);
            c.bezierCurveTo(200.5, 1448.3, 204.7, 1446.0, 207.8, 1448.1);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(-108.1, 1452.1);
            c.bezierCurveTo(-108.7, 1455.0, -107.5, 1459.2, -102.4, 1458.5);
            c.bezierCurveTo(-97.2, 1457.7, -96.4, 1449.9, -100.0, 1448.4);
            c.bezierCurveTo(-103.5, 1446.9, -107.5, 1449.2, -108.1, 1452.1);
            c.closePath();
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
            c.beginPath();
            c.moveTo(-56.3, 1448.9);
            c.bezierCurveTo(-52.8, 1451.2, -53.4, 1457.3, -58.1, 1458.3);
            c.bezierCurveTo(-62.7, 1459.2, -65.8, 1455.5, -64.7, 1452.1);
            c.bezierCurveTo(-63.6, 1448.6, -59.8, 1446.5, -56.3, 1448.9);
            c.closePath();
            c.fillStyle = 'rgb(255, 255, 255)';
            c.fill();
            c.beginPath();
            c.moveTo(146.1, 1457.5);
            c.bezierCurveTo(142.9, 1459.8, 137.5, 1457.3, 138.0, 1453.2);
            c.bezierCurveTo(138.5, 1449.1, 141.8, 1447.2, 145.3, 1448.7);
            c.bezierCurveTo(148.9, 1450.2, 149.3, 1455.2, 146.1, 1457.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(-148.5, 1449.6);
            c.bezierCurveTo(-145.0, 1451.7, -146.9, 1457.7, -150.0, 1458.9);
            c.bezierCurveTo(-153.1, 1460.2, -157.7, 1457.8, -156.6, 1453.1);
            c.bezierCurveTo(-155.5, 1448.4, -152.0, 1447.5, -148.5, 1449.6);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(169.3, 1466.5);
            c.bezierCurveTo(169.1, 1461.6, 173.9, 1460.8, 177.1, 1462.6);
            c.bezierCurveTo(180.2, 1464.4, 179.9, 1468.8, 177.4, 1470.5);
            c.bezierCurveTo(174.9, 1472.3, 169.4, 1471.3, 169.3, 1466.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(538.1, 1476.4);
            c.lineTo(538.4, 1464.7);
            c.lineTo(550.6, 1464.1);
            c.lineTo(550.4, 1476.2);
            c.lineTo(538.1, 1476.4);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(487.3, 1476.9);
            c.lineTo(487.2, 1465.1);
            c.lineTo(499.3, 1464.8);
            c.lineTo(499.5, 1476.6);
            c.lineTo(487.3, 1476.9);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(434.6, 1477.5);
            c.lineTo(434.7, 1465.7);
            c.lineTo(447.2, 1465.8);
            c.lineTo(446.9, 1477.5);
            c.lineTo(434.6, 1477.5);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(51.4, 1474.8);
            c.bezierCurveTo(51.8, 1469.3, 57.8, 1467.5, 61.3, 1469.5);
            c.bezierCurveTo(64.7, 1471.5, 66.5, 1476.8, 61.5, 1480.3);
            c.bezierCurveTo(58.3, 1482.5, 50.9, 1480.2, 51.4, 1474.8);
            c.closePath();
            c.fill();
            c.beginPath();
            c.moveTo(-101.9, 1495.6);
            c.bezierCurveTo(-98.6, 1497.9, -99.1, 1503.9, -103.7, 1504.9);
            c.bezierCurveTo(-108.4, 1505.9, -112.1, 1502.1, -110.7, 1498.8);
            c.bezierCurveTo(-109.4, 1495.6, -105.3, 1493.3, -101.9, 1495.6);
            c.closePath();
            c.fill();
        }},
        'id_button_1': { id: 'id_button_1', bounds: { x: 1903.0, y: 236.0, width: 36.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 236.0);
            c.lineTo(1903.0, 272.0);
            c.lineTo(1939.0, 272.0);
            c.lineTo(1939.0, 236.0);
            c.lineTo(1903.0, 236.0);
            c.moveTo(1905.4, 237.4);
            c.bezierCurveTo(1915.8, 237.9, 1930.8, 237.2, 1937.1, 237.3);
            c.bezierCurveTo(1937.8, 249.6, 1937.8, 260.4, 1937.5, 270.7);
            c.bezierCurveTo(1925.6, 270.4, 1918.2, 270.4, 1905.4, 270.4);
            c.bezierCurveTo(1905.0, 260.5, 1904.1, 251.4, 1905.4, 237.4);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_2': { id: 'id_button_2', bounds: { x: 1903.0, y: 296.0, width: 36.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1939.0, 296.0);
            c.lineTo(1939.0, 332.0);
            c.lineTo(1903.0, 332.0);
            c.lineTo(1903.0, 296.0);
            c.lineTo(1939.0, 296.0);
            c.moveTo(1936.4, 297.8);
            c.bezierCurveTo(1922.8, 297.6, 1914.2, 297.4, 1905.4, 297.6);
            c.bezierCurveTo(1904.9, 311.2, 1905.0, 320.8, 1905.9, 330.4);
            c.bezierCurveTo(1916.5, 330.6, 1926.6, 331.1, 1937.1, 330.9);
            c.bezierCurveTo(1937.9, 313.4, 1936.9, 306.6, 1936.4, 297.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_3': { id: 'id_button_3', bounds: { x: 1903.0, y: 356.0, width: 36.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 392.0);
            c.lineTo(1903.0, 356.0);
            c.lineTo(1939.0, 356.0);
            c.lineTo(1939.0, 392.0);
            c.lineTo(1903.0, 392.0);
            c.moveTo(1937.3, 390.7);
            c.bezierCurveTo(1937.0, 382.3, 1937.1, 367.6, 1937.2, 357.4);
            c.bezierCurveTo(1925.5, 357.2, 1916.0, 356.9, 1904.8, 357.1);
            c.bezierCurveTo(1905.0, 365.3, 1905.5, 380.4, 1905.3, 390.7);
            c.bezierCurveTo(1914.1, 390.9, 1926.1, 390.9, 1937.3, 390.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_4': { id: 'id_button_4', bounds: { x: 1902.0, y: 498.0, width: 56.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1902.0, 498.0);
            c.lineTo(1902.0, 534.0);
            c.lineTo(1958.0, 534.0);
            c.lineTo(1958.0, 498.0);
            c.lineTo(1902.0, 498.0);
            c.moveTo(1904.4, 499.4);
            c.bezierCurveTo(1921.8, 498.9, 1938.8, 498.7, 1956.1, 499.3);
            c.bezierCurveTo(1956.8, 511.6, 1956.8, 522.4, 1956.5, 532.7);
            c.bezierCurveTo(1938.1, 532.4, 1923.4, 531.2, 1904.4, 532.4);
            c.bezierCurveTo(1904.0, 522.5, 1903.1, 513.4, 1904.4, 499.4);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_5': { id: 'id_button_5', bounds: { x: 1902.0, y: 558.0, width: 56.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1958.0, 558.0);
            c.lineTo(1958.0, 594.0);
            c.lineTo(1902.0, 594.0);
            c.lineTo(1902.0, 558.0);
            c.lineTo(1958.0, 558.0);
            c.moveTo(1955.9, 559.8);
            c.bezierCurveTo(1935.5, 560.1, 1916.4, 559.1, 1904.4, 559.6);
            c.bezierCurveTo(1903.9, 573.2, 1904.0, 582.8, 1904.9, 592.4);
            c.bezierCurveTo(1926.8, 592.1, 1941.4, 592.6, 1956.1, 592.9);
            c.bezierCurveTo(1955.8, 575.2, 1956.4, 568.6, 1955.9, 559.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_6': { id: 'id_button_6', bounds: { x: 1902.0, y: 618.0, width: 56.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1902.0, 654.0);
            c.lineTo(1902.0, 618.0);
            c.lineTo(1958.0, 618.0);
            c.lineTo(1958.0, 654.0);
            c.lineTo(1902.0, 654.0);
            c.moveTo(1956.3, 652.7);
            c.bezierCurveTo(1955.2, 640.4, 1956.1, 629.6, 1956.2, 619.4);
            c.bezierCurveTo(1935.0, 619.4, 1924.3, 619.4, 1903.8, 619.1);
            c.bezierCurveTo(1904.0, 627.3, 1904.5, 642.4, 1904.3, 652.7);
            c.bezierCurveTo(1923.1, 652.6, 1938.6, 653.2, 1956.3, 652.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_7': { id: 'id_button_7', bounds: { x: 1903.0, y: 747.0, width: 76.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 747.0);
            c.lineTo(1903.0, 783.0);
            c.lineTo(1979.0, 783.0);
            c.lineTo(1979.0, 747.0);
            c.lineTo(1903.0, 747.0);
            c.moveTo(1905.4, 748.4);
            c.bezierCurveTo(1926.5, 748.2, 1955.8, 748.0, 1977.1, 748.3);
            c.bezierCurveTo(1977.8, 760.6, 1977.8, 771.4, 1977.5, 781.7);
            c.bezierCurveTo(1955.9, 781.4, 1930.2, 779.7, 1905.4, 781.4);
            c.bezierCurveTo(1905.0, 771.5, 1904.1, 762.4, 1905.4, 748.4);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_8': { id: 'id_button_8', bounds: { x: 1903.0, y: 807.0, width: 76.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1979.0, 807.0);
            c.lineTo(1979.0, 843.0);
            c.lineTo(1903.0, 843.0);
            c.lineTo(1903.0, 807.0);
            c.lineTo(1979.0, 807.0);
            c.moveTo(1976.9, 808.8);
            c.bezierCurveTo(1953.8, 808.8, 1927.4, 808.6, 1905.4, 808.6);
            c.bezierCurveTo(1904.9, 822.2, 1905.0, 831.8, 1905.9, 841.4);
            c.bezierCurveTo(1931.3, 841.6, 1952.4, 840.9, 1977.1, 841.9);
            c.bezierCurveTo(1976.8, 824.2, 1977.4, 817.6, 1976.9, 808.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_9': { id: 'id_button_9', bounds: { x: 1903.0, y: 867.0, width: 76.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 903.0);
            c.lineTo(1903.0, 867.0);
            c.lineTo(1979.0, 867.0);
            c.lineTo(1979.0, 903.0);
            c.lineTo(1903.0, 903.0);
            c.moveTo(1977.3, 901.7);
            c.bezierCurveTo(1976.2, 889.4, 1977.1, 878.6, 1977.2, 868.4);
            c.bezierCurveTo(1952.0, 868.4, 1929.8, 869.4, 1904.8, 868.1);
            c.bezierCurveTo(1905.0, 876.3, 1905.5, 891.4, 1905.3, 901.7);
            c.bezierCurveTo(1928.9, 901.1, 1954.8, 902.2, 1977.3, 901.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_10': { id: 'id_button_10', bounds: { x: 1903.0, y: 1001.0, width: 100.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 1001.0);
            c.lineTo(1903.0, 1037.0);
            c.lineTo(2003.0, 1037.0);
            c.lineTo(2003.0, 1001.0);
            c.lineTo(1903.0, 1001.0);
            c.moveTo(1905.4, 1002.4);
            c.bezierCurveTo(1936.5, 1002.7, 1970.8, 1002.5, 2001.1, 1002.3);
            c.bezierCurveTo(2001.8, 1014.6, 2001.8, 1025.4, 2001.5, 1035.7);
            c.bezierCurveTo(1970.9, 1034.9, 1940.7, 1036.7, 1905.4, 1035.4);
            c.bezierCurveTo(1905.0, 1025.5, 1904.1, 1016.4, 1905.4, 1002.4);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_11': { id: 'id_button_11', bounds: { x: 1903.0, y: 1061.0, width: 100.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(2003.0, 1061.0);
            c.lineTo(2003.0, 1097.0);
            c.lineTo(1903.0, 1097.0);
            c.lineTo(1903.0, 1061.0);
            c.lineTo(2003.0, 1061.0);
            c.moveTo(2000.9, 1062.8);
            c.bezierCurveTo(1971.8, 1063.3, 1933.9, 1062.6, 1905.4, 1062.6);
            c.bezierCurveTo(1904.9, 1076.2, 1905.0, 1085.8, 1905.9, 1095.4);
            c.bezierCurveTo(1938.3, 1095.1, 1969.4, 1094.9, 2001.1, 1095.9);
            c.bezierCurveTo(2000.8, 1078.2, 2001.4, 1071.6, 2000.9, 1062.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_12': { id: 'id_button_12', bounds: { x: 1903.0, y: 1121.0, width: 100.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 1157.0);
            c.lineTo(1903.0, 1121.0);
            c.lineTo(2003.0, 1121.0);
            c.lineTo(2003.0, 1157.0);
            c.lineTo(1903.0, 1157.0);
            c.moveTo(2001.3, 1155.7);
            c.bezierCurveTo(2000.2, 1143.4, 2001.1, 1132.6, 2001.2, 1122.4);
            c.bezierCurveTo(1965.5, 1123.4, 1936.8, 1123.4, 1904.8, 1122.1);
            c.bezierCurveTo(1905.0, 1130.3, 1905.5, 1145.4, 1905.3, 1155.7);
            c.bezierCurveTo(1936.9, 1155.1, 1970.3, 1155.7, 2001.3, 1155.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_13': { id: 'id_button_13', bounds: { x: 1903.0, y: 1291.0, width: 120.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 1291.0);
            c.lineTo(1903.0, 1327.0);
            c.lineTo(2023.0, 1327.0);
            c.lineTo(2023.0, 1291.0);
            c.lineTo(1903.0, 1291.0);
            c.moveTo(1905.4, 1292.4);
            c.bezierCurveTo(1949.5, 1293.2, 1982.8, 1292.0, 2021.1, 1292.3);
            c.bezierCurveTo(2021.8, 1304.6, 2021.8, 1315.4, 2021.5, 1325.7);
            c.bezierCurveTo(1978.4, 1323.9, 1948.2, 1326.2, 1905.4, 1325.4);
            c.bezierCurveTo(1905.0, 1315.5, 1904.1, 1306.4, 1905.4, 1292.4);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_14': { id: 'id_button_14', bounds: { x: 1903.0, y: 1351.0, width: 120.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(2023.0, 1351.0);
            c.lineTo(2023.0, 1387.0);
            c.lineTo(1903.0, 1387.0);
            c.lineTo(1903.0, 1351.0);
            c.lineTo(2023.0, 1351.0);
            c.moveTo(2020.9, 1352.8);
            c.bezierCurveTo(1983.3, 1353.3, 1944.4, 1352.1, 1905.4, 1352.6);
            c.bezierCurveTo(1904.9, 1366.2, 1905.0, 1375.8, 1905.9, 1385.4);
            c.bezierCurveTo(1946.3, 1385.6, 1982.4, 1385.4, 2021.1, 1385.9);
            c.bezierCurveTo(2020.8, 1368.2, 2021.4, 1361.6, 2020.9, 1352.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_15': { id: 'id_button_15', bounds: { x: 1903.0, y: 1411.0, width: 120.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 1447.0);
            c.lineTo(1903.0, 1411.0);
            c.lineTo(2023.0, 1411.0);
            c.lineTo(2023.0, 1447.0);
            c.lineTo(1903.0, 1447.0);
            c.moveTo(2021.3, 1445.7);
            c.bezierCurveTo(2020.2, 1433.4, 2021.1, 1422.6, 2021.2, 1412.4);
            c.bezierCurveTo(1982.5, 1413.4, 1946.3, 1412.4, 1904.8, 1412.1);
            c.bezierCurveTo(1905.0, 1420.3, 1905.5, 1435.4, 1905.3, 1445.7);
            c.bezierCurveTo(1947.4, 1445.1, 1983.8, 1445.7, 2021.3, 1445.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_16': { id: 'id_button_16', bounds: { x: 1903.0, y: 1581.0, width: 140.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 1581.0);
            c.lineTo(1903.0, 1617.0);
            c.lineTo(2043.0, 1617.0);
            c.lineTo(2043.0, 1581.0);
            c.lineTo(1903.0, 1581.0);
            c.moveTo(1905.4, 1582.4);
            c.bezierCurveTo(1958.7, 1583.9, 1990.7, 1582.0, 2041.1, 1582.3);
            c.bezierCurveTo(2041.8, 1594.6, 2041.8, 1605.4, 2041.5, 1615.7);
            c.bezierCurveTo(1992.7, 1614.6, 1958.1, 1615.5, 1905.4, 1615.4);
            c.bezierCurveTo(1905.0, 1605.5, 1904.1, 1596.4, 1905.4, 1582.4);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_17': { id: 'id_button_17', bounds: { x: 1903.0, y: 1641.0, width: 140.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(2043.0, 1641.0);
            c.lineTo(2043.0, 1677.0);
            c.lineTo(1903.0, 1677.0);
            c.lineTo(1903.0, 1641.0);
            c.lineTo(2043.0, 1641.0);
            c.moveTo(2040.9, 1642.8);
            c.bezierCurveTo(1995.5, 1642.6, 1954.3, 1641.4, 1905.4, 1642.6);
            c.bezierCurveTo(1904.9, 1656.2, 1905.0, 1665.8, 1905.9, 1675.4);
            c.bezierCurveTo(1956.2, 1675.6, 1993.2, 1676.1, 2041.1, 1675.9);
            c.bezierCurveTo(2040.8, 1658.2, 2041.4, 1651.6, 2040.9, 1642.8);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }},
        'id_button_18': { id: 'id_button_18', bounds: { x: 1903.0, y: 1701.0, width: 140.0, height: 36.0 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(1903.0, 1737.0);
            c.lineTo(1903.0, 1701.0);
            c.lineTo(2043.0, 1701.0);
            c.lineTo(2043.0, 1737.0);
            c.lineTo(1903.0, 1737.0);
            c.moveTo(2041.3, 1735.7);
            c.bezierCurveTo(2040.2, 1723.4, 2041.1, 1712.6, 2041.2, 1702.4);
            c.bezierCurveTo(1994.1, 1704.2, 1954.7, 1700.3, 1904.8, 1702.1);
            c.bezierCurveTo(1905.0, 1710.3, 1905.5, 1725.4, 1905.3, 1735.7);
            c.bezierCurveTo(1953.0, 1735.1, 1998.2, 1734.3, 2041.3, 1735.7);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(0, 0, 0)';
            c.fill();
        }}
    },

    draw: function(context, id, x, y, width, height)
    {
        if (!(id in design.elements))
            throw new Error("'design' cannot draw '" + id + "'");
        var element = design.elements[id];
        context.save();
        context.translate(x, y);
        if (width !== undefined && height !== undefined)
            context.scale(width / element.bounds.width, height / element.bounds.height);
        context.translate(-element.bounds.x, -element.bounds.y);
        element.drawfunction(context);
        context.restore();
    }
};
// This file has been generated by svg2code

var particle = {
    elements: {
        'id_star': { id: 'id_star', bounds: { x: 0.2, y: 0.6, width: 47.7, height: 46.7 }, drawfunction: function(c) {
            c.beginPath();
            c.moveTo(23.6, 9.5);
            c.lineTo(27.1, 17.7);
            c.lineTo(35.5, 14.9);
            c.lineTo(31.1, 22.8);
            c.lineTo(38.5, 27.6);
            c.lineTo(29.8, 29.1);
            c.lineTo(30.5, 38.1);
            c.lineTo(24.0, 32.0);
            c.lineTo(17.5, 38.3);
            c.lineTo(18.1, 29.3);
            c.lineTo(9.5, 28.2);
            c.lineTo(16.5, 23.1);
            c.lineTo(11.9, 15.4);
            c.lineTo(20.5, 17.8);
            c.lineTo(23.6, 9.5);
            c.closePath();
            c.globalAlpha = 1;
            c.fillStyle = 'rgb(255, 232, 139)';
            c.fill();
            c.beginPath();
            c.moveTo(23.5, 0.6);
            c.lineTo(18.4, 14.1);
            c.lineTo(4.6, 10.1);
            c.lineTo(11.9, 22.5);
            c.lineTo(0.2, 31.0);
            c.lineTo(14.4, 32.9);
            c.lineTo(13.8, 47.3);
            c.lineTo(24.2, 37.2);
            c.lineTo(34.9, 46.9);
            c.lineTo(33.7, 32.5);
            c.lineTo(47.9, 30.1);
            c.lineTo(35.8, 22.1);
            c.lineTo(42.7, 9.3);
            c.lineTo(29.1, 13.9);
            c.lineTo(23.5, 0.6);
            c.moveTo(23.7, 12.4);
            c.lineTo(26.6, 19.3);
            c.lineTo(33.8, 16.9);
            c.lineTo(30.0, 23.5);
            c.lineTo(36.2, 27.6);
            c.lineTo(28.9, 28.9);
            c.lineTo(29.5, 36.4);
            c.lineTo(24.0, 31.3);
            c.lineTo(18.6, 36.6);
            c.lineTo(19.1, 29.1);
            c.lineTo(11.8, 28.1);
            c.lineTo(17.7, 23.8);
            c.lineTo(13.8, 17.4);
            c.lineTo(21.1, 19.4);
            c.lineTo(23.7, 12.4);
            c.closePath();
            c.fillStyle = 'rgb(255, 204, 0)';
            c.fill();
        }}
    },

    draw: function(context, id, x, y, width, height)
    {
        if (!(id in particle.elements))
            throw new Error("'particle' cannot draw '" + id + "'");
        var element = particle.elements[id];
        context.save();
        context.translate(x, y);
        if (width !== undefined && height !== undefined)
            context.scale(width / element.bounds.width, height / element.bounds.height);
        context.translate(-element.bounds.x, -element.bounds.y);
        element.drawfunction(context);
        context.restore();
    }
};
var imageProvider = {
    drawImage: function (imageId, canvas) {
        var idElements = imageId.split('/');
        if (idElements.length < 2)
            throw new Error("imageProvider.drawImage: Invalid imageId '" + idElements + "'. Needs at least two segments.");
        var imageType = idElements[0];
        switch (imageType) {
            case 'object':
                imageProvider.draw(objects, idElements[1], canvas);
                break;
            case imageProvider.designElementTypeFrame:
                imageProvider.renderDesignElement(imageType, parseInt(idElements[1]), canvas);
                imageProvider.drawVignette(imageType, canvas);
                break;
            case imageProvider.designElementTypeButton:
                imageProvider.renderDesignElement(imageType, parseInt(idElements[1]), canvas);
                imageProvider.drawVignette(imageType, canvas);
                break;
            case 'label':
                imageProvider.drawLabel(idElements.slice(1, idElements.length).join('/'), canvas);
                break;
            case 'particle':
                imageProvider.draw(particle, 'id_star', canvas);
                break;
            case 'imageViewBackground':
                imageProvider.drawImageViewBackground(canvas);
                break;
            default:
                throw new Error("imageProvider.drawImage: Invalid image group '" + imageType + "'");
        }
    },
    draw: function (collection, objectId, canvas) {
        var element = collection.elements[objectId];
        var widthToHeightRatio = element.bounds.width / element.bounds.height;
        var scaleFactor = Math.min(canvas.width / element.bounds.width, canvas.height / element.bounds.height);
        var renderWidth = element.bounds.width * scaleFactor;
        var renderHeight = element.bounds.height * scaleFactor;

        var context = canvas.getContext('2d');

        collection.draw(context, objectId, (canvas.width - renderWidth) / 2, (canvas.height - renderHeight) / 2, renderWidth, renderHeight);
    },
    designElementTypeFrame: 'frame',
    designElementTypeButton: 'button',
    renderDesignElement: function (elementType, variationIndex, canvas) {
        var variations = elementType === imageProvider.designElementTypeFrame ? imageProvider.frameVariations() : imageProvider.buttonVariations();
        var requestedRatio = canvas.width / canvas.height;
        var elementWithNearestRatio = variations[variations.length - 1];
        for (var variationID in variations) {
            var element = variations[variationID];
            if (Math.abs(requestedRatio - element.widthToHeightRatio) < Math.abs(requestedRatio - elementWithNearestRatio.widthToHeightRatio))
                elementWithNearestRatio = element;
            else if (element.widthToHeightRatio > elementWithNearestRatio.widthToHeightRatio)
                break;
        }
        design.draw(canvas.getContext('2d'), element.elementIDs[variationIndex % element.elementIDs.length], 0, 0, canvas.width, canvas.height);
    },
    elementsWithSizes: function (elementBase) {
        var result = [];
        for (var elementID in design.elements) {
            if (elementID.indexOf(elementBase) !== 0)
                continue;
            var element = design.elements[elementID];
            var widthToHeightRatio = element.bounds.width / element.bounds.height;
            var hasNewWidthToHeightRatio = true;
            for (var existingElementID in result) {
                var existingElement = result[existingElementID];
                if (existingElement.widthToHeightRatio - 0.01 < widthToHeightRatio && existingElement.widthToHeightRatio + 0.01 > widthToHeightRatio) {
                    existingElement.elementIDs[existingElement.elementIDs.length] = elementID;
                    hasNewWidthToHeightRatio = false;
                    break;
                }
            }
            if (hasNewWidthToHeightRatio) {
                result[result.length] = {
                    widthToHeightRatio: widthToHeightRatio,
                    elementIDs: [elementID]
                };
            }
        }
        result.sort(function (a, b) {
            return a.widthToHeightRatio - b.widthToHeightRatio;
        });
        return result;
    },
    cachedButtonVariations: null,
    buttonVariations: function () {
        if (this.cachedButtonVariations === null)
            this.cachedButtonVariations = this.elementsWithSizes('id_button_');
        return this.cachedButtonVariations;
    },
    cachedFrameVariations: null,
    frameVariations: function () {
        if (this.cachedFrameVariations === null)
            this.cachedFrameVariations = this.elementsWithSizes('id_frame_');
        return this.cachedFrameVariations;
    },
    drawLabel: function (label, canvas) {
        var context = canvas.getContext('2d');
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = Math.round(0.33 * canvas.height) + "px sans-serif";
        context.fillText(label, canvas.width / 2, canvas.height / 2);
    },
    drawImageViewBackground: function (canvas) {
        var backgroundBounds = design.elements['id_background_01'].bounds;
        var backgroundImageTileWidth = Math.round(canvas.height * backgroundBounds.width / backgroundBounds.height);
        var backgroundImageTileRepetitions = canvas.width / backgroundImageTileWidth;
        var context = canvas.getContext('2d');
        for (var i = 0, l = Math.ceil(backgroundImageTileRepetitions); i < l; i++)
            design.draw(context, 'id_background_01', i * backgroundImageTileWidth, 0, backgroundImageTileWidth, canvas.height);
    },
    drawVignette: function (type, canvas) {
        var vignetteContext = canvas.getContext('2d');
        var gradient = vignetteContext.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 1.7);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0)');
        if (type === imageProvider.designElementTypeFrame) {
            gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.1)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.25)');
        } else {
            gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.15)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
        }
        vignetteContext.fillStyle = gradient;
        vignetteContext.beginPath();
        vignetteContext.rect(0, 0, canvas.width, canvas.height);
        vignetteContext.fill();
    },
    drawDebugPattern: function (canvas) {
        var width = canvas.width;
        var height = canvas.height;
        var context = canvas.getContext('2d');
        context.fillStyle = "rgb(255, 255, 255)";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "rgb(0, 0, 0)";

        for (var x = 0; x < width; x += 2)
            for (var y = 0; y < height; y += 2)
                context.fillRect(x, y, 1, 1);
    },
    resizeCanvas: function (canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        var devicePixelRatio = window['devicePixelRatio'] || 1;
        if (devicePixelRatio <= 1 || navigator.userAgent.toLowerCase().indexOf("android") > -1)
            return;
        canvas.setAttribute('width', width * devicePixelRatio + '');
        canvas.setAttribute('height', height * devicePixelRatio + '');
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    }
};
/// <reference path="acceleration.ts"/>
/// <reference path="imageprovider.ts"/>
/// <reference path="interfaces.ts"/>
/// <reference path="events.ts"/>

var AnswerButton = (function () {
    function AnswerButton(parentItem, controller, index) {
        this.parentItem = parentItem;
        this.controller = controller;
        this.index = index;
        this.container = document.createElement('div');
        this.label = document.createElement('canvas');
        this.container.appendChild(this.label);
        parentItem.appendChild(this.container);
        this.correctionImage = document.createElement('canvas');
        this.container.appendChild(this.correctionImage);
        this.frontGlass = document.createElement('canvas');
        parentItem.appendChild(this.frontGlass);

        this.container[AnswerButton.animationButtonKey] = this.label[AnswerButton.animationButtonKey] = this;

        this.animationState = AnswerButton.AnimationStates.Unanimated;
        this.correctionImageId = '';

        this.createParticles();

        var containerStyle = this.container.style;
        containerStyle.backgroundColor = AnswerButton.StateBackgroundColors.normal;
        containerStyle.position = this.correctionImage.style.position = this.frontGlass.style.position = this.label.style.position = 'absolute';
        containerStyle[browser.cssTags().transitionProperty] = 'background-color';
        this.label.style[browser.cssTags().transformOrigin] = "50% 50%";
        containerStyle.overflow = 'hidden'; // TODO: check for performance

        events.addListeners(this.frontGlass, this);
    }
    AnswerButton.prototype.mouseDown = function (x, y) {
        if (this.animationState === AnswerButton.AnimationStates.Unanimated)
            this.controller.onAnswerButtonPressed(this);
    };

    AnswerButton.prototype.setGeometry = function (rect) {
        this.geometry = rect;
        this.correctionImageSize = Math.round(Math.min(rect.width, rect.height) * 0.9);
        this.correctionImageX = Math.round((rect.width - this.correctionImageSize) / 2);
        var containerStyle = this.container.style;
        var transformKey = browser.cssTags().transform;
        var containerShrinkHeight = rect.height > 50 ? 1 : 0;
        containerStyle[transformKey] = browser.cssTranslate(rect.x, rect.y + containerShrinkHeight);
        this.frontGlass.style[transformKey] = browser.cssTranslate(rect.x, rect.y);
        containerStyle.width = rect.width + 'px';
        containerStyle.height = (rect.height - 2 * containerShrinkHeight) + 'px';
        imageProvider.resizeCanvas(this.label, rect.width, rect.height);
        imageProvider.resizeCanvas(this.frontGlass, rect.width, rect.height);
        if (this.labelText)
            imageProvider.drawImage('label/' + this.labelText, this.label);
        imageProvider.drawImage('button/' + this.index, this.frontGlass);
        imageProvider.resizeCanvas(this.correctionImage, this.correctionImageSize, this.correctionImageSize);
        this.wrongAnswerShakeAmplitude = Math.min(rect.width * 0.2, 45);
    };

    AnswerButton.prototype.disableCssTransitions = function () {
        var durationKey = browser.cssTags().transitionDuration;
        this.container.style[durationKey] = this.label.style[durationKey] = '';
    };

    AnswerButton.prototype.addTransitionEndHandler = function (element) {
        element.addEventListener(browser.cssTags().transitionEnd, this.proceedAnimation, false);
    };

    AnswerButton.prototype.removeTransitionEndHandler = function (element) {
        element.removeEventListener(browser.cssTags().transitionEnd, this.proceedAnimation, false);
    };

    AnswerButton.prototype.createParticles = function () {
        if (('particles' in this.controller))
            return;
        var particles = {
            elements: [],
            size: -1
        };
        this.controller.particles = particles;
        var timingFunctionKey = browser.cssTags().transitionTimingFunction;
        for (var i = 0; i < AnswerButton.particlesCount; i++) {
            var newElement = document.createElement('canvas');
            particles.elements[i] = newElement;
            var newElementStyle = newElement.style;
            newElementStyle.position = 'absolute';
            newElementStyle[timingFunctionKey] = 'linear';
        }
    };

    AnswerButton.prototype.prepareParticles = function () {
        var transformKey = browser.cssTags().transform;

        var particles = this.controller.particles;
        var particleElements = particles.elements;
        var firstElement = particleElements[0];
        var buttonWidth = this.geometry.width;
        var buttonHeight = this.geometry.height;
        var buttonSize = Math.min(buttonWidth, buttonHeight);
        var particleSize = Math.round(buttonSize / 1.6);
        if (particles.size !== particleSize) {
            particles.size = particleSize;
            for (var i = 0, l = particleElements.length; i < l; i++) {
                var element = particleElements[i];
                imageProvider.resizeCanvas(element, particleSize, particleSize);
                if (i === 0)
                    imageProvider.drawImage('particle/0', element);
                else
                    element.getContext('2d').drawImage(firstElement, 0, 0);
            }
        }
        var variation = particleSize / 2;
        for (var i = 0, l = particleElements.length; i < l; i++) {
            var element = particleElements[i];
            var randomY = Math.random();
            this.container.insertBefore(element, this.label);
            var x = Math.random() * buttonWidth - variation;
            var y = randomY * buttonHeight - variation;
            var targetDistance = randomY * variation + variation;
            var targetAngle = randomY * 360;
            element.style[transformKey] = browser.cssTranslate(x, y);
            element[AnswerButton.targetXKey] = x + (Math.cos(targetAngle) * targetDistance);
            element[AnswerButton.targetYKey] = y + (Math.sin(targetAngle) * targetDistance);
            element.style.visibility = '';
        }
        firstElement[AnswerButton.animationButtonKey] = this;
    };

    AnswerButton.prototype.hideCorrectionImage = function () {
        this.correctionImage.style[browser.cssTags().transform] = browser.cssTranslate(this.correctionImageX, this.geometry.height);
    };

    AnswerButton.prototype.hideParticles = function () {
        var cssTags = browser.cssTags();
        var durationKey = cssTags.transitionDuration;
        var particleElements = this.controller.particles.elements;
        if (particleElements[0].style[durationKey] === '')
            return;
        var container = this.container;
        var transformKey = cssTags.transform;
        this.removeTransitionEndHandler(particleElements[0]);
        for (var i = 0, l = particleElements.length; i < l; i++) {
            var element = particleElements[i];
            var elementStyle = element.style;
            elementStyle[durationKey] = '';
            elementStyle[transformKey] = '';
            elementStyle.opacity = '1';
            elementStyle.visibility = 'hidden';
            container.removeChild(element);
        }
    };

    AnswerButton.prototype.proceedAnimation = function () {
        if (AnswerButton.animationButtonKey in this) {
            this[AnswerButton.animationButtonKey].proceedAnimation.call(this[AnswerButton.animationButtonKey]);
            return;
        }
        var cssTags = browser.cssTags();
        var durationKey = cssTags.transitionDuration;
        var transformKey = cssTags.transform;
        var timingFunctionKey = cssTags.transitionTimingFunction;

        var isGecko = transformKey === 'MozTransform';

        var containerStyle = this.container.style;
        var labelStyle = this.label.style;
        var correctionImageStyle = this.correctionImage.style;

        switch (this.animationState) {
            case AnswerButton.AnimationStates.CorrectSplashStart:
                this.prepareParticles();
                if (isGecko) {
                    containerStyle[durationKey] = '0.05s';
                    this.addTransitionEndHandler(this.container);
                } else {
                    var _this = this;
                    window.setTimeout(function () {
                        _this.proceedAnimation();
                    }, 0);
                }
                containerStyle.backgroundColor = AnswerButton.StateBackgroundColors.correct;
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.CorrectSplash:
                if (isGecko)
                    this.removeTransitionEndHandler(this.container);
                var particleElements = this.controller.particles.elements;
                var particleElementsCount = particleElements.length;
                var firstParticle = particleElements[0];
                var durationVariationStep = 0.5 / particleElementsCount;
                var rotationVariationStep = 100 / particleElementsCount;
                for (var i = 0; i < particleElementsCount; i++) {
                    var element = particleElements[i];
                    var elementStyle = element.style;
                    elementStyle[durationKey] = (1 - i * durationVariationStep) + 's';
                    elementStyle[transformKey] = browser.cssTranslate(element[AnswerButton.targetXKey], element[AnswerButton.targetYKey]) + ' rotate(' + (50 - i * rotationVariationStep) + 'deg)';
                    elementStyle.opacity = '0';
                }
                containerStyle[durationKey] = '0.8s';
                containerStyle[timingFunctionKey] = 'linear';
                containerStyle.backgroundColor = AnswerButton.StateBackgroundColors.normal;
                this.animationState++;
                this.addTransitionEndHandler(firstParticle);
                break;
            case AnswerButton.AnimationStates.CorrectSplashEnd:
                this.hideParticles();
                containerStyle[durationKey] = '';
                containerStyle[timingFunctionKey] = '';
                this.animationState = AnswerButton.AnimationStates.Unanimated;
                break;

            case AnswerButton.AnimationStates.LabelChangeStart:
            case AnswerButton.AnimationStates.LabelChangeOut:
                labelStyle[durationKey] = '0.35s';
                labelStyle[timingFunctionKey] = 'ease-in';
                if (browser.canScaleWithoutArtifacts()) {
                    labelStyle.opacity = '0';
                    labelStyle[transformKey] = 'scale(0.2, 0.2)';
                } else {
                    labelStyle[transformKey] = browser.cssTranslate(0, -this.geometry.height);
                }
                this.animationState = AnswerButton.AnimationStates.LabelChangePause;
                this.addTransitionEndHandler(this.label);
                break;
            case AnswerButton.AnimationStates.LabelChangePause:
                if (browser.canScaleWithoutArtifacts()) {
                    labelStyle.opacity = '0';
                    labelStyle[transformKey] = 'scale(0.19, 0.19)';
                } else {
                    labelStyle[durationKey] = '0.15s';
                    labelStyle[transformKey] = browser.cssTranslate(0, -this.geometry.height - 1);
                }
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.LabelChangeIn:
                labelStyle[transformKey] = '';
                if (browser.canScaleWithoutArtifacts()) {
                    labelStyle.opacity = '';
                } else {
                    labelStyle[timingFunctionKey] = 'ease-out';
                    labelStyle[durationKey] = '0.35s';
                }
                this.setLabel(this.newLabelText);
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.LabelChangeEnd:
                labelStyle[durationKey] = '';
                labelStyle[timingFunctionKey] = '';
                this.removeTransitionEndHandler(this.label);
                this.animationState = AnswerButton.AnimationStates.Unanimated;
                break;

            case AnswerButton.AnimationStates.IncorrectStart:
                if (isGecko) {
                    containerStyle[durationKey] = '0.05s';
                    this.addTransitionEndHandler(this.container);
                } else {
                    var _this = this;
                    window.setTimeout(function () {
                        _this.proceedAnimation();
                    }, 0);
                }
                containerStyle.backgroundColor = AnswerButton.StateBackgroundColors.incorrect;
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectLabelLeftFirst:
                if (isGecko)
                    this.removeTransitionEndHandler(this.container);
                containerStyle[timingFunctionKey] = 'linear';
                containerStyle[durationKey] = '0.5s';
                containerStyle.backgroundColor = this.correctionImageId === '' ? AnswerButton.StateBackgroundColors.normal : AnswerButton.StateBackgroundColors.correction;
                labelStyle[durationKey] = '0.12s';
                labelStyle[transformKey] = browser.cssTranslate(-this.wrongAnswerShakeAmplitude, 0);
                labelStyle[timingFunctionKey] = 'ease-out';
                this.addTransitionEndHandler(this.label);
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectLabelRightFirst:
                labelStyle[durationKey] = '0.22s';
                labelStyle[transformKey] = browser.cssTranslate(this.wrongAnswerShakeAmplitude, 0);
                labelStyle[timingFunctionKey] = 'ease-in-out';
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectLabelLeftLast:
                labelStyle[durationKey] = '0.15s';
                labelStyle[transformKey] = browser.cssTranslate(-this.wrongAnswerShakeAmplitude / 2, 0);
                labelStyle[timingFunctionKey] = 'ease-out';
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectLabelRightLast:
                labelStyle[durationKey] = '0.1s';
                labelStyle[transformKey] = browser.cssTranslate(0, 0);
                this.animationState = this.correctionImageId === '' ? AnswerButton.AnimationStates.IncorrectEnd : AnswerButton.AnimationStates.IncorrectCorrectionIn;
                this.hideCorrectionImage();
                break;
            case AnswerButton.AnimationStates.IncorrectCorrectionIn:
                labelStyle[timingFunctionKey] = 'ease-in';
                labelStyle[durationKey] = correctionImageStyle[durationKey] = '0.45s';
                labelStyle[transformKey] = browser.cssTranslate(0, -this.label.height);
                this.correctionImage.width = this.correctionImage.width;
                imageProvider.drawImage(this.correctionImageId, this.correctionImage);
                correctionImageStyle[transformKey] = browser.cssTranslate(this.correctionImageX, Math.round((this.geometry.height - this.correctionImageSize) / 2));
                correctionImageStyle[timingFunctionKey] = 'ease-out';
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectCorrectionPause:
                labelStyle[durationKey] = '1.4s';
                labelStyle[transformKey] = browser.cssTranslate(0, -this.label.height - 1);
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectCorrectionOut:
                labelStyle[timingFunctionKey] = 'ease-out';
                labelStyle[durationKey] = correctionImageStyle[durationKey];
                labelStyle[transformKey] = browser.cssTranslate(0, 0);
                correctionImageStyle[timingFunctionKey] = 'ease-in';
                correctionImageStyle[transformKey] = browser.cssTranslate(this.correctionImageX, this.geometry.height);
                containerStyle.backgroundColor = AnswerButton.StateBackgroundColors.normal;
                this.animationState++;
                break;
            case AnswerButton.AnimationStates.IncorrectEnd:
                this.animationState = AnswerButton.AnimationStates.Unanimated;
                this.removeTransitionEndHandler(this.label);
                labelStyle[durationKey] = '';
                labelStyle[transformKey] = '';
                labelStyle[timingFunctionKey] = '';
                containerStyle[durationKey] = '';
                containerStyle[timingFunctionKey] = '';
                correctionImageStyle[durationKey] = '';
                correctionImageStyle[timingFunctionKey] = '';
                this.hideCorrectionImage();
                break;

            default:
                throw new Error("unhandled animationState");
        }

        if (this.animationState === AnswerButton.AnimationStates.Unanimated)
            this.controller.onAnimationFinished(this);
    };

    AnswerButton.prototype.setLabel = function (text) {
        this.labelText = text;
        this.label.width = this.label.width;
        imageProvider.drawImage('label/' + text, this.label);
    };

    AnswerButton.prototype.changeLabel = function (text) {
        this.interruptCurrentAnimation();
        this.newLabelText = text;
        this.animationState = AnswerButton.AnimationStates.LabelChangeStart;
        this.proceedAnimation();
    };

    AnswerButton.prototype.interruptCurrentAnimation = function () {
        var states = AnswerButton.AnimationStates;
        var currentState = this.animationState;
        if (currentState === states.Unanimated)
            return;

        this.animationState = states.Unanimated;

        var cssTags = browser.cssTags();
        var durationKey = cssTags.transitionDuration;
        var transformKey = cssTags.transform;
        var timingFunctionKey = cssTags.transitionTimingFunction;

        var itemsToReset = [this.label, this.container, this.correctionImage];
        for (var i, l = itemsToReset.length; i < l; i++) {
            var itemStyle = itemsToReset[i].style;
            itemStyle[durationKey] = '';
            itemStyle[transformKey] = '';
            itemStyle[timingFunctionKey] = '';
        }

        this.container.style.backgroundColor = AnswerButton.StateBackgroundColors.normal;
        this.label.style.opacity = '';
        this.hideCorrectionImage();
        this.hideParticles();
    };

    AnswerButton.prototype.startCorrectAnimation = function () {
        this.interruptCurrentAnimation();
        this.animationState = AnswerButton.AnimationStates.CorrectSplashStart;
        this.proceedAnimation();
    };

    AnswerButton.prototype.startIncorrectAnimation = function () {
        this.interruptCurrentAnimation();
        this.animationState = AnswerButton.AnimationStates.IncorrectStart;
        this.proceedAnimation();
    };

    AnswerButton.prototype.startIncorrectAnimationWithCorrection = function (correctionImageId) {
        this.correctionImageId = correctionImageId;
        this.startIncorrectAnimation();
    };
    AnswerButton.slideDuration = '0.4s';
    AnswerButton.particlesCount = 20;

    AnswerButton.AnimationStates = {
        Unanimated: 0,
        LabelChangeStart: 1,
        LabelChangeOut: 2,
        LabelChangePause: 3,
        LabelChangeIn: 4,
        LabelChangeEnd: 5,
        CorrectSplashStart: 6,
        CorrectSplash: 7,
        CorrectSplashEnd: 8,
        IncorrectStart: 9,
        IncorrectLabelLeftFirst: 10,
        IncorrectLabelRightFirst: 11,
        IncorrectLabelLeftLast: 12,
        IncorrectLabelRightLast: 13,
        IncorrectCorrectionIn: 14,
        IncorrectCorrectionPause: 15,
        IncorrectCorrectionOut: 16,
        IncorrectEnd: 17
    };

    AnswerButton.StateBackgroundColors = {
        normal: 'rgb(255, 255, 255)',
        correct: 'rgb(255, 255, 170)',
        incorrect: 'rgb(255, 102, 102)',
        correction: 'rgb(255, 187, 187)'
    };

    AnswerButton.animationButtonKey = 'animationButton';
    AnswerButton.targetXKey = 'targetX';
    AnswerButton.targetYKey = 'targetY';
    return AnswerButton;
})();
/// <reference path="feedback.ts"/>
/// <reference path="answerbutton.ts"/>

var AnswerChoice = (function () {
    function AnswerChoice(parentItem, controller, buttonsCount, columnsCount, showCorrections) {
        this.controller = controller;
        this.buttonsCount = buttonsCount;
        this.columnsCount = columnsCount;
        this.showCorrections = showCorrections;
        this.answerButtons = [];
        for (var i = 0; i < buttonsCount; i++)
            this.answerButtons[i] = new AnswerButton(parentItem, this, i);

        this.state = AnswerChoice.States.Ready;
    }
    AnswerChoice.prototype.setGeometry = function (rect) {
        var buttonSpacing = Math.round(rect.height * 0.035);
        var gridRows = Math.ceil(this.buttonsCount / this.columnsCount);
        var buttonWidth = Math.round((rect.width - buttonSpacing) / this.columnsCount - buttonSpacing);
        var buttonHeight = Math.round(rect.height / gridRows - buttonSpacing);

        for (var i = 0, l = this.answerButtons.length; i < l; i++) {
            var button = this.answerButtons[i];
            var column = i % this.columnsCount;
            var row = Math.floor(i / this.columnsCount);
            var buttonX = rect.x + buttonSpacing + column * (buttonWidth + buttonSpacing);
            var buttonY = rect.y + buttonSpacing + row * (buttonHeight + buttonSpacing);
            button.setGeometry({ x: buttonX, y: buttonY, width: buttonWidth, height: buttonHeight });
        }
    };

    AnswerChoice.prototype.onAnswerButtonPressed = function (button) {
        if (this.state !== AnswerChoice.States.Ready)
            return;

        if (button.index === this.correctAnswerIndex) {
            button.startCorrectAnimation();
            this.state = AnswerChoice.States.CorrectAnswerChosen;
            feedback.playCorrectSound();
        } else {
            if (this.showCorrections)
                button.startIncorrectAnimationWithCorrection(this.answers.data[button.index].correctionImageId);
            else
                button.startIncorrectAnimation();
            this.state = AnswerChoice.States.IncorrectAnswerChosen;
            feedback.playIncorrectSound();
        }
    };

    AnswerChoice.prototype.onAnimationFinished = function (button) {
        switch (this.state) {
            case AnswerChoice.States.Ready:
                break;
            case AnswerChoice.States.ChangingLabels:
                if (button.index === this.buttonsCount - 1)
                    this.state = AnswerChoice.States.Ready;
                break;
            case AnswerChoice.States.CorrectAnswerChosen:
                if (button.index === this.correctAnswerIndex) {
                    this.controller.onCorrectAnswer();
                    this.state = AnswerChoice.States.Ready;
                }
                break;
            case AnswerChoice.States.IncorrectAnswerChosen:
                this.state = AnswerChoice.States.Ready;
                break;
            default:
                throw new Error("Unhandled state in AnswerChoice.onAnimationFinished");
        }
    };

    AnswerChoice.prototype.setAnswer = function (button, label, delay) {
        window.setTimeout(function () {
            button.changeLabel(label);
        }, delay);
    };

    AnswerChoice.prototype.setAnswers = function (answers) {
        this.answers = answers;
        this.state = AnswerChoice.States.ChangingLabels;
        this.correctAnswerIndex = answers.correctAnswerIndex;
        for (var i = 0, l = answers.data.length; i < l; i++)
            this.setAnswer(this.answerButtons[i], answers.data[i].label, i * 150 + 20);
    };
    AnswerChoice.States = {
        Ready: 0,
        ChangingLabels: 1,
        CorrectAnswerChosen: 2,
        IncorrectAnswerChosen: 3
    };
    return AnswerChoice;
})();
/// <reference path="events.ts"/>
/// <reference path="acceleration.ts"/>
/// <reference path="imageprovider.ts"/>
/// <reference path="interfaces.ts"/>

var ImageView = (function () {
    function ImageView(parentItem, controller, parameters) {
        this.parentItem = parentItem;
        this.controller = controller;
        if (!parameters)
            parameters = {};
        this.imageSizeFactor = parameters.imageSizeFactor || 0.77;

        this.container = document.createElement('div');
        parentItem.appendChild(this.container);
        this.backgroundTop = document.createElement('div');
        this.container.appendChild(this.backgroundTop);
        this.backgroundImage = document.createElement('canvas');
        this.container.appendChild(this.backgroundImage);
        this.backgroundBottom = document.createElement('div');
        this.container.appendChild(this.backgroundBottom);
        this.imageContainer = document.createElement('div');
        this.container.appendChild(this.imageContainer);
        this.images = [];
        for (var i = 0; i < 3; i++) {
            var image = document.createElement('canvas');
            this.images[i] = image;
            this.imageContainer.appendChild(image);
        }
        this.frontGlass = document.createElement('canvas');
        parentItem.appendChild(this.frontGlass);

        this.animationState = ImageView.AnimationStates.ImageUnanimated;

        this.backgroundHueOffset = Math.floor(Math.random() * 360);
        this.slideDuration = '0.4s';
        this.easing = 'ease-out';

        var containerStyle = this.container.style;
        var imageContainerStyle = this.imageContainer.style;
        var backgroundTopStyle = this.backgroundTop.style;
        var backgroundImageStyle = this.backgroundImage.style;
        var backgroundBottomStyle = this.backgroundBottom.style;

        containerStyle.position = backgroundTopStyle.position = backgroundImageStyle.position = backgroundBottomStyle.position = this.imageContainer.style.position = this.images[0].style.position = this.images[1].style.position = this.images[2].style.position = this.frontGlass.style.position = 'absolute';
        containerStyle.backgroundColor = 'hsl(' + this.backgroundHueOffset + ', 40%, 80%)';
        containerStyle.overflow = 'hidden'; // TODO: check for performance
        backgroundTopStyle.opacity = backgroundImageStyle.opacity = backgroundBottomStyle.opacity = '0.08';
        containerStyle[browser.cssTags().transitionProperty] = 'background-color';
        backgroundTopStyle.backgroundColor = 'rgb(255, 255, 255)';
        backgroundBottomStyle.backgroundColor = 'rgb(0, 0, 0)';

        var _this = this;
        this.imageContainer.addEventListener(browser.cssTags().transitionEnd, function () {
            _this.onImageTransitionEnd.call(_this);
        }, false);

        this.scrollPosition = 0;
        this.scrollStart = -1;
        this.index = 0;
        this.indexStep = 0;

        events.addListeners(this.frontGlass, this);
    }
    ImageView.prototype.mouseDown = function (x, y) {
        if (this.animationState !== ImageView.AnimationStates.ImageUnanimated)
            return;
        this.scrollStart = x;
    };

    ImageView.prototype.mouseMove = function (x, y) {
        if (this.scrollStart < 0)
            return;
        this.scrollPosition = x - this.scrollStart;
        if (this.scrollPosition > 0 && this.index === 0)
            this.scrollPosition /= 2;
        this.setAnimatedProperties(this.scrollPosition);
    };

    ImageView.prototype.mouseUp = function (x, y) {
        if (this.animationState !== ImageView.AnimationStates.ImageUnanimated)
            return;
        this.scrollStart = -1;
        if (this.scrollPosition === 0)
            return;

        this.indexStep = (this.scrollPosition > 0 && this.index === 0) ? 0 : Math.round(this.scrollPosition / this.container.clientWidth * -2);
        this.indexStep = Math.max(-1, Math.min(1, this.indexStep));

        this.scrollPosition = 0;
        this.easing = 'ease-out';
        this.slideDuration = '0.4s';
        if (this.indexStep === 0)
            this.startImageBackTransition();
        else
            this.startImageSwitchTransition();
    };

    ImageView.prototype.requestImage = function (image, index) {
        if (index < 0)
            return false;
        this.controller.onImageViewImageRequest(image, index);
        return true;
    };

    ImageView.prototype.setGeometry = function (rect) {
        this.geometry = rect;
        var containerStyle = this.container.style;
        var imageContainerStyle = this.imageContainer.style;
        var backgroundTopStyle = this.backgroundTop.style;
        var backgroundBottomStyle = this.backgroundBottom.style;
        var transformKey = browser.cssTags().transform;
        containerStyle[transformKey] = this.frontGlass.style[transformKey] = browser.cssTranslate(rect.x, rect.y);
        containerStyle.width = backgroundTopStyle.width = backgroundBottomStyle.width = rect.width + 'px';
        containerStyle.height = rect.height + 'px';
        imageContainerStyle.width = imageContainerStyle.height = '0px';
        var imageSize = Math.floor(this.imageSizeFactor * Math.min(rect.width, rect.height));
        for (var i = 0; i < 3; i++) {
            imageProvider.resizeCanvas(this.images[i], imageSize, imageSize);
            this.requestImage(this.images[i], this.index + i - 1);
        }
        imageProvider.resizeCanvas(this.frontGlass, rect.width, rect.height);
        this.positionImagesInContainer();
        imageProvider.drawImage('frame/0', this.frontGlass);

        var backgroundImageHeight = Math.round(rect.height * 0.33);
        var backgroundBounds = design.elements['id_background_01'].bounds;
        this.backgroundImageTileWidth = Math.round(backgroundImageHeight * backgroundBounds.width / backgroundBounds.height);
        var backgroundImageWidth = Math.floor(Math.max(this.backgroundImageTileWidth, rect.width) + 6 * rect.width * ImageView.backgroundScrollSpeed);
        imageProvider.resizeCanvas(this.backgroundImage, backgroundImageWidth, backgroundImageHeight);
        imageProvider.drawImage('imageViewBackground/0', this.backgroundImage);

        this.backgroundImage.style.top = backgroundImageHeight + 'px';
        this.backgroundImage.style[transformKey] = browser.cssTranslate(-rect.width * ImageView.backgroundScrollSpeed, 0);
        backgroundTopStyle.height = backgroundImageHeight + 'px';
        backgroundBottomStyle.height = (rect.height - backgroundImageHeight - this.backgroundTop.clientHeight) + 'px';
        backgroundBottomStyle.top = (backgroundImageHeight + this.backgroundTop.clientHeight) + 'px';

        this.calculateBackgroundOffset();
        this.setAnimatedProperties(0);
    };

    ImageView.prototype.setAnimatedProperties = function (offset) {
        var transformKey = browser.cssTags().transform;
        var width = this.geometry.width;
        this.imageContainer.style[transformKey] = browser.cssTranslate(offset - this.index * width, 0);
        this.backgroundImage.style[transformKey] = browser.cssTranslate(this.backgroundOffset + offset * ImageView.backgroundScrollSpeed, 0);
        if (this.animationState !== ImageView.AnimationStates.ImageUnanimated) {
            var hue = (-offset + this.index * width) * ImageView.huePerItem / width + this.backgroundHueOffset;
            this.container.style.backgroundColor = 'hsl(' + hue + ', 40%, 80%)';
        }
    };

    ImageView.prototype.disableCssTransitions = function () {
        var durationKey = browser.cssTags().transitionDuration;
        this.container.style[durationKey] = this.imageContainer.style[durationKey] = this.backgroundImage.style[durationKey] = '';
    };

    ImageView.prototype.enableCssTransitions = function () {
        var cssTags = browser.cssTags();
        var durationKey = cssTags.transitionDuration;
        var timingFunctionKey = cssTags.transitionTimingFunction;
        var containerStyle = this.container.style;
        var imageContainerStyle = this.imageContainer.style;
        var backgroundImageStyle = this.backgroundImage.style;
        containerStyle[durationKey] = imageContainerStyle[durationKey] = backgroundImageStyle[durationKey] = this.slideDuration;
        containerStyle[timingFunctionKey] = imageContainerStyle[timingFunctionKey] = backgroundImageStyle[timingFunctionKey] = this.easing;
    };

    ImageView.prototype.onImageTransitionEnd = function (event) {
        this.disableCssTransitions();

        if (this.animationState === ImageView.AnimationStates.ImageSwitch) {
            this.calculateBackgroundOffset();
            this.controller.onImageViewIndexChange(this.index);
            this.positionImagesInContainer();
            this.setAnimatedProperties(0);
            if (this.indexStep === 1) {
                this.requestImage(this.images[(this.index + 2) % 3], this.index + 1);
            } else {
                this.requestImage(this.images[(this.index) % 3], this.index - 1);
                if (this.index === 0)
                    this.images[0].width = this.images[0].width;
            }
        }

        this.animationState = ImageView.AnimationStates.ImageUnanimated;
    };

    ImageView.prototype.positionImagesInContainer = function () {
        var transformKey = browser.cssTags().transform;
        var width = this.geometry.width;
        var height = this.geometry.height;
        var imageSize = this.imageSizeFactor * Math.min(width, height);
        var offsetLeft = Math.round((width - imageSize) / 2);
        var offsetTop = Math.round((height - imageSize) / 2);
        for (var i = 0; i < 3; i++) {
            var imageIndex = (this.index + i) % 3;
            this.images[imageIndex].style[transformKey] = browser.cssTranslate((i - 1 + this.index) * width + offsetLeft, offsetTop);
        }
    };

    ImageView.prototype.calculateBackgroundOffset = function () {
        var width = this.container.clientWidth;
        this.backgroundOffset = ((-width * this.index * ImageView.backgroundScrollSpeed) % this.backgroundImageTileWidth) - (width * ImageView.backgroundScrollSpeed);
    };

    ImageView.prototype.startImageBackTransition = function () {
        var timingFunctionKey = browser.cssTags().transitionTimingFunction;
        this.container.style[timingFunctionKey] = this.imageContainer.style[timingFunctionKey] = this.backgroundImage.style[timingFunctionKey] = 'ease-out';
        this.animationState = ImageView.AnimationStates.ImageBack;
        this.enableCssTransitions();
        this.setAnimatedProperties(0);
    };

    ImageView.prototype.startImageSwitchTransition = function () {
        this.animationState = ImageView.AnimationStates.ImageSwitch;
        this.enableCssTransitions();
        this.setAnimatedProperties(-this.indexStep * this.container.clientWidth);
        this.index = Math.max(0, this.index + this.indexStep);
    };

    ImageView.prototype.scrollToPreviousImage = function () {
        this.indexStep = -1;
        this.easing = 'ease-in-out';
        this.slideDuration = '0.8s';
        this.startImageSwitchTransition();
    };

    ImageView.prototype.scrollToNextImage = function () {
        this.indexStep = 1;
        this.easing = 'ease-in-out';
        this.slideDuration = '0.8s';
        this.startImageSwitchTransition();
    };
    ImageView.huePerItem = 15;
    ImageView.backgroundScrollSpeed = 0.3;

    ImageView.AnimationStates = {
        ImageUnanimated: 0,
        ImageBack: 1,
        ImageSwitch: 2
    };
    return ImageView;
})();
/// <reference path="database.ts"/>
/// <reference path="imageview.ts"/>
/// <reference path="answerchoice.ts"/>

var ImageMultipleChoice = (function () {
    function ImageMultipleChoice(parentItem, parameters) {
        if (!parameters)
            parameters = {};
        var imageSizeFactor = parameters.imageSizeFactor || 0.77;
        var answersColumsCount = parameters.answersColumsCount || 1;
        var showCorrectionImageOnButton = parameters.showCorrectionImageOnButton || true;
        this.viewHeightRatio = parameters.viewHeightRatio || 0.45;
        this.exerciseFunction = parameters.exerciseFunction || exercises.nameTermsExerciseFunction;
        this.answersCount = parameters.answersCount || 3;

        this.imageView = new ImageView(parentItem, this, {
            imageSizeFactor: imageSizeFactor
        });
        this.answerChoice = new AnswerChoice(parentItem, this, this.answersCount, answersColumsCount, showCorrectionImageOnButton);

        this.currentExeciseIndex = 0;
        this.setExercise(this.currentExeciseIndex);

        this.ignoreOneImageViewIndexChange = false;
    }
    ImageMultipleChoice.prototype.setGeometry = function (rect) {
        var imageViewheight = Math.round(rect.height * this.viewHeightRatio);
        this.imageView.setGeometry({ x: rect.x, y: rect.y, width: rect.width, height: imageViewheight });
        this.answerChoice.setGeometry({ x: rect.x, y: rect.y + imageViewheight, width: rect.width, height: rect.height - imageViewheight });
    };

    ImageMultipleChoice.prototype.setExercise = function (index) {
        var exercise = exercises.exercise(index, this.exerciseFunction, this.answersCount);
        var answers = exercise.Answers;
        var answerData = [];
        for (var i = 0, l = answers.length; i < l; i++) {
            var answer = answers[i];
            answerData[i] = {
                label: answer.DisplayName,
                correctionImageId: answer.ImageSource
            };
        }
        this.answerChoice.setAnswers({
            correctAnswerIndex: exercise.CorrectAnswerIndex,
            data: answerData
        });
    };

    ImageMultipleChoice.prototype.onImageViewImageRequest = function (canvas, index) {
        var exercise = exercises.exercise(index, this.exerciseFunction, this.answersCount);
        canvas.width = canvas.width;
        imageProvider.drawImage(exercise.ImageSource, canvas);
    };

    ImageMultipleChoice.prototype.onImageViewIndexChange = function (index) {
        if (this.ignoreOneImageViewIndexChange) {
            this.ignoreOneImageViewIndexChange = false;
            return;
        }
        this.currentExeciseIndex = index;
        this.setExercise(this.currentExeciseIndex);
    };

    ImageMultipleChoice.prototype.onCorrectAnswer = function () {
        this.setExercise(++this.currentExeciseIndex);
        this.imageView.scrollToNextImage();
        this.ignoreOneImageViewIndexChange = true;
    };
    return ImageMultipleChoice;
})();
/// <reference path="interfaces.ts"/>
var lessonData = [];
var lessonDataLength = 100;

var data = {
    addIndicesToDict: function (dict) {
        for (var i = 0, l = dict.length; i < l; i++)
            dict[i].Index = i;
        return dict;
    },
    objects: function () {
        var objectsKey = "cachedObjects";
        if (!(objectsKey in data)) {
            data[objectsKey] = data.addIndicesToDict([
                { Id: "banana", DisplayName: "banana" },
                { Id: "elephant", DisplayName: "elephant" },
                { Id: "robot", DisplayName: "robot" },
                { Id: "flower", DisplayName: "flower" },
                { Id: "fish", DisplayName: "fish" },
                { Id: "rooster", DisplayName: "rooster" },
                { Id: "airplane", DisplayName: "airplane" },
                { Id: "candle", DisplayName: "candle" },
                { Id: "scissors", DisplayName: "scissors" },
                { Id: "key", DisplayName: "key" },
                { Id: "horse", DisplayName: "horse" },
                { Id: "dog", DisplayName: "dog" },
                { Id: "cat", DisplayName: "cat" },
                { Id: "camel", DisplayName: "camel" },
                { Id: "crocodile", DisplayName: "crocodile" },
                { Id: "pig", DisplayName: "pig" },
                { Id: "snake", DisplayName: "snake" },
                { Id: "giraffe", DisplayName: "giraffe" },
                { Id: "snail", DisplayName: "snail" },
                { Id: "hedgehog", DisplayName: "hedgehog" }
            ]);
        }
        return data[objectsKey];
    },
    firstLetters: function () {
        var firstLettersKey = "cachedFirstLetters";
        if (!(firstLettersKey in data)) {
            var firstLettersMap = [];
            var objects = data.objects();
            for (var i = 0; i < objects.length; i++) {
                var firstLetter = objects[i].DisplayName[0].toUpperCase();
                if (firstLettersMap[firstLetter] === undefined)
                    firstLettersMap[firstLetter] = [];
                firstLettersMap[firstLetter].push(objects[i]);
            }
            var firstLetters = [];
            for (var letter in firstLettersMap)
                firstLetters.push({ Id: letter, DisplayName: letter, Objects: firstLettersMap[letter] });
            data[firstLettersKey] = data.addIndicesToDict(firstLetters);
        }
        return data[firstLettersKey];
    }
};

var exercises = {
    previousExerciseHasSameAnswerOnIndex: function (answerObjectIndex, index, listModelItemsLength) {
        if (listModelItemsLength < 1)
            return false;
        return lessonData[listModelItemsLength - 1].Answers[index].Index === answerObjectIndex;
    },
    previousExercisesHaveSameCorrectAnswer: function (answerObjectIndex, uniqueAnswers, listModelItemsLength) {
        for (var i = Math.max(0, listModelItemsLength - uniqueAnswers); i < listModelItemsLength; i++)
            if (lessonData[i].Index === answerObjectIndex)
                return true;
        return false;
    },
    currentAnswersContainObjectIndex: function (answerObjectIndex, j, answers) {
        for (var i = 0; i < j; i++)
            if (answers[i].Index === answerObjectIndex)
                return true;
        return false;
    },
    createExercise: function (i, data, answersPerChoiceCount, imageSourceFunction) {
        var correctAnswerIndex = Math.floor(Math.random() * answersPerChoiceCount);
        var currentDataIndex;
        do {
            currentDataIndex = Math.floor(Math.random() * data.length);
        } while(exercises.previousExerciseHasSameAnswerOnIndex(currentDataIndex, correctAnswerIndex, i) || exercises.previousExercisesHaveSameCorrectAnswer(currentDataIndex, Math.round(data.length * 0.5), i));
        var object = data[currentDataIndex];
        var answers = new Array(answersPerChoiceCount);
        answers[correctAnswerIndex] = object;
        for (var j = 0; j < answersPerChoiceCount; j++) {
            if (j !== correctAnswerIndex) {
                var wrongAnswerDataIndex;
                do {
                    wrongAnswerDataIndex = Math.floor(Math.random() * data.length);
                } while(wrongAnswerDataIndex === currentDataIndex || exercises.previousExerciseHasSameAnswerOnIndex(wrongAnswerDataIndex, j, i) || exercises.currentAnswersContainObjectIndex(wrongAnswerDataIndex, j, answers));
                answers[j] = data[wrongAnswerDataIndex];
            }
        }
        for (var a = 0, l = answers.length; a < l; a++)
            answers[a].ImageSource = imageSourceFunction(answers[a], i);
        var listItem = {
            Index: object.Index,
            ImageSource: answers[correctAnswerIndex].ImageSource,
            Answers: answers,
            CorrectAnswerIndex: correctAnswerIndex };
        lessonData[i] = listItem;
        // exercises.dumpLessonData();
    },
    nameTermsImageSourceFunction: function (object, answerIndex) {
        return "object/id_" + object.Id;
    },
    nameTermsExerciseFunction: function (i, answersCount) {
        var objects = data.objects();
        exercises.createExercise(i, objects, answersCount, exercises.nameTermsImageSourceFunction);
    },
    firstLetterImageSourceFunction: function (object, answerIndex) {
        var answerObjects = object['Objects'];
        return "object/id_" + answerObjects[Math.floor(Math.random() * answerObjects.length)].Id;
    },
    firstLetterExerciseFunction: function (i, answersCount) {
        var firstLetters = data.firstLetters();
        exercises.createExercise(i, firstLetters, answersCount, exercises.firstLetterImageSourceFunction);
    },
    exercise: function (i, exerciseFunction, answersCount) {
        var index = i % lessonDataLength;
        if (lessonData[index] === undefined)
            exerciseFunction(index, answersCount);
        return lessonData[index];
    },
    dumpLessonData: function () {
        console.log("** lessonData (count: " + lessonData.length + ")");
        for (var i = 0, l1 = lessonData.length; i < l1; i++) {
            var exercise = lessonData[i];
            var output = "  ";
            for (var j = 0, l2 = exercise.Answers.length; j < l2; j++) {
                var answer = exercise.Answers[j].DisplayName;
                if (j === exercise.CorrectAnswerIndex)
                    answer = ">" + answer + "<";
                output += " " + answer;
            }
            console.log(output + "  " + exercise.Answers[exercise.CorrectAnswerIndex].ImageSource);
        }
    }
};
/// <reference path="database.ts"/>
/// <reference path="imagemultiplechoice.ts"/>

var touchandlearn = {
    init: function (parentItem) {
        touchandlearn.imageMultipleChoice = new ImageMultipleChoice(parentItem, {
            exerciseFunction: exercises.nameTermsExerciseFunction,
            answersCount: 3,
            answersColumsCount: 1,
            imageSizeFactor: 0.77,
            viewHeightRatio: 0.45,
            showCorrectionImageOnButton: true
        });
        touchandlearn.adjustGeometry();
        window.onresize = function () {
            touchandlearn.adjustGeometry();
        };
    },
    imageMultipleChoice: undefined,
    adjustGeometry: function () {
        var widthToHeightRatio = Math.min(window.innerWidth / window.innerHeight, 0.7);
        var newHeight = window.innerHeight;
        var newWidth = Math.floor(window.innerHeight * widthToHeightRatio);
        var newX = Math.floor((window.innerWidth - newWidth) / 2);
        var newY = 0;
        touchandlearn.imageMultipleChoice.setGeometry({ x: newX, y: newY, width: newWidth, height: newHeight });
    }
};
var feedback = {
    audioElement: undefined,
    init: function () {
        if (feedback.audioElement !== undefined)
            return;

        feedback.audioElement = new Audio();
        feedback.audioElement.setAttribute("preload", "auto");
        feedback.audioElement.autobuffer = true;

        var platform = navigator.platform;
        if (platform === 'iPhone' || platform === 'iPad' || platform === 'iPod') {
            feedback.addAudioSource("audio.aac", "audio/mp4");
        } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
            feedback.addAudioSource("audio.ogg", "audio/ogg");
        } else if ('chrome' in window) {
            feedback.addAudioSource("audio.wav", "audio/wav");
        } else {
            feedback.addAudioSource("audio.mp3", "audio/mpeg");
            feedback.addAudioSource("audio.wav", "audio/wav");
        }

        var _this = this;
        feedback.audioElement.addEventListener('timeupdate', function (event) {
            if (this.currentTime > feedback.currentSoundEndTime)
                this.pause();
        }, false);

        feedback.audioElement.load();
    },
    addAudioSource: function (src, type) {
        var sourceElement = document.createElement('source');
        sourceElement.src = src;
        sourceElement.type = type;
        feedback.audioElement.appendChild(sourceElement);
    },
    playCorrectSound: function () {
        feedback.init();
        feedback.lastCorrectSound = feedback.playRandomSound(feedback.correctSounds, feedback.lastCorrectSound);
    },
    playIncorrectSound: function () {
        feedback.init();
        feedback.lastIncorrectSound = feedback.playRandomSound(feedback.incorrectSounds, feedback.lastIncorrectSound);
    },
    playRandomSound: function (timings, lastSoundIndex) {
        var soundIndex = lastSoundIndex;
        while (soundIndex === lastSoundIndex)
            soundIndex = Math.floor(Math.random() * timings.length);
        if (feedback.audioElement.readyState == "0") {
            var playAndPause = function () {
                feedback.audioElement.pause();
                feedback.audioElement.removeEventListener('play', playAndPause, false);
            };
            feedback.audioElement.addEventListener('play', playAndPause, false);
            var progress = function () {
                feedback.audioElement.removeEventListener('progress', progress, false);
                feedback.playRandomSound(timings, soundIndex);
            };
            feedback.audioElement.addEventListener('progress', progress, false);
            feedback.audioElement.play();
            return soundIndex;
        }
        var timing = timings[soundIndex];
        var audioElement = feedback.audioElement;
        audioElement.currentTime = timing.start;
        feedback.currentSoundEndTime = timing.end;
        audioElement.play();
        return soundIndex;
    },
    currentSoundEndTime: -1,
    lastCorrectSound: -1,
    correctSounds: [
        { start: 0.000, end: 0.880 },
        { start: 1.380, end: 2.262 },
        { start: 2.758, end: 3.639 },
        { start: 4.132, end: 5.017 },
        { start: 5.515, end: 6.394 }
    ],
    lastIncorrectSound: -1,
    incorrectSounds: [
        { start: 6.889, end: 7.473 },
        { start: 7.969, end: 8.577 },
        { start: 9.073, end: 9.683 },
        { start: 10.177, end: 10.759 }
    ]
};
