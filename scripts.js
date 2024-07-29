function Redirect() {
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=enquiry@alicedevelopments.com&su=Enquiry Regarding Alice Developments", "_blank");
    }



const phrase = ["Developments"];
const el = document.getElementById("typewriter");

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let sleepTime = 150;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true){
        let curWord = phrase[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10)

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10)
    }
};

writeLoop();
