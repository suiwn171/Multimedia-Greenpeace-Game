
// function sound effect

var sound_bg = new Audio("sound/Bg.mp3");

var sound_pig = new Audio("sound/Pig.mp3");
sound_pig.volume = .5;
var sound_pig_hungry = new Audio("sound/Pighiwww.mp3");
var sound_pig_eat = new Audio("sound/Pigeat.mp3");
var sound_pig_die = new Audio("sound/Deathpig.mp3");
sound_pig_die.volume = .5;

var sound_shop_in = new Audio("sound/Shop.mp3");
sound_shop_in.volume = .5;
var sound_money = new Audio("sound/Money.mp3");

var sound_win = new Audio("sound/Win.mp3");
var sound_lose = new Audio("sound/Lose.mp3");

var sound_eto = new Audio("sound/Etopig.mp3");

var sound_click_icon = new Audio("sound/Icon.mp3");
sound_click_icon.volume = .2;

// function start_game

// ประกาศตัวแปร

function set_value(){
vaccine.style.boxShadow = "none";
vitamin.style.boxShadow = "none";
window_blur.style.zIndex = "0";
lose_pop.style.top = "100%";
lose_pop.style.transform = "translate(-50%)";
win_pop.style.top = "100%";
win_pop.style.transform = "translate(-50%)";
game_is_started = 1;
game_is_paused = 0;
tutorial_is_show = 1;
tutorial_in_game = 1;

customer_remove = 0;
time_use_sound_pig = 0;

total_money = 100000;
// ประกาศตัวแปร
// ตัวแปรค่าเวลาต่างๆ
time_check_pig_hungry = 0;
time_pig_hungry = 10;
time_check_pig_die = 0;
// ตัวแปรเช็คสถานะของไอคอนต่างๆ
icon_food_ready_to_use = 0;
icon_eto_ready_to_use = 0;
// ตัวแปรเกี่ยวกับหลอดการเจริญเติบโตของหมู
keep_fill = 0;
// ตัวแปรเกี่ยวกับการใช้งานของ supply
vaccine_is_using = 0;
vitamin_is_using = 0;
// ตัวแปรเกี่ยวกับเวลาการใช้งานของ vaccine
time_vaccine_is_using = 0;
// ตัวแปรเกี่ยวกับอนิเมชั่นของหมู
scale_tua_pig = 0.5;
keep_bg_tua_pig = ["picture/pig1.png", "picture/pig4.png", "picture/pig3.png"];
number_array_of_keep_bg_tua_pig = 0;
pig_is_die = 0;
// ตัวแปรเก็บเนื้อหมู
store_meat_pig = [0];
store_total_drug_resistant_infection = [0, 0, 0, 0, 0, 0];
store_tua_customer = ["picture/customer_1.png", "picture/customer_2.png", "picture/customer_3.png",
    "picture/customer_4.png", "picture/customer_5.png", "picture/customer_6.png"]
index_of_customer = 0;

customer_is_waiting = 0;
time_customer_is_waiting = 0;
time_call_customer = 0;
customer_is_done = 0;

buy = 0;
change_to_pig();
fill_bar();
change_burger();
}
var game_is_started = 0;
var game_is_paused = 1;
var tutorial_is_show = 0;
var tutorial_in_game = 0;

var customer_remove = 0;
var time_use_sound_pig = 0;

var total_money = 100000;
// ประกาศตัวแปร
// ตัวแปรค่าเวลาต่างๆ
var time_check_pig_hungry = 0;
var time_pig_hungry = 10;
var time_check_pig_die = 0;
// ตัวแปรเช็คสถานะของไอคอนต่างๆ
var icon_food_ready_to_use = 0;
var icon_eto_ready_to_use = 0;
// ตัวแปรเกี่ยวกับหลอดการเจริญเติบโตของหมู
var keep_fill = 0;
// ตัวแปรเกี่ยวกับการใช้งานของ supply
var vaccine_is_using = 0;
var vitamin_is_using = 0;
// ตัวแปรเกี่ยวกับเวลาการใช้งานของ vaccine
var time_vaccine_is_using = 0;
// ตัวแปรเกี่ยวกับอนิเมชั่นของหมู
var scale_tua_pig = 0.5;
var keep_bg_tua_pig = ["picture/pig1.png", "picture/pig4.png", "picture/pig3.png"];
var number_array_of_keep_bg_tua_pig = 0;
var pig_is_die = 0;
// ตัวแปรเก็บเนื้อหมู
var store_meat_pig = [0];
var store_total_drug_resistant_infection = [0, 0, 0, 0, 0, 0];
var store_tua_customer = ["picture/customer_1.png", "picture/customer_2.png", "picture/customer_3.png",
    "picture/customer_4.png", "picture/customer_5.png", "picture/customer_6.png"]
