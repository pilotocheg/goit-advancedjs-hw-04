import{a as w,S as P,i as q}from"./assets/vendor-Ms93UICv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const c=1,I=15;async function $(e,t=1){const a=await w.get("https://pixabay.com/api/",{params:{key:"50578458-599512b8a758686bbac6d0702",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:I}});return await new Promise(i=>setTimeout(i,2e3)),a.data}const E=document.querySelector(".loader"),M=document.querySelector(".load-more"),d=document.querySelector(".gallery"),B=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function f(e,t){e.classList[t?"add":"remove"]("visible")}function u(e){f(E,e)}function m(e){f(M,e)}function O(){d.innerHTML=""}function T(e,t){const a="gallery-item",i=e.map(({webformatURL:o,largeImageURL:l,tags:h,likes:v,views:L,comments:b,downloads:S})=>`
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
    `).join("");d.insertAdjacentHTML("beforeend",i);const r=document.querySelector(`.${a}`);if(t&&r){const{height:o}=r.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}B.refresh()}function n(e,t){q[e]({message:t,position:"topRight",maxWidth:432})}function x(e){const{search:t}=Object.fromEntries(new FormData(e));return t.trim()}const y=document.querySelector(".form"),A=document.querySelector(".load-more"),g={page:c,searchQuery:"",total:0,allLoaded:!1};let s={...g};function D(e){s={...g,searchQuery:e}}async function p(){u(!0),m(!1);try{const{page:e,searchQuery:t}=s,{hits:a,totalHits:i}=await $(t,e);if(s.total+=a.length,s.total>=i&&(s.allLoaded=!0),e===c&&!a.length){n("error","Sorry, there are no images matching your search query. Please, try again!");return}T(a,e>c),s.allLoaded&&n("info","We're sorry, but you've reached the end of search results.")}catch(e){n("error",e.message||"Failed to fetch images. Please, try again later!"),console.error(e)}finally{u(!1),s.allLoaded||m(!0)}}function N(e){e.preventDefault();const t=x(e.currentTarget);if(!t){n("error","The search query can not be empty!");return}D(t),y.reset(),O(),p()}function _(){s.page+=1,p()}y.addEventListener("submit",N);A.addEventListener("click",_);
//# sourceMappingURL=index.js.map
