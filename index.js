import{i as c,S as l}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const u="47642330-01773e177615e156ed5ec02c5",m="https://pixabay.com/api/",f=t=>{const s=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=`${m}?${s}`;return fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},d=t=>`
        <li class="image-card">
            <a href="${t.largeImageURL}" target="_blank">
                <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                <div class="image-info">
                    <p><b>Likes</b> ${t.likes}</p>
                    <p><b>Views</b> ${t.views}</p>
                    <p><b>Comments</b> ${t.comments}</p>
                    <p><b>Downloads</b> ${t.downloads}</p>
                </div>
            </a>
        </li>
    `,h=t=>{const s=document.querySelector(".gallery");s.innerHTML="";const a=t.map(d).join("");s.insertAdjacentHTML("beforeend",a)},p=document.querySelector("#search-bar-form"),n=document.querySelector(".loader");p.addEventListener("submit",t=>{t.preventDefault();const a=t.target.elements.search.value;a.trim().length!==0&&(n.classList.add("is-active"),f(a).then(r=>{(!r.hits||!r.hits.length)&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h(r.hits);var e=new l(".gallery a",{captionsData:"alt",captionDelay:250});e.refresh(),n.classList.remove("is-active")}).catch(r=>{console.log(r),c.error({message:r.message,position:"topRight"}),n.classList.remove("is-active")}))});
//# sourceMappingURL=index.js.map
