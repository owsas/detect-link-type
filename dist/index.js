"use strict";
exports.__esModule = true;
var Detector = (function () {
    function Detector() {
    }
    /**
     * @param {string} link
     */
    Detector.isTTF = function (link) {
        return Detector.getExtension(link) === 'ttf';
    };
    /**
     * @param {string} link
     */
    Detector.isCSS = function (link) {
        return Detector.getExtension(link) === 'css';
    };
    /**
     * @param {string} link
     */
    Detector.isHTML = function (link) {
        return Detector.getExtension(link) === 'html';
    };
    /**
     * @param {string} link
     */
    Detector.isJPG = function (link) {
        var extension = Detector.getExtension(link);
        return (extension === 'jpg') || (extension === 'jpeg');
    };
    /**
     * @param {string} link
     */
    Detector.isGIF = function (link) {
        return Detector.getExtension(link) === 'gif';
    };
    /**
     * @param {string} link
     */
    Detector.isPNG = function (link) {
        return Detector.getExtension(link) === 'png';
    };
    /**
     * @param {string} link
     */
    Detector.isImage = function (link) {
        return Detector.isPNG(link) || Detector.isJPG(link);
    };
    /**
     * Gets the extension of a link
     * @param {string} link
     */
    Detector.getExtension = function (link) {
        if (typeof link !== 'string') {
            throw new Error('link must be a string');
        }
        var lastChars = link.substr(link.length - 5, 5);
        var type = lastChars.split('.')[1];
        if (!type) {
            return null;
        }
        return type.toLowerCase();
    };
    return Detector;
}());
exports.Detector = Detector;
