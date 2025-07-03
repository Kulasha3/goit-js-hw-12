import{a as S,S as v,i as d}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();async function g(r,t){const e="https://pixabay.com/"+"/api/",o={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15};return(await S.get(e,{params:o})).data}let w=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const i={galleryForm:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".more")};function y(r){const t=r.hits.map(({webformatURL:l,largeImageURL:s,tags:e,likes:o,views:n,comments:L,downloads:B})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${l}"
      alt="${e}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${o}</p>
  <p><b>Views</b> ${n}</p>
  <p><b>Comments</b> ${L}</p>
  <p><b>Downloads</b> ${B}</p>
 </div>
</li>`).join(`
`);i.galleryForm.insertAdjacentHTML("beforeend",t),w.refresh()}function E(){i.galleryForm.innerHTML=""}function p(){i.loader.classList.remove("hidden")}function u(){i.loader.classList.add("hidden")}function P(){i.loadBtn.classList.remove("hidden")}function h(){i.loadBtn.classList.add("hidden")}function $(){d.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function q(){d.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function b(r){d.warning({title:"Caution",message:`Error: ${r}`,position:"topRight"})}function N(){d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}const m={formEl:document.querySelector(".form"),galleryForm:document.querySelector(".gallery"),loadBtn:document.querySelector(".more")};m.formEl.addEventListener("submit",O);m.loadBtn.addEventListener("click",C);let a,f,c;async function O(r){if(r.preventDefault(),c=r.target.elements.text.value.trim(),a=1,!c){$();return}h(),p(),E();try{const t=await g(c,a);if(t.hits.length===0){q(),u();return}f=Math.ceil(t.totalHits/15),y(t),a<f&&P()}catch(t){b(t)}u(),r.target.reset()}async function C(){a+=1,p();try{const r=await g(c,a);y(r);const t=m.galleryForm.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2}),a>=f&&(h(),N())}catch(r){b(r)}u()}
//# sourceMappingURL=commonHelpers.js.map
