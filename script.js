//Declares all places as objects:
const startingPath = {
    visited: false,
    img: "https://img.freepik.com/premium-photo/old-green-edge-forest-humidity-moss-trees-path-leading-through-dense-fairytale-forest_86390-10375.jpg",
    text1: "Today you've decided to take a walk in a local forest. You've been here many times before, but today seems different. The forest seems greener. The birds are singing and even crossing your path. Press the up arrow key to keep walking.",
    text2: "You've returned to a familiar path. I wonder if you'll ever see that portal again. Press the up arrow key to return to the portal.",
}
let currentPage = startingPath;

const portal = {
    visited: false,
    img: "https://as1.ftcdn.net/v2/jpg/05/40/95/08/1000_F_540950809_3FWosaP1ueYJ6QVla5SfdaAGMTPwU9gC.jpg",
    text1: "What! Is that...a portal? Is that why the forest seems so different today? Where does it go? Do you dare find out? Press the up arrow key to continue.",
    text2: "Press the up arrow key to re-enter the portal. Press the down arrow key to go home."
}
const forkedPath = {
    visited: false,
    img: "https://jkroots.com/wp-content/uploads/2018/10/enchanted_forest_2_by_jkroots-daxl6xh.jpg",
    text1: "text",
    text2: "text",
}
const coveredPath = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65282199-9f85-4daa-bcd6-de2f615bcca7/dfmb909-a1146529-df3c-4ad2-885f-89c56c667358.png/v1/fit/w_828,h_828,q_70,strp/path_through_an_enchanted_forest_version_1_by_pm_artistic_dfmb909-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY1MjgyMTk5LTlmODUtNGRhYS1iY2Q2LWRlMmY2MTViY2NhN1wvZGZtYjkwOS1hMTE0NjUyOS1kZjNjLTRhZDItODg1Zi04OWM1NmM2NjczNTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.60xIH9oaHILuKa4qbFpYtgunL2htU-llQmqB6hEhf6k",
    text1: "text",
    text2: "text",
}
const treeVillage = {
    visited: false,
    img: "https://wallpapers.com/images/hd/mystical-forest-1920-x-1200-zggop07wd2gh8vmg.jpg",
    text1: "text",
    text2: "text",
}
const bridge = {
    visited: false,
    img: "https://w0.peakpx.com/wallpaper/76/291/HD-wallpaper-enchanted-forest-art-forest-river-fantasy.jpg",
    text1: "text",
    text2: "text",
}
const firefly = {
    visited: false,
    img: "https://aiartshop.com/cdn/shop/products/magical-forest-01-ai-painting-917.webp?v=1677621643",
    text1: "text",
    text2: "text",
}
const fireflyTree = {
    visited: false,
    img: "https://www.bhmpics.com/downloads/enchanted-forest-desktop-wallpaper-/25.1582033499_enchanted-forest_vsthemes_ru-21.webp",
    text1: "text",
    text2: "text",
}
const altFireflyTree = {
    visited: false,
    img: "https://e1.pxfuel.com/desktop-wallpaper/614/830/desktop-wallpaper-enchanted-forest-enchanted-forest-backgrounds-mystical-forest.jpg",
    text1: "text",
    text2: "text",
}
const upstream = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0dce719a-cfab-4cbd-b5f0-6305626028e6/d6u1xef-2904418a-6874-44c6-a252-c06e7ec9bc6d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkY2U3MTlhLWNmYWItNGNiZC1iNWYwLTYzMDU2MjYwMjhlNlwvZDZ1MXhlZi0yOTA0NDE4YS02ODc0LTQ0YzYtYTI1Mi1jMDZlN2VjOWJjNmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1JFOYPHMUdvnp8uxEjXE3Mo7AvXll8mPq7m46oXZOEU",
    text1: "text",
    text2: "text",
}
const waterfall = {
    visited: false,
    img: "https://w0.peakpx.com/wallpaper/700/796/HD-wallpaper-fantasy-forest-forest-colorful-lovely-view-colors-beautiful-magic-trees-swamp-valley-warrior-water-splendor-green-men.jpg",
    text1: "text",
    text2: "text",
}
const treeHouse = {
    visited: false,
    img: "https://images.nightcafe.studio/jobs/wi0XlQDMXSgsQywQQ0FE/wi0XlQDMXSgsQywQQ0FE--2--g8ety.jpg?tr=w-1600,c-at_max",
    text1: "text",
    text2: "text",
}
const downstream1 = {
    visited: false,
    img: "https://as1.ftcdn.net/v2/jpg/05/47/03/72/1000_F_547037240_LUekRoVId3q55j70Spyea0K6SdsJjzFo.jpg",
    text1: "text",
    text2: "text",
}
const dam = {
    visited: false,
    img: "https://as2.ftcdn.net/v2/jpg/05/73/05/69/1000_F_573056930_NCI3XfYl3vaJQKiqZXtTmPy77z7RGK8y.jpg",
    text1: "text",
    text2: "text",
}
const swampLost = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0975fc90-2a41-4206-9525-18338e368074/d966lr9-1f0cab17-f5df-4b5d-a95a-1ecd07806dcd.jpg/v1/fit/w_828,h_606,q_70,strp/swamp_by_adampaquette_d966lr9-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA0IiwicGF0aCI6IlwvZlwvMDk3NWZjOTAtMmE0MS00MjA2LTk1MjUtMTgzMzhlMzY4MDc0XC9kOTY2bHI5LTFmMGNhYjE3LWY1ZGYtNGI1ZC1hOTVhLTFlY2QwNzgwNmRjZC5qcGciLCJ3aWR0aCI6Ijw9MTEwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D2qN6t3k8SMJF2bjbg2DPJiqdaed_-TVpPKtap7wfOg",
    text1: "text",
    text2: "text",
}
const beyondDam = {
    visited: false,
    img: "https://i.pinimg.com/originals/16/f2/77/16f277499b1b23f53372815889c15e00.jpg",
    text1: "text",
    text2: "text",
}
const swampVillage = {
    visited: false,
    img: "https://e0.pxfuel.com/wallpapers/609/778/desktop-wallpaper-%E2%9C%BC-lanterns-in-the-swamp-%E2%9C%BC-lanterns-colors-scenery-trees-jungle-lamps-attractions-in-dreams-forests-paintings-swamp-beautiful-fireflies-creative-pre-made-love-four-seasons-landscapes.jpg",
    text1: "text",
    text2: "text",
}
const swampCircle = {
    visited: false,
    img: "https://images.nightcafe.studio/jobs/8qWAPhnH1CBqk9pBaFh1/8qWAPhnH1CBqk9pBaFh1--2--9kc8q_2x.jpg?tr=w-1600,c-at_max",
    text1: "text",
    text2: "text",
}
const swampRuins = {
    visited: false,
    img: "https://images.nightcafe.studio/jobs/pWlflDYguTfYUdbhhKjN/pWlflDYguTfYUdbhhKjN--1--jwcey_2x.jpg?tr=w-1600,c-at_max",
    text1: "text",
    text2: "text",
}