var index_of_customer = 0;

var customer_is_waiting = 0;
var time_customer_is_waiting = 0;
var time_call_customer = 0;
var customer_is_done = 0;

var buy = 0;

// run game ส่วนของหมู และ ส่วนของร้านค้า

setInterval(function () {
    if (game_is_started && !game_is_paused) {
        change_money();
        total_money = total_money - 500;
        if(total_money <= -10000){
            father.style.backgroundImage = "url('picture/father_semi_angry.png')";
        }
        else if(total_money > 300000){
            father.style.backgroundImage = "url('picture/father_o.png')";
        }
        else if(total_money > 700000){
            father.style.backgroundImage = "url('picture/father_smile.png')";
        }
        else{
            father.style.backgroundImage = "url('picture/father_normal.png')";
        }
        if (total_money <= -100000) {
            father.style.backgroundImage = "url('picture/father_angry.png')";
            lose();
        }
        else if(total_money >= 1000000){
            win();
        }
        if(vaccine_is_using){
            total_money = total_money - 500;
            change_money();
        }
        if(vitamin_is_using){
            total_money = total_money - 300;
            change_money();
        }
        time_use_sound_pig += 1;
        if (time_use_sound_pig >= 4) {
            time_use_sound_pig = 0;
            sound_pig.play();
        }
        run_game_pig();
        if (!customer_is_waiting) {
            time_call_customer += 1;
            if (time_call_customer > 2) {
                run_game_shop();
                time_call_customer = 0;
            }
        }
    }
    if (game_is_paused) {
        clearInterval(call_customer);
    }
}, 1 * 1000);

function click() {
    sound_click_icon.play();
}

function play() {
    game_is_paused = 0;
}

function pause() {
    game_is_paused = 1;
}
function change_money() {
    money.innerText = total_money;
}
function change_burger(){
    burger.innerText = store_meat_pig.length;
}

// function แพ้ชนะ
function lose() {
    sound_lose.play();
    window_blur.style.zIndex = "3";
    game_is_paused = 1;
    lose_pop.style.top = "50%";
    lose_pop.style.transform = "translate(-50%, -50%)";
}
function win() {
    sound_win.play();
    window_blur.style.zIndex = "3";
    game_is_paused = 1;
    win_pop.style.top = "50%";
    win_pop.style.transform = "translate(-50%, -50%)";
}
// ------------------------------------------------------------------------------------------------
// function ส่วนหน้าเมนู

function pop_up_tutorial() {
    // เด้ง pop up
    window_blur.style.zIndex = "3";
    let pop_up = document.querySelector(".pop_up_tutorial");
    pop_up.style.top = "50%";
    pop_up.style.transform = "translate(-50%, -50%)";
}
function exist_pop_up_tutorial() {
    // เอา pop up ลง
    window_blur.style.zIndex = "0";
    let pop_up = document.querySelector(".pop_up_tutorial");
    pop_up.style.top = "100%";
    pop_up.style.transform = "translate(-50%)";
    if (tutorial_in_game) {
        tutorial_is_show = 1;
        game_is_paused = 0;
    }
}
function pop_up_story() {
    // เด้ง pop up
    window_blur.style.zIndex = "3";
    let pop_up = document.querySelector(".pop_up_story");
    pop_up.style.top = "50%";
    pop_up.style.transform = "translate(-50%, -50%)";
}
function exist_pop_up_story() {
    // เอา pop up ลง
    window_blur.style.zIndex = "0";
    let pop_up = document.querySelector(".pop_up_story");
    pop_up.style.top = "100%";
    pop_up.style.transform = "translate(-50%)";
}

// function ส่วนการสลับหน้าจอ

