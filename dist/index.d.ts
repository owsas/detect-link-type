export declare class Detector {
    /**
     * @param {string} link
     */
    static isTTF(link: any): boolean;
    /**
     * @param {string} link
     */
    static isCSS(link: any): boolean;
    /**
     * @param {string} link
     */
    static isHTML(link: any): boolean;
    /**
     * @param {string} link
     */
    static isJPG(link: any): boolean;
    /**
     * @param {string} link
     */
    static isGIF(link: any): boolean;
    /**
     * @param {string} link
     */
    static isPNG(link: any): boolean;
    /**
     * @param {string} link
     */
    static isImage(link: any): boolean;
    /**
     * Gets the extension of a link
     * @param {string} link
     */
    static getExtension(link: any): string;
}
