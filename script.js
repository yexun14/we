/* =========================================
   화면 전환
========================================= */

const screens =
    document.querySelectorAll(".screen");


function showScreen(number) {

    const current =
        document.querySelector(".screen.active");

    const next =
        document.getElementById(
            "screen" + number
        );


    if (!next || current === next) {
        return;
    }


    current.classList.add("leaving");

    next.classList.add("active");


    setTimeout(() => {

        current.classList.remove(
            "active",
            "leaving"
        );

    }, 450);
}


/* =========================================
   봉투
========================================= */

const envelopeButton =
    document.getElementById(
        "envelopeButton"
    );


const screen1 =
    document.getElementById(
        "screen1"
    );


envelopeButton.addEventListener(
    "click",
    () => {

        screen1.classList.add(
            "opening"
        );


        setTimeout(() => {

            showScreen(2);

        }, 650);

    }
);


/* =========================================
   첫 번째 하트
========================================= */

document
    .getElementById("startButton")
    .addEventListener(
        "click",
        () => {

            showScreen(3);

        }
    );


/* =========================================
   YES
========================================= */

function yesAnswer() {

    showScreen(6);


    setTimeout(() => {

        createBurst(20);

    }, 400);

}


document
    .getElementById("yes1")
    .addEventListener(
        "click",
        yesAnswer
    );


document
    .getElementById("yes2")
    .addEventListener(
        "click",
        yesAnswer
    );


document
    .getElementById("yes3")
    .addEventListener(
        "click",
        yesAnswer
    );


/* =========================================
   NO
========================================= */

let noCount = 0;


document
    .getElementById("no1")
    .addEventListener(
        "click",
        () => {

            noCount++;

            showScreen(4);

        }
    );


document
    .getElementById("no2")
    .addEventListener(
        "click",
        () => {

            noCount++;

            showScreen(5);

        }
    );


document
    .getElementById("no3")
    .addEventListener(
        "click",
        () => {

            noCount++;

            yesAnswer();

        }
    );


/* =========================================
   마지막 하트
========================================= */

document
    .getElementById("finalButton")
    .addEventListener(
        "click",
        () => {

            createBurst(30);

        }
    );


/* =========================================
   하트 폭발
========================================= */

function createBurst(amount) {

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "burst-heart";


        heart.textContent =
            Math.random() > .3
                ? "♥"
                : "💗";


        heart.style.left =
            centerX + "px";


        heart.style.top =
            centerY + "px";


        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            90
            + Math.random() * 250;


        const x =
            Math.cos(angle)
            * distance;


        const y =
            Math.sin(angle)
            * distance;


        const rotation =
            -60
            + Math.random() * 120;


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        heart.style.setProperty(
            "--rotation",
            rotation + "deg"
        );


        heart.style.fontSize =
            16
            + Math.random() * 24
            + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },
            1000
        );

    }
}


/* =========================================
   배경 하트
========================================= */

const backgroundHearts =
    document.getElementById(
        "backgroundHearts"
    );


function createFloatingHeart() {

    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "floating-heart";


    heart.textContent =
        Math.random() > .45
            ? "♡"
            : "♥";


    heart.style.left =
        (5 + Math.random() * 90)
        + "%";


    heart.style.fontSize =
        (12 + Math.random() * 15)
        + "px";


    heart.style.setProperty(
        "--x",
        (-50 + Math.random() * 100)
        + "px"
    );


    heart.style.setProperty(
        "--rotation",
        (-40 + Math.random() * 80)
        + "deg"
    );


    heart.style.animationDuration =
        (7 + Math.random() * 7)
        + "s";


    backgroundHearts.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        15000
    );

}


for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createFloatingHeart,
        i * 500
    );

}


setInterval(
    createFloatingHeart,
    850
);