function change_to_menu() {
    lose_pop.style.top = "100%";
    lose_pop.style.transform = "translate(-50%)";
    window_blur.style.zIndex = "0";
    let window_menu = document.querySelector(".window_main_menu");
    let window_pig = document.querySelector(".window_main_pig");
    let window_shop = document.querySelector(".window_main_shop");
    let icon_menu = document.querySelector(".icon_menu");
    let icon_pig = document.querySelector(".icon_pig");
    let icon_shop = document.querySelector(".icon_shop");
    let button_in_menu = document.querySelector(".button_start, .button_tutorial");
    let money = document.querySelector(".money");
    let burger = document.querySelector(".burger");
    let father = document.querySelector(".father");
    let option = document.querySelector(".box_option");
    let icon_hungry = document.querySelector(".icon_hungry");
    button_in_menu.style.cursor = "pointer";
    window_menu.style.opacity = "1";
    window_menu.style.zIndex = "1";
    window_pig.style.opacity = "0";
    window_pig.style.zIndex = "0";
    window_shop.style.opacity = "0";
    window_shop.style.zIndex = "0";
    icon_menu.style.zIndex = "0";
    icon_pig.style.zIndex = "0";
    icon_shop.style.zIndex = "0";
    money.style.zIndex = "0";
    burger.style.zIndex = "0";
    father.style.zIndex = "0";
    option.style.zIndex = "0";
    icon_hungry.style.zIndex = "0";
    game_is_started = 0;
}
function change_to_pig() {
    let window_menu = document.querySelector(".window_main_menu");
    let window_pig = document.querySelector(".window_main_pig");
    let window_shop = document.querySelector(".window_main_shop");
    let icon_menu = document.querySelector(".icon_menu");
    let icon_pig = document.querySelector(".icon_pig");
    let icon_shop = document.querySelector(".icon_shop");
    let button_in_menu = document.querySelector(".button_start, .button_tutorial");
    let money = document.querySelector(".money");
    let burger = document.querySelector(".burger");
    let father = document.querySelector(".father");
    let option = document.querySelector(".box_option");
    let icon_hungry = document.querySelector(".icon_hungry");
    button_in_menu.style.cursor = "default";
    window_menu.style.opacity = "0";
    window_menu.style.zIndex = "0";
    window_pig.style.opacity = "1";
    window_pig.style.zIndex = "1";
    window_shop.style.opacity = "0";
    window_shop.style.zIndex = "0";
    icon_menu.style.zIndex = "1";
    icon_pig.style.zIndex = "1";
    icon_shop.style.zIndex = "1";
    money.style.zIndex = "1";
    burger.style.zIndex = "1";
    father.style.zIndex = "1";
    option.style.zIndex = "1";
    icon_hungry.style.zIndex = "1";
    game_is_started = 1;
    if (!tutorial_is_show) {
        tutorial_in_game = 1;
        pop_up_tutorial();
    }
}
function change_to_shop() {
    let window_menu = document.querySelector(".window_main_menu");
    let window_pig = document.querySelector(".window_main_pig");
    let window_shop = document.querySelector(".window_main_shop");
    let icon_menu = document.querySelector(".icon_menu");
    let icon_pig = document.querySelector(".icon_pig");
    let icon_shop = document.querySelector(".icon_shop");
    let button_in_menu = document.querySelector(".button_start, .button_tutorial");
    let money = document.querySelector(".money");
    let burger = document.querySelector(".burger");
    let father = document.querySelector(".father");
    let option = document.querySelector(".box_option");
    let icon_hungry = document.querySelector(".icon_hungry");
    button_in_menu.style.cursor = "pointer";
    window_menu.style.opacity = "0";
    window_menu.style.zIndex = "0";
    window_pig.style.opacity = "0";
    window_pig.style.zIndex = "0";
    window_shop.style.opacity = "1";
    window_shop.style.zIndex = "1";
    icon_menu.style.zIndex = "1";
    icon_pig.style.zIndex = "1";
    icon_shop.style.zIndex = "1";
    money.style.zIndex = "1";
    burger.style.zIndex = "1";
    father.style.zIndex = "1";
    option.style.zIndex = "1";
    icon_hungry.style.zIndex = "1";
}

// ------------------------------------------------------------------------------------------------
// function ส่วนเล้าหมู



