import QrScanner from "./../libs/qr-scanner/qr-scanner.min.js";
export class MainApp extends HTMLElement {
    #lstResult = this.querySelector(".list-result");
    #templateResult = this.querySelector(".template-item");
    #firstResult = true;
    #btnVideo = this.querySelector(".btn-camera");
    #btnImage = this.querySelector(".btn-image");
    #btnTab = this.querySelector(".btn-tab");
    #imgPreview = this.querySelector(".img-preview");
    #videoPreview = this.querySelector(".video-preview");
    #lnkWorker = this.querySelector(".lnk-qr-worker");
    #lastResult = "";
    #lastResultTime = 0;
    #currScanner;
    constructor() {
        super();
        this.#init();
    }
    async #init() {
        QrScanner.WORKER_PATH = this.#lnkWorker.href;
        this.#templateResult.content.loc();
        this.#templateResult.remove();
        this.#btnImage.addClick(() => void this.#scanImgAsync());
        this.#btnTab.addClick(() => void this.#scanTabAsync());
        const hasCamera = await QrScanner.hasCamera();
        if (hasCamera) {
            this.#btnVideo.disabled = false;
            this.#btnVideo.addEventListener("click", () => void this.#scanVideoAsync());
        }
        this.#lstResult.addDelegate("click", ".btn-copy", (_, btn) => void this.#copyAsync(btn));
    }
    async #scanTabAsync() {
        const result = await chrome.tabs.captureVisibleTab(undefined, {
            format: "png",
        });
        if (!result) {
            return;
        }
        const img = this.#imgPreview;
        this.#exclusiveDisplay(img);
        img.style.backgroundImage = `url(${result})`;
        try {
            const qr = await QrScanner.scanImage(result);
            this.#processResult(qr);
        }
        catch (e) { }
    }
    async #scanVideoAsync() {
        if (this.#currScanner) {
            this.#currScanner.stop();
            this.#currScanner = undefined;
            this.#btnVideo.classList.add("btn-success");
            this.#btnVideo.classList.remove("btn-danger");
        }
        else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                for (const track of stream.getTracks()) {
                    track.stop();
                }
                const video = this.#videoPreview;
                this.#exclusiveDisplay(video);
                const scanner = this.#currScanner = new QrScanner(video, (result) => {
                    this.#processResult(result, true);
                });
                scanner.start();
                this.#btnVideo.classList.add("btn-danger");
                this.#btnVideo.classList.remove("btn-success");
            }
            catch (e) {
                if (e.name == "NotAllowedError") {
                    chrome.tabs.create({
                        url: "/permission.html",
                    });
                    return;
                }
                console.error(e);
                try {
                    this.#currScanner.stop();
                }
                catch (e) {
                    console.error(e);
                }
                this.#currScanner = null;
                this.#btnVideo.classList.add("btn-success");
                this.#btnVideo.classList.remove("btn-danger");
            }
        }
    }
    async #scanImgAsync() {
        const file = await new Promise(r => {
            const txt = document.createElement("input");
            txt.type = "file";
            txt.accept = "image/*";
            txt.addEventListener("change", () => r(txt.files?.[0]));
            txt.click();
        });
        if (!file) {
            return;
        }
        const img = this.#imgPreview;
        this.#exclusiveDisplay(img);
        img.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        try {
            const result = await QrScanner.scanImage(file);
            this.#processResult(result);
        }
        catch (e) {
        }
    }
    async #copyAsync(el) {
        const text = this.#getResultItem(el);
        if (!text) {
            return;
        }
        await navigator.clipboard.writeText(text);
    }
    #getResultItem(el) {
        return el.closest(".list-group-item")?.content;
    }
    #exclusiveDisplay(el) {
        if (!el.parentElement) {
            return;
        }
        for (const c of el.parentElement.children) {
            c.setDisplay(c == el);
        }
    }
    #processResult(result, removeDuplicate) {
        if (!result) {
            return;
        }
        if (removeDuplicate) {
            if (result == this.#lastResult &&
                Date.now() - this.#lastResultTime < 3000) {
                return;
            }
        }
        let isUrl = true;
        try {
            new URL(result);
        }
        catch (e) {
            isUrl = false;
        }
        this.#lastResult = result;
        this.#lastResultTime = Date.now();
        this.#addResult(result, isUrl ? result : undefined);
    }
    #addResult(text, url) {
        const el = this.#templateResult.content.firstElementChild.cloneNode(true);
        el.content = text;
        el.setChildContent(".text", text);
        const txt = el.querySelector(".txt-content");
        txt.value = text;
        const a = el.querySelector(".btn-open");
        if (url) {
            a.href = url;
            a.target = "_blank";
        }
        else {
            a.remove();
        }
        if (this.#firstResult) {
            this.#firstResult = false;
            this.#lstResult.innerHTML = "";
        }
        this.#lstResult.insertBefore(el, this.#lstResult.firstElementChild);
    }
    static register() {
        customElements.define("main-app", this);
    }
}
//# sourceMappingURL=MainApp.js.map