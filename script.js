//Declares all places as objects:
const startingPath = {
    visited: false,
    img: "https://img.freepik.com/premium-photo/old-green-edge-forest-humidity-moss-trees-path-leading-through-dense-fairytale-forest_86390-10375.jpg",
    text1: "Today you've decided to take a walk in a local forest. You've been here many times before, but today seems different. The forest seems greener. The birds are singing and even crossing your path. Press the up arrow key to keep walking.",
    text2: "You've returned to a familiar path. You wonder if you'll ever see that portal again. Press the up arrow key to return to the portal.",
}
const portal = {
    visited: false,
    img: "https://as1.ftcdn.net/v2/jpg/05/40/95/08/1000_F_540950809_3FWosaP1ueYJ6QVla5SfdaAGMTPwU9gC.jpg",
    text1: "What!? Is that...a portal? Is that why the forest seems so different today? Where does it go? Do you dare find out? Press the up arrow key to continue.",
    text2: "Press the up arrow key to re-enter the portal. Press the down arrow key to go home."
}
const forkedPath = {
    visited: false,
    img: "https://jkroots.com/wp-content/uploads/2018/10/enchanted_forest_2_by_jkroots-daxl6xh.jpg",
    text1: "You close your eyes and step through the portal. When you open them, you find that you're still in a forest and the path is marked by a cairn: someone's been here before. A stream babbles at your feet and continues off to your right. To your left, the the path is dark and still. Which way do you go? Press left to enter the shaded path. Press right to follow the water. Press down to re-enter the portal.",
    text2: "A stream babbles at your feet and continues off to your right. To your left, the the path is dark and still. Press left to enter the shaded path. Press right to follow the water. Press down to enter the portal.",
}

//left from forked path
const shadyPath = {
    visited: false,
    img: "https://png.pngtree.com/background/20230616/original/pngtree-fantasy-fairytale-magical-forest-sunny-evening-light-through-the-branches-painting-picture-image_3635587.jpg",
    text1: "Press up to follow the path. Press right to enter the forest. Press down to return to the cairn.",
    text2: "Press up to walk to the tree arches. Press right to enter the forest. Press down to return to the cairn.",
}
const coveredPath = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65282199-9f85-4daa-bcd6-de2f615bcca7/dfmb909-a1146529-df3c-4ad2-885f-89c56c667358.png/v1/fit/w_828,h_828,q_70,strp/path_through_an_enchanted_forest_version_1_by_pm_artistic_dfmb909-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY1MjgyMTk5LTlmODUtNGRhYS1iY2Q2LWRlMmY2MTViY2NhN1wvZGZtYjkwOS1hMTE0NjUyOS1kZjNjLTRhZDItODg1Zi04OWM1NmM2NjczNTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.60xIH9oaHILuKa4qbFpYtgunL2htU-llQmqB6hEhf6k",
    text1: "Press up to continue. Press down to return to the foggy path.",
    text2: "Press up to visit the Tree Village. Press down to return to the foggy path.",
}
const treeVillage = {
    visited: false,
    img: "https://wallpapers.com/images/hd/mystical-forest-1920-x-1200-zggop07wd2gh8vmg.jpg",
    text1: "Press down to return to the tree arches.",
    text2: "Press down to return to the tree arches.",
}

//right from covered path
const darkForest = {
    visited: false,
    img: "https://e1.pxfuel.com/desktop-wallpaper/753/980/desktop-wallpaper-magic-forest-enchanted-forest-ultra.jpg",
    text1: "Press up to continue exploring. Press down to return to the foggy path.",
    text2: "Press up to visit the ruins. Press down to return to the foggy path.",
}
const temple2 = {
    visited: false,
    img: "https://storage.googleapis.com/pai-images/74758e7acc9b46239cc82595b560ff2d.jpeg",
    text1: "Press down to return to the forest.",
    text2: "Press down to return to the forest.",
}