// function run game
function run_game_pig() {
    if (!icon_eto_ready_to_use) {
        if (time_check_pig_hungry >= time_pig_hungry) {
            // เปลี่ยนไอคอนอาหารให้สามารถกดได้
            icon_food_ready_to_use = 1;
            change_icon_food();
            // หมูตาย
            time_check_pig_die += 1;
            if (time_check_pig_die >= 5) {
                sound_pig_die.play();
                // รีเซ็ตค่าเวลาต่างๆ
                time_check_pig_die = 0;
                time_check_pig_hungry = 0;
                time_vaccine_is_using = 0;
                // เซ็ตไอคอนอาหารให้ ไม่ สามารถกดได้
                icon_food_ready_to_use = 0;
                change_icon_food();
                // เปลี่ยนหลอดการเจริญเติบโต
                keep_fill = 0;
                pig_is_die = 1;
                fill_bar();
                check_fill_bar();
            }
        } else {
            time_check_pig_hungry += 1;
        }
    }
}
// 

// function animation หมูตัวโตขึน

function check_fill_bar() {
    let tua_pig = document.querySelectorAll(".tua_pig");
    if (keep_fill >= 100) {
        // กันเกิน 100
        keep_fill = 100;
        scale_tua_pig = 1;
        // เปลี่ยน bg ตัวหมูให้พร้อมเก็บ
        number_array_of_keep_bg_tua_pig = 1;
        // เปลี่ยนไอคอนอีโต้ให้สามารถกดได้
        icon_eto_ready_to_use = 1;
        change_icon_eto();
    }
    else if (keep_fill >= 75) {
        scale_tua_pig = 1;
    }
    else if (keep_fill >= 50) {
        scale_tua_pig = 0.85;
    }
    else if (keep_fill >= 25) {
        scale_tua_pig = 0.7;
    } else {
        scale_tua_pig = 0.5;
        // เปลี่ยน bg ตัวหมูให้พร้อมเก็บ
        number_array_of_keep_bg_tua_pig = 0;
    }
    if (pig_is_die) {
        number_array_of_keep_bg_tua_pig = 2;
        pig_is_die = 0;
        setTimeout(function () {
            total_money = total_money-50000;
            change_money();
            scale_tua_pig = 0.5;
            number_array_of_keep_bg_tua_pig = 0;
            for (let i = 0; i < 10; i++) {
                tua_pig[i].style.transform = `scale(${scale_tua_pig})`;
                tua_pig[i].style.backgroundImage = `url("${keep_bg_tua_pig[number_array_of_keep_bg_tua_pig]}")`;
            }
        }, 1.5 * 1000);
        setTimeout(function () {
            scale_tua_pig = 0;
            for (let i = 0; i < 10; i++) {
                tua_pig[i].style.transform = `scale(${scale_tua_pig})`;
                tua_pig[i].style.backgroundImage = `url("${keep_bg_tua_pig[number_array_of_keep_bg_tua_pig]}")`;
            }
        }, .7 * 1000);
    }
    for (let i = 0; i < 10; i++) {
        tua_pig[i].style.transform = `scale(${scale_tua_pig})`;
        tua_pig[i].style.backgroundImage = `url("${keep_bg_tua_pig[number_array_of_keep_bg_tua_pig]}")`;
    }
}

// function fill bar การเจริญเติบโตของหมู

function fill_bar() {
    let fill_bar = document.querySelector(".fill_bar");
    fill_bar.style.width = `${keep_fill}%`;
}

// function random number

function random_num(min, max) {
    return Math.random() * (max - min) + min;
}

// function change_icon

function change_icon_food() {
    let icon_food = document.querySelectorAll(".food");
    let icon_hungry = document.querySelector(".icon_hungry");
    if (icon_food_ready_to_use) {
        // เซ็ตไอคอนอาหารให้สามารถกดได้
        for (let i = 0; i < 3; i++) {
            icon_food[i].style.opacity = "1";
            icon_food[i].style.cursor = "pointer";
            icon_food[i].setAttribute("onclick", "use_food(this)");
        }
        icon_hungry.style.opacity = "1";
        icon_hungry.style.display = "block";
    } if (!icon_food_ready_to_use) {
        // เซ็ตไอคอนอาหารให้ ไม่ สามารถกดได้
        for (let i = 0; i < 3; i++) {
            icon_food[i].style.opacity = ".3";
            icon_food[i].style.cursor = "default";
            icon_food[i].setAttribute("onclick", "none")
        }
        icon_hungry.style.opacity = "0";
        icon_hungry.style.display = "none";
    }
}
function change_icon_eto() {
    let icon_eto = document.querySelector(".icon_eto");
    if (icon_eto_ready_to_use) {
        // เซ็ตไอคอนอีโต้ให้สามารถกดได้
        icon_eto.style.opacity = "1";
        icon_eto.style.cursor = "pointer";
        icon_eto.setAttribute("onclick", "use_eto()");
    } else {
        // เซ็ตไอคอนอีโต้ให้ ไม่ สามารถกดได้
        icon_eto.style.opacity = ".3";
        icon_eto.style.cursor = "default";
        icon_eto.setAttribute("onclick", "none");
    }
}