//Updates all places with their connections
startingPath.forward = portal

portal.backward = startingPath
portal.forward = forkedPath

forkedPath.backward = portal
forkedPath.left = coveredPath
forkedPath.right = bridge

coveredPath.backward = forkedPath
coveredPath.forward = treeVillage

treeVillage.backward = coveredPath

bridge.backward = forkedPath
bridge.forward = firefly
bridge.left = downstream1
bridge.right = upstream

firefly.backward = bridge
firefly.forward = fireflyTree

fireflyTree.backward = firefly

downstream1.backward = bridge
downstream1.forward = dam
downstream1.right = swampLost

dam.backward = downstream1
dam.forward = beyondDam
dam.right = swampVillage

swampVillage.backward = dam

beyondDam.backward = dam

swampLost.backward = downstream1

upstream.backward = bridge
upstream.forward = waterfall

waterfall.backward = upstream
waterfall.forward = treeHouse

treeHouse.backward = waterfall

//functions for dynamically changing the image and text on screen
function changeImgTo (newImg) {
    const oldImg = document.getElementById("view");
    oldImg.src = newImg;
}

function changeTextTo (newText) {
    const description = document.getElementById("description");
    const oldText = document.getElementById("text");
    description.removeChild(oldText);

    const p = document.createElement('p');
    p.setAttribute("id", "text");
    p.textContent = newText;
    document.getElementById("description").append(p);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        changeImgTo(currentPage.forward.img);
        if (currentPage.forward.visited === true) {
            changeTextTo(currentPage.forward.text2);
        }   else {
            changeTextTo(currentPage.forward.text1);
        }
        currentPage.visited = true;
        currentPage = currentPage.forward;
    }

    if (event.key === "ArrowDown") {
        changeImgTo(currentPage.backward.img);
        changeTextTo(currentPage.backward.text2);
        currentPage = currentPage.backward;
    }

    if (event.key === "ArrowLeft") {
        changeImgTo(currentPage.left.img);
        if (currentPage.left.visited === true) {
            changeTextTo(currentPage.left.text2);
        }   else {
            changeTextTo(currentPage.left.text1);
        }
        currentPage.visited = true;
        currentPage = currentPage.left;
    }

    if (event.key === "ArrowRight") {
        changeImgTo(currentPage.right.img);
        if (currentPage.right.visited === true) {
            changeTextTo(currentPage.right.text2);
        }   else {
            changeTextTo(currentPage.right.text1);
        }
        currentPage.visited = true;
        currentPage = currentPage.right;
    }

})   

//doesn't work, but was trying to remove the title text once an up arrow key is hit for the first time. could potentially do this when the key goes up
// if (currentPage === portal) {
//     document.getElementById("welcome").remove()
//     document.getElementById("choose").remove()
// }


if (Boolean(document.getElementById("titleScreen"))) {
    document.addEventListener("keyup", function (event) {
        div = document.getElementById("titleScreen")
        div.remove()
    })}

