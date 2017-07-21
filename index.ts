export class Detector {

    /**
     * @param {string} link 
     */
    static isTTF(link): boolean {
        return Detector.getExtension(link) === 'ttf';
    }

    /**
     * @param {string} link 
     */
    static isCSS(link): boolean {
        return Detector.getExtension(link) === 'css';
    }

    /**
     * @param {string} link 
     */
    static isHTML(link): boolean {
        return Detector.getExtension(link) === 'html';
    }

    /** 
     * @param {string} link 
     */
    static isJPG(link): boolean {
        const extension = Detector.getExtension(link);
        return (extension === 'jpg') || (extension === 'jpeg');
    }

    /**
     * @param {string} link 
     */
    static isGIF(link): boolean {
        return Detector.getExtension(link) === 'gif';
    }

    /**
     * @param {string} link 
     */
    static isPNG(link): boolean {
        return Detector.getExtension(link) === 'png';
    }

    /**
     * @param {string} link 
     */
    static isImage(link): boolean {
        return Detector.isPNG(link)
            || Detector.isJPG(link)
            || Detector.isGIF(link);
    }

    /**
     * @param {string} link 
     */
    static isJS(link): boolean {
        return Detector.getExtension(link) === 'js';
    }

    /**
     * @param {string} link 
     */
    static isPDF(link): boolean {
        return Detector.getExtension(link) === 'pdf';
    }

    /**
     * Gets the extension of a link
     * @param {string} link 
     */
    static getExtension(link): string {
        if (typeof link !== 'string') {
            throw new Error('link must be a string');
        }

        var lastChars = link.substr(link.length - 5, 5);
        var type = lastChars.split('.')[1];
        if (!type) {
            return null;
        }

        return type.toLowerCase();
    }

}