// function use_food_supply_eto

function use_food(f) {
    // เปลี่ยนไอคอนอาหารให้ ไม่ สามารถกดได้
    icon_food_ready_to_use = 0;
    change_icon_food();

    sound_pig_eat.play();
    // เปลี่ยนหลอดการเจริญเติบโตของหมู
    let fill = f.getAttribute("fill");
    fill = parseInt(fill);
    keep_fill += fill;
    fill_bar();
    // เช็คหลอดการเจริญเติบโตของหมูว่าถึงไหนแล้ว
    if(fill == 20){
        total_money = total_money - 3000;
    }
    else if(fill == 15){
        total_money = total_money - 2000;
    }else{
        total_money = total_money - 1000;
    }
    change_money();
    check_fill_bar();
    // reset ค่า
    time_check_pig_hungry = 0;
    time_check_pig_die = 0;
}
function use_supply(h) {
    let check = h.getAttribute("id");
    let time_hungry = h.getAttribute("hungry");
    // ถ้ากดใช้ vitamin
    if (check == "vitamin") {
        vaccine.style.boxShadow = "none";
        vaccine_is_using = 0;
        // ถ้ากดแล้ว vitamin ไม่ได้ใช้อยู่ให้ vitamin ทำงาน
        if (!vitamin_is_using) {
            total_money = total_money - 15000;
            change_money();
            vitamin.style.boxShadow = "0px 0px 10px 5px black";
            vitamin_is_using = 1;
            clearInterval(interval_vaccine_is_using);
            time_pig_hungry = parseInt(time_hungry);
            // ถ้ากดแล้ว vitamin กำลังใช้อยู่ให้ปิดการทำงานของ vitamin
        } else {
            vitamin.style.boxShadow = "none";
            vitamin_is_using = 0;
            time_pig_hungry = 10;
        }
        // ถ้ากดใช้ vaccine
    } else {
        vitamin.style.boxShadow = "none";
        vitamin_is_using = 0;
        // ถ้ากดแล้ว vaccine ไม่ได้ใช้อยู่ให้ vaccine ทำงาน
        if (!vaccine_is_using) {
            total_money = total_money - 20000;
            change_money();
            vaccine.style.boxShadow = "0px 0px 10px 5px black";
            vaccine_is_using = 1;
            interval_vaccine_is_using = setInterval(function () {
                if (!icon_eto_ready_to_use && !icon_food_ready_to_use) {
                    time_vaccine_is_using += 1;
                }
            }, 1 * 1000);
            time_pig_hungry = parseInt(time_hungry);
            // ถ้ากดแล้ว vaccine กำลังใช้อยู่ให้ปิดการทำงานของ vaccine
        } else {
            vaccine.style.boxShadow = "none";
            vaccine_is_using = 0;
            clearInterval(interval_vaccine_is_using);
            time_pig_hungry = 10;
        }
    }
}
function use_eto() {
    // เปลี่ยนไอคอนอีโต้ให้ ไม่สามารถกดได้
    icon_eto_ready_to_use = 0;
    change_icon_eto();
    sound_pig_die.play();
    // เปลี่ยนหลอดการเจริญเติบโตของหมู
    keep_fill = 0;
    fill_bar();
    // เปลี่ยน bg หมูในกลับมาเป็นปกติ
    pig_is_die = 1;
    check_fill_bar();
    // เก็บเนื้อใส่ในคลัง
    for (let i = 0; i < 6; i++) {
        let plus_minus = random_num(40 / 100, 100 / 100);
        store_meat_pig.push(time_vaccine_is_using * plus_minus);
    }
    change_burger();
    // reset ค่า
    time_check_pig_die = 0;
    time_check_pig_hungry = 0;
    time_vaccine_is_using = 0;

}

