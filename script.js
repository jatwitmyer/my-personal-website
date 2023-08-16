//Declares all places as objects:
const startingPath = {
    visited: false,
    img: "https://img.freepik.com/premium-photo/old-green-edge-forest-humidity-moss-trees-path-leading-through-dense-fairytale-forest_86390-10375.jpg",
    text1: "Today you've decided to take a walk in a local forest. You've been here many times before, but today seems different. The forest seems greener. The birds are singing and even crossing your path. Press the up arrow key to keep walking.",
    text2: "You've returned to a familiar path. You wonder if you'll ever see that portal again. Press the up arrow key to return to the portal.",
}
let currentPage = startingPath;

const portal = {
    visited: false,
    img: "https://as1.ftcdn.net/v2/jpg/05/40/95/08/1000_F_540950809_3FWosaP1ueYJ6QVla5SfdaAGMTPwU9gC.jpg",
    text1: "What!? Is that...a portal? Is that why the forest seems so different today? Where does it go? Do you dare find out? Press the up arrow key to continue.",
    text2: "Press the up arrow key to re-enter the portal. Press the down arrow key to go home."
}
const forkedPath = {
    visited: false,
    img: "https://jkroots.com/wp-content/uploads/2018/10/enchanted_forest_2_by_jkroots-daxl6xh.jpg",
    text1: "You close your eyes and step through the portal. When you open them, you find that you're still in a forest and the path is marked by a cairn: someone's been here before. A stream babbles at your feet and continues off to your right. To your left, the the path is dark and still. Which way do you go? Press left to enter the shaded path. Press right to follow the water and the sunlight. Press down to re-enter the portal.",
    text2: "A stream babbles at your feet and continues off to your right. To your left, the the path is dark and still. Press left to enter the shaded path. Press right to follow the water and the sunlight. Press down to enter the portal.",
}
const coveredPath = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65282199-9f85-4daa-bcd6-de2f615bcca7/dfmb909-a1146529-df3c-4ad2-885f-89c56c667358.png/v1/fit/w_828,h_828,q_70,strp/path_through_an_enchanted_forest_version_1_by_pm_artistic_dfmb909-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY1MjgyMTk5LTlmODUtNGRhYS1iY2Q2LWRlMmY2MTViY2NhN1wvZGZtYjkwOS1hMTE0NjUyOS1kZjNjLTRhZDItODg1Zi04OWM1NmM2NjczNTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.60xIH9oaHILuKa4qbFpYtgunL2htU-llQmqB6hEhf6k",
    text1: "text",
    text2: "text",
}
const shadyPath = {
    visited: false,
    img: "https://png.pngtree.com/background/20230616/original/pngtree-fantasy-fairytale-magical-forest-sunny-evening-light-through-the-branches-painting-picture-image_3635587.jpg",
    text1: "text",
    text2: "text",
}
const treeVillage = {
    visited: false,
    img: "https://wallpapers.com/images/hd/mystical-forest-1920-x-1200-zggop07wd2gh8vmg.jpg",
    text1: "text",
    text2: "text",
}
// const bridge = {
//     visited: false,
//     img: "https://w0.peakpx.com/wallpaper/76/291/HD-wallpaper-enchanted-forest-art-forest-river-fantasy.jpg",
//     text1: "The stream widens into a river. A horse drinks on the other bank. Ahead of you, a fallen tree has been carved into a bridge. Do you continue along the tread path or follow the river? Press up to follow the path. Press left to walk upstream. Press down to return to the cairn.",
//     text2: "text",
// }
const upstream = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0dce719a-cfab-4cbd-b5f0-6305626028e6/d6u1xef-2904418a-6874-44c6-a252-c06e7ec9bc6d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkY2U3MTlhLWNmYWItNGNiZC1iNWYwLTYzMDU2MjYwMjhlNlwvZDZ1MXhlZi0yOTA0NDE4YS02ODc0LTQ0YzYtYTI1Mi1jMDZlN2VjOWJjNmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1JFOYPHMUdvnp8uxEjXE3Mo7AvXll8mPq7m46oXZOEU",
    text1: "text",
    text2: "text",
}
const waterfallVillage = {
    visited: false,
    img: "https://e0.pxfuel.com/wallpapers/371/984/desktop-wallpaper-fantasy-forest-river-trees-landscape-water-rocks-houses-waterfall-digital-art-waterfalls-artwork-village-fantasy-art-mist-cliff-for-section-%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0.jpg",
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
const foggyStream = {
    visited: false,
    img: "https://as1.ftcdn.net/v2/jpg/05/47/03/72/1000_F_547037240_LUekRoVId3q55j70Spyea0K6SdsJjzFo.jpg",
    text1: "text",
    text2: "text",
}
// const dam = {
//     visited: false,
//     img: "https://as2.ftcdn.net/v2/jpg/05/73/05/69/1000_F_573056930_NCI3XfYl3vaJQKiqZXtTmPy77z7RGK8y.jpg",
//     text1: "text",
//     text2: "text",
// }
// const swampLost = {
//     visited: false,
//     img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0975fc90-2a41-4206-9525-18338e368074/d966lr9-1f0cab17-f5df-4b5d-a95a-1ecd07806dcd.jpg/v1/fit/w_828,h_606,q_70,strp/swamp_by_adampaquette_d966lr9-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA0IiwicGF0aCI6IlwvZlwvMDk3NWZjOTAtMmE0MS00MjA2LTk1MjUtMTgzMzhlMzY4MDc0XC9kOTY2bHI5LTFmMGNhYjE3LWY1ZGYtNGI1ZC1hOTVhLTFlY2QwNzgwNmRjZC5qcGciLCJ3aWR0aCI6Ijw9MTEwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D2qN6t3k8SMJF2bjbg2DPJiqdaed_-TVpPKtap7wfOg",
//     text1: "text",
//     text2: "text",
// }
// const beyondDam = {
//     visited: false,
//     img: "https://i.pinimg.com/originals/16/f2/77/16f277499b1b23f53372815889c15e00.jpg",
//     text1: "text",
//     text2: "text",
// }
const swampVillage = {
    visited: false,
    img: "https://e0.pxfuel.com/wallpapers/609/778/desktop-wallpaper-%E2%9C%BC-lanterns-in-the-swamp-%E2%9C%BC-lanterns-colors-scenery-trees-jungle-lamps-attractions-in-dreams-forests-paintings-swamp-beautiful-fireflies-creative-pre-made-love-four-seasons-landscapes.jpg",
    text1: "text",
    text2: "text",
}
// const swampCircle = {
//     visited: false,
//     img: "https://images.nightcafe.studio/jobs/8qWAPhnH1CBqk9pBaFh1/8qWAPhnH1CBqk9pBaFh1--2--9kc8q_2x.jpg?tr=w-1600,c-at_max",
//     text1: "text",
//     text2: "text",
// }
// const swampRuins = {
//     visited: false,
//     img: "https://images.nightcafe.studio/jobs/pWlflDYguTfYUdbhhKjN/pWlflDYguTfYUdbhhKjN--1--jwcey_2x.jpg?tr=w-1600,c-at_max",
//     text1: "text",
//     text2: "text",
// }
// const temple = {
//     visited: false,
//     img: "https://e1.pxfuel.com/desktop-wallpaper/302/766/desktop-wallpaper-fantasy-art-temple-trees-forest-jungle-landscapes-decay-ruins-and-mobile-backgrounds-jungle-anime.jpg",
//     text1: "text",
//     text2: "text",
// }
const bridge2 = {
    visited: false,
    img: "https://as2.ftcdn.net/v2/jpg/05/74/30/71/1000_F_574307191_Nc1hBvDTeofNHdyMZvCqJqIIYVBBTLmp.jpg",
    text1: "text",
    text2: "text",
}
// const bridge3 = {
//     visited: false,
//     img: "https://as1.ftcdn.net/v2/jpg/06/20/79/02/1000_F_620790235_ozek9MWrTjIrSrQLrCUriogzUFKpMh0F.jpg",
//     text1: "text",
//     text2: "text",
// }
// const fireflyPool = {
//     visited: false,
//     img: "https://storage.googleapis.com/pai-images/dafaa79f60e64bd687963662a6cda7ce.jpeg",
//     text1: "text",
//     text2: "text",
// }
const cave = {
    visited: false,
    img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/34bc95c9-1026-40e9-83c6-1f9572a4d834/width=1152/48786-2463014577-_scenery,%20no_humans,%20cave,%20water,%20moss,%20rock,%20waterfall,%20fantasy,%20glowing,%20plant,%20dark,%20vines,%20signature,%20solo,%20ruins,%20outdoors,.jpeg",
    text1: "text",
    text2: "text",
}
const darkForest = {
    visited: false,
    img: "https://e1.pxfuel.com/desktop-wallpaper/753/980/desktop-wallpaper-magic-forest-enchanted-forest-ultra.jpg",
    text1: "text",
    text2: "text",
}
const straightPath = {
    visited: false,
    img: "https://e1.pxfuel.com/desktop-wallpaper/919/124/desktop-wallpaper-anime-forest-jungle-anime.jpg",
    text1: "text",
    text2: "text",
}
// const foggyPath = {
//     visited: false,
//     img: "https://e1.pxfuel.com/desktop-wallpaper/481/42/desktop-wallpaper-sun-shining-in-the-forest-green-leaf-tree-with-sun-rays-digital-sun-rays-shining-through-tree.jpg",
//     text1: "text",
//     text2: "text",
// }
const temple2 = {
    visited: false,
    img: "https://storage.googleapis.com/pai-images/74758e7acc9b46239cc82595b560ff2d.jpeg",
    text1: "text",
    text2: "text",
}

//Updates all places with their connections
startingPath.forward = portal

portal.backward = startingPath
portal.forward = forkedPath



forkedPath.backward = portal
forkedPath.left = shadyPath
forkedPath.right = bridge2

shadyPath.backward = forkedPath
shadyPath.forward = coveredPath
shadyPath.right = darkForest

darkForest.backward = shadyPath
darkForest.forward = temple2

temple2.backward = darkForest

coveredPath.backward = shadyPath
coveredPath.forward = treeVillage

treeVillage.backward = coveredPath

bridge2.backward = forkedPath
bridge2.forward = straightPath
bridge2.right = upstream

straightPath.backward = bridge2
straightPath.forward = waterfallVillage

waterfallVillage.backward = straightPath
waterfallVillage.forward = waterfall

waterfall.backward = waterfallVillage
waterfall.forward = treeHouse

treeHouse.backward = waterfall

upstream.backward = bridge2
upstream.forward = foggyStream
upstream.right = cave

cave.backward = upstream

foggyStream.backward = upstream
foggyStream.forward = swampVillage

swampVillage.backward = foggyStream



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


//removes title page after leaving title screen
if (Boolean(document.getElementById("titleScreen"))) {
    document.addEventListener("keyup", function (event) {
        div = document.getElementById("titleScreen")
        div.remove()
    })}