//right from forked path
const bridge2 = {
    visited: false,
    img: "https://as2.ftcdn.net/v2/jpg/05/74/30/71/1000_F_574307191_Nc1hBvDTeofNHdyMZvCqJqIIYVBBTLmp.jpg",
    text1: "Press up to cross the bridge. Press right to walk upstream. Press down to return to the cairn.",
    text2: "Press up to follow the dirt path. Press right to walk upstream. Press down to return to the cairn.",
}
const straightPath = {
    visited: false,
    img: "https://e1.pxfuel.com/desktop-wallpaper/919/124/desktop-wallpaper-anime-forest-jungle-anime.jpg",
    text1: "Press up to continue. Press down to return to the bridge.",
    text2: "Press up to visit the Waterfall Village. Press down to return to the bridge.",
}
const waterfallVillage = {
    visited: false,
    img: "https://e0.pxfuel.com/wallpapers/371/984/desktop-wallpaper-fantasy-forest-river-trees-landscape-water-rocks-houses-waterfall-digital-art-waterfalls-artwork-village-fantasy-art-mist-cliff-for-section-%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0.jpg",
    text1: "Press up to climb the stairs to the top of the waterfall. Press down to leave the village.",
    text2: "Press up to climb the stairs to the top of the waterfall. Press down to leave the village.",
}
const waterfall = {
    visited: false,
    img: "https://w0.peakpx.com/wallpaper/700/796/HD-wallpaper-fantasy-forest-forest-colorful-lovely-view-colors-beautiful-magic-trees-swamp-valley-warrior-water-splendor-green-men.jpg",
    text1: "Press up to follow the path up the trees. Press down to descend the steps to the village.",
    text2: "Press up to visit the tree house. Press down to descend the steps to the village.",
}
const treeHouse = {
    visited: false,
    img: "https://images.nightcafe.studio/jobs/wi0XlQDMXSgsQywQQ0FE/wi0XlQDMXSgsQywQQ0FE--2--g8ety.jpg?tr=w-1600,c-at_max",
    text1: "Press down to return to the top of the waterfall.",
    text2: "Press down to return to the top of the waterfall.",
}

//right from bridge
const upstream = {
    visited: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0dce719a-cfab-4cbd-b5f0-6305626028e6/d6u1xef-2904418a-6874-44c6-a252-c06e7ec9bc6d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkY2U3MTlhLWNmYWItNGNiZC1iNWYwLTYzMDU2MjYwMjhlNlwvZDZ1MXhlZi0yOTA0NDE4YS02ODc0LTQ0YzYtYTI1Mi1jMDZlN2VjOWJjNmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1JFOYPHMUdvnp8uxEjXE3Mo7AvXll8mPq7m46oXZOEU",
    text1: "text",
    text2: "text",
}
const foggyStream = {
    visited: false,
    img: "https://as1.ftcdn.net/v2/jpg/05/47/03/72/1000_F_547037240_LUekRoVId3q55j70Spyea0K6SdsJjzFo.jpg",
    text1: "text",
    text2: "text",
}
const swampVillage = {
    visited: false,
    img: "https://e0.pxfuel.com/wallpapers/609/778/desktop-wallpaper-%E2%9C%BC-lanterns-in-the-swamp-%E2%9C%BC-lanterns-colors-scenery-trees-jungle-lamps-attractions-in-dreams-forests-paintings-swamp-beautiful-fireflies-creative-pre-made-love-four-seasons-landscapes.jpg",
    text1: "text",
    text2: "text",
}

//right from upstream
const cave = {
    visited: false,
    img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/34bc95c9-1026-40e9-83c6-1f9572a4d834/width=1152/48786-2463014577-_scenery,%20no_humans,%20cave,%20water,%20moss,%20rock,%20waterfall,%20fantasy,%20glowing,%20plant,%20dark,%20vines,%20signature,%20solo,%20ruins,%20outdoors,.jpeg",
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

//changes the page based on arrow key inputs
let currentPage = startingPath;

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