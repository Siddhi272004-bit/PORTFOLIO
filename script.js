// var tl=gsap.timeline();
// tl.to("#fs",{
//     height:0,
//     duration:2,
//     ease:Expo.easeInOut
// })
// tl.to("#elem",{
//     height:"100%",
//     duration:2,
//     delay:-2,
//     // 2s prior
//     ease:Expo.easeInOut
// })
// tl.to("#white",{
//     height:"100%",
//     duration:2,
//     delay:-1.8,
//     // 2s prior
//     ease:Expo.easeInOut
// })
// document.querySelectorAll(".reveal")
//     .forEach(function(elem) {
//         let spanParent=document.createElement("span");
//         let spanChild=document.createElement("span");
//         // selects all elements with the class .reveal and then 
//         // creates two <span> elements for each of those elements.
//         spanParent.classList.add("Parent");
//         spanChild.classList.add("Child");
//         spanChild.textContent=elem.textContent;
//         spanParent.appendChild(spanChild);
//         // <span class="parent">
//         // <span class="creative">Creative</span>
//         // </span>
//         elem.innerHTML="";
//         elem.appendChild(spanParent);

//     })
//     // spanParent.classList.add("revealParent"); for the following structure:
//     // h1
//     //  parent
//     //      child
//     //          text(here:revealParent)
function reveal_to_span() {
document.querySelectorAll(".reveal")
.forEach(function(elem) {
    // create 2 spans
    var parent=document.createElement("span");
    var child=document.createElement("span");
    // parent and child both set their respective classes
    parent.classList.add("parent");
    child.classList.add("child");
    // span parent gets child and child gets elem details
    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);
    // /elem replaces its value with parent span
    elem.innerHTML="";
    elem.appendChild(parent);
})
}

function loader(){
    var tl=gsap.timeline();

tl.from(".child span",{
    x:300,
    // in y axis
    delay:0.5,
    stagger:.2,
    duration:2,
    ease:Power3.easeInOut,
})
tl.to(".parent .child",{
    y:"-100%",
    // in y axis
    duration:1,
    delay:1,
    ease:Circ.easeInOut
})
tl.to("#loader",{
    height:0,
    // scrolls up
    duration:1,
    ease:Circ.easeInOut
})
tl.to("#green",{
    height:"100%",
    top:0,
// green page scrolls up just after the loader animation
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut
})
tl.to("#green",{
    height:0,
    // again green page scrolls up
    top:0,
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut
})
// Added Classes to Spans:

// The parent span gets the class parent.
// The child span gets the class child.
// Correct GSAP Selectors:

// The first animation targets .parent .child span because your content (h5 text or words) is now inside .child span.
// The second animation targets .parent .child for the vertical movement.
// GSAP Ease Adjustments:

// Used string-based ease names ("power3.inOut" and "circ.inOut") instead of Power3.easeInOut and Circ.easeInOut, which are from older GSAP syntax.
gsap.to("#nav span",{
    width:"100%",
    duration:1,
    delay:-1,
    ease:Power3.easeInOut
})
}
function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    // for smooth scroll,from 'locomotive js cdn and locmotive js github'
}
reveal_to_span();
loader();12
locoInitialize();


function cardShow(){
    document.querySelectorAll(".cnt").forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove",function(dets){
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
            showingImage=dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px))`;
            showingImage.style.filter="grayscale(1)";
            document.querySelector("#work").style.backgroundColor="#"+dets.target.dataset.color;
            // sets color to the assigned one
            
        })
        
        cnt.addEventListener("mouseleave",function(dets){
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=0;
            // the 'dets.target.dataset.index' gets the children of the cursor with data index (as we've given it 0 or 1),so 
            // whatever is selected gets opacity 0
            // document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px))`;
            showingImage.style.filter="grayscale(0)";
        })
}}
// dets: This is usually the parameter of an event listener callback function (e.g., e, event, or dets). It contains details about the event that was triggered.
// dets.target: Refers to the specific DOM element that triggered the event.(here image of container 1 and 2)
// dataset: A property of a DOM element that contains all data-* attributes in a DOMStringMap object.
cardShow();
// dets.target.dataset.index fetches the data-index attribute from the target element.
// Example: <div class="cnt" data-index="0"></div> → dataset.index returns "0".
// document.querySelector("#cursor").children[dets.target.dataset.index] selects the child of #cursor at the index specified by data-index.
// .style.opacity = 1 sets the selected child's opacity to 1, making it fully visible.