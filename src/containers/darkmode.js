// this was made by dumo i yoinked it from https://github.com/thepython555/ba4x-player
// but this was modified for darkmode

let injected = false;

const load = () => {
    if (injected) return;
    injected = true;

    const script = document.createElement('script');
    script.src = `https://github.com/VFDan/Scratch-Dark-Theme/raw/master/Scratch%20Dark%20Mode.user.js`;

    document.head.appendChild(script);
};

export default {
    load
}