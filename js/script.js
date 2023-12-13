// ---------------------------------drower

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});




// document.addEventListener("DOMContentLoaded", function() {
//     // 全てのFAQ-Q要素を取得
//     const faqQuestions = document.querySelectorAll('.FAQ-Q');

//     // 各FAQ-Q要素にクリックイベントを追加
//     faqQuestions.forEach(question => {
//         question.addEventListener('click', function() {
//             // 対応するFAQ-A要素のクラスをトグル
//             const answer = question.nextElementSibling; // FAQ-A要素を取得
//             answer.classList.toggle('displayBlock');
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.FAQ-Q');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = question.nextElementSibling;

            if (!answer.classList.contains('displayBlock')) {
                const allAnswers = document.querySelectorAll('.FAQ-A');
                allAnswers.forEach(ans => {
                    ans.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
                    ans.style.maxHeight = '0';
                    ans.style.opacity = '0';
                    ans.classList.remove('displayBlock');
                });

                answer.classList.add('displayBlock');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
            } else {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.classList.remove('displayBlock');
            }
        });
    });
});




const fadeInTarget = document.querySelectorAll('.fadeInTarget'); 

function observation(){
    // 各要素に対して処理を繰り返す
    fadeInTarget.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__fadeIn'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__fadeIn');
        }
    });
};
// スクロールイベントを追加
window.addEventListener('scroll', observation);



const fadeInTarget01 = document.querySelectorAll('.fadeInTarget01'); 

function observation01(){
    // 各要素に対して処理を繰り返す
    fadeInTarget01.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__fadeInLeft'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__fadeInLeft');
        }
    });
};
// スクロールイベントを追加
window.addEventListener('scroll', observation01);