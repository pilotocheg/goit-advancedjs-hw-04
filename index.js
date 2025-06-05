import{a as w,S as q,i as I}from"./assets/vendor-Ms93UICv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const P=15,c=1;async function $(e,t=1){return(await w.get("https://pixabay.com/api/",{params:{key:"50578458-599512b8a758686bbac6d0702",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:P}})).data}const E=document.querySelector(".loader"),M=document.querySelector(".load-more"),m=document.querySelector(".gallery"),B=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function f(e,t){e.classList[t?"add":"remove"]("visible")}function u(e){f(E,e)}function d(e){f(M,e)}function O(){m.innerHTML=""}function x(e,t){const a="gallery-item",s=e.map(({webformatURL:o,largeImageURL:l,tags:h,likes:v,views:L,comments:b,downloads:S})=>`
      <li class="${a}">
      <a class="gallery-link" href="${l}">
        <img class="gallery-image" src="${o}" alt="${h}" loading="lazy" />
        <div class="gallery-item-info">
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Likes</p>
            <p class="gallery-item-info-value">${v}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Views</p>
            <p class="gallery-item-info-value">${L}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Comments</p>
            <p class="gallery-item-info-value">${b}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Downloads</p>
            <p class="gallery-item-info-value">${S}</p>
          </div>
        </div>
        </a>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",s);const r=document.querySelector(`.${a}`);if(t&&r){const{height:o}=r.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}B.refresh()}function n(e,t){I[e]({message:t,position:"topRight",maxWidth:432})}function A(e){const{search:t}=Object.fromEntries(new FormData(e));return t.trim()}const y=document.querySelector(".form"),T=document.querySelector(".load-more"),g={page:c,searchQuery:"",total:0,allLoaded:!1};let i={...g};function D(e){i={...g,searchQuery:e}}async function p(){u(!0),d(!1);try{const{page:e,searchQuery:t}=i,{hits:a,totalHits:s}=await $(t,e);if(i.total+=a.length,i.total>=s&&(i.allLoaded=!0),e===c&&!a.length){n("error","Sorry, there are no images matching your search query. Please, try again!");return}x(a,e>c),i.allLoaded&&n("info","We're sorry, but you've reached the end of search results.")}catch(e){n("error",e.message||"Failed to fetch images. Please, try again later!"),console.error(e)}finally{u(!1),i.allLoaded||d(!0)}}function N(e){e.preventDefault();const t=A(e.currentTarget);if(!t){n("error","The search query can not be empty!");return}D(t),y.reset(),O(),p()}function _(){i.page+=1,p()}y.addEventListener("submit",N);T.addEventListener("click",_);
//# sourceMappingURL=index.js.map