// ------------------------------------------------------------------------------------------------
// function ส่วนร้านค้า

// ประกาศตัวแปร

// function move customer

function move_customer(customer_is_waiting) {
    let tua_customer = document.querySelector(".tua_customer");
    // ถ้า customer รออยู่ให้ย้าย customer มาไว้ตรงกลางหน้าจอ
    if (customer_is_waiting) {
        sound_shop_in.play();
        tua_customer.style.transition = "2s";
        tua_customer.style.transform = "translate(-50%)";
        tua_customer.style.left = "50%";
        // ถ้า customer ไม่ได้รอ customer จะเดินไปทางขวา
    } else {
        tua_customer.style.transition = "2s";
        tua_customer.style.transform = "translate(0%)";
        tua_customer.style.left = "100%";
        // ให้ customer ย้ายไปทางซ้ายตำแหน่งเดิม
        setTimeout(function () {
            tua_customer.style.transition = "0s";
            tua_customer.style.transform = "translate(0%)";
            tua_customer.style.left = "-50%";
            // ให้ หลอดสะสมเชื้อดื้อยามีความยาวเท่ากับตัว customer นั้นๆ
            let fill_bar_tua_customer = document.querySelector(".fill_bar_tua_customer");
            fill_bar_tua_customer.style.width = `${store_total_drug_resistant_infection[index_of_customer]}%`;
            // เปลี่ยนตัว customer
            tua_customer.style.backgroundImage = `url(${store_tua_customer[index_of_customer]})`;

        }, 2 * 1000);
    }
}

// function run_game_shop

function run_game_shop() {
    let fill_bar_tua_customer = document.querySelector(".fill_bar_tua_customer");
    // เรียกตัว customer ให้มากลางร้าน
    customer_is_waiting = 1;
    move_customer(customer_is_waiting);
    // เซ็ตค่าว่า customer ยังซื้อไม่เสร็จ
    customer_is_done = 0;
    call_customer = setInterval(function () {
        time_customer_is_waiting += 1;
        if (store_meat_pig.length > 0) {
            buy = 1;
            // customer ซื้อได้
            customer_is_done = 1;
            // ทำการเก็บค่าเชื้อติดยาที่อยู่ในเนื้อใส่ตัว customer
            store_total_drug_resistant_infection[index_of_customer] += store_meat_pig[0];
            store_meat_pig.shift();
        }
        // ถ้ารอนานเกิน 15 วิ
        if (time_customer_is_waiting > 15) {
            customer_is_done = 1;
        }
        // ถ้า customer เสร็จแล้ว
        if (customer_is_done) {
            setTimeout(function () {
                if (buy) {
                    sound_money.play();
                    total_money = total_money + 50000;
                    change_money();
                    change_burger();
                }
                // ทำการเติมหลอดสะสมเชื้อดื้อยาของ customer
                if(store_total_drug_resistant_infection[index_of_customer] >= 100){
                    store_total_drug_resistant_infection[index_of_customer] = 100;
                }
                fill_bar_tua_customer.style.width = `${store_total_drug_resistant_infection[index_of_customer]}%`;
                if(store_total_drug_resistant_infection[index_of_customer] >= 70){
                    store_total_drug_resistant_infection.splice(index_of_customer, 1);
                    customer_remove = customer_remove+1;
                }
                if(store_total_drug_resistant_infection[index_of_customer] < 70 || index_of_customer == 5-customer_remove){
                    index_of_customer++;
                }
                if(customer_remove > 5){
                    lose();
                }
                // ทำการเปลี่ยน customer เป็นคนถัดไป
                // ถ้าเกินจำนวน customer ที่มีให้กลับไปเป็นคนแรก
                if (index_of_customer > 5-customer_remove) {
                    index_of_customer = 0;
                }
                buy = 0;
            }, 1 * 1000);
            // ทำการยกเลิกการรอ
            clearInterval(call_customer);
            // ทำการย้ายตัว customer
            setTimeout(function () {
                // ย้ายตัว customer ไปทางขวา
                customer_is_waiting = 0;
                move_customer(customer_is_waiting);
                time_customer_is_waiting = 0;
            }, 3 * 1000);
        }
    }, 1 * 1000);
}

// ------------------------------------------------------------------------------------------------